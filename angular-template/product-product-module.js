(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/activity/activity-home/activity-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/activity/activity-home/activity-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity/activity-home/activity-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/activity/activity-home/activity-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<app-category (childEvent)=\"getCategoryId($event)\"></app-category>\n</nav>\n\n<section>\n\t<app-banner [inputType]=\"'activity'\"></app-banner>\n</section>\n\n<section class=\"theme-activity\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ layoutService.page_summary }}</p>\n\t</div>\n\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"sortType=='sell_quantity'\">\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('sell_quantity','desc')\" class=\"nav-link active icon-desc\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('sell_quantity','asc')\" class=\"nav-link active icon-asc\">購買人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"sortType=='post_date'\">\n\t\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link icon-sort\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('post_date','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('post_date','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link\">購買人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','asc')\" class=\"nav-link\">購買人數<i class=\"icon-asc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i></a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-activity-list [input_param]=\"input_param\"></app-activity-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/activity/activity-home/activity-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/activity/activity-home/activity-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityHomeComponent", function() { return ActivityHomeComponent; });
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


var ActivityHomeComponent = /** @class */ (function () {
    function ActivityHomeComponent(layoutService) {
        this.layoutService = layoutService;
        this.category_id = 0;
        this.sortType = 'post_date';
        this.order = 'desc';
        this.limit = 2;
    }
    ActivityHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_activity_introduction');
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: this.sortType,
            sort_order: this.order,
            type: 'activity',
            from: 0,
        };
    };
    //sort 一般篩選器
    ActivityHomeComponent.prototype.sort = function ($type, $order) {
        this.sortType = $type;
        this.order = $order;
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: $type,
            sort_order: $order,
            type: 'activity',
            from: 0,
        };
    };
    //category component output
    ActivityHomeComponent.prototype.getCategoryId = function ($id) {
        this.category_id = $id;
        this.input_param = {
            website_id: 1,
            category_id: $id,
            sort: 'post_date',
            sort_order: 'desc',
            type: 'activity',
            from: 0,
        };
        //location.reload();
    };
    ActivityHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-home',
            template: __webpack_require__(/*! ./activity-home.component.html */ "./src/app/activity/activity-home/activity-home.component.html"),
            styles: [__webpack_require__(/*! ./activity-home.component.css */ "./src/app/activity/activity-home/activity-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], ActivityHomeComponent);
    return ActivityHomeComponent;
}());



/***/ }),

/***/ "./src/app/activity/activity-info/activity-info.component.css":
/*!********************************************************************!*\
  !*** ./src/app/activity/activity-info/activity-info.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity/activity-info/activity-info.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/activity/activity-info/activity-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  activity-info works!\n</p>\n<div *ngIf=\"product\">\n\t<ul>\n\t\t<li *ngFor=\"let category of sub_categories\">\n\t\t\t{{ category.name }}\n\t\t</li>\n\t\t<li>活動名稱 {{ product.name }}</li>\n\t\t<li>課程時間 {{ product.detail.activity_date }}</li>\n\t\t<li>課程地點 {{ product.detail.location }}</li>\n\t\t<li>作者 {{ product.writer.name }}</li>\n\t\t<li>總數量 {{ product.quantity }}</li>\n\t\t<li>金額 {{ product.price }}</li>\n\t\t<li>上架時間 {{ product.post_date }}</li>\n\t</ul>\n\t<br>\n\t內容說明\n\t<div [innerHtml]=\"product.content\"></div>\n\t<!-- 加入購物車 -->\n\t<app-cart-add [input_pId]=\"product.id\" [add_check]=false [product_type]=\"product.type\"  [add_status]=\"product.add_cart_status\"></app-cart-add>\n</div>\n\n<!-- 作者介紹 -->\n<app-single-writer [writer_id]=\"product.writer.id\"></app-single-writer>"

/***/ }),

/***/ "./src/app/activity/activity-info/activity-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/activity/activity-info/activity-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityInfoComponent", function() { return ActivityInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/product/product.component */ "./src/app/share/product/product.component.ts");
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


var ActivityInfoComponent = /** @class */ (function (_super) {
    __extends(ActivityInfoComponent, _super);
    function ActivityInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-info',
            template: __webpack_require__(/*! ./activity-info.component.html */ "./src/app/activity/activity-info/activity-info.component.html"),
            styles: [__webpack_require__(/*! ./activity-info.component.css */ "./src/app/activity/activity-info/activity-info.component.css")]
        })
    ], ActivityInfoComponent);
    return ActivityInfoComponent;
}(_share_product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]));



/***/ }),

/***/ "./src/app/activity/activity-list/activity-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/activity/activity-list/activity-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity/activity-list/activity-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/activity/activity-list/activity-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let product of list\"  class=\"col-lg-6\">\n\n\t\t<div class=\"media media-height-2\">\n\t\t\t<div class=\"media-header\">\n\t\t\t\t<a [routerLink]=\"['./info', product.id]\">\n\t\t\t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + product.image + ')'}\"></div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"media-body\">\n      \t<h5 class=\"media-title multiline\">\n\t\t\t\t\t<a [routerLink]=\"['./info', product.id]\">\n\t\t\t\t\t\t<span>{{ product.name }}</span>\n\t\t\t\t\t</a>\n      \t</h5>\n\t\t\t\t<div class=\"media-info\">\n\t\t\t\t\t<div class=\"media-avatar\">\n\t\t\t\t\t\t<div class=\"avatar avatar-lg\" [ngStyle]=\"{'background-image':'url(' + fileUrl + product.writer.avatar + ')'}\"></div>\n\t\t\t\t\t\t<span class=\"avatar-text\">{{ product.writer.name }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"media-summary multiline\">\n\t\t\t\t\t\t<span>{{ product.summary }}</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"media-text\">活動時間: {{ product.detail.activity_date }}</p>\n\t\t\t\t\t<p class=\"media-text\">購買人數: {{ product.sell_quantity }}</p>\n\t\t\t\t\t<p class=\"media-text\">購買金額: <strong>{{ product.price }}</strong></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-button\">\n\t\t\t\t\t<div class=\"btn-group-activity theme-activity\">\n\t\t\t\t\t\t<app-cart-add [input_pId]=\"product.id\" [add_check]=true [product_type]=\"product.type\" [add_status]=\"product.add_cart_status\"></app-cart-add>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n<app-activity-list [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-activity-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-activity-dark\">Load More</button>\n</div>"

/***/ }),

/***/ "./src/app/activity/activity-list/activity-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/activity/activity-list/activity-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
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




var ActivityListComponent = /** @class */ (function () {
    function ActivityListComponent(http, productService) {
        this.http = http;
        this.productService = productService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    ActivityListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    ActivityListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    //看更多
    ActivityListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得文章測驗列表
    ActivityListComponent.prototype.getEbookList = function () {
        var _this = this;
        this.input_param.limit = this.limit;
        this.productService.getProductList(this.input_param).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.products;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActivityListComponent.prototype, "input_param", void 0);
    ActivityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-list',
            template: __webpack_require__(/*! ./activity-list.component.html */ "./src/app/activity/activity-list/activity-list.component.html"),
            styles: [__webpack_require__(/*! ./activity-list.component.css */ "./src/app/activity/activity-list/activity-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ActivityListComponent);
    return ActivityListComponent;
}());



/***/ }),

/***/ "./src/app/course/course-bought/course-bought.component.css":
/*!******************************************************************!*\
  !*** ./src/app/course/course-bought/course-bought.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course-bought/course-bought.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/course/course-bought/course-bought.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-bought works!\n</p>\n\n<div *ngIf=\"token\">\n\t<video width=\"320\" height=\"240\" controls>\n  \t\t<source src=\"{{ serverUrl }}/api/shop/my-product/course?id={{ id }}&token={{ token }}\" type=\"video/mp4\">\n\t\tYour browser does not support the video tag.\n\t</video>\n</div>\n\n<div *ngIf=\"product\">\n\t<ul>\n\t\t<li *ngFor=\"let category of sub_categories\">\n\t\t\t{{ category.name }}\n\t\t</li>\n\t\t<li>課程名稱 {{ product.name }}</li>\n\t\t<li>課程時間 {{ product.detail.hour }}</li>\n\t\t<li>課程堂數 {{ product.detail.lesson }}</li>\n\t\t<li>課程大綱 <div [innerHtml]=\"product.detail.agenda\"></div></li>\n\t\t<li>作者 {{ product.writer.name }}</li>\n\t\t<li>購買人數 {{ product.sell_quantity }}</li>\n\t\t<li>金額 {{ product.price }}</li>\n\t\t<li>上架時間 {{ product.post_date }}</li>\n\n\t</ul>\n\t<br>\n\t內容說明\n\t<div [innerHtml]=\"product.content\"></div>\n\n</div>\n\n\n<!-- 作者介紹 -->\n<div *ngIf=\"product\">\n<app-single-writer [writer_id]=\"product.writer.id\"></app-single-writer>\n</div>"

/***/ }),

/***/ "./src/app/course/course-bought/course-bought.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/course/course-bought/course-bought.component.ts ***!
  \*****************************************************************/
/*! exports provided: CourseBoughtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBoughtComponent", function() { return CourseBoughtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _share_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/product/product.component */ "./src/app/share/product/product.component.ts");
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



var CourseBoughtComponent = /** @class */ (function (_super) {
    __extends(CourseBoughtComponent, _super);
    function CourseBoughtComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.serverUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"];
        return _this;
    }
    //constructor(private cookieService:CookieService, private route:ActivatedRoute) { }
    CourseBoughtComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ngOnChanges(changes: SimpleChanges){
        this.route.params.subscribe(function (params) {
            _this.getProduct(params['id']);
            _this.getSliders(params['id']);
            _this.id = params['id'];
            _this.token = _this.cookieService.getCookie('token');
        });
    };
    CourseBoughtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-bought',
            template: __webpack_require__(/*! ./course-bought.component.html */ "./src/app/course/course-bought/course-bought.component.html"),
            styles: [__webpack_require__(/*! ./course-bought.component.css */ "./src/app/course/course-bought/course-bought.component.css")]
        })
    ], CourseBoughtComponent);
    return CourseBoughtComponent;
}(_share_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]));



/***/ }),

/***/ "./src/app/course/course-home/course-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/course/course-home/course-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course-home/course-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/course/course-home/course-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<app-category (childEvent)=\"getCategoryId($event)\"></app-category>\n</nav>\n\n<section>\n\t<app-banner [inputType]=\"'course'\"></app-banner>\n</section>\n\n<section class=\"theme-course\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ layoutService.page_summary }}</p>\n\t</div>\n\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"sortType=='sell_quantity'\">\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('sell_quantity','desc')\" class=\"nav-link active icon-desc\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('sell_quantity','asc')\" class=\"nav-link active icon-asc\">購買人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"sortType=='post_date'\">\n\t\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link icon-sort\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('post_date','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('post_date','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link\">購買人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','asc')\" class=\"nav-link\">購買人數<i class=\"icon-asc\" data-icon=\"\"></i><</a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i><</a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-course-list [input_param]=\"input_param\"></app-course-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/course/course-home/course-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/course/course-home/course-home.component.ts ***!
  \*************************************************************/
/*! exports provided: CourseHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseHomeComponent", function() { return CourseHomeComponent; });
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


var CourseHomeComponent = /** @class */ (function () {
    function CourseHomeComponent(layoutService) {
        this.layoutService = layoutService;
        this.category_id = 0;
        this.sortType = 'post_date';
        this.order = 'desc';
        this.limit = 2;
    }
    CourseHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_course_introduction');
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: this.sortType,
            sort_order: this.order,
            type: 'course',
            from: 0,
        };
        this.uiControl();
    };
    //sort 一般篩選器
    CourseHomeComponent.prototype.sort = function ($type, $order) {
        this.sortType = $type;
        this.order = $order;
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: $type,
            sort_order: $order,
            type: 'course',
            from: 0,
        };
    };
    //category component output
    CourseHomeComponent.prototype.getCategoryId = function ($id) {
        this.category_id = $id;
        this.input_param = {
            website_id: 1,
            category_id: $id,
            sort: 'post_date',
            sort_order: 'desc',
            type: 'course',
            from: 0,
        };
        //location.reload();
    };
    // ui jquery
    CourseHomeComponent.prototype.uiControl = function () {
        $(document).ready(function () {
            $('.nav-sort > a').click(function () {
                $('.nav-sort > a').removeClass('active');
                $(this).addClass('active');
            });
        });
    };
    CourseHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-home',
            template: __webpack_require__(/*! ./course-home.component.html */ "./src/app/course/course-home/course-home.component.html"),
            styles: [__webpack_require__(/*! ./course-home.component.css */ "./src/app/course/course-home/course-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], CourseHomeComponent);
    return CourseHomeComponent;
}());



/***/ }),

/***/ "./src/app/course/course-info/course-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/course/course-info/course-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course-info/course-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/course/course-info/course-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  course-info works!\n</p>\n<div *ngIf=\"product\">\n\t<ul>\n\t\t<li *ngFor=\"let category of sub_categories\">\n\t\t\t{{ category.name }}\n\t\t</li>\n\t\t<li>課程名稱 {{ product.name }}</li>\n\t\t<li>課程時間 {{ product.detail.hour }}</li>\n\t\t<li>課程堂數 {{ product.detail.lesson }}</li>\n\t\t<li>作者 {{ product.writer.name }}</li>\n\t\t<li>購買人數 {{ product.sell_quantity }}</li>\n\t\t<li>金額 {{ product.price }}</li>\n\t\t<li>上架時間 {{ product.post_date }}</li>\n\t\t<li>課程影片連結 {{ product.detail.introduction_video }}</li>\n\t</ul>\n\t<br>\n\t內容說明\n\t<div [innerHtml]=\"product.content\"></div>\n\t<!-- 加入購物車 -->\n\t<app-cart-add [input_pId]=\"product.id\" [add_check]=false [product_type]=\"product.type\" [add_status]=\"product.add_cart_status\"></app-cart-add>\n</div>\n\n\n<!-- 作者介紹 -->\n<app-single-writer [writer_id]=\"product.writer.id\"></app-single-writer>"

/***/ }),

/***/ "./src/app/course/course-info/course-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/course/course-info/course-info.component.ts ***!
  \*************************************************************/
/*! exports provided: CourseInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseInfoComponent", function() { return CourseInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/product/product.component */ "./src/app/share/product/product.component.ts");
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


var CourseInfoComponent = /** @class */ (function (_super) {
    __extends(CourseInfoComponent, _super);
    function CourseInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CourseInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-info',
            template: __webpack_require__(/*! ./course-info.component.html */ "./src/app/course/course-info/course-info.component.html"),
            styles: [__webpack_require__(/*! ./course-info.component.css */ "./src/app/course/course-info/course-info.component.css")]
        })
    ], CourseInfoComponent);
    return CourseInfoComponent;
}(_share_product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]));



/***/ }),

/***/ "./src/app/course/course-list/course-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/course/course-list/course-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let product of list\" class=\"col-md-4 col-xl-3\">\n\t  <div class=\"card card-border card-course\">\n\t  \t<div class=\"card-header\">\n\t  \t\t<a [routerLink]=\"['./info', product.id]\">\n\t  \t\t\t<div class=\"card-img-top\" [ngStyle]=\"{'background-image':'url(' + fileUrl + product.image + ')'}\"></div>\n\t  \t\t</a>\n\t  \t</div>\t\n\t  \t<div class=\"card-body\">\n\t  \t\t<h6 class=\"card-title multiline\">\n\t  \t\t\t<a [routerLink]=\"['./info', product.id]\">\n\t  \t\t\t\t<span>{{ product.name }}</span>\n\t  \t\t\t</a>\n\t  \t\t</h6>\n\t  \t  <div class=\"card-avatar\">\n\t\t\t\t\t<span class=\"avatar avatar-lg\" [ngStyle]=\"{'background-image':'url(' + fileUrl + product.writer.avatar + ')'}\"></span>\n\t  \t  \t<span class=\"avatar-text\">{{ product.writer.name }}</span>\n\t  \t  </div>\n\t  \t  <!-- <p class=\"card-text\">購買人數: {{ product.sell_quantity }}</p> -->\n\t  \t  <p class=\"card-text\">課程時間: {{ product.detail.hour }}</p>\n\t  \t  <p class=\"card-text\">購買金額: <strong>{{ product.price }}</strong></p>\n\t  \t  <div class=\"btn-group-block btn-group-course\">\n\t  \t  \t<app-cart-add [input_pId]=\"product.id\" [add_check]=false [product_type]=\"product.type\" [add_status]=\"product.add_cart_status\"></app-cart-add>\n\t  \t  </div>\n\t  \t</div>\n\t  </div>\n\t</div>\n</div>\n\n<app-course-list [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-course-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-course-dark\">Load More</button>\n</div>"

/***/ }),

/***/ "./src/app/course/course-list/course-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/course/course-list/course-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group-more {\n  display: none; }\n\n.row + .btn-group-more {\n  display: block; }\n\n.row + div + .btn-group-more {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/course/course-list/course-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/course/course-list/course-list.component.ts ***!
  \*************************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
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




var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(http, productService) {
        this.http = http;
        this.productService = productService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 4;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    CourseListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    CourseListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    //看更多
    CourseListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得文章測驗列表
    CourseListComponent.prototype.getEbookList = function () {
        var _this = this;
        this.input_param.limit = this.limit;
        this.productService.getProductList(this.input_param).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.products;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CourseListComponent.prototype, "input_param", void 0);
    CourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course-list.component.scss */ "./src/app/course/course-list/course-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CourseListComponent);
    return CourseListComponent;
}());



/***/ }),

/***/ "./src/app/ebook/ebook-bought/ebook-bought.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ebook/ebook-bought/ebook-bought.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ebook/ebook-bought/ebook-bought.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ebook/ebook-bought/ebook-bought.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ebook-bought works!\n</p>\n<iframe *ngIf=\"link\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(link)\">\n\t\n</iframe>\n"

/***/ }),

/***/ "./src/app/ebook/ebook-bought/ebook-bought.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ebook/ebook-bought/ebook-bought.component.ts ***!
  \**************************************************************/
/*! exports provided: EbookBoughtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookBoughtComponent", function() { return EbookBoughtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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

var EbookBoughtComponent = /** @class */ (function () {
    function EbookBoughtComponent(httpService, route, sanitizer) {
        this.httpService = httpService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    EbookBoughtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.getBook(param['id']);
        });
    };
    EbookBoughtComponent.prototype.getBook = function (pid) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/my-product/e-book?id=" + pid;
        this.httpService.getHttp(url).subscribe(function (res) { return _this.link = res.link; });
    };
    EbookBoughtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ebook-bought',
            template: __webpack_require__(/*! ./ebook-bought.component.html */ "./src/app/ebook/ebook-bought/ebook-bought.component.html"),
            styles: [__webpack_require__(/*! ./ebook-bought.component.css */ "./src/app/ebook/ebook-bought/ebook-bought.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], EbookBoughtComponent);
    return EbookBoughtComponent;
}());



/***/ }),

/***/ "./src/app/ebook/ebook-home/ebook-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ebook/ebook-home/ebook-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ebook/ebook-home/ebook-home.component.html":
/*!************************************************************!*\
  !*** ./src/app/ebook/ebook-home/ebook-home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<app-category (childEvent)=\"getCategoryId($event)\"></app-category>\n</nav>\n\n<section>\n\t<app-banner [inputType]=\"'e-book'\"></app-banner>\n</section>\n\n<section class=\"theme-ebook\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ layoutService.page_summary }}</p>\n\t</div>\n\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"sortType=='sell_quantity'\">\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('sell_quantity','desc')\" class=\"nav-link active icon-desc\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('sell_quantity','asc')\" class=\"nav-link active icon-asc\">購買人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"sortType=='post_date'\">\n\t\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link icon-sort\">購買人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('post_date','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('post_date','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sort('sell_quantity','desc')\" class=\"nav-link\">購買人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('sell_quantity','asc')\" class=\"nav-link\">購買人數<i class=\"icon-asc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('post_date','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i></a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-ebook-list [input_param]=\"input_param\"></app-ebook-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/ebook/ebook-home/ebook-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ebook/ebook-home/ebook-home.component.ts ***!
  \**********************************************************/
/*! exports provided: EbookHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookHomeComponent", function() { return EbookHomeComponent; });
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


var EbookHomeComponent = /** @class */ (function () {
    function EbookHomeComponent(layoutService) {
        this.layoutService = layoutService;
        this.category_id = 0;
        this.sortType = 'post_date';
        this.order = 'desc';
        this.limit = 2;
    }
    EbookHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_ebook_introduction');
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: this.sortType,
            sort_order: this.order,
            type: 'e-book',
            from: 0,
        };
        this.uiControl();
    };
    //sort 一般篩選器
    EbookHomeComponent.prototype.sort = function ($type, $order) {
        this.sortType = $type;
        this.order = $order;
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: $type,
            sort_order: $order,
            type: 'e-book',
            from: 0,
        };
    };
    //category component output
    EbookHomeComponent.prototype.getCategoryId = function ($id) {
        this.category_id = $id;
        this.input_param = {
            website_id: 1,
            category_id: $id,
            sort: 'post_date',
            sort_order: 'desc',
            type: 'e-book',
            from: 0,
        };
        //location.reload();
    };
    // ui jquery
    EbookHomeComponent.prototype.uiControl = function () {
        $(document).ready(function () {
            $('.nav-sort > a').click(function () {
                $('.nav-sort > a').removeClass('active');
                $(this).addClass('active');
            });
        });
    };
    EbookHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ebook-home',
            template: __webpack_require__(/*! ./ebook-home.component.html */ "./src/app/ebook/ebook-home/ebook-home.component.html"),
            styles: [__webpack_require__(/*! ./ebook-home.component.css */ "./src/app/ebook/ebook-home/ebook-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], EbookHomeComponent);
    return EbookHomeComponent;
}());



/***/ }),

/***/ "./src/app/ebook/ebook-info/ebook-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ebook/ebook-info/ebook-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ebook/ebook-info/ebook-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/ebook/ebook-info/ebook-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ebook-info works!\n</p>\n<div *ngIf=\"product\">\n\t<ul>\n\t\t<li *ngFor=\"let category of sub_categories\">\n\t\t\t{{ category.name }}\n\t\t</li>\n\t\t<li>書名 {{ product.name }}</li>\n\t\t<li>作者 {{ product.writer.name }}</li>\n\t\t<li>購買人數 {{ product.sell_quantity }}</li>\n\t\t<li>金額 {{ product.price }}</li>\n\t\t<li>上架時間 {{ product.post_date }}</li>\n\t</ul>\n\t<br>\n\t內容說明\n\t<div [innerHtml]=\"product.content\"></div>\n\t<!-- 加入購物車 -->\n\t<app-cart-add [input_pId]=\"product.id\" [add_check]=false [product_type]=\"product.type\" [add_status]=\"product.add_cart_status\"></app-cart-add>\n</div>\n\n<!-- 幻燈片 -->\n<div *ngIf=\"sliders\">\n\t<div *ngFor=\"let slider of sliders\">\n\t\t<img src=\"{{ fileUrl }}{{ slider.filepath }}\" width=\"50\">\n\t</div>\n</div>\n\n<!-- 作者介紹 -->\n<app-single-writer [writer_id]=\"product.writer.id\"></app-single-writer>\n\n"

/***/ }),

/***/ "./src/app/ebook/ebook-info/ebook-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ebook/ebook-info/ebook-info.component.ts ***!
  \**********************************************************/
/*! exports provided: EbookInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookInfoComponent", function() { return EbookInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/product/product.component */ "./src/app/share/product/product.component.ts");
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


var EbookInfoComponent = /** @class */ (function (_super) {
    __extends(EbookInfoComponent, _super);
    function EbookInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EbookInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ebook-info',
            template: __webpack_require__(/*! ./ebook-info.component.html */ "./src/app/ebook/ebook-info/ebook-info.component.html"),
            styles: [__webpack_require__(/*! ./ebook-info.component.css */ "./src/app/ebook/ebook-info/ebook-info.component.css")]
        })
    ], EbookInfoComponent);
    return EbookInfoComponent;
}(_share_product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]));



/***/ }),

/***/ "./src/app/ebook/ebook-list/ebook-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/ebook/ebook-list/ebook-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let product of list\" class=\"col-md-4 col-xl-3\">\n\t  <div class=\"card card-border card-ebook\">\n\t  \t<div class=\"card-header\">\n\t  \t\t<a [routerLink]=\"['./info', product.id]\">\n\t  \t\t\t<div class=\"card-img-top\" [ngStyle]=\"{'background-image':'url(' + fileUrl + product.image + ')'}\"></div>\n\t  \t\t</a>\n\t  \t</div>\t\n\t  \t<div class=\"card-body\">\n\t  \t\t<h6 class=\"card-title multiline\">\n\t  \t\t\t<a [routerLink]=\"['./info', product.id]\">\n\t  \t\t\t\t<span>{{ product.name }}</span>\n\t  \t\t\t</a>\n\t  \t\t</h6>\n\t  \t  <p class=\"card-text\">作者: {{ product.writer.name }}</p>\n\t  \t  <p class=\"card-text\">購買人數: {{ product.sell_quantity }}</p>\n\t  \t  <p class=\"card-text\">購買金額: <strong>{{ product.price }}</strong></p>\n\t  \t  <div class=\"btn-group-block btn-group-ebook\">\n\t  \t  \t<app-cart-add [input_pId]=\"product.id\" [add_check]=false [product_type]=\"product.type\" [add_status]=\"product.add_cart_status\"></app-cart-add>\n\t  \t  </div>\n\t  \t</div>\n\t  </div>\n\t</div>\n</div>\n\n<app-ebook-list [input_param]=\"input_param\"  *ngIf=\"readmoreCheck\"></app-ebook-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-ebook-dark\">Load More</button>\n</div>"

/***/ }),

/***/ "./src/app/ebook/ebook-list/ebook-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ebook/ebook-list/ebook-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group-more {\n  display: none; }\n\n.row + .btn-group-more {\n  display: block; }\n\n.row + div + .btn-group-more {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/ebook/ebook-list/ebook-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ebook/ebook-list/ebook-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EbookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookListComponent", function() { return EbookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
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




var EbookListComponent = /** @class */ (function () {
    function EbookListComponent(http, productService) {
        this.http = http;
        this.productService = productService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 4;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    EbookListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    EbookListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getEbookList();
    };
    //看更多
    EbookListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得文章測驗列表
    EbookListComponent.prototype.getEbookList = function () {
        var _this = this;
        this.input_param.limit = this.limit;
        this.productService.getProductList(this.input_param).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.products;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EbookListComponent.prototype, "input_param", void 0);
    EbookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ebook-list',
            template: __webpack_require__(/*! ./ebook-list.component.html */ "./src/app/ebook/ebook-list/ebook-list.component.html"),
            styles: [__webpack_require__(/*! ./ebook-list.component.scss */ "./src/app/ebook/ebook-list/ebook-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], EbookListComponent);
    return EbookListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-review/product-review.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-review works!\n</p>\n\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let review of list\">\n\t\t<ul>\n\t\t\t<li>留言者: </li>\n\t\t\t<li>評分: </li>\n\t\t\t<li>評價: </li>\n\t\t\t<li>時間: </li>\n\t\t\t\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-product-review [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-product-review>\n</div>"

/***/ }),

/***/ "./src/app/product/product-review/product-review.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-review/product-review.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-review/product-review.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
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



var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent(httpService) {
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    ProductReviewComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getReviewList();
    };
    ProductReviewComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getReviewList();
    };
    //看更多
    ProductReviewComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得文章測驗列表
    ProductReviewComponent.prototype.getReviewList = function () {
        var _this = this;
        var url = '';
        this.input_param.limit = this.limit;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.products;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductReviewComponent.prototype, "input_param", void 0);
    ProductReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review',
            template: __webpack_require__(/*! ./product-review.component.html */ "./src/app/product/product-review/product-review.component.html"),
            styles: [__webpack_require__(/*! ./product-review.component.scss */ "./src/app/product/product-review/product-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _ebook_ebook_home_ebook_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ebook/ebook-home/ebook-home.component */ "./src/app/ebook/ebook-home/ebook-home.component.ts");
/* harmony import */ var _course_course_home_course_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../course/course-home/course-home.component */ "./src/app/course/course-home/course-home.component.ts");
/* harmony import */ var _activity_activity_home_activity_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../activity/activity-home/activity-home.component */ "./src/app/activity/activity-home/activity-home.component.ts");
/* harmony import */ var _ebook_ebook_info_ebook_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ebook/ebook-info/ebook-info.component */ "./src/app/ebook/ebook-info/ebook-info.component.ts");
/* harmony import */ var _activity_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../activity/activity-info/activity-info.component */ "./src/app/activity/activity-info/activity-info.component.ts");
/* harmony import */ var _course_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../course/course-info/course-info.component */ "./src/app/course/course-info/course-info.component.ts");
/* harmony import */ var _course_course_bought_course_bought_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course/course-bought/course-bought.component */ "./src/app/course/course-bought/course-bought.component.ts");
/* harmony import */ var _ebook_ebook_bought_ebook_bought_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ebook/ebook-bought/ebook-bought.component */ "./src/app/ebook/ebook-bought/ebook-bought.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    //電子書
    { path: 'ebook', component: _ebook_ebook_home_ebook_home_component__WEBPACK_IMPORTED_MODULE_3__["EbookHomeComponent"] },
    { path: 'ebook/info/:id', component: _ebook_ebook_info_ebook_info_component__WEBPACK_IMPORTED_MODULE_6__["EbookInfoComponent"] },
    { path: 'ebook/read/:id', component: _ebook_ebook_bought_ebook_bought_component__WEBPACK_IMPORTED_MODULE_10__["EbookBoughtComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    //課程
    { path: 'course', component: _course_course_home_course_home_component__WEBPACK_IMPORTED_MODULE_4__["CourseHomeComponent"] },
    { path: 'course/info/:id', component: _course_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_8__["CourseInfoComponent"] },
    { path: 'course/video/:id', component: _course_course_bought_course_bought_component__WEBPACK_IMPORTED_MODULE_9__["CourseBoughtComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
    //活動
    { path: 'activity', component: _activity_activity_home_activity_home_component__WEBPACK_IMPORTED_MODULE_5__["ActivityHomeComponent"] },
    { path: 'activity/info/:id', component: _activity_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_7__["ActivityInfoComponent"] },
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _ebook_ebook_home_ebook_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ebook/ebook-home/ebook-home.component */ "./src/app/ebook/ebook-home/ebook-home.component.ts");
/* harmony import */ var _ebook_ebook_list_ebook_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ebook/ebook-list/ebook-list.component */ "./src/app/ebook/ebook-list/ebook-list.component.ts");
/* harmony import */ var _ebook_ebook_info_ebook_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ebook/ebook-info/ebook-info.component */ "./src/app/ebook/ebook-info/ebook-info.component.ts");
/* harmony import */ var _ebook_ebook_bought_ebook_bought_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ebook/ebook-bought/ebook-bought.component */ "./src/app/ebook/ebook-bought/ebook-bought.component.ts");
/* harmony import */ var _course_course_home_course_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../course/course-home/course-home.component */ "./src/app/course/course-home/course-home.component.ts");
/* harmony import */ var _course_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course/course-list/course-list.component */ "./src/app/course/course-list/course-list.component.ts");
/* harmony import */ var _course_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../course/course-info/course-info.component */ "./src/app/course/course-info/course-info.component.ts");
/* harmony import */ var _course_course_bought_course_bought_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course/course-bought/course-bought.component */ "./src/app/course/course-bought/course-bought.component.ts");
/* harmony import */ var _activity_activity_home_activity_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../activity/activity-home/activity-home.component */ "./src/app/activity/activity-home/activity-home.component.ts");
/* harmony import */ var _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../activity/activity-list/activity-list.component */ "./src/app/activity/activity-list/activity-list.component.ts");
/* harmony import */ var _activity_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../activity/activity-info/activity-info.component */ "./src/app/activity/activity-info/activity-info.component.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product/product-review/product-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//ebook




//course




//activity




var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"]
            ],
            declarations: [
                _ebook_ebook_home_ebook_home_component__WEBPACK_IMPORTED_MODULE_4__["EbookHomeComponent"],
                _ebook_ebook_list_ebook_list_component__WEBPACK_IMPORTED_MODULE_5__["EbookListComponent"],
                _ebook_ebook_info_ebook_info_component__WEBPACK_IMPORTED_MODULE_6__["EbookInfoComponent"],
                _course_course_home_course_home_component__WEBPACK_IMPORTED_MODULE_8__["CourseHomeComponent"],
                _course_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_9__["CourseListComponent"],
                _course_course_info_course_info_component__WEBPACK_IMPORTED_MODULE_10__["CourseInfoComponent"],
                _activity_activity_home_activity_home_component__WEBPACK_IMPORTED_MODULE_12__["ActivityHomeComponent"],
                _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_13__["ActivityListComponent"],
                _activity_activity_info_activity_info_component__WEBPACK_IMPORTED_MODULE_14__["ActivityInfoComponent"],
                _course_course_bought_course_bought_component__WEBPACK_IMPORTED_MODULE_11__["CourseBoughtComponent"],
                _ebook_ebook_bought_ebook_bought_component__WEBPACK_IMPORTED_MODULE_7__["EbookBoughtComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_15__["ProductReviewComponent"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map