(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-member-module~psychology-psychology-module~writer-writer-module"],{

/***/ "./src/app/article/article-home/article-home.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/article-home/article-home.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article-home/article-home.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/article-home/article-home.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\t<app-category (childEvent)=\"getCategoryId($event)\"></app-category>\n\t<!-- 時間篩選 -->\n\t<ul class=\"nav\">\n\t\t<li *ngFor=\"let y of years\" class=\"nav-item\">\n\t\t\t<a (click)=\"sortYear(y)\" class=\"nav-link\">{{ y }}</a>\n\t\t</li>\n\t</ul>\n</nav>\n\n<section *ngIf=\"article_slides\">\n\t<ul>\n\t\t<li *ngFor=\"let slide of article_slides\">\n\t\t\t標題{{ slide.title }} / 作者: {{ slide.writer.name }} / 日期: {{ slide.post_date }} / 觀看人數: {{ slide.viewed }}\n\t\t\t<img src=\"{{ fileUrl }}{{ slide.image }}\">\n\t\t</li>\n\t</ul>\n</section>\n\n<section class=\"theme-article\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ layoutService.page_summary }}</p>\n\t</div>\n\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"type=='viewed'\">\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sortType('viewed','desc')\" class=\"nav-link active icon-desc\">觀看人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sortType('viewed','asc')\" class=\"nav-link active icon-asc\">觀看人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sortType('post_date','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"type=='post_date'\">\n\t\t\t\t\t\t\t<a (click)=\"sortType('viewed','desc')\" class=\"nav-link icon-sort\">觀看人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sortType('post_date','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sortType('post_date','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sortType('viewed','desc')\" class=\"nav-link\">觀看人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sortType('viewed','asc')\" class=\"nav-link\">觀看人數<i class=\"icon-asc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sortType('post_date','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sortType('post_date','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i></a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-article-list [input_param]=\"input_param\"></app-article-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/article/article-home/article-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/article-home/article-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleHomeComponent", function() { return ArticleHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
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





var ArticleHomeComponent = /** @class */ (function () {
    function ArticleHomeComponent(layoutService, httpService) {
        this.layoutService = layoutService;
        this.httpService = httpService;
        this.category_id = 0;
        this.year = 0;
        this.type = 'post_date';
        this.order = 'desc';
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
        this.years = [];
    }
    ArticleHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_article_introduction');
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: this.type,
            sort_order: this.order,
            year: this.year,
            from: 0,
            favorite: 0,
        };
        //時間篩選
        var thisYear = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'yyyy', 'en-US');
        for (var i = 2010; i <= Number(thisYear); i++) {
            this.years.push(i);
        }
        //幻燈片
        this.articleSlide();
    };
    //sort 一般篩選器
    ArticleHomeComponent.prototype.sortType = function ($type, $order) {
        this.type = $type;
        this.order = $order;
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: $type,
            sort_order: $order,
            year: this.year,
            from: 0,
            favorite: 0,
        };
    };
    //sort 時間篩選器
    ArticleHomeComponent.prototype.sortYear = function ($year) {
        this.year = $year;
        this.input_param = {
            website_id: 1,
            category_id: this.category_id,
            sort: this.type,
            sort_order: this.order,
            year: $year,
            from: 0,
            favorite: 0,
        };
    };
    //category component output
    ArticleHomeComponent.prototype.getCategoryId = function ($id) {
        this.category_id = $id;
        this.input_param = {
            website_id: 1,
            category_id: $id,
            sort: 'post_date',
            sort_order: 'desc',
            year: this.year,
            from: 0,
            favorite: 0,
        };
        //location.reload();
    };
    //主題撥放
    ArticleHomeComponent.prototype.articleSlide = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/content/article/hot?website_id=1";
        this.httpService.getHttp(url).subscribe(function (res) { return _this.article_slides = res.articles; });
    };
    ArticleHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-home',
            template: __webpack_require__(/*! ./article-home.component.html */ "./src/app/article/article-home/article-home.component.html"),
            styles: [__webpack_require__(/*! ./article-home.component.css */ "./src/app/article/article-home/article-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ArticleHomeComponent);
    return ArticleHomeComponent;
}());



/***/ }),

/***/ "./src/app/article/article-list/article-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article-list/article-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let article of list\" id=\"{{ article.id }}\" class=\"col-lg-12\">\n\n\t\t<div class=\"media media-height-2 media-article no-gutters\">\n\t\t\t<div class=\"media-header col-lg-8\">\n\t\t\t\t<a routerLink=\"./read/{{ article.id }}\">\n\t\t\t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + article.image + ')'}\"></div>\n\t\t\t\t</a>\n\t\t\t\t<!-- 收藏按鈕  -->\n\t\t\t\t<app-article-favorite *ngIf=\"input_param.favorite!=1;else love\" [input_aid]=\"article.id\" [favorite_status]=\"article.is_favorite\"></app-article-favorite>\n\t\t\t\t<ng-template #love>\n\t  \t\t\t\t<app-article-favorite [input_aid]=\"article.id\" [favorite_status]=\"1\" (childEvent)=\"onListenChild($event, article.id);\"></app-article-favorite>\n\t\t\t\t</ng-template>\n\t\t\t\t<!-- 收藏按鈕  -->\n\t\t\t</div>\n\t\t\t<div class=\"media-body col-lg-4\">\n      \t<h5 class=\"media-title multiline\">\n\t\t\t\t\t<a routerLink=\"./read/{{ article.id }}\">\n\t\t\t\t\t\t<span>{{ article.title }}</span>\n\t\t\t\t\t</a>\n      \t</h5>\n\t\t\t\t<div class=\"media-info\">\n\t\t\t\t\t<p class=\"media-summary multiline\">\n\t\t\t\t\t\t<span>{{ article.summary }}</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"media-text\">作者: {{ article.writer.name }}</p>\n\t\t\t\t\t<p class=\"media-text\">文章日期: {{ article.post_date }}</p>\n\t\t\t\t\t<p class=\"media-text\">觀看人數: {{ article.viewed }}</p>\n\t\t\t\t\t<p class=\"media-text\">收藏人數: {{ article.favorite }}</p>\n\t\t\t\t\t<div class=\"hashtag\">\n\t\t\t\t\t\t<a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t  <a href=\"\">#hashtag</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-button\">\n\t\t\t\t\t<div class=\"icon-group-share justify-content-end\">\n\t\t\t\t\t  <a href=\"\"><img src=\"/assets/img/icons/icon_line_article.svg\" alt=\"\"></a>\n\t\t\t\t\t  <a href=\"\" class=\"mr-0\"><img src=\"/assets/img/icons/icon_fb_article.svg\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a routerLink=\"./read/{{ article.id }}\" class=\"btn btn-block btn-article\">前往閱讀</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n<app-article-list [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-article-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-article-dark\">Load More</button>\n</div>"

/***/ }),

/***/ "./src/app/article/article-list/article-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/article-list/article-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
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



var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(http) {
        this.http = http;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    ArticleListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        //最愛或全部
        if (this.input_param.favorite == 1)
            this.getFavoriteArticles();
        else
            this.getArticleList();
    };
    ArticleListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        //最愛或全部
        if (this.input_param.favorite == 1)
            this.getFavoriteArticles();
        else
            this.getArticleList();
    };
    //output for love. unfavorite => remove 
    ArticleListComponent.prototype.onListenChild = function (event, aid) {
        $("#" + aid).remove();
    };
    //看更多
    ArticleListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得最愛文章列表
    ArticleListComponent.prototype.getFavoriteArticles = function () {
        var _this = this;
        var url;
        var paramObject = {
            'from': this.input_param.from,
            'limit': this.limit,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/article/favorite?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.articles.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.articles;
            console.log(res);
        });
    };
    //取得所有文章測驗列表
    ArticleListComponent.prototype.getArticleList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'website_id': 1,
            'category_id': this.input_param.category_id,
            'sort': this.input_param.sort,
            'sort_order': this.input_param.sort_order,
            'year': this.input_param.year,
            'from': this.input_param.from,
            'limit': this.limit,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/article?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.articles.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.articles;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleListComponent.prototype, "input_param", void 0);
    ArticleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/article/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/article/article-list/article-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/article/article-read/article-read.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/article/article-read/article-read.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/article/article-read/article-read.component.html":
/*!******************************************************************!*\
  !*** ./src/app/article/article-read/article-read.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 文章標題 -->\n<div *ngIf=\"article\">\n\t<img src=\"{{ fileUrl }}{{ article.image }}\" /><br>\n\t主題: {{ article.title }}\n\t<ul>\n\t\t<li *ngFor=\"let category of article.sub_categories\">\n\t\t\t{{ category.name }}\n\t\t</li>\n\t</ul>\n</div>\n\n<!-- 文章內容 -->\n<div *ngIf=\"article\" [innerHTML]=\"article.content\"></div>\n\n<!-- 作者介紹 -->\n<app-single-writer [writer_id]=\"article.writer.id\"></app-single-writer>\n"

/***/ }),

/***/ "./src/app/article/article-read/article-read.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/article/article-read/article-read.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticleReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleReadComponent", function() { return ArticleReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
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



var ArticleReadComponent = /** @class */ (function () {
    function ArticleReadComponent(route, http, layoutService) {
        this.route = route;
        this.http = http;
        this.layoutService = layoutService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
    }
    ArticleReadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getArticle(params['id']);
        });
    };
    //取得單一文章
    ArticleReadComponent.prototype.getArticle = function (id) {
        var _this = this;
        var url;
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/article/show?id=" + id;
        this.http.getHttp(url).subscribe(function (res) {
            //metadata
            _this.layoutService.setMetaData(res.article.metadata);
            _this.article = res.article;
            console.log(res);
        });
    };
    ArticleReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-read',
            template: __webpack_require__(/*! ./article-read.component.html */ "./src/app/article/article-read/article-read.component.html"),
            styles: [__webpack_require__(/*! ./article-read.component.css */ "./src/app/article/article-read/article-read.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]])
    ], ArticleReadComponent);
    return ArticleReadComponent;
}());



/***/ }),

/***/ "./src/app/writer/article-favorite/article-favorite.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/writer/article-favorite/article-favorite.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"favorite_status!=1;else love\">\n\t<a (click)=\"reversLove()\" class=\"icon-favorite\"><i data-icon=\"\"></i></a>\n</div>\n<ng-template #love>\n\t<a (click)=\"reversLove()\" class=\"icon-favorite\"><i data-icon=\"\"></i></a>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/writer/article-favorite/article-favorite.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/writer/article-favorite/article-favorite.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-favorite {\n  top: 1rem;\n  right: 2rem;\n  position: absolute;\n  font-size: 2rem;\n  color: currentColor !important; }\n"

/***/ }),

/***/ "./src/app/writer/article-favorite/article-favorite.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/writer/article-favorite/article-favorite.component.ts ***!
  \***********************************************************************/
/*! exports provided: ArticleFavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFavoriteComponent", function() { return ArticleFavoriteComponent; });
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



var ArticleFavoriteComponent = /** @class */ (function () {
    function ArticleFavoriteComponent(httpService) {
        this.httpService = httpService;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
    }
    ArticleFavoriteComponent.prototype.ngOnInit = function () {
    };
    //取消或加入收藏
    ArticleFavoriteComponent.prototype.reversLove = function () {
        //已收藏 取消
        if (this.favorite_status == 1) {
            this.cancel_favorite();
            //未收藏 加入
        }
        else {
            this.add_favorite();
        }
    };
    //加入收藏
    ArticleFavoriteComponent.prototype.add_favorite = function () {
        var _this = this;
        var params = new FormData();
        params.append('id', this.input_aid);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/article/favorite";
        this.httpService.postHttp(url, params).subscribe(function (res) {
            _this.favorite_status = 1;
        });
    };
    //取消收藏
    ArticleFavoriteComponent.prototype.cancel_favorite = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/article/favorite?id=" + this.input_aid;
        this.httpService.deleteHttp(url).subscribe(function (res) {
            _this.favorite_status = 0;
            _this.childEvent.emit(0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleFavoriteComponent.prototype, "favorite_status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArticleFavoriteComponent.prototype, "input_aid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ArticleFavoriteComponent.prototype, "childEvent", void 0);
    ArticleFavoriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-favorite',
            template: __webpack_require__(/*! ./article-favorite.component.html */ "./src/app/writer/article-favorite/article-favorite.component.html"),
            styles: [__webpack_require__(/*! ./article-favorite.component.scss */ "./src/app/writer/article-favorite/article-favorite.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ArticleFavoriteComponent);
    return ArticleFavoriteComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-activity/writer-activity.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/writer/writer-activity/writer-activity.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-activity/writer-activity.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/writer/writer-activity/writer-activity.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-activity works!\n</p>\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let product of list\">\n\t\t<ul>\n\t\t\t<li>標題: {{ product.name }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ product.image }}\" width=\"100\"> </li>\n\t\t\t<li>金額: {{ product.price }}</li>\n\t\t\t<li>活動時間: {{ product.detail.activity_date }}</li>\n\t\t\t<a [routerLink]=\"['/product/activity/info', product.id]\">查看</a>\n\t\t\n\t\t\t<br>\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-writer-activity [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-writer-activity>\n</div>\n"

/***/ }),

/***/ "./src/app/writer/writer-activity/writer-activity.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/writer/writer-activity/writer-activity.component.ts ***!
  \*********************************************************************/
/*! exports provided: WriterActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterActivityComponent", function() { return WriterActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _writer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../writer.service */ "./src/app/writer/writer.service.ts");
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




var WriterActivityComponent = /** @class */ (function () {
    function WriterActivityComponent(writerService, httpService) {
        this.writerService = writerService;
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    WriterActivityComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getWriterProduct(this.input_param.id, this.input_param.type, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    WriterActivityComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getWriterProduct(this.input_param.id, this.input_param.type, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    //看更多
    WriterActivityComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //作者相關商品
    WriterActivityComponent.prototype.getWriterProduct = function (writer_id, product_type, from, limit) {
        var _this = this;
        var paramObject = {
            'id': writer_id,
            'type': product_type,
            'from': from,
            'limit': limit,
            'sort': 'post_date',
            'sort_order': 'desc',
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/writer/products?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.products.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
                return;
            }
            console.log(res);
            _this.list = res.products;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WriterActivityComponent.prototype, "input_param", void 0);
    WriterActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-activity',
            template: __webpack_require__(/*! ./writer-activity.component.html */ "./src/app/writer/writer-activity/writer-activity.component.html"),
            styles: [__webpack_require__(/*! ./writer-activity.component.css */ "./src/app/writer/writer-activity/writer-activity.component.css")]
        }),
        __metadata("design:paramtypes", [_writer_service__WEBPACK_IMPORTED_MODULE_2__["WriterService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], WriterActivityComponent);
    return WriterActivityComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-article/writer-article.component.css":
/*!********************************************************************!*\
  !*** ./src/app/writer/writer-article/writer-article.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-article/writer-article.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/writer/writer-article/writer-article.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-article works!\n</p>\n<ul *ngIf=\"articles\">\n\t<li *ngFor=\"let article of articles\">\n\t\t<ul>\n\t\t\t<li>標題: {{ article.title }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ article.image }}\" width=\"100\"> </li>\n\t\t\t<li>摘要: {{ article.summary }}</li>\n\t\t\t<li>作者: {{ article.writer.name }}</li>\n\t\t\t<li>日期: {{ article.post_date }}</li>\n\t\t\t<li>觀看人數: {{ article.viewed }}</li>\n\n\t\t\t<a routerLink=\"/writer/article/read/{{ article.id }}\">前往內容</a>\n\t\t\t\n\t\t\t<br>\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-writer-article [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-writer-article>\n</div>"

/***/ }),

/***/ "./src/app/writer/writer-article/writer-article.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/writer/writer-article/writer-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: WriterArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterArticleComponent", function() { return WriterArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../writer.service */ "./src/app/writer/writer.service.ts");
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




var WriterArticleComponent = /** @class */ (function () {
    function WriterArticleComponent(writerService, httpService) {
        this.writerService = writerService;
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    WriterArticleComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getWriterArticle(this.input_param.id, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    WriterArticleComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getWriterArticle(this.input_param.id, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    //看更多
    WriterArticleComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //作者相關文章
    WriterArticleComponent.prototype.getWriterArticle = function (writer_id, from, limit) {
        var _this = this;
        var paramObject = {
            'id': writer_id,
            'from': from,
            'limit': limit
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/writer/articles?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.articles.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
                return;
            }
            console.warn(res);
            _this.articles = res.articles;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WriterArticleComponent.prototype, "input_param", void 0);
    WriterArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-article',
            template: __webpack_require__(/*! ./writer-article.component.html */ "./src/app/writer/writer-article/writer-article.component.html"),
            styles: [__webpack_require__(/*! ./writer-article.component.css */ "./src/app/writer/writer-article/writer-article.component.css")]
        }),
        __metadata("design:paramtypes", [_writer_service__WEBPACK_IMPORTED_MODULE_1__["WriterService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], WriterArticleComponent);
    return WriterArticleComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-course/writer-course.component.css":
/*!******************************************************************!*\
  !*** ./src/app/writer/writer-course/writer-course.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-course/writer-course.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/writer/writer-course/writer-course.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>course </p>\n\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let product of list\">\n\t\t<ul>\n\t\t\t<li>標題: {{ product.name }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ product.image }}\" width=\"100\"> </li>\n\t\t\n\t\t\t<li>金額: {{ product.price }}</li>\n\t\t\t\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-writer-course [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-writer-course>\n</div>"

/***/ }),

/***/ "./src/app/writer/writer-course/writer-course.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/writer/writer-course/writer-course.component.ts ***!
  \*****************************************************************/
/*! exports provided: WriterCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterCourseComponent", function() { return WriterCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../writer-activity/writer-activity.component */ "./src/app/writer/writer-activity/writer-activity.component.ts");
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


var WriterCourseComponent = /** @class */ (function (_super) {
    __extends(WriterCourseComponent, _super);
    function WriterCourseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriterCourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-course',
            template: __webpack_require__(/*! ./writer-course.component.html */ "./src/app/writer/writer-course/writer-course.component.html"),
            styles: [__webpack_require__(/*! ./writer-course.component.css */ "./src/app/writer/writer-course/writer-course.component.css")]
        })
    ], WriterCourseComponent);
    return WriterCourseComponent;
}(_writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_1__["WriterActivityComponent"]));



/***/ }),

/***/ "./src/app/writer/writer-ebook/writer-ebook.component.css":
/*!****************************************************************!*\
  !*** ./src/app/writer/writer-ebook/writer-ebook.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-ebook/writer-ebook.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/writer/writer-ebook/writer-ebook.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-ebook works!\n</p>\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let product of list\">\n\t\t<ul>\n\t\t\t<li>標題: {{ product.name }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ product.image }}\" width=\"100\"> </li>\n\t\t\t<li>金額: {{ product.price }}</li>\n\t\t\t<li>購買人數: {{ product.sell_quantity }}</li>\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-writer-ebook [input_param]=\"input_param\"  *ngIf=\"readmoreCheck\"></app-writer-ebook>\n</div>\n"

/***/ }),

/***/ "./src/app/writer/writer-ebook/writer-ebook.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/writer/writer-ebook/writer-ebook.component.ts ***!
  \***************************************************************/
/*! exports provided: WriterEbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterEbookComponent", function() { return WriterEbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../writer-activity/writer-activity.component */ "./src/app/writer/writer-activity/writer-activity.component.ts");
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


var WriterEbookComponent = /** @class */ (function (_super) {
    __extends(WriterEbookComponent, _super);
    function WriterEbookComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WriterEbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-ebook',
            template: __webpack_require__(/*! ./writer-ebook.component.html */ "./src/app/writer/writer-ebook/writer-ebook.component.html"),
            styles: [__webpack_require__(/*! ./writer-ebook.component.css */ "./src/app/writer/writer-ebook/writer-ebook.component.css")]
        })
    ], WriterEbookComponent);
    return WriterEbookComponent;
}(_writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_1__["WriterActivityComponent"]));



/***/ }),

/***/ "./src/app/writer/writer-home/writer-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/writer/writer-home/writer-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-home/writer-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/writer/writer-home/writer-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n\t<app-banner [inputType]=\"'writer'\"></app-banner>\n</section>\n\n<section class=\"theme-writer\">\n\t<div class=\"section-heading\">\n\t\t<p>{{ layoutService.page_summary }}</p>\n\t</div>\n\t\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<nav class=\"nav nav-sort\">\n\t\t\t\t\t\t<div *ngIf=\"sortType=='viewed'\">\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('viewed','desc')\" class=\"nav-link active icon-desc\">觀看人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('viewed','asc')\" class=\"nav-link active icon-asc\">觀看人數</a>\n\t\t\t\t\t\t\t<a (click)=\"sort('created_at','desc')\" class=\"nav-link icon-sort\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"sortType=='created_at'\">\n\t\t\t\t\t\t\t<a (click)=\"sort('viewed','desc')\" class=\"nav-link icon-sort\">觀看人數</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='asc'\" (click)=\"sort('created_at','desc')\" class=\"nav-link active icon-desc\">上架時間</a>\n\t\t\t\t\t\t\t<a *ngIf=\"order=='desc'\" (click)=\"sort('created_at','asc')\" class=\"nav-link active icon-asc\">上架時間</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <a (click)=\"sort('viewed','desc')\" class=\"nav-link\">觀看人數<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('viewed','asc')\" class=\"nav-link\">觀看人數<i class=\"icon-asc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('created_at','desc')\" class=\"nav-link active\">上架時間<i class=\"icon-desc\" data-icon=\"\"></i></a>\n\t\t\t\t\t\t<a (click)=\"sort('created_at','asc')\" class=\"nav-link\">上架時間<i class=\"icon-asc\" data-icon=\"\"></i></a> -->\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<app-writer-list [input_param]=\"input_param\"></app-writer-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/writer/writer-home/writer-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/writer/writer-home/writer-home.component.ts ***!
  \*************************************************************/
/*! exports provided: WriterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterHomeComponent", function() { return WriterHomeComponent; });
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


var WriterHomeComponent = /** @class */ (function () {
    function WriterHomeComponent(layoutService) {
        this.layoutService = layoutService;
        this.sortType = 'created_at';
        this.order = 'desc';
        this.limit = 2;
    }
    WriterHomeComponent.prototype.ngOnInit = function () {
        this.layoutService.getSummary('page_writer_introduction');
        this.input_param = {
            website_id: 1,
            sort: this.sortType,
            sort_order: this.order,
            from: 0,
        };
    };
    //sort 一般篩選器
    WriterHomeComponent.prototype.sort = function ($type, $order) {
        this.sortType = $type;
        this.order = $order;
        this.input_param = {
            website_id: 1,
            sort: $type,
            sort_order: $order,
            from: 0,
        };
    };
    WriterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-home',
            template: __webpack_require__(/*! ./writer-home.component.html */ "./src/app/writer/writer-home/writer-home.component.html"),
            styles: [__webpack_require__(/*! ./writer-home.component.css */ "./src/app/writer/writer-home/writer-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"]])
    ], WriterHomeComponent);
    return WriterHomeComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-info/writer-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/writer/writer-info/writer-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-info/writer-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/writer/writer-info/writer-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-info works!\n</p>\n<ul *ngIf=\"writerService.writer\">\n\t<li>\n\t\t<ul>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ writerService.writer.avatar }}\" width=\"100\"> </li>\n\t\t\t<li>摘要: {{ writerService.writer.introduction }}</li>\n\t\t\t<li>作者: {{ writerService.writer.jpb_title }} {{ writerService.writer.name }}</li>\n\t\t\t<li>商品數量: {{ writerService.writer.product_count }}</li>\n\t\t\t<li>文章數量: {{ writerService.writer.article_count }}</li>\n\n\t\t\t\n\t\t</ul>\n\t</li>\t\n</ul>\n\n<!-- 相關活動 -->\n<app-writer-activity [input_param]=\"input_activity\"></app-writer-activity>\n\n<!-- 相關課程-->\n<app-writer-course [input_param]=\"input_course\"></app-writer-course>\n\n<!-- 相關電子書-->\n<app-writer-ebook [input_param]=\"input_ebook\"></app-writer-ebook>\n\n<!-- 心理測驗 -->\n<app-writer-psychology [input_param]=\"input_psychology\"></app-writer-psychology>\n\n<!-- 文章 -->\n<app-writer-article [input_param]=\"input_article\"></app-writer-article>"

/***/ }),

/***/ "./src/app/writer/writer-info/writer-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/writer/writer-info/writer-info.component.ts ***!
  \*************************************************************/
/*! exports provided: WriterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterInfoComponent", function() { return WriterInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../writer.service */ "./src/app/writer/writer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


 //接收route para

var WriterInfoComponent = /** @class */ (function () {
    function WriterInfoComponent(writerService, route) {
        this.writerService = writerService;
        this.route = route;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["FileUrl"];
    }
    WriterInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.writerService.getWriterInfo(params['id']);
            _this.input_activity = {
                'id': params['id'],
                'type': 'activity',
                'from': 0,
            };
            _this.input_course = {
                'id': params['id'],
                'type': 'course',
                'from': 0,
            };
            _this.input_ebook = {
                'id': params['id'],
                'type': 'e-book',
                'from': 0,
            };
            _this.input_article = {
                'id': params['id'],
                'from': 0,
            };
            _this.input_psychology = {
                'id': params['id'],
                'from': 0,
            };
        });
    };
    WriterInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-info',
            template: __webpack_require__(/*! ./writer-info.component.html */ "./src/app/writer/writer-info/writer-info.component.html"),
            styles: [__webpack_require__(/*! ./writer-info.component.css */ "./src/app/writer/writer-info/writer-info.component.css")]
        }),
        __metadata("design:paramtypes", [_writer_service__WEBPACK_IMPORTED_MODULE_1__["WriterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WriterInfoComponent);
    return WriterInfoComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-list/writer-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/writer/writer-list/writer-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-list/writer-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/writer/writer-list/writer-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"list\" class=\"row\">\n\t<div *ngFor=\"let writer of list\" class=\"col-md-4 col-xl-3\">\n\t  <div class=\"card card-border card-writer\">\n\t  \t<div class=\"card-header\">\n\t  \t\t<a routerLink=\"./read/{{ writer.id }}\">\n\t  \t\t\t<div class=\"card-img-top\" [ngStyle]=\"{'background-image':'url(' + fileUrl + writer.avatar + ')'}\"></div>\n\t  \t\t</a>\n\t  \t</div>\t\n\t  \t<div class=\"card-body\">\n\t  \t  <p class=\"card-text\">作者: {{ writer.name }}</p>\n\t  \t  <p class=\"card-text\">文章數量: {{ writer.article_count }}</p>\n\t  \t  <p class=\"card-text\">商品人數: {{ writer.product_count }}</p>\n\t  \t  <div class=\"btn-group-block btn-group-writer\">\n\t  \t  \t<a routerLink=\"./read/{{ writer.id }}\" class=\"btn\">關於作者</a>\n\t  \t  </div>\n\t  \t</div>\n\t  </div>\n\t</div>\n</div>\n\n<app-writer-list [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-writer-list>\n\n<!-- 下滑看更多區域 -->\n<div *ngIf=\"moredata\" class=\"btn-group-more\">\n\t<button (click)=\"more()\" class=\"btn btn-writer-dark\">Load More</button>\n</div>"

/***/ }),

/***/ "./src/app/writer/writer-list/writer-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/writer/writer-list/writer-list.component.ts ***!
  \*************************************************************/
/*! exports provided: WriterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterListComponent", function() { return WriterListComponent; });
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



var WriterListComponent = /** @class */ (function () {
    function WriterListComponent(http) {
        this.http = http;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 4;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    WriterListComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getWriterList();
    };
    WriterListComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getWriterList();
    };
    //看更多
    WriterListComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //取得文章測驗列表
    WriterListComponent.prototype.getWriterList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'website_id': 1,
            'sort': this.input_param.sort,
            'sort_order': this.input_param.sort_order,
            'from': this.input_param.from,
            'limit': this.limit,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/writer?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.writers.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
            }
            _this.list = res.writers;
            console.log(res);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WriterListComponent.prototype, "input_param", void 0);
    WriterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-list',
            template: __webpack_require__(/*! ./writer-list.component.html */ "./src/app/writer/writer-list/writer-list.component.html"),
            styles: [__webpack_require__(/*! ./writer-list.component.css */ "./src/app/writer/writer-list/writer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], WriterListComponent);
    return WriterListComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-psychology/writer-psychology.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/writer/writer-psychology/writer-psychology.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/writer/writer-psychology/writer-psychology.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/writer/writer-psychology/writer-psychology.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  writer-psychology works!\n</p>\n\n\n<ul *ngIf=\"list\">\n\t<li *ngFor=\"let test of list\">\n\t\t<ul>\n\t\t\t<li>標題: {{ test.title }}</li>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ test.image }}\" width=\"100\"> </li>\n\t\t\t<li>摘要: {{ test.summary }}</li>\n\t\t\t<li>作者: {{ test.writer.name }}</li>\n\t\t\t<li>日期: {{ test.post_date }}</li>\n\t\t\t<li>觀看人數: {{ test.viewed }}</li>\n\n\t\t\t<a routerLink=\"./questionnaire/{{ test.id }}\">前往內容</a>\n\t\t\t\n\t\t\t<br>\n\t\t</ul>\n\t</li>\t\n</ul>\n\n\n<div *ngIf=\"moredata\"> <!-- 下滑看更多區域 -->\n\t<a (click)=\"more()\">more</a>\n\t<app-writer-psychology [input_param]=\"input_param\" *ngIf=\"readmoreCheck\"></app-writer-psychology>\n</div>"

/***/ }),

/***/ "./src/app/writer/writer-psychology/writer-psychology.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/writer/writer-psychology/writer-psychology.component.ts ***!
  \*************************************************************************/
/*! exports provided: WriterPsychologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterPsychologyComponent", function() { return WriterPsychologyComponent; });
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



var WriterPsychologyComponent = /** @class */ (function () {
    function WriterPsychologyComponent(httpService) {
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["FileUrl"];
        //是否開啟read more div
        this.readmoreCheck = 0;
        //一次要顯示幾筆
        this.limit = 2;
        this.moredata = 1;
    }
    //如果input進來的參數改變, 重新取得心理測驗列表
    WriterPsychologyComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.input_param = changes.input_param.currentValue;
        this.readmoreCheck = 0;
        this.getWriterTest(this.input_param.id, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    WriterPsychologyComponent.prototype.ngOnInit = function () {
        this.readmoreCheck = 0;
        this.getWriterTest(this.input_param.id, this.input_param.from, this.limit);
        //this.writerService.getWriterArticle(this.input_param.id);
    };
    //看更多
    WriterPsychologyComponent.prototype.more = function () {
        this.readmoreCheck = 1;
        this.input_param.from += this.limit;
    };
    //作者相關文章
    WriterPsychologyComponent.prototype.getWriterTest = function (writer_id, from, limit) {
        var _this = this;
        var paramObject = {
            'id': writer_id,
            'from': from,
            'limit': limit
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/writer/psychological_tests?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            //沒有資料 隱藏more data區塊
            if (res.tests.length == 0) {
                console.log("empty array");
                _this.moredata = 0;
                return;
            }
            console.warn(res);
            _this.list = res.tests;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WriterPsychologyComponent.prototype, "input_param", void 0);
    WriterPsychologyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writer-psychology',
            template: __webpack_require__(/*! ./writer-psychology.component.html */ "./src/app/writer/writer-psychology/writer-psychology.component.html"),
            styles: [__webpack_require__(/*! ./writer-psychology.component.css */ "./src/app/writer/writer-psychology/writer-psychology.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], WriterPsychologyComponent);
    return WriterPsychologyComponent;
}());



/***/ }),

/***/ "./src/app/writer/writer-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/writer/writer-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WriterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterRoutingModule", function() { return WriterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_article_home_article_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/article-home/article-home.component */ "./src/app/article/article-home/article-home.component.ts");
/* harmony import */ var _article_article_read_article_read_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article/article-read/article-read.component */ "./src/app/article/article-read/article-read.component.ts");
/* harmony import */ var _writer_home_writer_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./writer-home/writer-home.component */ "./src/app/writer/writer-home/writer-home.component.ts");
/* harmony import */ var _writer_info_writer_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./writer-info/writer-info.component */ "./src/app/writer/writer-info/writer-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    //作者
    { path: '', component: _writer_home_writer_home_component__WEBPACK_IMPORTED_MODULE_4__["WriterHomeComponent"] },
    { path: 'read/:id', component: _writer_info_writer_info_component__WEBPACK_IMPORTED_MODULE_5__["WriterInfoComponent"] },
    //文章
    { path: 'article', component: _article_article_home_article_home_component__WEBPACK_IMPORTED_MODULE_2__["ArticleHomeComponent"] },
    { path: 'article/read/:id', component: _article_article_read_article_read_component__WEBPACK_IMPORTED_MODULE_3__["ArticleReadComponent"] },
];
var WriterRoutingModule = /** @class */ (function () {
    function WriterRoutingModule() {
    }
    WriterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WriterRoutingModule);
    return WriterRoutingModule;
}());



/***/ }),

/***/ "./src/app/writer/writer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/writer/writer.module.ts ***!
  \*****************************************/
/*! exports provided: WriterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterModule", function() { return WriterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _writer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writer-routing.module */ "./src/app/writer/writer-routing.module.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _article_article_home_article_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../article/article-home/article-home.component */ "./src/app/article/article-home/article-home.component.ts");
/* harmony import */ var _article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article/article-list/article-list.component */ "./src/app/article/article-list/article-list.component.ts");
/* harmony import */ var _article_article_read_article_read_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article/article-read/article-read.component */ "./src/app/article/article-read/article-read.component.ts");
/* harmony import */ var _writer_home_writer_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./writer-home/writer-home.component */ "./src/app/writer/writer-home/writer-home.component.ts");
/* harmony import */ var _writer_list_writer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./writer-list/writer-list.component */ "./src/app/writer/writer-list/writer-list.component.ts");
/* harmony import */ var _writer_info_writer_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./writer-info/writer-info.component */ "./src/app/writer/writer-info/writer-info.component.ts");
/* harmony import */ var _writer_psychology_writer_psychology_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./writer-psychology/writer-psychology.component */ "./src/app/writer/writer-psychology/writer-psychology.component.ts");
/* harmony import */ var _writer_ebook_writer_ebook_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./writer-ebook/writer-ebook.component */ "./src/app/writer/writer-ebook/writer-ebook.component.ts");
/* harmony import */ var _writer_course_writer_course_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./writer-course/writer-course.component */ "./src/app/writer/writer-course/writer-course.component.ts");
/* harmony import */ var _writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./writer-activity/writer-activity.component */ "./src/app/writer/writer-activity/writer-activity.component.ts");
/* harmony import */ var _writer_article_writer_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./writer-article/writer-article.component */ "./src/app/writer/writer-article/writer-article.component.ts");
/* harmony import */ var _article_favorite_article_favorite_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article-favorite/article-favorite.component */ "./src/app/writer/article-favorite/article-favorite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//component
//Article












var WriterModule = /** @class */ (function () {
    function WriterModule() {
    }
    WriterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _writer_routing_module__WEBPACK_IMPORTED_MODULE_2__["WriterRoutingModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
            ],
            declarations: [
                _article_article_home_article_home_component__WEBPACK_IMPORTED_MODULE_4__["ArticleHomeComponent"],
                _article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"],
                _article_article_read_article_read_component__WEBPACK_IMPORTED_MODULE_6__["ArticleReadComponent"],
                _writer_home_writer_home_component__WEBPACK_IMPORTED_MODULE_7__["WriterHomeComponent"],
                _writer_list_writer_list_component__WEBPACK_IMPORTED_MODULE_8__["WriterListComponent"],
                _writer_info_writer_info_component__WEBPACK_IMPORTED_MODULE_9__["WriterInfoComponent"],
                _writer_psychology_writer_psychology_component__WEBPACK_IMPORTED_MODULE_10__["WriterPsychologyComponent"],
                _writer_ebook_writer_ebook_component__WEBPACK_IMPORTED_MODULE_11__["WriterEbookComponent"],
                _writer_course_writer_course_component__WEBPACK_IMPORTED_MODULE_12__["WriterCourseComponent"],
                _writer_activity_writer_activity_component__WEBPACK_IMPORTED_MODULE_13__["WriterActivityComponent"],
                _writer_article_writer_article_component__WEBPACK_IMPORTED_MODULE_14__["WriterArticleComponent"],
                _article_favorite_article_favorite_component__WEBPACK_IMPORTED_MODULE_15__["ArticleFavoriteComponent"],
            ],
            exports: [
                _article_favorite_article_favorite_component__WEBPACK_IMPORTED_MODULE_15__["ArticleFavoriteComponent"],
                _article_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_5__["ArticleListComponent"]
            ],
        })
    ], WriterModule);
    return WriterModule;
}());



/***/ })

}]);
//# sourceMappingURL=member-member-module~psychology-psychology-module~writer-writer-module.js.map