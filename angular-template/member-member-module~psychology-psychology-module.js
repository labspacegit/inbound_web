(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-member-module~psychology-psychology-module"],{

/***/ "./src/app/auth/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reset-password works!\n</p>\n\n<div>\n\t<form [formGroup]='registerForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n    \t<label>舊密碼:</label><br>\n        <input id=\"old_password\" type=\"text\" formControlName=\"old_password\" required>\n      \t<div *ngIf=\"submitted && old_password.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"old_password.errors.required\">舊密碼為必填</div>\n            <div *ngIf=\"old_password.errors.minlength\">舊密碼至少6碼</div>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>新密碼:</label><br>\n        <input [(ngModel)]=\"pw_value\" type=\"password\" formControlName=\"password\">\n      \t<div *ngIf=\"submitted && password.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"password.errors.required\">密碼為必填</div>\n            <div *ngIf=\"password.errors.minlength\">密碼至少6碼</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>再次輸入新密碼:</label><br>\n        <input [(ngModel)]=\"pw_confirm\" type=\"password\" formControlName=\"password_confirmation\">\n      \t<div *ngIf=\"submitted && password_confirmation.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"password_confirmation.errors.required\">再次輸入密碼為必填</div>        \n        </div>\t\n         <div *ngIf=\"pw_value != pw_confirm\" class=\"alert alert-danger\">兩次密碼不符 </div>\n    </div>\n\n     <button class=\"btn-primary\" type=\"submit\">重設密碼</button>\n\t\t\n\t</form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //接收route para

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(httpService, router, formBuilder) {
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.pw_value = null; //ngmodel for pw
        this.pw_confirm = null; //ngmodel for pw
        this.registerForm = this.formBuilder.group({
            old_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    Object.defineProperty(ResetPasswordComponent.prototype, "old_password", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.get('old_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResetPasswordComponent.prototype, "password_confirmation", {
        get: function () { return this.registerForm.get('password_confirmation'); },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    //submit form
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.registerForm.invalid || this.pw_value != this.pw_confirm) {
            return;
        }
        var params = new FormData();
        Object.keys(this.registerForm.value).map(function (key) { return params.append(key, _this.registerForm.value[key]); });
        params.append('_method', 'PUT');
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/user/reset-pass";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: '重設密碼成功!',
                text: '重設密碼成功!',
                type: 'success',
            }).then(function (success) {
                _this.router.navigate(['/home']);
            });
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/auth/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/member/member-favorite/member-favorite.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/member/member-favorite/member-favorite.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-favorite works!\n</p>\n\n\n<app-article-list [input_param]=\"input_param\"></app-article-list>"

/***/ }),

/***/ "./src/app/member/member-favorite/member-favorite.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/member/member-favorite/member-favorite.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-favorite/member-favorite.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/member/member-favorite/member-favorite.component.ts ***!
  \*********************************************************************/
/*! exports provided: MemberFavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberFavoriteComponent", function() { return MemberFavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberFavoriteComponent = /** @class */ (function () {
    function MemberFavoriteComponent() {
        this.input_param = {
            'favorite': 1,
            'from': 0,
        };
    }
    MemberFavoriteComponent.prototype.ngOnInit = function () {
    };
    MemberFavoriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-favorite',
            template: __webpack_require__(/*! ./member-favorite.component.html */ "./src/app/member/member-favorite/member-favorite.component.html"),
            styles: [__webpack_require__(/*! ./member-favorite.component.scss */ "./src/app/member/member-favorite/member-favorite.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberFavoriteComponent);
    return MemberFavoriteComponent;
}());



/***/ }),

/***/ "./src/app/member/member-home/member-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/member/member-home/member-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-home/member-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/member-home/member-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-4\">\n\t\t\t<app-member-menu></app-member-menu>\n\t\t</div>\n\t\t<div class=\"col-8\">\n\t\t\t<router-outlet></router-outlet>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/member/member-home/member-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-home/member-home.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberHomeComponent", function() { return MemberHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberHomeComponent = /** @class */ (function () {
    function MemberHomeComponent() {
    }
    MemberHomeComponent.prototype.ngOnInit = function () {
    };
    MemberHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-home',
            template: __webpack_require__(/*! ./member-home.component.html */ "./src/app/member/member-home/member-home.component.html"),
            styles: [__webpack_require__(/*! ./member-home.component.css */ "./src/app/member/member-home/member-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberHomeComponent);
    return MemberHomeComponent;
}());



/***/ }),

/***/ "./src/app/member/member-laterbuy/member-laterbuy.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/member/member-laterbuy/member-laterbuy.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-laterbuy/member-laterbuy.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/member/member-laterbuy/member-laterbuy.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-laterbuy works!\n</p>\n\n<table *ngIf=\"list\">\n\t<tr>\n\t\t<td><input type=\"checkbox\" (change)=\"selectAll($event)\">全選</td>\n\t\t<td>商品</td>\n\t\t<td>商品編號</td>\n\t\t<td>商品數量</td>\n\t\t<td>商品類型</td>\n\t\t<td>金額</td>\n\t\t<td>庫存</td>\n\t\t<td>狀態</td>\n\t\t<td>移除</td>\n\t</tr>\n\n\t<tr *ngFor=\"let product of list\">\n\t\t<td><input type=\"checkbox\" (change)=\"checkDel($event, product.quantity)\" id=\"{{ product.id }}\" class=\"delcheck\"></td>\n\t\t<td>{{ product.name }} <img src=\"{{ fileUrl }}{{ product.image }}\" width=\"100\"> </td>\n\t\t<td>{{ product.model }}</td>\n\t\t<td>{{ product.quantity }}</td>\n\t\t<td>\n\t\t\t<div [ngSwitch]=\"product.type\">\n\t\t\t\t<div *ngSwitchCase=\"'activity'\">活動</div>\n\t\t\t\t<div *ngSwitchCase=\"'e-book'\">電子書</div>\n\t\t\t\t<div *ngSwitchCase=\"'course'\">課程</div>\n\t\t\t</div>\n\t\t</td>\n\t\t<td>{{ product.price }}</td>\n\t\t<td>\n\t\t\t<span *ngIf=\"product.product_now_quantity < product.quantity; else hasQuantity\"> 沒有庫存 </span>\n\t\t\t<ng-template #hasQuantity>\n  \t\t\t\t有庫存\n\t\t\t</ng-template>\n\t\t</td>\n\t\t<td><button (click)=\"moveCart(product.id, product.quantity)\">放入購物車</button></td>\n\t\t<td><button (click)=\"delProduct(product.id)\">移除</button></td>\n\t</tr>\n</table>\n\n<div *ngIf=\"list\">\n\t<button (click)=\"moveCart('all', 1)\">將勾選商品放入購物車</button>\n\t<button (click)=\"delProduct('all')\">將勾選商品移除</button>\n</div>"

/***/ }),

/***/ "./src/app/member/member-laterbuy/member-laterbuy.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/member/member-laterbuy/member-laterbuy.component.ts ***!
  \*********************************************************************/
/*! exports provided: MemberLaterbuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLaterbuyComponent", function() { return MemberLaterbuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberLaterbuyComponent = /** @class */ (function () {
    function MemberLaterbuyComponent(httpService, productService) {
        this.httpService = httpService;
        this.productService = productService;
        this.del_ids = {};
        this.move_ids = {};
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
    }
    MemberLaterbuyComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    //取得下次再買清單
    MemberLaterbuyComponent.prototype.getList = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/later-buy";
        this.httpService.getHttp(url).subscribe(function (res) {
            if (res.products.length > 0)
                _this.list = res.products;
            console.log(res.products);
        });
    };
    //全選
    MemberLaterbuyComponent.prototype.selectAll = function (event) {
        var _this = this;
        /* Selected */
        if (event.target.checked) {
            $(".delcheck").prop('checked', true);
            this.del_ids = {};
            this.move_ids = {};
            Object.keys(this.list).map(function (key) {
                _this.del_ids[_this.list[key].id] = _this.list[key].id;
                _this.move_ids[_this.list[key].id] = _this.list[key].quantity;
            });
        }
        else {
            $(".delcheck").prop('checked', false);
            this.del_ids = {};
            this.move_ids = {};
        }
        console.log(this.del_ids);
    };
    //勾選刪除方塊
    MemberLaterbuyComponent.prototype.checkDel = function (event, pNum) {
        /* Selected */
        if (event.target.checked) {
            this.del_ids[event.target.id] = event.target.id;
            this.move_ids[event.target.id] = pNum;
            //unselect
        }
        else {
            delete this.del_ids[event.target.id];
            delete this.move_ids[event.target.id];
        }
        console.log(this.del_ids);
        console.log(this.move_ids);
    };
    //刪除商品
    MemberLaterbuyComponent.prototype.delProduct = function (del_id) {
        if (del_id != "all") {
            this.del_ids = {};
            this.del_ids[del_id] = del_id;
        }
        var param = JSON.stringify(this.del_ids);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/later-buy/products?products=" + param;
        this.httpService.deleteHttp(url).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '刪除成功!',
                text: '選擇的商品已從下次購買清單中刪除',
                type: 'success',
            }).then(function (success) {
                location.reload();
            });
        });
    };
    //加入購物車
    MemberLaterbuyComponent.prototype.moveCart = function (move_id, move_num) {
        var _this = this;
        //將商品加入購物車
        if (move_id != "all") {
            this.move_ids = {};
            this.move_ids[move_id] = move_num;
        }
        var params = new FormData();
        params.append('products', JSON.stringify(this.move_ids));
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/cart/merge";
        this.httpService.postHttp(url, params).subscribe(function (res) {
            //更新購物車數量
            _this.productService.getCartNumber();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '操作成功!',
                text: '加入購物車成功',
                type: 'success',
            }).then(function (success) {
                //將商品從下次再買清單移除
                _this.delProduct(move_id);
            });
        });
    };
    MemberLaterbuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-laterbuy',
            template: __webpack_require__(/*! ./member-laterbuy.component.html */ "./src/app/member/member-laterbuy/member-laterbuy.component.html"),
            styles: [__webpack_require__(/*! ./member-laterbuy.component.css */ "./src/app/member/member-laterbuy/member-laterbuy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], MemberLaterbuyComponent);
    return MemberLaterbuyComponent;
}());



/***/ }),

/***/ "./src/app/member/member-menu/member-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/member/member-menu/member-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-menu/member-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/member-menu/member-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav flex-column\">\n\t<a class=\"nav-link active\" routerLink=\"./myproduct\">已購商品</a>\n\t<!-- a class=\"nav-link\" href=\"#\">下次再買清單</a -->\n\t<a class=\"nav-link\" routerLink=\"./order-record\">交易紀錄</a>\n\t<a class=\"nav-link\" routerLink=\"./mail\">訊息通知</a>\n\t<a class=\"nav-link\" routerLink=\"/diary_cover\">我的日記</a>\n\t<a class=\"nav-link\" routerLink=\"./mytest\">我的測驗</a>\n\t<a class=\"nav-link\" routerLink=\"./userinfo\">會員資料</a>\n</nav>"

/***/ }),

/***/ "./src/app/member/member-menu/member-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-menu/member-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMenuComponent", function() { return MemberMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberMenuComponent = /** @class */ (function () {
    function MemberMenuComponent() {
    }
    MemberMenuComponent.prototype.ngOnInit = function () {
    };
    MemberMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-menu',
            template: __webpack_require__(/*! ./member-menu.component.html */ "./src/app/member/member-menu/member-menu.component.html"),
            styles: [__webpack_require__(/*! ./member-menu.component.css */ "./src/app/member/member-menu/member-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberMenuComponent);
    return MemberMenuComponent;
}());



/***/ }),

/***/ "./src/app/member/member-product-activity/member-product-activity.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/member/member-product-activity/member-product-activity.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-product-activity/member-product-activity.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/member/member-product-activity/member-product-activity.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-product-activity works!\n</p>\n\n<div *ngFor=\"let product of list\">\n\t<li>{{ product.name }}</li>\n\t<li>{{ product.detail.activity_date }}</li>\n\t<li><a [routerLink]=\"['/product/activity/info', product.id ]\">查看活動</a></li>\n</div>\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-member-product-activity [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-member-product-activity>\n</div>"

/***/ }),

/***/ "./src/app/member/member-product-activity/member-product-activity.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/member/member-product-activity/member-product-activity.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MemberProductActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberProductActivityComponent", function() { return MemberProductActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-product/member-product.component */ "./src/app/member/member-product/member-product.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MemberProductActivityComponent = /** @class */ (function (_super) {
    __extends(MemberProductActivityComponent, _super);
    function MemberProductActivityComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemberProductActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-product-activity',
            template: __webpack_require__(/*! ./member-product-activity.component.html */ "./src/app/member/member-product-activity/member-product-activity.component.html"),
            styles: [__webpack_require__(/*! ./member-product-activity.component.css */ "./src/app/member/member-product-activity/member-product-activity.component.css")]
        })
    ], MemberProductActivityComponent);
    return MemberProductActivityComponent;
}(_member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__["MemberProductComponent"]));



/***/ }),

/***/ "./src/app/member/member-product-course/member-product-course.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/member/member-product-course/member-product-course.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-product-course/member-product-course.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/member/member-product-course/member-product-course.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-product-course works!\n</p>\n\n<div *ngFor=\"let product of list\">\n\t<li>{{ product.name }}</li>\n\t<li>{{ product.detail.hour }}</li>\n\t<li><a [routerLink]=\"['/product/course/video', product.id ]\">進入課程</a></li>\n</div>\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-member-product-course [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-member-product-course>\n</div>"

/***/ }),

/***/ "./src/app/member/member-product-course/member-product-course.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/member/member-product-course/member-product-course.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MemberProductCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberProductCourseComponent", function() { return MemberProductCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-product/member-product.component */ "./src/app/member/member-product/member-product.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MemberProductCourseComponent = /** @class */ (function (_super) {
    __extends(MemberProductCourseComponent, _super);
    function MemberProductCourseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemberProductCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-product-course',
            template: __webpack_require__(/*! ./member-product-course.component.html */ "./src/app/member/member-product-course/member-product-course.component.html"),
            styles: [__webpack_require__(/*! ./member-product-course.component.css */ "./src/app/member/member-product-course/member-product-course.component.css")]
        })
    ], MemberProductCourseComponent);
    return MemberProductCourseComponent;
}(_member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__["MemberProductComponent"]));



/***/ }),

/***/ "./src/app/member/member-product-ebook/member-product-ebook.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/member/member-product-ebook/member-product-ebook.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-product-ebook/member-product-ebook.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/member/member-product-ebook/member-product-ebook.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-product-ebook works!\n</p>\n\n<div *ngFor=\"let product of list\">\n\t<li>{{ product.name }}</li>\n\t<li>{{ product.writer.name }}</li>\n\t<li><a [routerLink]=\"['/product/ebook/read', product.id ]\" target=\"_blank\">閱讀</a></li>\n</div>\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-member-product-ebook [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-member-product-ebook>\n</div>"

/***/ }),

/***/ "./src/app/member/member-product-ebook/member-product-ebook.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/member/member-product-ebook/member-product-ebook.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MemberProductEbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberProductEbookComponent", function() { return MemberProductEbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member-product/member-product.component */ "./src/app/member/member-product/member-product.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MemberProductEbookComponent = /** @class */ (function (_super) {
    __extends(MemberProductEbookComponent, _super);
    function MemberProductEbookComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemberProductEbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-product-ebook',
            template: __webpack_require__(/*! ./member-product-ebook.component.html */ "./src/app/member/member-product-ebook/member-product-ebook.component.html"),
            styles: [__webpack_require__(/*! ./member-product-ebook.component.css */ "./src/app/member/member-product-ebook/member-product-ebook.component.css")]
        })
    ], MemberProductEbookComponent);
    return MemberProductEbookComponent;
}(_member_product_member_product_component__WEBPACK_IMPORTED_MODULE_1__["MemberProductComponent"]));



/***/ }),

/***/ "./src/app/member/member-product/member-product.component.css":
/*!********************************************************************!*\
  !*** ./src/app/member/member-product/member-product.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-product/member-product.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/member/member-product/member-product.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-product works!\n</p>\n<app-member-product-activity [input_param]=\"input_activity\" ></app-member-product-activity>\n\n<app-member-product-ebook [input_param]=\"input_ebook\" ></app-member-product-ebook>\n\n<app-member-product-course [input_param]=\"input_course\" ></app-member-product-course>"

/***/ }),

/***/ "./src/app/member/member-product/member-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/member/member-product/member-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: MemberProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberProductComponent", function() { return MemberProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberProductComponent = /** @class */ (function () {
    function MemberProductComponent(httpService) {
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    MemberProductComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getProduct();
    };
    MemberProductComponent.prototype.ngOnInit = function () {
        this.input_activity = {
            'type': 'activity',
            'from': 0,
            'limit': this.limit,
        };
        this.input_ebook = {
            'type': 'e-book',
            'from': 0,
            'limit': this.limit,
        };
        this.input_course = {
            'type': 'course',
            'from': 0,
            'limit': this.limit,
        };
    };
    //取得會員商品
    MemberProductComponent.prototype.getProduct = function () {
        var _this = this;
        var param = this.httpService.getParamFormat(this.input_param);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/my-product?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.products;
        });
    };
    //看更多
    MemberProductComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberProductComponent.prototype, "input_param", void 0);
    MemberProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-product',
            template: __webpack_require__(/*! ./member-product.component.html */ "./src/app/member/member-product/member-product.component.html"),
            styles: [__webpack_require__(/*! ./member-product.component.css */ "./src/app/member/member-product/member-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MemberProductComponent);
    return MemberProductComponent;
}());



/***/ }),

/***/ "./src/app/member/member-psychology-answer/member-psychology-answer.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/member/member-psychology-answer/member-psychology-answer.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-psychology-answer/member-psychology-answer.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/member/member-psychology-answer/member-psychology-answer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-psychology-answer works!\n</p>\n\n<p>心理測驗 {{ data.title }}</p>\n\n<ul>\n\t<li *ngFor=\"let ans of data.answers\" >\n\t\t填答時間: <a routerLink=\"/psychology/result/{{ test_id }}/{{ ans.id }}\">{{ ans.created_at }}</a>\n\n\t\t<!-- hashtag -->\n\t\t<app-member-psychology-hashtag [input_test_ans_id]=\"ans.id\" [input_hashtags]=\"ans.hash_tags\"></app-member-psychology-hashtag>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/member/member-psychology-answer/member-psychology-answer.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/member/member-psychology-answer/member-psychology-answer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MemberPsychologyAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPsychologyAnswerComponent", function() { return MemberPsychologyAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //接收route para
var MemberPsychologyAnswerComponent = /** @class */ (function () {
    function MemberPsychologyAnswerComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
    }
    MemberPsychologyAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.getPsychologyAnswer(param['id']);
            _this.test_id = param['id'];
        });
    };
    //取得心理測驗答案
    MemberPsychologyAnswerComponent.prototype.getPsychologyAnswer = function (id) {
        var _this = this;
        var url;
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/psychological-test-answer/answers?id=" + id;
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.data = res;
            console.log(res);
        });
    };
    MemberPsychologyAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-psychology-answer',
            template: __webpack_require__(/*! ./member-psychology-answer.component.html */ "./src/app/member/member-psychology-answer/member-psychology-answer.component.html"),
            styles: [__webpack_require__(/*! ./member-psychology-answer.component.css */ "./src/app/member/member-psychology-answer/member-psychology-answer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberPsychologyAnswerComponent);
    return MemberPsychologyAnswerComponent;
}());



/***/ }),

/***/ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-psychology-hashtag works!\n</p>\n\n<input type=\"text\" [(ngModel)]=\"name\">\n<button (click)=\"add()\">新增</button>\n\n<ul *ngIf=\"input_hashtags\">\n\t<li *ngFor=\"let hashtag of input_hashtags\">\n\t\t<a [routerLink]=\"['/hashtag', hashtag.id]\" >{{ hashtag.name }}</a>\n\t\t<button (click)=\"remove(hashtag.id)\">-</button>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MemberPsychologyHashtagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPsychologyHashtagComponent", function() { return MemberPsychologyHashtagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberPsychologyHashtagComponent = /** @class */ (function () {
    function MemberPsychologyHashtagComponent(httpService) {
        this.httpService = httpService;
    }
    MemberPsychologyHashtagComponent.prototype.ngOnInit = function () {
    };
    //檢查hashtag是否重複
    MemberPsychologyHashtagComponent.prototype.check = function (name) {
        var check_id = this.input_hashtags.findIndex(function (hashtag) { return hashtag.name === name; });
        console.log(check_id);
        return check_id;
    };
    //新增hashtag
    MemberPsychologyHashtagComponent.prototype.add = function () {
        var _this = this;
        var check_id = this.check(this.name);
        if (this.name && check_id == -1) {
            var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/hashtag/p_q_answer";
            var params = new FormData();
            params.append('id', this.input_test_ans_id);
            params.append('name', this.name);
            this.httpService.postHttp(url, params).subscribe(function (res) { return _this.input_hashtags.push({
                'id': res.id,
                'name': _this.name
            }); });
        }
        console.log(this.input_hashtags);
    };
    //移除hashtag
    MemberPsychologyHashtagComponent.prototype.remove = function (hashtag_id) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/hashtag/p_q_answer?id=" + this.input_test_ans_id + "&hash_tag_id=" + hashtag_id;
        this.httpService.deleteHttp(url).subscribe(function (res) {
            var index = _this.input_hashtags.findIndex(function (hashtag) { return hashtag.id === hashtag_id; });
            _this.input_hashtags.splice(index, 1);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberPsychologyHashtagComponent.prototype, "input_test_ans_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberPsychologyHashtagComponent.prototype, "input_hashtags", void 0);
    MemberPsychologyHashtagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-psychology-hashtag',
            template: __webpack_require__(/*! ./member-psychology-hashtag.component.html */ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.html"),
            styles: [__webpack_require__(/*! ./member-psychology-hashtag.component.scss */ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MemberPsychologyHashtagComponent);
    return MemberPsychologyHashtagComponent;
}());



/***/ }),

/***/ "./src/app/member/member-psychology/member-psychology.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/member/member-psychology/member-psychology.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/member-psychology/member-psychology.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/member/member-psychology/member-psychology.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member-psychology works!\n</p>\n\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let test of list\">\n\t\t<ul>\n\t\t\t<li>標題: {{ test.title }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ test.image }}\" width=\"100\"> </li>\n\n\t\t\t<a routerLink=\"./{{ test.id }}\">觀看結果</a>\n\t\t\t\n\t\t\t<br>\n\t\t</ul>\n\t</li>\t\n</ul>"

/***/ }),

/***/ "./src/app/member/member-psychology/member-psychology.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/member/member-psychology/member-psychology.component.ts ***!
  \*************************************************************************/
/*! exports provided: MemberPsychologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPsychologyComponent", function() { return MemberPsychologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberPsychologyComponent = /** @class */ (function () {
    function MemberPsychologyComponent(http) {
        this.http = http;
    }
    MemberPsychologyComponent.prototype.ngOnInit = function () {
        this.getPsychologyList();
    };
    //取得心理測驗列表
    MemberPsychologyComponent.prototype.getPsychologyList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'from': 0,
            'limit': 9999,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/psychological-test-answer?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            _this.list = res.answers;
            console.log(res);
        });
    };
    MemberPsychologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-psychology',
            template: __webpack_require__(/*! ./member-psychology.component.html */ "./src/app/member/member-psychology/member-psychology.component.html"),
            styles: [__webpack_require__(/*! ./member-psychology.component.css */ "./src/app/member/member-psychology/member-psychology.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MemberPsychologyComponent);
    return MemberPsychologyComponent;
}());



/***/ }),

/***/ "./src/app/member/member-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/member/member-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _member_order_record_order_record_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member/order-record/order-record.component */ "./src/app/member/order-record/order-record.component.ts");
/* harmony import */ var _member_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member/order-detail/order-detail.component */ "./src/app/member/order-detail/order-detail.component.ts");
/* harmony import */ var _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../member/member-home/member-home.component */ "./src/app/member/member-home/member-home.component.ts");
/* harmony import */ var _member_userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../member/userinfo/userinfo.component */ "./src/app/member/userinfo/userinfo.component.ts");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _member_useredit_useredit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../member/useredit/useredit.component */ "./src/app/member/useredit/useredit.component.ts");
/* harmony import */ var _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./member-product/member-product.component */ "./src/app/member/member-product/member-product.component.ts");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/member/message-list/message-list.component.ts");
/* harmony import */ var _message_info_message_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message-info/message-info.component */ "./src/app/member/message-info/message-info.component.ts");
/* harmony import */ var _member_psychology_member_psychology_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member-psychology/member-psychology.component */ "./src/app/member/member-psychology/member-psychology.component.ts");
/* harmony import */ var _member_psychology_answer_member_psychology_answer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./member-psychology-answer/member-psychology-answer.component */ "./src/app/member/member-psychology-answer/member-psychology-answer.component.ts");
/* harmony import */ var _member_laterbuy_member_laterbuy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./member-laterbuy/member-laterbuy.component */ "./src/app/member/member-laterbuy/member-laterbuy.component.ts");
/* harmony import */ var _review_home_review_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./review-home/review-home.component */ "./src/app/member/review-home/review-home.component.ts");
/* harmony import */ var _member_favorite_member_favorite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./member-favorite/member-favorite.component */ "./src/app/member/member-favorite/member-favorite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//component














var routes = [
    //會員專區
    { path: '', component: _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_5__["MemberHomeComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]],
        children: [
            { path: 'userinfo', component: _member_userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_6__["UserinfoComponent"] },
            { path: 'useredit', component: _member_useredit_useredit_component__WEBPACK_IMPORTED_MODULE_8__["UsereditComponent"] },
            { path: 'fillcompleteinfo/:returnUrl', component: _member_useredit_useredit_component__WEBPACK_IMPORTED_MODULE_8__["UsereditComponent"] },
            { path: 'reset-password', component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"] },
            { path: 'order-record', component: _member_order_record_order_record_component__WEBPACK_IMPORTED_MODULE_3__["OrderRecordComponent"] },
            { path: 'order-detail/:id', component: _member_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailComponent"] },
            { path: 'myproduct', component: _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_9__["MemberProductComponent"] },
            { path: 'mail', component: _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_10__["MessageListComponent"] },
            { path: 'mail/:id', component: _message_info_message_info_component__WEBPACK_IMPORTED_MODULE_11__["MessageInfoComponent"] },
            { path: 'mytest', component: _member_psychology_member_psychology_component__WEBPACK_IMPORTED_MODULE_12__["MemberPsychologyComponent"] },
            { path: 'mytest/:id', component: _member_psychology_answer_member_psychology_answer_component__WEBPACK_IMPORTED_MODULE_13__["MemberPsychologyAnswerComponent"] },
            { path: 'buylater', component: _member_laterbuy_member_laterbuy_component__WEBPACK_IMPORTED_MODULE_14__["MemberLaterbuyComponent"] },
            { path: 'review', component: _review_home_review_home_component__WEBPACK_IMPORTED_MODULE_15__["ReviewHomeComponent"] },
            { path: 'favorite', component: _member_favorite_member_favorite_component__WEBPACK_IMPORTED_MODULE_16__["MemberFavoriteComponent"] },
        ]
    },
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ }),

/***/ "./src/app/member/member.module.ts":
/*!*****************************************!*\
  !*** ./src/app/member/member.module.ts ***!
  \*****************************************/
/*! exports provided: MemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberModule", function() { return MemberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _member_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-routing.module */ "./src/app/member/member-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _writer_writer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../writer/writer.module */ "./src/app/writer/writer.module.ts");
/* harmony import */ var _member_order_record_order_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../member/order-record/order-record.component */ "./src/app/member/order-record/order-record.component.ts");
/* harmony import */ var _member_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../member/order-detail/order-detail.component */ "./src/app/member/order-detail/order-detail.component.ts");
/* harmony import */ var _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../member/member-home/member-home.component */ "./src/app/member/member-home/member-home.component.ts");
/* harmony import */ var _member_userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../member/userinfo/userinfo.component */ "./src/app/member/userinfo/userinfo.component.ts");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _member_useredit_useredit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../member/useredit/useredit.component */ "./src/app/member/useredit/useredit.component.ts");
/* harmony import */ var _member_member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../member/member-menu/member-menu.component */ "./src/app/member/member-menu/member-menu.component.ts");
/* harmony import */ var _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./member-product/member-product.component */ "./src/app/member/member-product/member-product.component.ts");
/* harmony import */ var _member_product_activity_member_product_activity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./member-product-activity/member-product-activity.component */ "./src/app/member/member-product-activity/member-product-activity.component.ts");
/* harmony import */ var _member_product_ebook_member_product_ebook_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./member-product-ebook/member-product-ebook.component */ "./src/app/member/member-product-ebook/member-product-ebook.component.ts");
/* harmony import */ var _member_product_course_member_product_course_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./member-product-course/member-product-course.component */ "./src/app/member/member-product-course/member-product-course.component.ts");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/member/message-list/message-list.component.ts");
/* harmony import */ var _message_info_message_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./message-info/message-info.component */ "./src/app/member/message-info/message-info.component.ts");
/* harmony import */ var _member_psychology_member_psychology_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./member-psychology/member-psychology.component */ "./src/app/member/member-psychology/member-psychology.component.ts");
/* harmony import */ var _member_psychology_answer_member_psychology_answer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./member-psychology-answer/member-psychology-answer.component */ "./src/app/member/member-psychology-answer/member-psychology-answer.component.ts");
/* harmony import */ var _member_laterbuy_member_laterbuy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./member-laterbuy/member-laterbuy.component */ "./src/app/member/member-laterbuy/member-laterbuy.component.ts");
/* harmony import */ var _review_home_review_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./review-home/review-home.component */ "./src/app/member/review-home/review-home.component.ts");
/* harmony import */ var _review_uncomment_review_uncomment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./review-uncomment/review-uncomment.component */ "./src/app/member/review-uncomment/review-uncomment.component.ts");
/* harmony import */ var _review_commentted_review_commentted_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./review-commentted/review-commentted.component */ "./src/app/member/review-commentted/review-commentted.component.ts");
/* harmony import */ var _member_favorite_member_favorite_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./member-favorite/member-favorite.component */ "./src/app/member/member-favorite/member-favorite.component.ts");
/* harmony import */ var _member_psychology_hashtag_member_psychology_hashtag_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./member-psychology-hashtag/member-psychology-hashtag.component */ "./src/app/member/member-psychology-hashtag/member-psychology-hashtag.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//component





















var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _member_routing_module__WEBPACK_IMPORTED_MODULE_2__["MemberRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _writer_writer_module__WEBPACK_IMPORTED_MODULE_4__["WriterModule"]
            ],
            declarations: [
                _member_order_record_order_record_component__WEBPACK_IMPORTED_MODULE_5__["OrderRecordComponent"],
                _member_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_6__["OrderDetailComponent"],
                _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_7__["MemberHomeComponent"],
                _member_userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_8__["UserinfoComponent"],
                _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"],
                _member_useredit_useredit_component__WEBPACK_IMPORTED_MODULE_10__["UsereditComponent"],
                _member_member_menu_member_menu_component__WEBPACK_IMPORTED_MODULE_11__["MemberMenuComponent"],
                _member_product_member_product_component__WEBPACK_IMPORTED_MODULE_12__["MemberProductComponent"],
                _member_product_activity_member_product_activity_component__WEBPACK_IMPORTED_MODULE_13__["MemberProductActivityComponent"],
                _member_product_ebook_member_product_ebook_component__WEBPACK_IMPORTED_MODULE_14__["MemberProductEbookComponent"],
                _member_product_course_member_product_course_component__WEBPACK_IMPORTED_MODULE_15__["MemberProductCourseComponent"],
                _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_16__["MessageListComponent"],
                _message_info_message_info_component__WEBPACK_IMPORTED_MODULE_17__["MessageInfoComponent"],
                _member_psychology_member_psychology_component__WEBPACK_IMPORTED_MODULE_18__["MemberPsychologyComponent"],
                _member_psychology_answer_member_psychology_answer_component__WEBPACK_IMPORTED_MODULE_19__["MemberPsychologyAnswerComponent"],
                _member_laterbuy_member_laterbuy_component__WEBPACK_IMPORTED_MODULE_20__["MemberLaterbuyComponent"],
                _review_home_review_home_component__WEBPACK_IMPORTED_MODULE_21__["ReviewHomeComponent"],
                _review_uncomment_review_uncomment_component__WEBPACK_IMPORTED_MODULE_22__["ReviewUncommentComponent"],
                _review_commentted_review_commentted_component__WEBPACK_IMPORTED_MODULE_23__["ReviewCommenttedComponent"],
                _member_favorite_member_favorite_component__WEBPACK_IMPORTED_MODULE_24__["MemberFavoriteComponent"],
                _member_psychology_hashtag_member_psychology_hashtag_component__WEBPACK_IMPORTED_MODULE_25__["MemberPsychologyHashtagComponent"]
            ],
            exports: [
                _member_psychology_hashtag_member_psychology_hashtag_component__WEBPACK_IMPORTED_MODULE_25__["MemberPsychologyHashtagComponent"]
            ]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ }),

/***/ "./src/app/member/message-info/message-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/member/message-info/message-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/message-info/message-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/member/message-info/message-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message-info works!\n</p>\n<div *ngIf=\"mail\">\n\t主旨 {{ mail.subject }}\n\t<br>\n\t時間 {{ mail.created_at }}\n\n\t<div [innerHtml]=\"mail.content\"></div>\n</div>"

/***/ }),

/***/ "./src/app/member/message-info/message-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/member/message-info/message-info.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageInfoComponent", function() { return MessageInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //接收route para
var MessageInfoComponent = /** @class */ (function () {
    function MessageInfoComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
    }
    MessageInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.getMail(params['id']); });
    };
    MessageInfoComponent.prototype.getMail = function (id) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/mail/show?id=" + id;
        this.httpService.getHttp(url).subscribe(function (res) { return _this.mail = res; });
    };
    MessageInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-info',
            template: __webpack_require__(/*! ./message-info.component.html */ "./src/app/member/message-info/message-info.component.html"),
            styles: [__webpack_require__(/*! ./message-info.component.css */ "./src/app/member/message-info/message-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MessageInfoComponent);
    return MessageInfoComponent;
}());



/***/ }),

/***/ "./src/app/member/message-list/message-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/member/message-list/message-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/message-list/message-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/member/message-list/message-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message-list works!\n</p>\n<div *ngIf=\"list\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"col\">序號</th>\n\t\t\t\t<th scope=\"col\">主旨</th>\n\t\t\t\t<th scope=\"col\">時間</th>\n\t\t\t\t<th scope=\"col\">狀態</th>\n\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t操作<input type=\"checkbox\" (change)=\"selectAll($event)\">\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let mail of list; let i = index\">\n\t\t\t\t<td> {{ i+1 }} </td>\n\t\t\t\t<td> <a [routerLink]=\"['./', mail.id]\">{{ mail.subject }}</a> </td>\n\t\t\t\t<td> {{ mail.created_at }} </td>\n\t\t\t\t<td> {{ mail.read }} </td>\n\t\t\t\t<td> <input type=\"checkbox\" (change)=\"checkDel($event)\" id=\"{{ mail.id }}\" class=\"delcheck\"> </td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>\n<button (click)=\"delMail()\">刪除</button>"

/***/ }),

/***/ "./src/app/member/message-list/message-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/member/message-list/message-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(httpService) {
        this.httpService = httpService;
        this.del_ids = {};
    }
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMails();
    };
    //獲得信件列表
    MessageListComponent.prototype.getMails = function () {
        var _this = this;
        var sixmonth = new Date().getTime() - 60 * 60 * 24 * 180 * 1000;
        var paramObject = {
            'start_date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(sixmonth, 'yyyy-MM-dd', 'en-US'),
            'end_date': Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-US'),
            'from': 0,
            'limit': 999
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/mail?" + param;
        this.httpService.getHttp(url).subscribe(function (res) { return _this.list = res.mails; });
    };
    //全選
    MessageListComponent.prototype.selectAll = function (event) {
        var _this = this;
        /* Selected */
        if (event.target.checked) {
            $(".delcheck").prop('checked', true);
            this.del_ids = {};
            Object.keys(this.list).map(function (key) { return _this.del_ids[_this.list[key].id] = _this.list[key].id; });
        }
        else {
            $(".delcheck").prop('checked', false);
            this.del_ids = {};
        }
        console.log(this.del_ids);
    };
    //勾選刪除方塊
    MessageListComponent.prototype.checkDel = function (event) {
        /* Selected */
        if (event.target.checked) {
            this.del_ids[event.target.id] = event.target.id;
            //unselect
        }
        else {
            delete this.del_ids[event.target.id];
        }
        console.log(this.del_ids);
    };
    //刪除信件
    MessageListComponent.prototype.delMail = function () {
        var param = JSON.stringify(this.del_ids);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/mail?ids=" + param;
        this.httpService.deleteHttp(url).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: '刪除成功!',
                text: '選擇的訊息已刪除',
                type: 'success',
            }).then(function (success) {
                location.reload();
            });
        });
    };
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/member/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.css */ "./src/app/member/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/member/order-detail/order-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/member/order-detail/order-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/order-detail/order-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/member/order-detail/order-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-detail works!\n</p>\n<div *ngIf=\"order.info.status==0\">\n\t<a href=\"{{ payUrl }}?id={{ order.info.id }}&order_number={{ order.info.order_number }}\">付款</a> \n</div>\n\n<ul>\n\t<li>訂單編號 {{ order.info.order_number }}</li>\n\t<li>訂單狀態\n\t\t<div [ngSwitch]=\"order.info.status\">\n\t\t  \t<span *ngSwitchCase=\"0\">未付款</span>\n\t\t  \t<span *ngSwitchCase=\"1\">已付款</span>\n\t\t  \t<span *ngSwitchCase=\"2\">付款失敗</span>\n\t\t  \t<span *ngSwitchCase=\"3\">訂單取消</span>\n\t\t</div>\n\t</li>\n\t<li>訂購人姓名 {{ order.info.name }}</li>\n\t<li>訂購人email {{ order.info.email }}</li>\n\t<li>訂購人電話 {{ order.info.phone }}</li>\n\t<li>訂購商品數量 {{ order.info.product_count }}</li>\n\t<li>訂單時間 {{ order.info.created_at }}</li>\n\t<li *ngIf=\"order.info.status==1\">付款資訊 \n\t\t付款方式 {{ order.payment.payment_method }}<br>\n\t\t付款日期 {{ order.payment.payment_date }}<br>\n\t\t\n\t</li>\n\t<li>備註 {{ order.info.comment }}</li>\n</ul>\n\n<!-- 訂單紀錄 -->\n<ul>\n\t<li *ngFor=\"let history of order.histories\">\n\t\t訊息:{{ history.message }}  時間:{{ history.created_at }}\n\t</li>\n</ul>\n\n<!-- 購物車資訊 -->\n<div *ngIf=\"order.products\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t<th scope=\"col\">商品圖片</th>\n\t\t\t\t<th scope=\"col\">商品名稱</th>\n\t\t\t\t<th scope=\"col\">商品類型</th>\n\t\t\t\t<th scope=\"col\">金額</th>\n\t\t\t\t<th scope=\"col\">購買數量</th>\n\t\t\t\t<th scope=\"col\">小計</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let product of order.products; let i = index\">\n\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\n\t\t\t\t<td><img src=\"{{ fileUrl }}{{ product.image }}\" width=\"50\" /></td>\n\t\t\t\t<td>{{ product.name }}</td>\n\t\t\t\t<td>{{ product.type }}</td>\n\t\t\t\t<td>{{ product.price }}</td>\n\t\t\t\t<td>{{ product.quantity }}</td>\n\t\t\t\t<td>{{ product.total }}</td>\n\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"row\"></th>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td>總計</td>\n\t\t\t\t<td>{{ order.info.total }}</td>\n\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/member/order-detail/order-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/member/order-detail/order-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //接收route para


var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(router, route, httpService) {
        this.router = router;
        this.route = route;
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        this.payUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/payment/go-pay";
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getOrder(params['id']);
        });
    };
    //取得訂單資訊
    OrderDetailComponent.prototype.getOrder = function (id) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/order/show?id=" + id;
        this.httpService.getHttp(url).subscribe(function (res) { return _this.order = res; });
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/member/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/member/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/member/order-record/order-record.component.css":
/*!****************************************************************!*\
  !*** ./src/app/member/order-record/order-record.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/order-record/order-record.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/member/order-record/order-record.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-record works!\n</p>\n<div>\n\t<input type=\"radio\" name=\"search\" (change)=\"changeSearch($event)\" value=\"30\" checked>一個月內\t\n\t<input type=\"radio\" name=\"search\" (change)=\"changeSearch($event)\" value=\"90\">三個月內\t\n\t<input type=\"radio\" name=\"search\" (change)=\"changeSearch($event)\" value=\"180\">六個月內\t\n</div>\n\n<table class=\"table\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">訂購時間</th>\n\t\t\t<th scope=\"col\">訂單編號</th>\n\t\t\t<th scope=\"col\">商品數量</th>\n\t\t\t<th scope=\"col\">訂單金額</th>\n\t\t\t<th scope=\"col\">付款狀態</th>\n\t\t\t<th scope=\"col\">操作</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of list; let i = index\">\n\t\t\t<td>{{ order.created_at }}</td>\n\t\t\t<td>{{ order.order_number }}</td>\n\t\t\t<td>{{ order.product_count }}</td>\n\t\t\t<td>{{ order.total }}</td>\n\t\t\t<td>\n\t\t\t\t<div [ngSwitch]=\"order.status\">\n\t\t\t\t  \t<span *ngSwitchCase=\"0\">未付款</span>\n\t\t\t\t  \t<span *ngSwitchCase=\"1\">已付款</span>\n\t\t\t\t  \t<span *ngSwitchCase=\"2\">付款失敗</span>\n\t\t\t\t  \t<span *ngSwitchCase=\"3\">訂單取消</span>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<a [routerLink]=\"['../order-detail', order.id]\">查看</a>\n\t\t\t\t<a *ngIf=\"order.status==0\" (click)=\"cancelOrder(order.id)\">取消訂單</a>\n\t\t\t\t<a *ngIf=\"order.status==0 || order.status==2\" href=\"{{ payUrl }}?id={{ order.id }}&order_number={{ order.order_number }}\">付款</a> \n\t\t\t</td>\n\t\t</tr>\n\n\t</tbody>\n</table>"

/***/ }),

/***/ "./src/app/member/order-record/order-record.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/member/order-record/order-record.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRecordComponent", function() { return OrderRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderRecordComponent = /** @class */ (function () {
    function OrderRecordComponent(httpService) {
        this.httpService = httpService;
        this.end_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-US');
        this.moredata = 1;
        //是否開啟read more div
        this.readmoreCheck = 0;
        this.payUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/payment/go-pay";
    }
    OrderRecordComponent.prototype.ngOnInit = function () {
        //搜尋日期為30天內
        var today = new Date().getTime();
        var oneMonth = today - 60 * 60 * 24 * 30 * 1000;
        this.start_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(oneMonth, 'yyyy-MM-dd', 'en-US');
        console.log(this.start_date);
        this.getOrderList();
    };
    //取消訂單
    OrderRecordComponent.prototype.cancelOrder = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "\u522A\u9664\u8A02\u55AE",
            text: "確定要刪除此訂單? ",
            type: "question",
            showCancelButton: true,
            focusCancel: true,
        }).then(function (success) {
            console.log(success);
            if (success.value) {
                var para = new FormData();
                para.append('id', id);
                para.append('_method', "PUT");
                var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/order/cancel-shop-order";
                _this.httpService.postHttp(url, para).subscribe(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: '操作成功!',
                        text: '訂單已取消',
                        type: 'success',
                    }).then(function (success) { return location.reload(); });
                });
            }
        });
    };
    //取得訂單列表
    OrderRecordComponent.prototype.getOrderList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'start_date': this.start_date,
            'end_date': this.end_date,
            'sort_order': 'desc',
            'type': 'shop',
            'from': 0,
            'limit': 50,
        };
        //console.log(paramObject);
        var param = this.httpService.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/order?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.orders.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.orders;
            console.log(res);
        });
    };
    //search
    OrderRecordComponent.prototype.changeSearch = function (event) {
        console.log(event.target.value);
        //搜尋日期
        var today = new Date().getTime();
        var newday = today - 60 * 60 * 24 * event.target.value * 1000;
        this.start_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(newday, 'yyyy-MM-dd', 'en-US');
        console.log(this.start_date);
        this.getOrderList();
    };
    OrderRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-record',
            template: __webpack_require__(/*! ./order-record.component.html */ "./src/app/member/order-record/order-record.component.html"),
            styles: [__webpack_require__(/*! ./order-record.component.css */ "./src/app/member/order-record/order-record.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], OrderRecordComponent);
    return OrderRecordComponent;
}());



/***/ }),

/***/ "./src/app/member/review-commentted/review-commentted.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/member/review-commentted/review-commentted.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-commentted works!\n</p>\n\n<table *ngIf=\"list\">\n\t<tr>\n\t\t<td>訂購時間</td>\n\t\t<td>商品</td>\n\t\t<td>評價留言</td>\n\t\t<td>評價時間</td>\n\t</tr>\n\n\t<tr *ngFor=\"let review of list\">\n\t\t<td>{{ review.order_created_at }}</td>\n\t\t<td>{{ review.product.name }} <img src=\"{{ fileUrl }}{{ review.product.image }}\"></td>\n\t\t<td>\n\t\t\t{{ review.score }}<br>\n\t\t\t{{ review.message }}\n\t\t</td>\n\t\t<td>{{ review.add_review_at }}</td>\n\t</tr>\n</table>\n"

/***/ }),

/***/ "./src/app/member/review-commentted/review-commentted.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/member/review-commentted/review-commentted.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/review-commentted/review-commentted.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/member/review-commentted/review-commentted.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewCommenttedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewCommenttedComponent", function() { return ReviewCommenttedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewCommenttedComponent = /** @class */ (function () {
    function ReviewCommenttedComponent(httpService) {
        this.httpService = httpService;
        this.from = 0;
        this.limit = 999;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["FileUrl"];
    }
    ReviewCommenttedComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    //取得未評價清單
    ReviewCommenttedComponent.prototype.getList = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/shop/product-review?from=" + this.from + "&limit=" + this.limit + "&status=1";
        this.httpService.getHttp(url).subscribe(function (res) {
            if (res.reviews.length > 0)
                _this.list = res.reviews;
        });
    };
    ReviewCommenttedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-commentted',
            template: __webpack_require__(/*! ./review-commentted.component.html */ "./src/app/member/review-commentted/review-commentted.component.html"),
            styles: [__webpack_require__(/*! ./review-commentted.component.scss */ "./src/app/member/review-commentted/review-commentted.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ReviewCommenttedComponent);
    return ReviewCommenttedComponent;
}());



/***/ }),

/***/ "./src/app/member/review-home/review-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/member/review-home/review-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-home works!\n</p>\n\n<div (click)=\"changeComponent(0)\">未評價</div>\n<div (click)=\"changeComponent(1)\">已評價</div>\n\n<app-review-uncomment *ngIf=\"commentted==0\"></app-review-uncomment>\n\n<app-review-commentted *ngIf=\"commentted==1\"></app-review-commentted>\n"

/***/ }),

/***/ "./src/app/member/review-home/review-home.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/member/review-home/review-home.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/review-home/review-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/review-home/review-home.component.ts ***!
  \*************************************************************/
/*! exports provided: ReviewHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHomeComponent", function() { return ReviewHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewHomeComponent = /** @class */ (function () {
    function ReviewHomeComponent() {
        this.commentted = 0;
    }
    ReviewHomeComponent.prototype.ngOnInit = function () {
    };
    //顯示已讀或未讀
    ReviewHomeComponent.prototype.changeComponent = function (status) {
        this.commentted = status;
    };
    ReviewHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-home',
            template: __webpack_require__(/*! ./review-home.component.html */ "./src/app/member/review-home/review-home.component.html"),
            styles: [__webpack_require__(/*! ./review-home.component.scss */ "./src/app/member/review-home/review-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewHomeComponent);
    return ReviewHomeComponent;
}());



/***/ }),

/***/ "./src/app/member/review-uncomment/review-uncomment.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/review-uncomment/review-uncomment.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  review-uncomment works!\n</p>\n\n<table *ngIf=\"list\">\n\t<tr>\n\t\t<td>訂購時間</td>\n\t\t<td>商品</td>\n\t\t<td>評價留言</td>\n\t\t<td>移除</td>\n\t</tr>\n\n\t<tr *ngFor=\"let review of list\">\n\t\t<td>{{ review.order_created_at }}</td>\n\t\t<td>{{ review.product.name }} <img src=\"{{ fileUrl }}{{ review.product.image }}\"></td>\n\t\t<td>\n\t\t\t<form [formGroup]='Form' (ngSubmit)=\"onSubmit(review.id)\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t      \t<label>評分:</label><br>\n\t\t\t        <input type=\"radio\" formControlName=\"score\" value=\"1\">1\n\t\t\t        <input type=\"radio\" formControlName=\"score\" value=\"2\">2\n\t\t\t        <input type=\"radio\" formControlName=\"score\" value=\"3\">3\n\t\t\t        <input type=\"radio\" formControlName=\"score\" value=\"4\">4\n\t\t\t        <input type=\"radio\" formControlName=\"score\" value=\"5\">5\n\n\t\t\t      \t<div *ngIf=\"submitted && score.invalid\" class=\"alert alert-danger\">\n\t\t\t            <div *ngIf=\"score.errors.required\">評分為必填</div>\n\t\t\t        </div>\t\n\t\t\t    </div>\n\n\t\t\t     <div class=\"form-group\">\n\t\t\t      \t<label>評價:</label><br>\n\t\t\t        <input type=\"text\" formControlName=\"message\">\n\n\t\t\t        <div *ngIf=\"submitted && message.invalid\" class=\"alert alert-danger\">\n\t\t\t            <div *ngIf=\"message.errors.required\">評價為必填</div>\n\t\t\t        </div>\n\t\t\t    </div>\n\n\t\t\t    <button type=\"submit\">送出</button>\n\n\t\t\t</form>\n\t\t</td>\n\t\t<td><button (click)=\"del(review.id)\" >移除</button></td>\n\t</tr>\n</table>"

/***/ }),

/***/ "./src/app/member/review-uncomment/review-uncomment.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/member/review-uncomment/review-uncomment.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/review-uncomment/review-uncomment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/member/review-uncomment/review-uncomment.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReviewUncommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewUncommentComponent", function() { return ReviewUncommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewUncommentComponent = /** @class */ (function () {
    function ReviewUncommentComponent(httpService, formBuilder) {
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.from = 0;
        this.limit = 999;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        this.Form = this.formBuilder.group({
            score: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    Object.defineProperty(ReviewUncommentComponent.prototype, "score", {
        // convenience getter for easy access to form fields
        get: function () { return this.Form.get('score'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReviewUncommentComponent.prototype, "message", {
        get: function () { return this.Form.get('message'); },
        enumerable: true,
        configurable: true
    });
    ReviewUncommentComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    //取得未評價清單
    ReviewUncommentComponent.prototype.getList = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/product-review?from=" + this.from + "&limit=" + this.limit + "&status=0";
        this.httpService.getHttp(url).subscribe(function (res) {
            if (res.reviews.length > 0)
                _this.list = res.reviews;
        });
    };
    //submit form
    ReviewUncommentComponent.prototype.onSubmit = function (id) {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.Form.invalid) {
            return;
        }
        var params = new FormData();
        Object.keys(this.Form.value).map(function (key) { return params.append(key, _this.Form.value[key]); });
        params.append('id', id);
        //params.append('_method','POST');
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/product-review";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: '成功!',
                text: '評價已送出',
                type: 'success',
            }).then(function (success) {
                location.reload();
            });
        });
    };
    //刪除評價留言
    ReviewUncommentComponent.prototype.del = function (id) {
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/product-review?id=" + id;
        this.httpService.deleteHttp(url)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: '成功!',
                text: '評價已刪除',
                type: 'success',
            }).then(function (success) {
                location.reload();
            });
        });
    };
    ReviewUncommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-uncomment',
            template: __webpack_require__(/*! ./review-uncomment.component.html */ "./src/app/member/review-uncomment/review-uncomment.component.html"),
            styles: [__webpack_require__(/*! ./review-uncomment.component.scss */ "./src/app/member/review-uncomment/review-uncomment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ReviewUncommentComponent);
    return ReviewUncommentComponent;
}());



/***/ }),

/***/ "./src/app/member/useredit/useredit.component.css":
/*!********************************************************!*\
  !*** ./src/app/member/useredit/useredit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/useredit/useredit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/member/useredit/useredit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  useredit works!\n</p>\n<div>\n\t<form [formGroup]='userForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\" *ngIf=\"data.register_type==default\">\n    \t<label>帳號:</label><br>\n        {{ data.username }} \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>姓名:</label><br>\n        <input type=\"text\" formControlName=\"name\" [ngModel]=\"data.name\">\n      \t<div *ngIf=\"submitted && name.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"name.errors.required\">姓名為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>生日:</label><br>\n        <app-datepicker  (childEvent)=\"onListenChild($event);\" [inputDate]=\"inputDate\"></app-datepicker>\n        <input [(ngModel)]=\"birthday\" type=\"hidden\" formControlName=\"birth\">\n   \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>性別:</label><br>\n        <input [ngModel]=\"data.gender\" type=\"radio\" formControlName=\"gender\" value=\"M\">男\n        <input [ngModel]=\"data.gender\" type=\"radio\" formControlName=\"gender\" value=\"F\">女\n      \t<div *ngIf=\"submitted && gender.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"gender.errors.required\">性別為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>性傾向:</label><br>\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"異性戀\">異性戀\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"同性戀\">同性戀\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"雙性戀\">雙性戀\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"無性戀\">無性戀\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"不確定\">不確定\n        <input [ngModel]=\"data.sexual\" type=\"radio\" formControlName=\"sexual\" value=\"不願意透漏\">不願意透漏\n      \t<div *ngIf=\"submitted && sexual.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"sexual.errors.required\">性傾向為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>聯絡信箱:</label><br>\n        <input [ngModel]=\"data.email\" type=\"text\" formControlName=\"email\" >\n      \t<div *ngIf=\"submitted && email.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"email.errors.required\">聯絡信箱為必填</div>\n            <div *ngIf=\"email.errors.pattern\">聯絡信箱須為email格式</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>國家:</label><br>\n        <input [ngModel]=\"data.country\" type=\"text\" formControlName=\"country\">\n      \t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>地址:</label><br>\n        <input [ngModel]=\"data.address\" type=\"text\" formControlName=\"address\">\n      \t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>連絡電話:</label><br>\n        <input [ngModel]=\"data.phone\" type=\"text\" formControlName=\"phone\">\n      \t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>家庭形容詞:</label><br>\n        <input [ngModel]=\"data.family\" type=\"radio\" formControlName=\"family\" value=\"溫暖和諧\">溫暖和諧\n        <input [ngModel]=\"data.family\" type=\"radio\" formControlName=\"family\" value=\"冷漠疏離\">冷漠疏離\n        <input [ngModel]=\"data.family\" type=\"radio\" formControlName=\"family\" value=\"糾結複雜\">糾結複雜\n        <input [ngModel]=\"data.family\" type=\"radio\" formControlName=\"family\" value=\"衝突不斷\">衝突不斷\n      \t<div *ngIf=\"submitted && family.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"family.errors.required\">家庭形容詞為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n    \t<label>大頭照:</label><br>\n    \t<app-file-upload  (outputFileEvent)=\"onListenFile($event);\" [inputImageUpload]=\"inputImageUpload\"></app-file-upload>\n    \t<input [(ngModel)]=\"avatar\" type=\"hidden\" formControlName=\"avatar\">\n    \t<img src=\"{{ img_url }}\">\n  \t</div>\n\n    <button class=\"btn-primary\" type=\"submit\">修改</button>\n\t\t\n\t</form>\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/member/useredit/useredit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/member/useredit/useredit.component.ts ***!
  \*******************************************************/
/*! exports provided: UsereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditComponent", function() { return UsereditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //接收route para


var UsereditComponent = /** @class */ (function () {
    function UsereditComponent(route, httpService, memberService, router, formBuilder) {
        this.route = route;
        this.httpService = httpService;
        this.memberService = memberService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.birthday = null; //ngmodel for date
        this.avatar = null;
        this.inputDate = null; //傳給datepicker的日期
        this.img_url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["defaultAvatar"];
        //傳給FILE UPLOAD的參數
        this.inputImageUpload = {
            isCheckImageType: true,
            isCheckFileSize: true,
            isCheckVideoType: false,
            isCheckVideoTime: false,
            width: 300,
        };
        this.userForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')]],
            country: [''],
            address: [''],
            birth: [''],
            phone: [''],
            sexual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            avatar: [''],
        });
    }
    Object.defineProperty(UsereditComponent.prototype, "username", {
        // convenience getter for easy access to form fields
        get: function () { return this.userForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "password", {
        get: function () { return this.userForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "password_confirmation", {
        get: function () { return this.userForm.get('password_confirmation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "name", {
        get: function () { return this.userForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "birth", {
        get: function () { return this.userForm.get('birth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "gender", {
        get: function () { return this.userForm.get('gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "email", {
        get: function () { return this.userForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "country", {
        get: function () { return this.userForm.get('country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "address", {
        get: function () { return this.userForm.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "phone", {
        get: function () { return this.userForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "sexual", {
        get: function () { return this.userForm.get('sexual'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsereditComponent.prototype, "family", {
        get: function () { return this.userForm.get('family'); },
        enumerable: true,
        configurable: true
    });
    UsereditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //初始化user info
        this.memberService.getUserInfo().subscribe(function (data) {
            _this.data = data;
            _this.birthday = data.birth;
            _this.inputDate = data.birth;
            _this.avatar = data.avatar;
            if (data.avatar != "")
                _this.img_url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["FileUrl"] + "/" + data.avatar;
        });
        // get return url from route parameters or default to '/'
        this.route.params.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'] || '/member/userinfo';
            console.log(_this.returnUrl);
        });
    };
    //[datepicker] Child模板事件發生時，會呼叫此方法回傳值
    UsereditComponent.prototype.onListenChild = function ($event) {
        this.strFormChild = $event;
        this.birthday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.strFormChild, 'yyyy-MM-dd', 'en-US');
    };
    //[fileupload] Child模板事件發生時，會呼叫此方法回傳值
    UsereditComponent.prototype.onListenFile = function ($event) {
        console.log($event);
        this.avatar = $event;
        this.img_url = null;
    };
    //submit form
    UsereditComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.userForm.invalid) {
            return;
        }
        var params = new FormData();
        Object.keys(this.userForm.value).map(function (key) { return params.append(key, _this.userForm.value[key]); });
        params.append('_method', 'PUT');
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/user";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            //update user info
            _this.memberService.getUser();
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                title: '修改成功!',
                text: '個人資料修改成功',
                type: 'success',
            }).then(function (success) {
                _this.router.navigateByUrl(_this.returnUrl);
                //this.router.navigate(['../userinfo'],  { relativeTo: this.route });
            });
        });
    };
    UsereditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useredit',
            template: __webpack_require__(/*! ./useredit.component.html */ "./src/app/member/useredit/useredit.component.html"),
            styles: [__webpack_require__(/*! ./useredit.component.css */ "./src/app/member/useredit/useredit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UsereditComponent);
    return UsereditComponent;
}());



/***/ }),

/***/ "./src/app/member/userinfo/userinfo.component.css":
/*!********************************************************!*\
  !*** ./src/app/member/userinfo/userinfo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/userinfo/userinfo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/member/userinfo/userinfo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"imgurl\" src=\"{{ imgurl }}\" />\n\n<ul>\n\t<li *ngIf=\"data.register_type=='default'\">帳號 {{ data.username }}</li>\n\t<li>姓名 {{ data.name }}</li>\n\t<li>email {{ data.email }}</li>\n\t<li>電話 {{ data.phone }}</li>\n\t<li>性別 {{ data.gender }}</li>\n\t<li>國家 {{ data.country }}</li>\n\t<li>地址 {{ data.address }}</li>\n\t<li>家庭狀況 {{ data.family }}</li>\n\t<li>生日 {{ data.birth }}</li>\n\t<li>性向 {{ data.sexual }}</li>\n\t<li>會員等級 {{ data.level }}</li>\n</ul>\n\n<a routerLink=\"../useredit\">修改資料</a>\n<div *ngIf=\"data.register_type=='default'\"><a routerLink=\"../reset-password\">修改密碼</a></div>"

/***/ }),

/***/ "./src/app/member/userinfo/userinfo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/member/userinfo/userinfo.component.ts ***!
  \*******************************************************/
/*! exports provided: UserinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoComponent", function() { return UserinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserinfoComponent = /** @class */ (function () {
    function UserinfoComponent(httpService, memberService) {
        this.httpService = httpService;
        this.memberService = memberService;
    }
    UserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getUserInfo()
            .subscribe(function (data) {
            _this.data = data;
            if (data.avatar == "")
                _this.imgurl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["defaultAvatar"];
            else
                _this.imgurl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"] + "/" + data.avatar;
        });
    };
    UserinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__(/*! ./userinfo.component.html */ "./src/app/member/userinfo/userinfo.component.html"),
            styles: [__webpack_require__(/*! ./userinfo.component.css */ "./src/app/member/userinfo/userinfo.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]])
    ], UserinfoComponent);
    return UserinfoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=member-member-module~psychology-psychology-module.js.map