import { Injectable, NgModule, Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import Cropper from 'cropperjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CropperService = /** @class */ (function () {
    function CropperService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} pdata
     * @return {?}
     */
    CropperService.prototype.save = /**
     * @param {?} url
     * @param {?} pdata
     * @return {?}
     */
    function (url, pdata) {
        return of(this.http.post(url, pdata, { withCredentials: true }));
    };
    CropperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CropperService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CropperService.ngInjectableDef = defineInjectable({ factory: function CropperService_Factory() { return new CropperService(inject(HttpClient)); }, token: CropperService, providedIn: "root" });
    return CropperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CropperOption = /** @class */ (function () {
    function CropperOption() {
    }
    return CropperOption;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CropperComponent = /** @class */ (function () {
    function CropperComponent(ngxCropperService) {
        this.ngxCropperService = ngxCropperService;
        this.error = '';
        this.isShow = false;
        this.applying = false;
        this.returnData = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // init config
        this.viewConfig = {
            url: this.config.url || null,
            maxsize: this.config.maxsize || 512000,
            title: this.config.title || 'Apply your image size and position',
            uploadBtnName: this.config.uploadBtnName || 'Upload Image',
            uploadBtnClass: this.config.uploadBtnClass || null,
            cancelBtnName: this.config.cancelBtnName || 'Cancel',
            cancelBtnClass: this.config.cancelBtnClass || null,
            applyBtnName: this.config.applyBtnName || 'Apply',
            applyBtnClass: this.config.applyBtnClass || null,
            errorMsgs: this.config.errorMsgs || {},
            fdName: this.config.fdName || 'file',
            aspectRatio: this.config.aspectRatio || 1 / 1,
            viewMode: this.config.viewMode || 0
        };
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //  init upload btn, after dom content loaded init down.
        setTimeout(function () {
            _this.inputImage.nativeElement.onchange = function () {
                /** @type {?} */
                var files = _this.inputImage.nativeElement.files;
                if (files && files.length > 0) {
                    _this.isShow = true;
                    setTimeout(function () {
                        _this.initCropper();
                        /** @type {?} */
                        var file = files[0];
                        // Only can upload image format.
                        if (!/^(image\/*)/.test(file.type)) {
                            _this.returnData.emit(JSON.stringify({
                                code: 4002,
                                data: null,
                                msg: "The type you can upload is only image format"
                            }));
                            _this.isShow = false;
                            return;
                        }
                        /** @type {?} */
                        var blobURL = URL.createObjectURL(file);
                        _this.fileName = file.name;
                        _this.fileType = file.type;
                        _this.cropper.replace(blobURL);
                    });
                }
            };
        }, 0);
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.onApply = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.applying = true;
        /** @type {?} */
        var blob = this.dataURItoBlob(this.cropper.getCroppedCanvas().toDataURL(this.fileType));
        if (blob.size > this.viewConfig.maxsize) {
            /** @type {?} */
            var currentSize = Math.ceil(blob.size / 1024);
            // sent message max then size.
            this.returnData.emit(JSON.stringify({
                code: 4000,
                data: currentSize,
                msg: "Max size allowed is " + this.viewConfig.maxsize / 1024 + "kb, current size is " + currentSize + "kb"
            }));
            this.error =
                this.viewConfig.errorMsgs['4000'] || "Max size allowed is " + this.viewConfig.maxsize / 1024 + "kb, Current size is " + currentSize + "kb";
            this.applying = false;
            return;
        }

        //// 只回傳縮圖 /////
        console.log(blob);
        _this.returnData.emit(blob);
        _this.onCancel();
        return;

        /** @type {?} */
        var fd = new FormData();
        /** @type {?} */
        var name = this.viewConfig.fdName;
        fd.append(name, blob, this.fileName);
        /** @type {?} */
        var url = this.viewConfig.url;
        this.ngxCropperService.save(url, fd).subscribe(function (data) {
            // return success
            // return success
            _this.returnData.emit(JSON.stringify({
                code: 2000,
                data: data,
                msg: 'The image was sent to the server successfully'
            }));
            // hidden modal
            // hidden modal
            _this.onCancel();
        }, function (error) {
            // return error
            // return error
            _this.returnData.emit(JSON.stringify({
                code: 4001,
                data: null,
                msg: 'ERROR: When sent to the server, something went wrong, please check the server url.'
            }));
            _this.error = _this.viewConfig.errorMsgs['4001'] || 'When sent to the server, something went wrong';
            _this.applying = false;
        });
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.error = '';
        this.isShow = false;
        this.applying = false;
        this.inputImage.nativeElement.value = '';
    };
    /**
     * @param {?} dataURI
     * @return {?}
     */
    CropperComponent.prototype.dataURItoBlob = /**
     * @param {?} dataURI
     * @return {?}
     */
    function (dataURI) {
        /** @type {?} */
        var byteString = window.atob(dataURI.split(',')[1]);
        /** @type {?} */
        var mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        /** @type {?} */
        var ab = new ArrayBuffer(byteString.length);
        /** @type {?} */
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        /** @type {?} */
        var bb = new Blob([ab], {
            type: mimeString
        });
        return bb;
    };
    /**
     * @return {?}
     */
    CropperComponent.prototype.initCropper = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cropBox = /** @type {?} */ (document.getElementById('cropper-image'));
        /** @enum {string} */
        var DragMode = {
            Crop: 'crop',
            Move: 'move',
            None: 'none',
        };
        /** @type {?} */
        var options = {
            aspectRatio: this.viewConfig.aspectRatio,
            autoCrop: true,
            viewMode: this.viewConfig.viewMode || 0,
            dragMode: DragMode.Move,
            cropBoxMovable: true,
            cropBoxResizable: true
        };
        this.cropper = new Cropper(cropBox, options);
    };
    CropperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cropper',
                    template: "\n  <section class=\"inline-block\">\n    <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"viewConfig.uploadBtnClass\" (click)=\"inputImage.click()\">{{viewConfig.uploadBtnName}}</button>\n    <input #inputImage type=\"file\" class=\"hide\" accept=\"image/x-png,image/jpeg\" hidden />\n  </section>\n  <section class=\"crop-container\" *ngIf=\"isShow === true\">\n  <div class=\"crop-box\">\n    <div class=\"crop-box-header\">\n      <h3>{{viewConfig.title}}</h3>\n      <button type=\"button\" class=\"crop-box-close\" (click)=\"onCancel()\">\n        <span></span>\n      </button>\n    </div>\n    <div class=\"crop-box-body\">\n      <figure style=\"height: 300px;\">\n        <img id=\"cropper-image\" class=\"full-width\" />\n      </figure>\n    </div>\n    <div *ngIf=\"error.length > 0\" class=\"crop-box-error\">{{ error }}</div>\n    <div class=\"crop-box-footer\">\n      <button class=\"btn btn-default\" [ngClass]=\"viewConfig.cancelBtnClass\" (click)=\"onCancel()\">{{viewConfig.cancelBtnName}}</button>\n      <button class=\"btn btn-primary\" [disabled]=\"applying\" [ngClass]=\"viewConfig.applyBtnClass\" (click)=\"onApply()\">\n        {{viewConfig.applyBtnName}}\n      </button>\n    </div>\n  </div>\n  </section>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    providers: [CropperService],
                    styles: ["@charset \"UTF-8\";.hide{display:none}.crop-container{background-color:rgba(0,0,0,.8);position:fixed;top:0;right:0;bottom:0;left:0;z-index:1111;display:flex;align-items:flex-start;justify-content:center;padding-top:50px}.crop-box{background-color:#fff;border-radius:3px;width:520px}.crop-box .crop-box-header{border-bottom:1px solid #ddd;padding:12px;position:relative}.crop-box .crop-box-header h3{margin:0;font-size:18px;font-weight:700;line-height:24px;text-align:center}.crop-box .crop-box-body{padding:10px}.crop-box-error{color:red;text-align:center;font-weight:600}.crop-box .crop-box-footer{border-top:1px solid #ddd;padding:10px;display:flex;justify-content:space-around}.crop-box .crop-box-close{position:absolute;top:10px;right:10px;background-color:transparent;border:0}.crop-box .crop-box-close span{color:#657786;font-size:18px;line-height:24px}.crop-box .crop-box-close span::before{content:\"\u00D7\";font-size:25px}.inline-block{display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    CropperComponent.ctorParameters = function () { return [
        { type: CropperService }
    ]; };
    CropperComponent.propDecorators = {
        config: [{ type: Input }],
        returnData: [{ type: Output }],
        inputImage: [{ type: ViewChild, args: ['inputImage',] }]
    };
    return CropperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CropperModule = /** @class */ (function () {
    function CropperModule() {
    }
    CropperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                    ],
                    declarations: [CropperComponent],
                    exports: [CropperComponent]
                },] }
    ];
    return CropperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CropperService, CropperComponent, CropperModule, CropperOption };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyb3BwZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1jcm9wcGVyL2xpYi9jcm9wcGVyLnNlcnZpY2UudHMiLCJuZzovL25neC1jcm9wcGVyL2xpYi9jcm9wcGVyLm1vZGVsLnRzIiwibmc6Ly9uZ3gtY3JvcHBlci9saWIvY3JvcHBlci5jb21wb25lbnQudHMiLCJuZzovL25neC1jcm9wcGVyL2xpYi9jcm9wcGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JvcHBlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwdWJsaWMgc2F2ZSh1cmw6IHN0cmluZywgcGRhdGE6IEZvcm1EYXRhKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2YodGhpcy5odHRwLnBvc3QodXJsLCBwZGF0YSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENyb3BwZXJPcHRpb24ge1xuICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBtYXhzaXplPzogbnVtYmVyO1xuICBwdWJsaWMgdGl0bGU/OiBzdHJpbmc7XG4gIHB1YmxpYyB1cGxvYWRCdG5OYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgdXBsb2FkQnRuQ2xhc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBjYW5jZWxCdG5OYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgY2FuY2VsQnRuQ2xhc3M/OiBzdHJpbmc7XG4gIHB1YmxpYyBhcHBseUJ0bk5hbWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBhcHBseUJ0bkNsYXNzPzogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JNc2dzPzogb2JqZWN0O1xuICBwdWJsaWMgZmROYW1lPzogc3RyaW5nO1xuICBwdWJsaWMgYXNwZWN0UmF0aW8/OiBudW1iZXI7XG4gIHB1YmxpYyB2aWV3TW9kZT86IG51bWJlcjsgLy8gMCwgMSwgMiwgM1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IENyb3BwZXIgZnJvbSAnY3JvcHBlcmpzJztcblxuaW1wb3J0IHsgQ3JvcHBlclNlcnZpY2UgfSBmcm9tICcuL2Nyb3BwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDcm9wcGVyT3B0aW9uIH0gZnJvbSAnLi9jcm9wcGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNyb3BwZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2VjdGlvbiBjbGFzcz1cImlubGluZS1ibG9ja1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbbmdDbGFzc109XCJ2aWV3Q29uZmlnLnVwbG9hZEJ0bkNsYXNzXCIgKGNsaWNrKT1cImlucHV0SW1hZ2UuY2xpY2soKVwiPnt7dmlld0NvbmZpZy51cGxvYWRCdG5OYW1lfX08L2J1dHRvbj5cbiAgICA8aW5wdXQgI2lucHV0SW1hZ2UgdHlwZT1cImZpbGVcIiBjbGFzcz1cImhpZGVcIiBoaWRkZW4gLz5cbiAgPC9zZWN0aW9uPlxuICA8c2VjdGlvbiBjbGFzcz1cImNyb3AtY29udGFpbmVyXCIgKm5nSWY9XCJpc1Nob3cgPT09IHRydWVcIj5cbiAgPGRpdiBjbGFzcz1cImNyb3AtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImNyb3AtYm94LWhlYWRlclwiPlxuICAgICAgPGgzPnt7dmlld0NvbmZpZy50aXRsZX19PC9oMz5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY3JvcC1ib3gtY2xvc2VcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY3JvcC1ib3gtYm9keVwiPlxuICAgICAgPGZpZ3VyZSBzdHlsZT1cImhlaWdodDogMzAwcHg7XCI+XG4gICAgICAgIDxpbWcgaWQ9XCJjcm9wcGVyLWltYWdlXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCIgLz5cbiAgICAgIDwvZmlndXJlPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJlcnJvci5sZW5ndGggPiAwXCIgY2xhc3M9XCJjcm9wLWJveC1lcnJvclwiPnt7IGVycm9yIH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNyb3AtYm94LWZvb3RlclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIFtuZ0NsYXNzXT1cInZpZXdDb25maWcuY2FuY2VsQnRuQ2xhc3NcIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPnt7dmlld0NvbmZpZy5jYW5jZWxCdG5OYW1lfX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiYXBwbHlpbmdcIiBbbmdDbGFzc109XCJ2aWV3Q29uZmlnLmFwcGx5QnRuQ2xhc3NcIiAoY2xpY2spPVwib25BcHBseSgpXCI+XG4gICAgICAgIHt7dmlld0NvbmZpZy5hcHBseUJ0bk5hbWV9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlVXJsczogWycuL2Nyb3BwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbQ3JvcHBlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgZXJyb3IgPSAnJztcbiAgcHVibGljIGlzU2hvdyA9IGZhbHNlO1xuICBwdWJsaWMgYXBwbHlpbmcgPSBmYWxzZTtcbiAgcHVibGljIHZpZXdDb25maWc6IENyb3BwZXJPcHRpb247XG4gIEBJbnB1dCgpIHByaXZhdGUgY29uZmlnOiBDcm9wcGVyT3B0aW9uO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSByZXR1cm5EYXRhOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAVmlld0NoaWxkKCdpbnB1dEltYWdlJykgcHJpdmF0ZSBpbnB1dEltYWdlOiBhbnk7XG5cbiAgcHJpdmF0ZSBmaWxlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGZpbGVUeXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3JvcHBlcjogQ3JvcHBlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neENyb3BwZXJTZXJ2aWNlOiBDcm9wcGVyU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gaW5pdCBjb25maWdcbiAgICB0aGlzLnZpZXdDb25maWcgPSB7XG4gICAgICB1cmw6IHRoaXMuY29uZmlnLnVybCB8fCBudWxsLFxuICAgICAgbWF4c2l6ZTogdGhpcy5jb25maWcubWF4c2l6ZSB8fCA1MTIwMDAsXG4gICAgICB0aXRsZTogdGhpcy5jb25maWcudGl0bGUgfHwgJ0FwcGx5IHlvdXIgaW1hZ2Ugc2l6ZSBhbmQgcG9zaXRpb24nLFxuICAgICAgdXBsb2FkQnRuTmFtZTogdGhpcy5jb25maWcudXBsb2FkQnRuTmFtZSB8fCAnVXBsb2FkIEltYWdlJyxcbiAgICAgIHVwbG9hZEJ0bkNsYXNzOiB0aGlzLmNvbmZpZy51cGxvYWRCdG5DbGFzcyB8fCBudWxsLFxuICAgICAgY2FuY2VsQnRuTmFtZTogdGhpcy5jb25maWcuY2FuY2VsQnRuTmFtZSB8fCAnQ2FuY2VsJyxcbiAgICAgIGNhbmNlbEJ0bkNsYXNzOiB0aGlzLmNvbmZpZy5jYW5jZWxCdG5DbGFzcyB8fCBudWxsLFxuICAgICAgYXBwbHlCdG5OYW1lOiB0aGlzLmNvbmZpZy5hcHBseUJ0bk5hbWUgfHwgJ0FwcGx5JyxcbiAgICAgIGFwcGx5QnRuQ2xhc3M6IHRoaXMuY29uZmlnLmFwcGx5QnRuQ2xhc3MgfHwgbnVsbCxcbiAgICAgIGVycm9yTXNnczogdGhpcy5jb25maWcuZXJyb3JNc2dzIHx8IHt9LFxuICAgICAgZmROYW1lOiB0aGlzLmNvbmZpZy5mZE5hbWUgfHwgJ2ZpbGUnLFxuICAgICAgYXNwZWN0UmF0aW86IHRoaXMuY29uZmlnLmFzcGVjdFJhdGlvIHx8IDEgLyAxLFxuICAgICAgdmlld01vZGU6IHRoaXMuY29uZmlnLnZpZXdNb2RlIHx8IDBcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyAgaW5pdCB1cGxvYWQgYnRuLCBhZnRlciBkb20gY29udGVudCBsb2FkZWQgaW5pdCBkb3duLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dEltYWdlLm5hdGl2ZUVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5pbnB1dEltYWdlLm5hdGl2ZUVsZW1lbnQuZmlsZXM7XG5cbiAgICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdENyb3BwZXIoKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzWzBdO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGNhbiB1cGxvYWQgaW1hZ2UgZm9ybWF0LlxuICAgICAgICAgICAgaWYgKCEvXihpbWFnZVxcLyopLy50ZXN0KGZpbGUudHlwZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXR1cm5EYXRhLmVtaXQoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgY29kZTogNDAwMixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgICAgICAgICAgICBtc2c6IGBUaGUgdHlwZSB5b3UgY2FuIHVwbG9hZCBpcyBvbmx5IGltYWdlIGZvcm1hdGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgdGhpcy5maWxlTmFtZSA9IGZpbGUubmFtZTtcbiAgICAgICAgICAgIHRoaXMuZmlsZVR5cGUgPSBmaWxlLnR5cGU7XG5cbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci5yZXBsYWNlKGJsb2JVUkwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHVibGljIG9uQXBwbHkoKSB7XG4gICAgdGhpcy5hcHBseWluZyA9IHRydWU7XG4gICAgY29uc3QgYmxvYiA9IHRoaXMuZGF0YVVSSXRvQmxvYih0aGlzLmNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpLnRvRGF0YVVSTCh0aGlzLmZpbGVUeXBlKSk7XG5cbiAgICBpZiAoYmxvYi5zaXplID4gdGhpcy52aWV3Q29uZmlnLm1heHNpemUpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaXplID0gTWF0aC5jZWlsKGJsb2Iuc2l6ZSAvIDEwMjQpO1xuICAgICAgLy8gc2VudCBtZXNzYWdlIG1heCB0aGVuIHNpemUuXG4gICAgICB0aGlzLnJldHVybkRhdGEuZW1pdChcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGNvZGU6IDQwMDAsXG4gICAgICAgICAgZGF0YTogY3VycmVudFNpemUsXG4gICAgICAgICAgbXNnOiBgTWF4IHNpemUgYWxsb3dlZCBpcyAke3RoaXMudmlld0NvbmZpZy5tYXhzaXplIC8gMTAyNH1rYiwgY3VycmVudCBzaXplIGlzICR7Y3VycmVudFNpemV9a2JgXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgdGhpcy5lcnJvciA9XG4gICAgICAgIHRoaXMudmlld0NvbmZpZy5lcnJvck1zZ3NbJzQwMDAnXSB8fCBgTWF4IHNpemUgYWxsb3dlZCBpcyAke3RoaXMudmlld0NvbmZpZy5tYXhzaXplIC8gMTAyNH1rYiwgQ3VycmVudCBzaXplIGlzICR7Y3VycmVudFNpemV9a2JgO1xuICAgICAgdGhpcy5hcHBseWluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMudmlld0NvbmZpZy5mZE5hbWU7XG4gICAgZmQuYXBwZW5kKG5hbWUsIGJsb2IsIHRoaXMuZmlsZU5hbWUpO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy52aWV3Q29uZmlnLnVybDtcbiAgICB0aGlzLm5neENyb3BwZXJTZXJ2aWNlLnNhdmUodXJsLCBmZCkuc3Vic2NyaWJlKFxuICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAvLyByZXR1cm4gc3VjY2Vzc1xuICAgICAgICB0aGlzLnJldHVybkRhdGEuZW1pdChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjb2RlOiAyMDAwLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIG1zZzogJ1RoZSBpbWFnZSB3YXMgc2VudCB0byB0aGUgc2VydmVyIHN1Y2Nlc3NmdWxseSdcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICAvLyBoaWRkZW4gbW9kYWxcbiAgICAgICAgdGhpcy5vbkNhbmNlbCgpO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIC8vIHJldHVybiBlcnJvclxuICAgICAgICB0aGlzLnJldHVybkRhdGEuZW1pdChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjb2RlOiA0MDAxLFxuICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgIG1zZzogJ0VSUk9SOiBXaGVuIHNlbnQgdG8gdGhlIHNlcnZlciwgc29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSBjaGVjayB0aGUgc2VydmVyIHVybC4nXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMudmlld0NvbmZpZy5lcnJvck1zZ3NbJzQwMDEnXSB8fCAnV2hlbiBzZW50IHRvIHRoZSBzZXJ2ZXIsIHNvbWV0aGluZyB3ZW50IHdyb25nJztcbiAgICAgICAgdGhpcy5hcHBseWluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5lcnJvciA9ICcnO1xuICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XG4gICAgdGhpcy5hcHBseWluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRJbWFnZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cblxuICBwcml2YXRlIGRhdGFVUkl0b0Jsb2IoZGF0YVVSSTogYW55KSB7XG4gICAgY29uc3QgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XG4gICAgY29uc3QgbWltZVN0cmluZyA9IGRhdGFVUklcbiAgICAgIC5zcGxpdCgnLCcpWzBdXG4gICAgICAuc3BsaXQoJzonKVsxXVxuICAgICAgLnNwbGl0KCc7JylbMF07XG5cbiAgICBjb25zdCBhYiA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgY29uc3QgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG5cbiAgICBjb25zdCBiYiA9IG5ldyBCbG9iKFthYl0sIHtcbiAgICAgIHR5cGU6IG1pbWVTdHJpbmdcbiAgICB9KTtcbiAgICByZXR1cm4gYmI7XG4gIH1cblxuICBwcml2YXRlIGluaXRDcm9wcGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNyb3BCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1pbWFnZScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgZW51bSBEcmFnTW9kZSB7XG4gICAgICBDcm9wID0gJ2Nyb3AnLFxuICAgICAgTW92ZSA9ICdtb3ZlJyxcbiAgICAgIE5vbmUgPSAnbm9uZScsXG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogQ3JvcHBlci5PcHRpb25zID0ge1xuICAgICAgYXNwZWN0UmF0aW86IHRoaXMudmlld0NvbmZpZy5hc3BlY3RSYXRpbyxcbiAgICAgIGF1dG9Dcm9wOiB0cnVlLFxuICAgICAgdmlld01vZGU6IHRoaXMudmlld0NvbmZpZy52aWV3TW9kZSB8fCAwLFxuICAgICAgZHJhZ01vZGU6IERyYWdNb2RlLk1vdmUsXG4gICAgICBjcm9wQm94TW92YWJsZTogZmFsc2UsXG4gICAgICBjcm9wQm94UmVzaXphYmxlOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmNyb3BwZXIgPSBuZXcgQ3JvcHBlcihjcm9wQm94LCBvcHRpb25zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3JvcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY3JvcHBlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Nyb3BwZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ3JvcHBlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JvcHBlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFTRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtLQUFJOzs7Ozs7SUFFakMsNkJBQUk7Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQWU7UUFDdEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkFSbEUsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7eUJBRG5COzs7Ozs7O0FDQUEsSUFBQTs7O3dCQUFBO0lBY0M7Ozs7OztBQ2REO0lBcURFLDBCQUFvQixpQkFBaUM7UUFBakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFnQjtxQkFadEMsRUFBRTtzQkFDRCxLQUFLO3dCQUNILEtBQUs7MEJBRzhCLElBQUksWUFBWSxFQUFVO0tBT3RCOzs7O0lBRWxELG1DQUFROzs7OztRQUViLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUk7WUFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU07WUFDdEMsS0FBSyxF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