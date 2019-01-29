(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["psychology-psychology-module"],{

/***/ "./src/app/psychology/psychology-home/psychology-home.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/psychology/psychology-home/psychology-home.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/psychology/psychology-home/psychology-home.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/psychology/psychology-home/psychology-home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<app-category (childEvent)=\"getCategoryId($event)\"></app-category>\n</nav>\n\n<section>\n\t<app-banner [inputType]=\"'psychological-test'\"></app-banner>\n</section>\n\n<section class=\"theme-test\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ this.layoutService.page_summary }}</p>\n\t</div>\n\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"psychology_param.sort=='join_count'\">\n\t\t\t\t\t\t\t<a *ngIf=\"psychology_param.sort_order=='asc'\" (click)=\"sort('join_count','desc')\" class=\"nav-link active icon-desc\">測驗人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"psychology_param.sort_order=='desc'\" (click)=\"sort('join_count','asc')\" class=\"nav-link active icon-asc\">測驗人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"psychology_param.sort=='post_date'\">\n\t\t\t\t\t\t\t<a (click)=\"sort('join_count','desc')\" class=\"nav-link icon-sort\">測驗人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"psychology_param.sort_order=='asc'\" (click)=\"sort('post_date','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"psychology_param.sort_order=='desc'\" (click)=\"sort('post_date','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sort('join_count','desc')\" class=\"nav-link\">測驗人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('join_count','asc')\" class=\"nav-link\">測驗人數<i class=\"icon-asc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i></a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-psychology-list [psychology_param]=\"psychology_param\"></app-psychology-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/psychology/psychology-home/psychology-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/psychology/psychology-home/psychology-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: PsychologyHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychologyHomeComponent", function() { return PsychologyHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PsychologyHomeComponent = /** @class */ (function () {
    function PsychologyHomeComponent(layoutService) {
        this.layoutService = layoutService;
        this.psychology_param = {
            category_id: 0,
            sort: 'post_date',
            sort_order: 'desc',
            from: 0,
        };
        this.category_id = 0;
    }
    PsychologyHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_test_introduction');
    };
    //sort
    PsychologyHomeComponent.prototype.sort = function ($type, $order) {
        this.psychology_param = {
            category_id: this.category_id,
            sort: $type,
            sort_order: $order,
            from: 0,
        };
    };
    //category component output
    PsychologyHomeComponent.prototype.getCategoryId = function ($id) {
        this.category_id = $id;
        this.psychology_param = {
            category_id: $id,
            sort: 'post_date',
            sort_order: 'desc',
            from: 0,
        };
        //location.reload();
    };
    PsychologyHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-psychology-home',
            template: __webpack_require__(/*! ./psychology-home.component.html */ "./src/app/psychology/psychology-home/psychology-home.component.html"),
            styles: [__webpack_require__(/*! ./psychology-home.component.css */ "./src/app/psychology/psychology-home/psychology-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], PsychologyHomeComponent);
    return PsychologyHomeComponent;
}());



/***/ }),

/***/ "./src/app/psychology/psychology-list/psychology-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/psychology/psychology-list/psychology-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let test of list\" class=\"col-md-6 col-xl-4\">\n    <div class=\"card card-overlay\">\n      <div class=\"card-img-bg\" [ngStyle]=\"{'background-image':'url(' + fileUrl + test.image + ')'}\"></div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">\n          <a routerLink=\"./questionnaire/{{ test.id }}\">{{ test.title }}</a>\n        </h4>\n        <p class=\"card-summary multiline\">\n          <span>{{ test.summary }}</span>\n        </p>\n        <p class=\"card-text\">作者: {{ test.writer.name }}</p>\n        <p class=\"card-text\">日期: {{ test.post_date }}</p>\n        <p class=\"card-text\">觀看人數: {{ test.viewed }}</p>\n        <p class=\"card-text\">收藏人數:</p>\n        <div class=\"hashtag\">\n        \t<a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n          <a href=\"\">#hashtag</a>\n        </div>\n        <div class=\"card-button\">\n          <div class=\"icon-group-share justify-content-center\">\n            <a href=\"\"><img src=\"/assets/img/icons/icon_line_test.svg\" alt=\"\"></a>\n            <a href=\"\"><img src=\"/assets/img/icons/icon_fb_test.svg\" alt=\"\"></a>\n          </div>\n          <a routerLink=\"./questionnaire/{{ test.id }}\" class=\"btn btn-test-light\">開始測驗</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-psychology-list [psychology_param]=\"psychology_param\" *ngIf=\"readmoreCheck\"></app-psychology-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-test-dark\">Load More</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/psychology/psychology-list/psychology-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/psychology/psychology-list/psychology-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group-more {\n  display: none; }\n\n.row + .btn-group-more {\n  display: block; }\n\n.row + div + .btn-group-more {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/psychology/psychology-list/psychology-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/psychology/psychology-list/psychology-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PsychologyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychologyListComponent", function() { return PsychologyListComponent; });
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
var PsychologyListComponent = /** @class */ (function () {
    function PsychologyListComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 3;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    PsychologyListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.psychology_param = changes.psychology_param.currentValue;
        this.readmoreCheck = 0;
        this.getPsychologyList();
    };
    PsychologyListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getPsychologyList();
    };
    //看更多
    PsychologyListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.psychology_param.from += this.limit;
    };
    //取得心理測驗列表
    PsychologyListComponent.prototype.getPsychologyList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'website_id': 1,
            'category_id': this.psychology_param.category_id,
            'sort': this.psychology_param.sort,
            'sort_order': this.psychology_param.sort_order,
            'from': this.psychology_param.from,
            'limit': this.limit,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/psychological-test?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.tests.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.tests;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PsychologyListComponent.prototype, "psychology_param", void 0);
    PsychologyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-psychology-list',
            template: __webpack_require__(/*! ./psychology-list.component.html */ "./src/app/psychology/psychology-list/psychology-list.component.html"),
            styles: [__webpack_require__(/*! ./psychology-list.component.scss */ "./src/app/psychology/psychology-list/psychology-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PsychologyListComponent);
    return PsychologyListComponent;
}());



/***/ }),

/***/ "./src/app/psychology/psychology-result/psychology-result.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/psychology/psychology-result/psychology-result.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/psychology/psychology-result/psychology-result.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/psychology/psychology-result/psychology-result.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  psychology-result works!\n</p>\n<div [innerHtml]=\"result\"></div>\n{{ chart | json }}\n\n\n\n<!-- hashtag -->\n<app-member-psychology-hashtag *ngIf=\"hashtags\" [input_test_ans_id]=\"ans_id\" [input_hashtags]=\"hashtags\"></app-member-psychology-hashtag>"

/***/ }),

/***/ "./src/app/psychology/psychology-result/psychology-result.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/psychology/psychology-result/psychology-result.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PsychologyResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychologyResultComponent", function() { return PsychologyResultComponent; });
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


var PsychologyResultComponent = /** @class */ (function () {
    function PsychologyResultComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    PsychologyResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ans_id = params['answer_id'];
            _this.getChart(params['answer_id']);
            _this.getResult(params['test_id']);
            _this.getHashtag(params['answer_id']);
        });
    };
    //取得結果說明
    PsychologyResultComponent.prototype.getResult = function (id) {
        var _this = this;
        var url;
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/psychological-test/show?id=" + id + "&viewed=0";
        this.http.getHttp(url).subscribe(function (res) {
            _this.result = res.test.result_content;
            console.log(res);
        });
    };
    //取得結果圖表data
    PsychologyResultComponent.prototype.getChart = function (id) {
        var _this = this;
        var url;
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/psychological-test-answer/chart-data?id=" + id;
        this.http.getHttp(url).subscribe(function (res) {
            _this.chart = res;
            console.log(res);
            //加入心理測驗圖表function
        });
    };
    //取得結果hashtag
    PsychologyResultComponent.prototype.getHashtag = function (id) {
        var _this = this;
        var url;
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/psychological-test-answer/show?id=" + id;
        this.http.getHttp(url).subscribe(function (res) {
            _this.hashtags = res.hash_tags;
            console.log(res);
        });
    };
    PsychologyResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-psychology-result',
            template: __webpack_require__(/*! ./psychology-result.component.html */ "./src/app/psychology/psychology-result/psychology-result.component.html"),
            styles: [__webpack_require__(/*! ./psychology-result.component.css */ "./src/app/psychology/psychology-result/psychology-result.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], PsychologyResultComponent);
    return PsychologyResultComponent;
}());



/***/ }),

/***/ "./src/app/psychology/psychology-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/psychology/psychology-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PsychologyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychologyRoutingModule", function() { return PsychologyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_complete_info_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/complete-info.guard */ "./src/app/guards/complete-info.guard.ts");
/* harmony import */ var _psychology_psychology_home_psychology_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../psychology/psychology-home/psychology-home.component */ "./src/app/psychology/psychology-home/psychology-home.component.ts");
/* harmony import */ var _psychology_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../psychology/questionnaire/questionnaire.component */ "./src/app/psychology/questionnaire/questionnaire.component.ts");
/* harmony import */ var _psychology_psychology_result_psychology_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../psychology/psychology-result/psychology-result.component */ "./src/app/psychology/psychology-result/psychology-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//component



var routes = [
    { path: '', component: _psychology_psychology_home_psychology_home_component__WEBPACK_IMPORTED_MODULE_3__["PsychologyHomeComponent"], canActivate: [_guards_complete_info_guard__WEBPACK_IMPORTED_MODULE_2__["CompleteInfoGuard"]] },
    { path: 'questionnaire/:id', component: _psychology_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_4__["QuestionnaireComponent"], canActivate: [_guards_complete_info_guard__WEBPACK_IMPORTED_MODULE_2__["CompleteInfoGuard"]] },
    { path: 'result/:test_id/:answer_id', component: _psychology_psychology_result_psychology_result_component__WEBPACK_IMPORTED_MODULE_5__["PsychologyResultComponent"], canActivate: [_guards_complete_info_guard__WEBPACK_IMPORTED_MODULE_2__["CompleteInfoGuard"]] },
];
var PsychologyRoutingModule = /** @class */ (function () {
    function PsychologyRoutingModule() {
    }
    PsychologyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PsychologyRoutingModule);
    return PsychologyRoutingModule;
}());



/***/ }),

/***/ "./src/app/psychology/psychology.module.ts":
/*!*************************************************!*\
  !*** ./src/app/psychology/psychology.module.ts ***!
  \*************************************************/
/*! exports provided: PsychologyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsychologyModule", function() { return PsychologyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _psychology_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./psychology-routing.module */ "./src/app/psychology/psychology-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _member_member_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member/member.module */ "./src/app/member/member.module.ts");
/* harmony import */ var _psychology_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../psychology/questionnaire/questionnaire.component */ "./src/app/psychology/questionnaire/questionnaire.component.ts");
/* harmony import */ var _psychology_psychology_home_psychology_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../psychology/psychology-home/psychology-home.component */ "./src/app/psychology/psychology-home/psychology-home.component.ts");
/* harmony import */ var _psychology_psychology_list_psychology_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../psychology/psychology-list/psychology-list.component */ "./src/app/psychology/psychology-list/psychology-list.component.ts");
/* harmony import */ var _psychology_psychology_result_psychology_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../psychology/psychology-result/psychology-result.component */ "./src/app/psychology/psychology-result/psychology-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//component




var PsychologyModule = /** @class */ (function () {
    function PsychologyModule() {
    }
    PsychologyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _psychology_routing_module__WEBPACK_IMPORTED_MODULE_2__["PsychologyRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
                _member_member_module__WEBPACK_IMPORTED_MODULE_4__["MemberModule"],
            ],
            declarations: [
                _psychology_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireComponent"],
                _psychology_psychology_home_psychology_home_component__WEBPACK_IMPORTED_MODULE_6__["PsychologyHomeComponent"],
                _psychology_psychology_list_psychology_list_component__WEBPACK_IMPORTED_MODULE_7__["PsychologyListComponent"],
                _psychology_psychology_result_psychology_result_component__WEBPACK_IMPORTED_MODULE_8__["PsychologyResultComponent"]
            ]
        })
    ], PsychologyModule);
    return PsychologyModule;
}());



/***/ }),

/***/ "./src/app/psychology/questionnaire/questionnaire.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/psychology/questionnaire/questionnaire.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/psychology/questionnaire/questionnaire.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/psychology/questionnaire/questionnaire.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  questionnaire works!\n</p>\n\n<div *ngIf=\"data\">\n\t<!-- 測驗資訊 -->\n\t<div>\n\t\t<ul>\n\t\t\t<li>標題 {{ data.title }}</li>\n\t\t\t<li>摘要 {{ data.summary }}</li>\n\t\t\t<li><img src=\"{{ fileUrl }}{{ data.image }}\" /></li>\n\t\t\t<li>瀏覽次數 {{ data.viewed }}</li>\n\t\t\t<li>填答次數 {{ data.join_count }}</li>\n\t\t\t<li>預計作答時間 {{ data.minute }}</li>\n\t\t\t<li>題數 {{ data.question_count }}</li>\n\t\t\t<li>日期 {{ data.post_date }}</li>\n\t\t</ul>\n\t</div>\n\n\t<!-- 測驗問題 -->\n\t<div>\n\t\t<div>\n\t\t\t測驗說明:<br>\n\t\t\t{{ data.questionnaire.structure.qurestionnaire_info | json }}\n\t\t</div>\n\t\t<div>\n\t\t\t{{ data.questionnaire.structure.sec_Questions.title }}<br>\n\t\t\t{{ data.questionnaire.structure.sec_Questions.description }}\n\t\t</div>\n\t\t<!-- 問題 -->\n\t\t<div>\n\t\t\t<form [formGroup]='Form' (ngSubmit)=\"onSubmit()\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let question of data.questionnaire.structure.sec_Questions.questions\">\n\n\t\t\t\t\t<div *ngIf=\"question.type=='choice'\">\n\t\t\t\t\t\t單選題\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t      \t<label>{{ question.question }}</label><br>\n\t\t\t\t      \n\t\t\t\t\t      \t<span *ngFor=\"let choice of question.choices; let i = index\">\n\t\t\t\t\t        \t<input type=\"radio\" formControlName=\"{{ question.id }}\" value=\"{{ choice.value }}\">{{ choice.displayText }}\n\t\t\t\t\t       \t</span>\n\t\t\t\t\t       \t<div *ngIf=\"submitted && Form.get(question.id).invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t            <div>必填</div>\n\t\t\t\t\t        </div>\t\n\t\t\t\t\n\t\t\t\t    \t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div *ngIf=\"question.type=='multi'\">\n\t\t\t\t\t\t複選題\n\t\t\t\t\t\t<div class=\"form-group\" formArrayName=\"{{ question.id }}\">\n\t\t\t\t      \t<label>{{ question.question }}</label><br>\n\t\t\t\t      \n\t\t\t\t\t      \t<span *ngFor=\"let choice of question.choices; let i = index\">\n\t\t\t\t\t        \t<input type=\"checkbox\" formControlName=\"{{ i }}\" value=\"{{ choice.value }}\" (change)=\"onCheckChange($event)\" id=\"{{ question.id }}#{{ i }}\">{{ choice.displayText }}\n\t\t\t\t\t       \t</span>\n\t\t\t\t\t       \t<div *ngIf=\"submitted && Form.get(question.id).invalid\" class=\"alert alert-danger\">\n\t\t\t\t\t            <div>必填</div>\n\t\t\t\t\t        </div>\t\n\t\t\t\t\n\t\t\t\t    \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\t\t\t\t\t\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<button class=\"btn-primary\" type=\"submit\">送出測驗</button>\n\t\t\t</form>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/psychology/questionnaire/questionnaire.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/psychology/questionnaire/questionnaire.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validator_custom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validator/custom.service */ "./src/app/validator/custom.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
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






var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(layoutService, route, router, httpService, formBuilder, customValidators) {
        this.layoutService = layoutService;
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.customValidators = customValidators;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        this.psychological_test_id = "3";
        this.submitted = false;
        this.Form = this.formBuilder.group({});
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.psychological_test_id = params['id'];
            _this.getInboundAPI();
        });
    };
    //使用英邦德單一問卷資料API
    QuestionnaireComponent.prototype.getInboundAPI = function () {
        var _this = this;
        var paramObject = {
            'id': this.psychological_test_id,
            'viewed': 0,
        };
        //console.log(paramObject);
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/psychological-test/show?" + param;
        this.httpService.getHttp(url)
            .subscribe(function (res) {
            //metadata
            _this.layoutService.setMetaData(res.test.metadata);
            _this.data = res.test;
            //console.log(res);
            var questions = _this.data.questionnaire.structure.sec_Questions.questions;
            Object.keys(questions)
                .map(function (key) {
                //console.log(questions[key]);
                //單選 
                if (questions[key].type == "choice") {
                    _this.Form.addControl(questions[key].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
                }
                //複選
                if (questions[key].type == "multi") {
                    _this.Form.addControl(questions[key].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([], _this.customValidators.checkboxRequired));
                    Object.keys(questions[key].choices)
                        .map(function (choice_key) {
                        var control = _this.Form.controls[questions[key].id];
                        control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false));
                    });
                } //複選end
            });
        });
    };
    //設定checkbox的值 從原本的true 改成value
    QuestionnaireComponent.prototype.onCheckChange = function (event) {
        var eventId = event.target.id;
        var targetIds = eventId.split("#");
        var formArray = this.Form.get(targetIds[0]);
        /* Selected */
        if (event.target.checked) {
            // Add a new control in the arrayForm
            //console.log(formArray.controls[targetIds[1]]);
            //console.log(targetIds[1]);
            formArray.controls[targetIds[1]].setValue(event.target.value);
        }
    };
    //表單送出
    QuestionnaireComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.Form.value);
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.Form.invalid) {
            return;
        }
        var params = new FormData();
        params.append('psychological_test_id', this.psychological_test_id);
        var jsonStr = JSON.stringify(this.Form.value);
        params.append('questions', jsonStr);
        console.log(jsonStr);
        console.log(params.getAll('questions'));
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/psychological-test-answer";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: '成功!',
                text: '心理測驗填寫完成',
                type: 'success',
            }).then(function (success) {
                _this.router.navigate(['../../result', _this.psychological_test_id, res.answer_id], { relativeTo: _this.route });
            });
        });
    };
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionnaire',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/psychology/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__(/*! ./questionnaire.component.css */ "./src/app/psychology/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validator_custom_service__WEBPACK_IMPORTED_MODULE_6__["CustomService"]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/validator/custom.service.ts":
/*!*********************************************!*\
  !*** ./src/app/validator/custom.service.ts ***!
  \*********************************************/
/*! exports provided: CustomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomService", function() { return CustomService; });
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

var CustomService = /** @class */ (function () {
    function CustomService() {
    }
    CustomService.prototype.checkboxRequired = function (formArray) {
        var trueCount = 0;
        for (var i = 0; i < formArray.length; ++i) {
            if (formArray.controls[i].value != false) {
                trueCount++;
            }
        }
        if (trueCount < 1) {
            return { ckbValidate: true };
        }
        else {
            return null;
        }
    };
    CustomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomService);
    return CustomService;
}());



/***/ })

}]);
//# sourceMappingURL=psychology-psychology-module.js.map