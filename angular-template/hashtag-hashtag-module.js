(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hashtag-hashtag-module"],{

/***/ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/hashtag/hashtag-diary/hashtag-diary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hashtag-diary works!\n</p>\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let diary of list\">\n\t\t{{ diary | json }}\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-hashtag-diary *ngIf=\"readmoreCheck\" [input_param]=\"input_param\"></app-hashtag-diary>\n</div>"

/***/ }),

/***/ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/hashtag/hashtag-diary/hashtag-diary.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/hashtag/hashtag-diary/hashtag-diary.component.ts ***!
  \******************************************************************/
/*! exports provided: HashtagDiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagDiaryComponent", function() { return HashtagDiaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hashtag-home/hashtag-home.component */ "./src/app/hashtag/hashtag-home/hashtag-home.component.ts");
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


var HashtagDiaryComponent = /** @class */ (function (_super) {
    __extends(HashtagDiaryComponent, _super);
    function HashtagDiaryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashtagDiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.input_param.from);
        this.url_part = '/api/member/diary/hashtag';
        this.route.params.subscribe(function (params) {
            _this.hashtag_id = params['id'];
            _this.getList();
        });
    };
    HashtagDiaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hashtag-diary',
            template: __webpack_require__(/*! ./hashtag-diary.component.html */ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.html"),
            styles: [__webpack_require__(/*! ./hashtag-diary.component.scss */ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.scss")]
        })
    ], HashtagDiaryComponent);
    return HashtagDiaryComponent;
}(_hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_1__["HashtagHomeComponent"]));



/***/ }),

/***/ "./src/app/hashtag/hashtag-home/hashtag-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/hashtag/hashtag-home/hashtag-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hashtag-home works!\n</p>\n\n<div>\n\t<div (click)=\"selectType('diary');\">日記</div>\n\t<div (click)=\"selectType('psychology');\">心理測驗</div>\n</div>\n\n<div [ngSwitch]=\"type\">\n\t<div *ngSwitchCase=\"'diary'\"><app-hashtag-diary [input_param]=\"dairy_param\"></app-hashtag-diary></div>\n\t<div *ngSwitchCase=\"'psychology'\"><app-hashtag-psychology [input_param]=\"pscholoy_param\"></app-hashtag-psychology></div>\n</div>\n\t\n\n\n"

/***/ }),

/***/ "./src/app/hashtag/hashtag-home/hashtag-home.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/hashtag/hashtag-home/hashtag-home.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hashtag/hashtag-home/hashtag-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hashtag/hashtag-home/hashtag-home.component.ts ***!
  \****************************************************************/
/*! exports provided: HashtagHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagHomeComponent", function() { return HashtagHomeComponent; });
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
var HashtagHomeComponent = /** @class */ (function () {
    function HashtagHomeComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        //是否開啟read more div
        this.readmoreCheck = 0;
        this.moredata = 1;
    }
    HashtagHomeComponent.prototype.ngOnInit = function () {
    };
    //取得hashtag清單
    HashtagHomeComponent.prototype.getList = function () {
        var _this = this;
        var params = {
            'hashtag_id': this.hashtag_id,
            'from': this.input_param.from,
            'limit': this.input_param.limit,
        };
        var param = this.httpService.getParamFormat(params);
        var url = "" + _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + this.url_part + "?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.datas.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.datas;
            console.log(_this.list);
        });
    };
    //看更多
    HashtagHomeComponent.prototype.more = function () {
        this.input_param.from += this.input_param.limit;
        this.readmoreCheck = 1;
        //this.getList();		
    };
    HashtagHomeComponent.prototype.selectType = function (type) {
        //limit 設定各種hashtag搜尋結果的筆數
        this.dairy_param = {
            'from': 0,
            'limit': 2,
        };
        this.pscholoy_param = {
            'from': 0,
            'limit': 1,
        };
        //顯示區塊
        this.type = type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HashtagHomeComponent.prototype, "input_param", void 0);
    HashtagHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hashtag-home',
            template: __webpack_require__(/*! ./hashtag-home.component.html */ "./src/app/hashtag/hashtag-home/hashtag-home.component.html"),
            styles: [__webpack_require__(/*! ./hashtag-home.component.scss */ "./src/app/hashtag/hashtag-home/hashtag-home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HashtagHomeComponent);
    return HashtagHomeComponent;
}());



/***/ }),

/***/ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hashtag-psychology works!\n</p>\n\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let test of list\">\n\t\t{{ test | json }}\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-hashtag-psychology *ngIf=\"readmoreCheck\" [input_param]=\"input_param\"></app-hashtag-psychology>\n</div>\n"

/***/ }),

/***/ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.ts ***!
  \****************************************************************************/
/*! exports provided: HashtagPsychologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagPsychologyComponent", function() { return HashtagPsychologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hashtag-home/hashtag-home.component */ "./src/app/hashtag/hashtag-home/hashtag-home.component.ts");
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


var HashtagPsychologyComponent = /** @class */ (function (_super) {
    __extends(HashtagPsychologyComponent, _super);
    function HashtagPsychologyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HashtagPsychologyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url_part = '/api/content/psychological-test/hashtag';
        this.route.params.subscribe(function (params) {
            _this.hashtag_id = params['id'];
            _this.getList();
        });
    };
    HashtagPsychologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hashtag-psychology',
            template: __webpack_require__(/*! ./hashtag-psychology.component.html */ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.html"),
            styles: [__webpack_require__(/*! ./hashtag-psychology.component.scss */ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.scss")]
        })
    ], HashtagPsychologyComponent);
    return HashtagPsychologyComponent;
}(_hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_1__["HashtagHomeComponent"]));



/***/ }),

/***/ "./src/app/hashtag/hashtag-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/hashtag/hashtag-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HashtagRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagRoutingModule", function() { return HashtagRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hashtag-home/hashtag-home.component */ "./src/app/hashtag/hashtag-home/hashtag-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//component

var routes = [
    { path: ':id', component: _hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_2__["HashtagHomeComponent"] },
];
var HashtagRoutingModule = /** @class */ (function () {
    function HashtagRoutingModule() {
    }
    HashtagRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HashtagRoutingModule);
    return HashtagRoutingModule;
}());



/***/ }),

/***/ "./src/app/hashtag/hashtag.module.ts":
/*!*******************************************!*\
  !*** ./src/app/hashtag/hashtag.module.ts ***!
  \*******************************************/
/*! exports provided: HashtagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagModule", function() { return HashtagModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hashtag_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hashtag-routing.module */ "./src/app/hashtag/hashtag-routing.module.ts");
/* harmony import */ var _hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashtag-home/hashtag-home.component */ "./src/app/hashtag/hashtag-home/hashtag-home.component.ts");
/* harmony import */ var _hashtag_diary_hashtag_diary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashtag-diary/hashtag-diary.component */ "./src/app/hashtag/hashtag-diary/hashtag-diary.component.ts");
/* harmony import */ var _hashtag_psychology_hashtag_psychology_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hashtag-psychology/hashtag-psychology.component */ "./src/app/hashtag/hashtag-psychology/hashtag-psychology.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HashtagModule = /** @class */ (function () {
    function HashtagModule() {
    }
    HashtagModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _hashtag_routing_module__WEBPACK_IMPORTED_MODULE_2__["HashtagRoutingModule"]
            ],
            declarations: [_hashtag_home_hashtag_home_component__WEBPACK_IMPORTED_MODULE_3__["HashtagHomeComponent"], _hashtag_diary_hashtag_diary_component__WEBPACK_IMPORTED_MODULE_4__["HashtagDiaryComponent"], _hashtag_psychology_hashtag_psychology_component__WEBPACK_IMPORTED_MODULE_5__["HashtagPsychologyComponent"]]
        })
    ], HashtagModule);
    return HashtagModule;
}());



/***/ })

}]);
//# sourceMappingURL=hashtag-hashtag-module.js.map