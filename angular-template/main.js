(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../diary/diary.module": [
		"./src/app/diary/diary.module.ts",
		"common",
		"diary-diary-module"
	],
	"../hashtag/hashtag.module": [
		"./src/app/hashtag/hashtag.module.ts",
		"hashtag-hashtag-module"
	],
	"../member/member.module": [
		"./src/app/member/member.module.ts",
		"member-member-module~psychology-psychology-module~writer-writer-module",
		"member-member-module~psychology-psychology-module",
		"common"
	],
	"../product/product.module": [
		"./src/app/product/product.module.ts",
		"product-product-module"
	],
	"../psychology/psychology.module": [
		"./src/app/psychology/psychology.module.ts",
		"member-member-module~psychology-psychology-module~writer-writer-module",
		"member-member-module~psychology-psychology-module",
		"common",
		"psychology-psychology-module"
	],
	"../writer/writer.module": [
		"./src/app/writer/writer.module.ts",
		"member-member-module~psychology-psychology-module~writer-writer-module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _auth_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/agreement/agreement.component */ "./src/app/auth/agreement/agreement.component.ts");
/* harmony import */ var _diary_diary_cover_diary_cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../diary/diary-cover/diary-cover.component */ "./src/app/diary/diary-cover/diary-cover.component.ts");
/* harmony import */ var _member_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../member/cart/cart.component */ "./src/app/member/cart/cart.component.ts");
/* harmony import */ var _member_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../member/order-edit/order-edit.component */ "./src/app/member/order-edit/order-edit.component.ts");
/* harmony import */ var _layout_content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/content/content.component */ "./src/app/layout/content/content.component.ts");
/* harmony import */ var _share_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share/error/error.component */ "./src/app/share/error/error.component.ts");
/* harmony import */ var _layout_google_search_google_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/google-search/google-search.component */ "./src/app/layout/google-search/google-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//component


//import { ErrorComponent } from '../share_components/error/error.component';
//import { CkeditorComponent } from '../share_components/ckeditor/ckeditor.component';
//import { FileUploadComponent } from '../share_components/file-upload/file-upload.component';


/*
import { UserinfoComponent } from '../member/userinfo/userinfo.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { UsereditComponent } from '../member/useredit/useredit.component';
*/
//import { MemberHomeComponent } from '../member/member-home/member-home.component';
//import { QuestionnaireComponent } from '../psychology/questionnaire/questionnaire.component';
//import { PsychologyHomeComponent } from "../psychology/psychology-home/psychology-home.component";

/*
import { ArticleHomeComponent } from "../article/article-home/article-home.component";
import { ArticleReadComponent } from "../article/article-read/article-read.component";
//import { PsychologyResultComponent } from "../psychology/psychology-result/psychology-result.component";
import { EbookHomeComponent } from "../ebook/ebook-home/ebook-home.component";
import { CourseHomeComponent } from "../course/course-home/course-home.component";
import { ActivityHomeComponent } from "../activity/activity-home/activity-home.component";
*/


/*
import { EbookInfoComponent } from "../ebook/ebook-info/ebook-info.component";
import { ActivityInfoComponent } from "../activity/activity-info/activity-info.component";
import { CourseInfoComponent } from "../course/course-info/course-info.component";
*/
//import { OrderRecordComponent } from "../member/order-record/order-record.component";
//import { OrderDetailComponent } from "../member/order-detail/order-detail.component";



//route
var routes = [
    //首頁模板
    { path: '', component: _layout_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            //首頁預設內容
            { path: '', component: _layout_content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"] },
            //hashtag
            { path: 'hashtag', loadChildren: '../hashtag/hashtag.module#HashtagModule' },
            //日記本
            { path: 'diary_cover', component: _diary_diary_cover_diary_cover_component__WEBPACK_IMPORTED_MODULE_7__["DiaryCoverComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
            { path: 'diary', loadChildren: '../diary/diary.module#DiaryModule' },
            /*
            { path: 'diary_cover', component: DiaryCoverComponent, canActivate:[LoginGuard] },
            { path: 'diary', component: DiaryHomeComponent, canActivate:[LoginGuard],
                children: [
                    { path: '', component: MydiarySearchComponent },
                    { path: 'my/:start/:end', component: MydiarySearchComponent },
                    { path: 'edit/:id', component: DiaryEditComponent },
                    { path: 'read/:id', component: DiaryReadComponent },
                    { path: 'create/:date', component: DiaryCreateComponent },
                    { path: 'posttest/:id', component: DiaryPosttestComponent },
                ]
            },
            */
            //心理測驗
            { path: 'psychology', loadChildren: '../psychology/psychology.module#PsychologyModule' },
            /*
            { path: 'psychology', component: PsychologyHomeComponent, canActivate:[LoginGuard] },
            { path: 'psychology/questionnaire/:id', component: QuestionnaireComponent, canActivate:[LoginGuard] },
            { path: 'psychology/result/:id', component: PsychologyResultComponent, canActivate:[LoginGuard] },
            */
            { path: 'product', loadChildren: '../product/product.module#ProductModule' },
            { path: 'writer', loadChildren: '../writer/writer.module#WriterModule' },
            /*
            //文章
            { path: 'article', component: ArticleHomeComponent },
            { path: 'article/read/:id', component: ArticleReadComponent },

            //電子書
            { path: 'ebook', component: EbookHomeComponent },
            { path: 'ebook/info/:id', component: EbookInfoComponent },

            //課程
            { path: 'course', component: CourseHomeComponent },
            { path: 'course/info/:id', component: CourseInfoComponent },

            //活動
            { path: 'activity', component: ActivityHomeComponent },
            { path: 'activity/info/:id', component: ActivityInfoComponent },
            */
            //會員專區
            { path: 'member', loadChildren: '../member/member.module#MemberModule' },
            /*
            { path: 'member', component: MemberHomeComponent, canActivate:[LoginGuard],
                children: [
                    { path: 'userinfo', component: UserinfoComponent },
                    { path: 'useredit', component: UsereditComponent },
                    { path: 'fillcompleteinfo/:returnUrl', component: UsereditComponent },
                    { path: 'reset-password', component: ResetPasswordComponent },
                    { path: 'order-record', component: OrderRecordComponent },
                    { path: 'order-detail/:id', component: OrderDetailComponent },

                ]
            },
            */
            //購物車
            { path: 'cart', component: _member_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
            { path: 'order_edit', component: _member_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_9__["OrderEditComponent"], canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_2__["LoginGuard"]] },
        ]
    },
    { path: 'search', component: _layout_google_search_google_search_component__WEBPACK_IMPORTED_MODULE_12__["GoogleSearchComponent"] },
    //{ path: 'calendar', component: CalendarComponent },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login/:returnUrl', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    //{ path: 'upload', component: FileUploadComponent },
    { path: 'error404', component: _share_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"] },
    { path: 'agreement', component: _auth_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_6__["AgreementComponent"] },
    //{ path: 'editor', component: CkeditorComponent },
    //{ path: 'useredit', component: UsereditComponent },
    //{ path: 'qqq', component: QuestionnaireComponent },
    //redirect
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet> <!-- router到的page 所顯示的地方 -->\n\n<ng-http-loader *ngIf=\"httpService.loadingOpen\" ></ng-http-loader> <!-- \nloading 動畫 -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.title = 'angular-template';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/request.interceptor */ "./src/app/interceptors/request.interceptor.ts");
/* harmony import */ var _interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/response.interceptor */ "./src/app/interceptors/response.interceptor.ts");
/* harmony import */ var _interceptors_tokenRefresh_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/tokenRefresh.interceptor */ "./src/app/interceptors/tokenRefresh.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _auth_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/facebook/facebook.component */ "./src/app/auth/facebook/facebook.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_forget_pw_forget_pw_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/forget-pw/forget-pw.component */ "./src/app/auth/forget-pw/forget-pw.component.ts");
/* harmony import */ var _validator_comfirm_pw_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./validator/comfirm-pw.directive */ "./src/app/validator/comfirm-pw.directive.ts");
/* harmony import */ var _auth_facebook_register_facebook_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/facebook-register/facebook-register.component */ "./src/app/auth/facebook-register/facebook-register.component.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_content_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layout/content/content.component */ "./src/app/layout/content/content.component.ts");
/* harmony import */ var _diary_diary_cover_diary_cover_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./diary/diary-cover/diary-cover.component */ "./src/app/diary/diary-cover/diary-cover.component.ts");
/* harmony import */ var _member_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./member/cart/cart.component */ "./src/app/member/cart/cart.component.ts");
/* harmony import */ var _member_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./member/order-edit/order-edit.component */ "./src/app/member/order-edit/order-edit.component.ts");
/* harmony import */ var _layout_cart_count_cart_count_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./layout/cart-count/cart-count.component */ "./src/app/layout/cart-count/cart-count.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _auth_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/agreement/agreement.component */ "./src/app/auth/agreement/agreement.component.ts");
/* harmony import */ var _layout_google_search_google_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layout/google-search/google-search.component */ "./src/app/layout/google-search/google-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import module
//import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

//import { NgHttpLoaderModule } from 'ng-http-loader';
//import { SweetAlertService } from 'angular-sweetalert-service';
//import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

//Interceptor



//angular material

/*
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
*/
//bootstrap

//font awesome

//social login

//ckeditor
//import { CKEditorModule } from 'ngx-ckeditor';
//calendar
/*
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
*/
//gobal var

//Component (cmd)


//auth member

//import { ErrorComponent } from './share_components/error/error.component';






//import { UserinfoComponent } from './member/userinfo/userinfo.component';

//import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
//import { UsereditComponent } from './member/useredit/useredit.component';
//import { MemberHomeComponent } from './member/member-home/member-home.component';
//import { MemberMenuComponent } from './member/member-menu/member-menu.component';
//share
/*
import { DatepickerComponent } from './share_components/datepicker/datepicker.component';
import { FileUploadComponent } from './share_components/file-upload/file-upload.component';
import { CkeditorComponent } from './share_components/ckeditor/ckeditor.component';
import { CategoryComponent } from './layout/category/category.component';
import { BannerComponent } from './layout/banner/banner.component';
import { ProductComponent } from './share_components/product/product.component';
*/
//layout

//import { CalendarComponent } from './share_components/calendar/calendar.component';

//diary
/*
import { DiaryHomeComponent } from './diary/diary-home/diary-home.component';
import { DiaryMenuComponent } from './diary/diary-menu/diary-menu.component';
import { MydiaryComponent } from './diary/mydiary/mydiary.component';
import { DiaryEditComponent } from './diary/diary-edit/diary-edit.component';
import { DiaryReadComponent } from './diary/diary-read/diary-read.component';
import { DiaryCreateComponent } from './diary/diary-create/diary-create.component';
import { DiaryPosttestComponent } from './diary/diary-posttest/diary-posttest.component';
import { MydiarySearchComponent } from './diary/mydiary-search/mydiary-search.component';
*/

//Psychology
/*
import { QuestionnaireComponent } from './psychology/questionnaire/questionnaire.component';
import { PsychologyHomeComponent } from './psychology/psychology-home/psychology-home.component';
import { PsychologyListComponent } from './psychology/psychology-list/psychology-list.component';
import { PsychologyResultComponent } from './psychology/psychology-result/psychology-result.component';
*/
/*
//Article
import { ArticleHomeComponent } from './article/article-home/article-home.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleReadComponent } from './article/article-read/article-read.component';

//ebook
import { EbookHomeComponent } from './ebook/ebook-home/ebook-home.component';
import { EbookListComponent } from './ebook/ebook-list/ebook-list.component';
import { EbookInfoComponent } from './ebook/ebook-info/ebook-info.component';

//course
import { CourseHomeComponent } from './course/course-home/course-home.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseInfoComponent } from './course/course-info/course-info.component';

//activity
import { ActivityHomeComponent } from './activity/activity-home/activity-home.component';
import { ActivityListComponent } from './activity/activity-list/activity-list.component';
import { ActivityInfoComponent } from './activity/activity-info/activity-info.component';
*/
//cart order
//import { CartAddComponent } from './share_components/cart-add/cart-add.component';


//import { OrderRecordComponent } from './member/order-record/order-record.component';




//import { OrderDetailComponent } from './member/order-detail/order-detail.component';
// Social login Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__["FacebookLoginProvider"](_models_config_model__WEBPACK_IMPORTED_MODULE_12__["FBappId"])
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                //ErrorComponent,
                _layout_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _auth_facebook_facebook_component__WEBPACK_IMPORTED_MODULE_17__["FacebookComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _auth_forget_pw_forget_pw_component__WEBPACK_IMPORTED_MODULE_19__["ForgetPwComponent"],
                _validator_comfirm_pw_directive__WEBPACK_IMPORTED_MODULE_20__["ComfirmPwDirective"],
                //DatepickerComponent,
                //FileUploadComponent,
                _auth_facebook_register_facebook_register_component__WEBPACK_IMPORTED_MODULE_21__["FacebookRegisterComponent"],
                //UserinfoComponent,
                _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_22__["LogoutComponent"],
                //ResetPasswordComponent,
                //UsereditComponent,
                //CkeditorComponent,
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                /*
                DiaryHomeComponent,
                DiaryMenuComponent,
                MydiaryComponent,
                DiaryEditComponent,
                DiaryReadComponent,
                DiaryCreateComponent,
                DiaryPosttestComponent,
                MydiarySearchComponent,
                */
                //CalendarComponent,
                //MemberHomeComponent,
                //MemberMenuComponent,
                //QuestionnaireComponent,
                //PsychologyHomeComponent,
                //PsychologyListComponent,
                _diary_diary_cover_diary_cover_component__WEBPACK_IMPORTED_MODULE_25__["DiaryCoverComponent"],
                //CategoryComponent,
                //BannerComponent,
                /*
                ArticleHomeComponent,
                ArticleListComponent,
                ArticleReadComponent,
                //PsychologyResultComponent,
                EbookHomeComponent,
                EbookListComponent,
                CourseHomeComponent,
                CourseListComponent,
                ActivityHomeComponent,
                ActivityListComponent,
                */
                //CartAddComponent,
                _member_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _member_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_27__["OrderEditComponent"],
                //ProductComponent,
                /*
                EbookInfoComponent,
                CourseInfoComponent,
                ActivityInfoComponent,
                */
                //OrderRecordComponent,
                _layout_cart_count_cart_count_component__WEBPACK_IMPORTED_MODULE_28__["CartCountComponent"],
                //OrderDetailComponent,
                _layout_content_content_component__WEBPACK_IMPORTED_MODULE_24__["ContentComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_29__["FooterComponent"],
                _auth_agreement_agreement_component__WEBPACK_IMPORTED_MODULE_30__["AgreementComponent"],
                _layout_google_search_google_search_component__WEBPACK_IMPORTED_MODULE_31__["GoogleSearchComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                //FormsModule,
                //ReactiveFormsModule,
                //HttpClientModule,
                //NgHttpLoaderModule,
                //SweetAlertService,
                //SweetAlert2Module.forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                /*
                MatButtonModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatInputModule,
                MatNativeDateModule,
                */
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"],
                //MatDialogModule,
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"],
                /*
                CKEditorModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                */
                _share_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_2__["RecaptchaModule"].forRoot(),
            ],
            providers: [
                //interceptors
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["RequestInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_tokenRefresh_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenRefreshInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_response_interceptor__WEBPACK_IMPORTED_MODULE_6__["ResponseInterceptor"],
                    multi: true
                },
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            entryComponents: [_auth_facebook_register_facebook_register_component__WEBPACK_IMPORTED_MODULE_21__["FacebookRegisterComponent"], _auth_forget_pw_forget_pw_component__WEBPACK_IMPORTED_MODULE_19__["ForgetPwComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/agreement/agreement.component.css":
/*!********************************************************!*\
  !*** ./src/app/auth/agreement/agreement.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/agreement/agreement.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/agreement/agreement.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  agreement works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/agreement/agreement.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/agreement/agreement.component.ts ***!
  \*******************************************************/
/*! exports provided: AgreementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementComponent", function() { return AgreementComponent; });
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

var AgreementComponent = /** @class */ (function () {
    function AgreementComponent() {
    }
    AgreementComponent.prototype.ngOnInit = function () {
    };
    AgreementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agreement',
            template: __webpack_require__(/*! ./agreement.component.html */ "./src/app/auth/agreement/agreement.component.html"),
            styles: [__webpack_require__(/*! ./agreement.component.css */ "./src/app/auth/agreement/agreement.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgreementComponent);
    return AgreementComponent;
}());



/***/ }),

/***/ "./src/app/auth/facebook-register/facebook-register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/auth/facebook-register/facebook-register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/facebook-register/facebook-register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/auth/facebook-register/facebook-register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>透過FB帳號進行註冊</h2>\n  \n\n\n<mat-dialog-content>\n\t<form [formGroup]='registerForm' (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"form-group\">\n      \t<label>姓名:</label><br>\n        <input type=\"text\" formControlName=\"name\" [ngModel]=data.name>\n      \t<div *ngIf=\"submitted && name.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"name.errors.required\">姓名為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>生日:</label><br>\n        <app-datepicker  (childEvent)=\"onListenChild($event);\"></app-datepicker>\n        <input [(ngModel)]=\"birthday\" type=\"hidden\" formControlName=\"birth\">\n      \t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>性別:</label><br>\n        <input type=\"radio\" formControlName=\"gender\" value=\"M\">男\n        <input type=\"radio\" formControlName=\"gender\" value=\"F\">女\n      \t<div *ngIf=\"submitted && gender.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"gender.errors.required\">性別為必填</div>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>性傾向:</label><br>\n        <input type=\"radio\" formControlName=\"sexual\" value=\"異性戀\">異性戀\n        <input type=\"radio\" formControlName=\"sexual\" value=\"同性戀\">同性戀\n        <input type=\"radio\" formControlName=\"sexual\" value=\"雙性戀\">雙性戀\n        <input type=\"radio\" formControlName=\"sexual\" value=\"無性戀\">無性戀\n        <input type=\"radio\" formControlName=\"sexual\" value=\"不確定\">不確定\n        <input type=\"radio\" formControlName=\"sexual\" value=\"不願意透漏\">不願意透漏\n      \t<div *ngIf=\"submitted && sexual.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"sexual.errors.required\">性傾向為必填</div>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>聯絡信箱:</label><br>\n        <input type=\"text\" formControlName=\"email\" [ngModel]=data.email>\n      \t<div *ngIf=\"submitted && email.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"email.errors.required\">聯絡信箱為必填</div>\n            <div *ngIf=\"email.errors.pattern\">聯絡信箱須為email格式</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>國家:</label><br>\n        <input type=\"text\" formControlName=\"country\">\n      \t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>地址:</label><br>\n        <input type=\"text\" formControlName=\"address\">\n      \t\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>連絡電話:</label><br>\n        <input type=\"text\" formControlName=\"phone\">\n      \t\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>家庭形容詞:</label><br>\n        <input type=\"radio\" formControlName=\"family\" value=\"溫暖和諧\">溫暖和諧\n        <input type=\"radio\" formControlName=\"family\" value=\"冷漠疏離\">冷漠疏離\n        <input type=\"radio\" formControlName=\"family\" value=\"糾結複雜\">糾結複雜\n        <input type=\"radio\" formControlName=\"family\" value=\"衝突不斷\">衝突不斷\n      \t<div *ngIf=\"submitted && family.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"family.errors.required\">家庭形容詞為必填</div>\n        </div>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label><a href=\"/agreement\" target=\"_blank\" title=\"使用者條款\">使用者條款:</a></label><br>\n        <input type=\"checkbox\" formControlName=\"agreement\">我同意\n        <div *ngIf=\"submitted && agreement.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"agreement.errors.pattern\">須同意使用者條款</div>\n        </div>  \n    </div>\n\n\n    <re-captcha (resolved)=\"resolved($event)\" siteKey=\"{{ recaptcha_key }}\"></re-captcha>\n\n\n  \t\n    <button class=\"btn-primary\" type=\"submit\">註冊</button>\n\t\t\n\t</form>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-button mat-dialog-close>取消</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/auth/facebook-register/facebook-register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/facebook-register/facebook-register.component.ts ***!
  \***********************************************************************/
/*! exports provided: FacebookRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookRegisterComponent", function() { return FacebookRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





 //接收route para


var FacebookRegisterComponent = /** @class */ (function () {
    function FacebookRegisterComponent(dialogRef, data, httpService, router, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        //datepicker
        this.birthday = null; //ngmodel for date
        this.submitted = false;
        this.recaptcha_key = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["GoogleRecaptcha"];
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')]],
            country: [''],
            address: [''],
            birth: [''],
            phone: [''],
            sexual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            agreement: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')],
        });
    }
    Object.defineProperty(FacebookRegisterComponent.prototype, "name", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "birth", {
        get: function () { return this.registerForm.get('birth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "gender", {
        get: function () { return this.registerForm.get('gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "country", {
        get: function () { return this.registerForm.get('country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "address", {
        get: function () { return this.registerForm.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "phone", {
        get: function () { return this.registerForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "sexual", {
        get: function () { return this.registerForm.get('sexual'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "family", {
        get: function () { return this.registerForm.get('family'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FacebookRegisterComponent.prototype, "agreement", {
        get: function () { return this.registerForm.get('agreement'); },
        enumerable: true,
        configurable: true
    });
    FacebookRegisterComponent.prototype.ngOnInit = function () {
    };
    //[datepicker] Child模板事件發生時，會呼叫此方法回傳值
    FacebookRegisterComponent.prototype.onListenChild = function ($event) {
        this.strFormChild = $event;
        this.birthday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.strFormChild, 'yyyy-MM-dd', 'en-US');
    };
    //submit form
    FacebookRegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.registerForm.invalid || !(this.recaptcha)) {
            return;
        }
        var params = new FormData();
        Object.keys(this.registerForm.value).map(function (key) { return params.append(key, _this.registerForm.value[key]); });
        params.append('avatar', this.data.image);
        params.append('provider', 'FB');
        params.append('username', this.data.id);
        params.append('confirm_mail', '1');
        params.append('g-recaptcha-response', this.recaptcha);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/auth/register/social";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                title: '註冊成功!',
                text: '請收取認證信，完成帳號驗證',
                type: 'success',
            }).then(function (success) {
                _this.dialogRef.close();
                _this.router.navigate(['/home']);
            });
        });
    };
    //google機器人
    FacebookRegisterComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
        this.recaptcha = captchaResponse;
    };
    FacebookRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-register',
            template: __webpack_require__(/*! ./facebook-register.component.html */ "./src/app/auth/facebook-register/facebook-register.component.html"),
            styles: [__webpack_require__(/*! ./facebook-register.component.css */ "./src/app/auth/facebook-register/facebook-register.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FacebookRegisterComponent);
    return FacebookRegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/facebook/facebook.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/facebook/facebook.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-block\" (click)=\"socialSignIn('facebook');\">\n\t<i data-icon=\"\"></i>\n\tLogin with facebook\n</button>"

/***/ }),

/***/ "./src/app/auth/facebook/facebook.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/facebook/facebook.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  color: #fff;\n  background-color: #5067ae; }\n  .btn:hover {\n    background-color: #40528b; }\n"

/***/ }),

/***/ "./src/app/auth/facebook/facebook.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/facebook/facebook.component.ts ***!
  \*****************************************************/
/*! exports provided: FacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookComponent", function() { return FacebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _facebook_register_facebook_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../facebook-register/facebook-register.component */ "./src/app/auth/facebook-register/facebook-register.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
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
 //popup dialog



var FacebookComponent = /** @class */ (function () {
    function FacebookComponent(memberService, dialogRef, productService, httpService, router, cookieService, dialog, socialAuthService) {
        this.memberService = memberService;
        this.dialogRef = dialogRef;
        this.productService = productService;
        this.httpService = httpService;
        this.router = router;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.socialAuthService = socialAuthService;
    }
    FacebookComponent.prototype.ngOnInit = function () { };
    FacebookComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            //進行系統登入
            _this.dialogRef.close();
            _this.loginSystem(userData);
        });
    };
    FacebookComponent.prototype.loginSystem = function (user_data) {
        var _this = this;
        //login system api
        var params = new FormData();
        params.append('social_id', user_data.id);
        params.append('provider', 'FB');
        console.log(this.user_id);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_9__["APIUrl"] + "/api/auth/social-login";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            console.log(res);
            if (res.success_code) {
                //尚未註冊 進行註冊
                if (res.success_code == 'PLEASE_REGISTER') {
                    //this.registerSystem(this.user_id,this.openDialog());
                    console.log("need to register");
                    _this.dialogRef.close();
                    _this.openDialog(user_data);
                }
                //login success, save token in cookies
            }
            else {
                _this.cookieService.setCookie('token', res.token);
                _this.cookieService.setCookie('level', res.user_info.level);
                _this.cookieService.setCookie('name', res.user_info.name);
                _this.cookieService.setCookie('avatar', res.user_info.avatar);
                //this.router.navigate(['/home']);
                //移轉cart
                _this.productService.mergeCookieCart();
                _this.memberService.setUserLogin(res);
                _this.router.navigateByUrl(_this.InputReturnUrl);
            }
        });
    };
    //開啟pop up
    FacebookComponent.prototype.openDialog = function (user_data) {
        var dialogRef = this.dialog.open(_facebook_register_facebook_register_component__WEBPACK_IMPORTED_MODULE_7__["FacebookRegisterComponent"], {
            width: '500px',
            data: { name: user_data.name, id: user_data.id, image: user_data.image, email: user_data.email }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FacebookComponent.prototype, "InputReturnUrl", void 0);
    FacebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook',
            template: __webpack_require__(/*! ./facebook.component.html */ "./src/app/auth/facebook/facebook.component.html"),
            styles: [__webpack_require__(/*! ./facebook.component.scss */ "./src/app/auth/facebook/facebook.component.scss")]
        }),
        __metadata("design:paramtypes", [_member_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], FacebookComponent);
    return FacebookComponent;
}());



/***/ }),

/***/ "./src/app/auth/forget-pw/forget-pw.component.css":
/*!********************************************************!*\
  !*** ./src/app/auth/forget-pw/forget-pw.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/forget-pw/forget-pw.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/forget-pw/forget-pw.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>忘記密碼</p>\n\n<div>\n\t<form [formGroup]='registerForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n    \t<label>帳號:</label><br>\n        <input id=\"username\" type=\"text\" formControlName=\"username\" required>\n      \t<div *ngIf=\"submitted && username.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"username.errors.required\">帳號為必填</div>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>聯絡信箱:</label><br>\n        <input type=\"text\" formControlName=\"email\" >\n      \t<div *ngIf=\"submitted && email.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"email.errors.required\">聯絡信箱為必填</div>\n            <div *ngIf=\"email.errors.pattern\">聯絡信箱須為email格式</div>\n        </div>\t\n    </div>\n\n    <button class=\"btn-primary\" type=\"submit\">送出</button>\n\t\t\n\t</form>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/forget-pw/forget-pw.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/forget-pw/forget-pw.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgetPwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPwComponent", function() { return ForgetPwComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
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

var ForgetPwComponent = /** @class */ (function () {
    function ForgetPwComponent(dialogRef, httpService, router, formBuilder) {
        this.dialogRef = dialogRef;
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')]],
        });
    }
    Object.defineProperty(ForgetPwComponent.prototype, "username", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForgetPwComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    ForgetPwComponent.prototype.ngOnInit = function () {
    };
    //submit form
    ForgetPwComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.registerForm.invalid) {
            return;
        }
        var params = new FormData();
        Object.keys(this.registerForm.value).map(function (key) { return params.append(key, _this.registerForm.value[key]); });
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/auth/forget-password";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: '密碼重設成功!',
                text: '請收取密碼重設信',
                type: 'success',
            }).then(function (success) {
                _this.router.navigate(['/home']);
            });
        });
    };
    ForgetPwComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-pw',
            template: __webpack_require__(/*! ./forget-pw.component.html */ "./src/app/auth/forget-pw/forget-pw.component.html"),
            styles: [__webpack_require__(/*! ./forget-pw.component.css */ "./src/app/auth/forget-pw/forget-pw.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgetPwComponent);
    return ForgetPwComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n\n  <div class=\"auth-heading\">\n    <h4>登入</h4>\n  </div>\n\n  <form [formGroup]='loginForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <!-- <label>帳號:</label> -->\n        <input id=\"username\" type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"帳號\" required>\n        <div *ngIf=\"submitted && username.invalid\">\n            <small *ngIf=\"username.errors.required\" class=\"form-text text-danger\">帳號為必填</small>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n        <!-- <label>密碼:</label> -->\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"密碼\">\n        <div *ngIf=\"submitted && password.invalid\">\n            <small *ngIf=\"password.errors.required\"  class=\"form-text text-danger\">密碼為必填</small>\n        </div>  \n    </div>\n    \n    <button class=\"btn btn-home btn-lg btn-block mb-2\" type=\"submit\">登入</button>\n    \n  </form>\n\n  <a (click)=\"forget()\" class=\"d-block text-center\"><small>忘記密碼</small></a>\n  \n  <div class=\"hr-title\">\n    <span>\n      <small>或改為以下方式繼續</small>\n    </span>\n  </div>\n\n  <!-- facebook login -->\n  <div class=\"d-block\">\n    <app-facebook [InputReturnUrl]=\"data.returnUrl\"></app-facebook>\n  </div>\n\n  <div class=\"hr mt-4\"></div>\n\n  <a (click)=\"register()\" class=\"d-block text-center\">註冊</a>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token.service */ "./src/app/auth/token.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forget_pw_forget_pw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forget-pw/forget-pw.component */ "./src/app/auth/forget-pw/forget-pw.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








 //接收route para



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, data, dialog, route, tokenService, httpService, router, cookieService, formBuilder, productService, memberService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.route = route;
        this.tokenService = tokenService;
        this.httpService = httpService;
        this.router = router;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.memberService = memberService;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        /* get return url from route parameters or default to '/'
        this.route.params.subscribe(params => {
            this.returnUrl = params['returnUrl'] || '/';
            console.log(this.returnUrl);
        });
        */
        //this.isLogin();
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    //註冊
    LoginComponent.prototype.register = function () {
        this.dialogRef.close();
        //this.router.navigate(['/register']);
        this.openDialog();
    };
    //忘記密碼
    LoginComponent.prototype.forget = function () {
        this.dialogRef.close();
        //this.router.navigate(['/register']);
        var dialogRef = this.dialog.open(_forget_pw_forget_pw_component__WEBPACK_IMPORTED_MODULE_11__["ForgetPwComponent"], {
            width: '588px',
        });
    };
    //開啟pop up
    LoginComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], {
            width: '588px',
        });
    };
    //判斷是否login
    LoginComponent.prototype.isLogin = function () {
        var _this = this;
        this.tokenService.tokenState()
            .subscribe(function (res) {
            if (res)
                _this.router.navigate(['/home']);
        });
    };
    //submit form
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.loginForm.invalid) {
            return;
        }
        var params = new FormData();
        Object.keys(this.loginForm.value).map(function (key) { return params.append(key, _this.loginForm.value[key]); });
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_7__["APIUrl"] + "/api/auth/login";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            console.log(res);
            //login success, save token in cookies
            _this.cookieService.setCookie('token', res.token);
            _this.cookieService.setCookie('userid', res.user_info.id);
            _this.cookieService.setCookie('level', res.user_info.level);
            _this.cookieService.setCookie('name', res.user_info.name);
            _this.cookieService.setCookie('avatar', res.user_info.avatar);
            _this.token = res.token;
            //移轉cart
            _this.productService.mergeCookieCart();
            _this.productService.getCartNumber();
            //更新會員資料
            _this.memberService.setUserLogin(res);
            //this.router.navigate(['/home']);
            _this.dialogRef.close();
            _this.router.navigateByUrl(_this.data.returnUrl);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _member_member_service__WEBPACK_IMPORTED_MODULE_9__["MemberService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/logout/logout.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn\" (click)=\"logout();\">登出</button> -->\n<a href=\"javascript:void(0);\" class=\"nav-link\" (click)=\"logout();\">登出</a>"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
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


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(productService, cookieService, httpService, router, memberService) {
        this.productService = productService;
        this.cookieService = cookieService;
        this.httpService = httpService;
        this.router = router;
        this.memberService = memberService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/auth/logout";
        this.httpService.postHttp(url, null)
            .subscribe(function (res) {
            console.log(res);
            _this.cookieService.deleteCookie('token');
            _this.cookieService.deleteCookie('name');
            _this.cookieService.deleteCookie('userid');
            _this.cookieService.deleteCookie('avatar');
            _this.cookieService.deleteCookie('level');
            _this.cookieService.deleteCookie('cart');
            _this.memberService.user = null;
            _this.memberService.mailCount = null;
            _this.productService.getCartNumber();
            _this.router.navigate(['/']);
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _member_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-dialog-title>\n  <div class=\"auth-heading\">\n    <h4>會員註冊</h4> \n  </div>\n</mat-dialog-title> -->\n\n<mat-dialog-content class=\"auth\">\n  <div class=\"auth-heading\">\n    <h4>會員註冊</h4> \n  </div>\n\n\t<form [formGroup]='registerForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n    \t<!-- <label>帳號:</label><br> -->\n        <input id=\"username\" type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"帳號\" required>\n      \t<div *ngIf=\"submitted && username.invalid\">\n            <small *ngIf=\"username.errors.required\" class=\"form-text text-danger\">帳號為必填</small>\n            <small *ngIf=\"username.errors.minlength\" class=\"form-text text-danger\">帳號至少6碼</small>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>密碼:</label><br> -->\n        <input [(ngModel)]=\"pw_value\" type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"密碼\">\n      \t<div *ngIf=\"submitted && password.invalid\">\n            <small *ngIf=\"password.errors.required\" class=\"form-text text-danger\">密碼為必填</small>\n            <small *ngIf=\"password.errors.minlength\" class=\"form-text text-danger\">密碼至少6碼</small>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>再次輸入密碼:</label><br> -->\n        <input [(ngModel)]=\"pw_confirm\" type=\"password\" class=\"form-control\" formControlName=\"password_confirmation\" placeholder=\"再次輸入密碼\">\n      \t<div *ngIf=\"submitted && password_confirmation.invalid\">\n            <small *ngIf=\"password_confirmation.errors.required\" class=\"form-text text-danger\">再次輸入密碼為必填</small>        \n        </div>\t\n         <div *ngIf=\"pw_value != pw_confirm\">兩次密碼不符 </div>\n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>姓名:</label><br> -->\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"姓名\">\n      \t<div *ngIf=\"submitted && name.invalid\">\n            <small *ngIf=\"name.errors.required\" class=\"form-text text-danger\">姓名為必填</small>\n        </div>\t\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <div class=\"form-group\">\n      \t<small class=\"d-block mb-1\">生日</small>\n        <app-datepicker  (childEvent)=\"onListenChild($event);\"></app-datepicker>\n        <input [(ngModel)]=\"birthday\" type=\"hidden\" formControlName=\"birth\">\n    </div>\n\n    <div class=\"form-group\">\n      \t<small class=\"d-block mb-1\">性別</small>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" id=\"gender1\" formControlName=\"gender\" value=\"M\">\n          <label class=\"form-check-label mr-2\" for=\"gender1\">男</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"gender2\" formControlName=\"gender\" value=\"F\">\n          <label class=\"form-check-label\" for=\"gender2\">女</label>\n        </div>\n      \t<div *ngIf=\"submitted && gender.invalid\">\n            <small *ngIf=\"gender.errors.required\" class=\"form-text text-danger\">性別為必填</small>\n        </div>\t\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <div class=\"form-group\">\n      \t<small class=\"d-block mb-1\">性傾向</small>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual1\" formControlName=\"sexual\" value=\"異性戀\">\n          <label class=\"form-check-label mr-2\" for=\"sexual1\">異性戀</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual2\" formControlName=\"sexual\" value=\"同性戀\">\n          <label class=\"form-check-label mr-2\" for=\"sexual2\">同性戀</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual3\" formControlName=\"sexual\" value=\"雙性戀\">\n          <label class=\"form-check-label mr-2\" for=\"sexual3\">雙性戀</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual4\" formControlName=\"sexual\" value=\"無性戀\">\n          <label class=\"form-check-label mr-2\" for=\"sexual4\">無性戀</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual5\" formControlName=\"sexual\" value=\"不確定\">\n          <label class=\"form-check-label mr-2\" for=\"sexual5\">不確定</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"sexual6\" formControlName=\"sexual\" value=\"不願意透漏\">\n          <label class=\"form-check-label\" for=\"sexual6\">不願意透漏</label>\n        </div>\n      \t<div *ngIf=\"submitted && sexual.invalid\">\n            <small *ngIf=\"sexual.errors.required\" class=\"form-text text-danger\">性傾向為必填</small>\n        </div>\t\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>聯絡信箱</label> -->\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"聯絡信箱\">\n      \t<div *ngIf=\"submitted && email.invalid\">\n      \t\t<small *ngIf=\"email.errors.required\" class=\"form-text text-danger\">聯絡信箱為必填</small>\n          <small *ngIf=\"email.errors.pattern\" class=\"form-text text-danger\">聯絡信箱須為email格式</small>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>國家</label><br> -->\n        <input type=\"text\" class=\"form-control\" formControlName=\"country\" placeholder=\"國家\">\n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>地址</label><br> -->\n        <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"地址\">\n    </div>\n\n    <div class=\"form-group\">\n      \t<!-- <label>連絡電話</label><br> -->\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"連絡電話\">\t\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <div class=\"form-group\">\n      \t<small class=\"d-block mb-1\">家庭形容詞</small>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" id=\"family1\" formControlName=\"family\" value=\"溫暖和諧\">\n          <label class=\"form-check-label mr-2\" for=\"family1\">溫暖和諧</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"family2\" formControlName=\"family\" value=\"冷漠疏離\">\n          <label class=\"form-check-label mr-2\" for=\"family2\">冷漠疏離</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"family3\" formControlName=\"family\" value=\"糾結複雜\">\n          <label class=\"form-check-label mr-2\" for=\"family3\">糾結複雜</label>\n          <input class=\"form-check-input\" type=\"radio\" id=\"family4\" formControlName=\"family\" value=\"衝突不斷\">\n          <label class=\"form-check-label\" for=\"family4\">衝突不斷</label>\n        </div>\n      \t<div *ngIf=\"submitted && family.invalid\">\n            <small *ngIf=\"family.errors.required\" class=\"form-text text-danger\">家庭形容詞為必填</small>\n        </div>\t\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"agreement\" formControlName=\"agreement\">\n          <label class=\"form-check-label\" for=\"agreement\">我同意</label>\n          <a href=\"/agreement\" target=\"_blank\" title=\"使用者條款\">使用者條款</a>\n        </div>\n        <div *ngIf=\"submitted && agreement.invalid\">\n            <small *ngIf=\"agreement.errors.pattern\" class=\"form-text text-danger\">須同意使用者條款</small>\n        </div>  \n    </div>\n\n\n  \t<re-captcha (resolved)=\"resolved($event)\" siteKey=\"{{ recaptcha_key }}\"></re-captcha>\n\n    <button class=\"btn btn-home btn-lg btn-block mt-3 mb-3\" type=\"submit\">註冊</button>\n\t\t\n\t</form>\n\n\n\n</mat-dialog-content>\n\n\n<!-- <mat-dialog-actions>\n    <button mat-button mat-dialog-close>取消</button>\n</mat-dialog-actions> -->"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dialogRef, httpService, router, formBuilder) {
        this.dialogRef = dialogRef;
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.pw_value = null; //ngmodel for pw
        this.pw_confirm = null; //ngmodel for pw
        this.birthday = null; //ngmodel for date
        this.recaptcha_key = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["GoogleRecaptcha"];
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')]],
            country: [''],
            address: [''],
            birth: [''],
            phone: [''],
            sexual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            family: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            agreement: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('true')],
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "username", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password_confirmation", {
        get: function () { return this.registerForm.get('password_confirmation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () { return this.registerForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "birth", {
        get: function () { return this.registerForm.get('birth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "gender", {
        get: function () { return this.registerForm.get('gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "country", {
        get: function () { return this.registerForm.get('country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "address", {
        get: function () { return this.registerForm.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "phone", {
        get: function () { return this.registerForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "sexual", {
        get: function () { return this.registerForm.get('sexual'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "family", {
        get: function () { return this.registerForm.get('family'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "agreement", {
        get: function () { return this.registerForm.get('agreement'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () { };
    //[datepicker] Child模板事件發生時，會呼叫此方法回傳值
    RegisterComponent.prototype.onListenChild = function ($event) {
        this.strFormChild = $event;
        this.birthday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(this.strFormChild, 'yyyy-MM-dd', 'en-US');
    };
    //submit form
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //表單沒有驗證成功 沒有動作
        if (this.registerForm.invalid || this.pw_value != this.pw_confirm || !(this.recaptcha)) {
            return;
        }
        var params = new FormData();
        Object.keys(this.registerForm.value).map(function (key) { return params.append(key, _this.registerForm.value[key]); });
        params.append('g-recaptcha-response', this.recaptcha);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/auth/register/general";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                title: '註冊成功!',
                text: '請收取認證信，完成帳號驗證',
                type: 'success',
            }).then(function (success) {
                _this.dialogRef.close();
                _this.router.navigate(['/']);
            });
        });
    };
    //google機器人
    RegisterComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
        this.recaptcha = captchaResponse;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/token.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth/token.service.ts ***!
  \***************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TokenService = /** @class */ (function () {
    function TokenService(cookieService, httpService, http) {
        this.cookieService = cookieService;
        this.httpService = httpService;
        this.http = http;
        this.token_state = 0;
    }
    //guard 驗證是否有填完整資料 以及是否有登入
    TokenService.prototype.infoState = function () {
        var token = this.cookieService.getCookie('token');
        //let para = new FormData();
        //para.append('token',token);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/user/check-info-complete";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            //this.token_state = res.body.result;
            console.warn(res);
            //回傳為沒填完整資料 sucees_code存在代表不是success 方案
            if (res.success_code) {
                switch (res.success_code) {
                    case "BLOCK":
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                            title: 'Error!',
                            text: '需填寫完整資料',
                            type: 'error',
                            confirmButtonText: 'YES'
                        });
                        break;
                    case "NO_LOGIN_PERMISSION":
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                            title: 'Error!',
                            text: '你的帳號尚未有登入權限',
                            type: 'error',
                            confirmButtonText: 'YES'
                        });
                        break;
                    default:
                        // code...
                        break;
                }
                return res.success_code;
            }
            else {
                return 'SUCCESS';
            }
        }));
    };
    //guard 驗證是否有登入用
    TokenService.prototype.tokenState = function () {
        var _this = this;
        var token = this.cookieService.getCookie('token');
        var para = new FormData();
        para.append('token', token);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/auth/refresh-return-success";
        //const url = `${Config.APIUrl}/api/auth/check`;
        return this.http.post(url, para).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            //this.token_state = res.body.result;
            console.warn(res);
            //回傳參數有token表示成功
            if (res.token) {
                _this.cookieService.setCookie('token', res.token);
                _this.cookieService.setCookie('level', res.level);
                _this.cookieService.setCookie('name', res.name);
                _this.cookieService.setCookie('avatar', res.avatar);
                return true;
                //回傳參數沒有token表示失敗
            }
            else {
                //沒登入權限 需跳出警示窗
                if (res.success_code == 'NO_LOGIN_PERMISSION') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Error!',
                        text: '你的帳號尚未有登入權限',
                        type: 'error',
                        confirmButtonText: 'YES'
                    });
                }
                console.warn(_this.token_state);
                console.warn(res);
                return false;
            }
        }));
    };
    //intercept 更新token用
    TokenService.prototype.tokeRefresh = function () {
        var _this = this;
        var token = this.cookieService.getCookie('token');
        var para = new FormData();
        para.append('token', token);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/auth/refresh";
        return this.httpService.postHttp(url, para).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            //console.log('didn\'t get token in func');
            if (res.token) {
                //console.log('get token in func');
                _this.cookieService.setCookie('token', res.token);
                _this.cookieService.setCookie('level', res.level);
                _this.cookieService.setCookie('name', res.name);
                _this.cookieService.setCookie('avatar', res.avatar);
                return res; //return the new authorization token
            }
        }));
    };
    //用在component裡面 檢查是否有登入
    TokenService.prototype.loginCheck = function () {
        var _this = this;
        var token = this.cookieService.getCookie('token');
        var para = new FormData();
        para.append('token', token);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/auth/check";
        return this.http.post(url, para).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            //this.token_state = res.body.result;
            console.warn(res);
            //回傳參數有token表示成功
            if (res.token) {
                _this.cookieService.setCookie('token', res.token);
                _this.cookieService.setCookie('level', res.level);
                _this.cookieService.setCookie('name', res.name);
                _this.cookieService.setCookie('avatar', res.avatar);
                return true;
                //回傳參數沒有token表示失敗
            }
            else {
                //沒登入權限 需跳出警示窗
                if (res.success_code == 'NO_LOGIN_PERMISSION') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        title: 'Error!',
                        text: '你的帳號尚未有登入權限',
                        type: 'error',
                        confirmButtonText: 'YES'
                    });
                }
                console.warn(_this.token_state);
                console.warn(res);
                return false;
            }
        }));
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/diary/diary-cover/diary-cover.component.css":
/*!*************************************************************!*\
  !*** ./src/app/diary/diary-cover/diary-cover.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/diary/diary-cover/diary-cover.component.html":
/*!**************************************************************!*\
  !*** ./src/app/diary/diary-cover/diary-cover.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  diary-cover works!\n</p>\n<img *ngIf=\"memberService.user.avatar==''\" src=\"{{ config.defaultAvatar }}\">\n<img *ngIf=\"memberService.user.avatar!=''\" src=\"{{ config.FileUrl }}{{ memberService.user.avatar }}\">\n<a routerLink=\"../diary\">進入日記</a>\n"

/***/ }),

/***/ "./src/app/diary/diary-cover/diary-cover.component.ts":
/*!************************************************************!*\
  !*** ./src/app/diary/diary-cover/diary-cover.component.ts ***!
  \************************************************************/
/*! exports provided: DiaryCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryCoverComponent", function() { return DiaryCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiaryCoverComponent = /** @class */ (function () {
    function DiaryCoverComponent(cookieService, memberService) {
        this.cookieService = cookieService;
        this.memberService = memberService;
        this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__;
    }
    DiaryCoverComponent.prototype.ngOnInit = function () { };
    DiaryCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diary-cover',
            template: __webpack_require__(/*! ./diary-cover.component.html */ "./src/app/diary/diary-cover/diary-cover.component.html"),
            styles: [__webpack_require__(/*! ./diary-cover.component.css */ "./src/app/diary/diary-cover/diary-cover.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _member_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]])
    ], DiaryCoverComponent);
    return DiaryCoverComponent;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/auth/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
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
 //popup dialog

var LoginGuard = /** @class */ (function () {
    function LoginGuard(tokenService, router, dialog) {
        this.tokenService = tokenService;
        this.router = router;
        this.dialog = dialog;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.tokenService.tokenState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (bool) {
            if (!bool) {
                console.warn(state.url);
                console.warn(next);
                _this.openDialog(state.url);
                //this.router.navigate(['/login', state.url]);
                return false;
            }
            return true;
        }));
    };
    //開啟pop up
    LoginGuard.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/request.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cookie.service */ "./src/app/services/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var token = this.cookieService.getCookie('token');
        var newRequest = req.clone({ setHeaders: { 'token': token } });
        console.log(newRequest);
        return next.handle(newRequest);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/response.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/interceptors/response.interceptor.ts ***!
  \******************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/auth/token.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
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







 //popup dialog

var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor(dialog, router, tokenService, cookieService, httpService) {
        this.dialog = dialog;
        this.router = router;
        this.tokenService = tokenService;
        this.cookieService = cookieService;
        this.httpService = httpService;
    }
    ResponseInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        console.log("response.interceptor.ts");
        return next.handle(req).pipe(
        //進行response data處理
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            //如果event為http response class
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                //有回傳資料的情況
                if (event.body) {
                    //googel search 不處理 直接成功回傳結果
                    var reg = RegExp('^https:\/\/www.googleapis.com\/customsearch\/v1');
                    if (reg.test(event.url)) {
                        console.log('google');
                        console.log(event);
                        return event;
                        //如果response event的結果是失敗
                    }
                    else if (event.body.status != true) {
                        console.warn("response error:");
                        console.log(event);
                        if (event.body.err_detail)
                            console.warn(event.body.err_detail);
                        //sweetalert token失效不做alert
                        if (event.body.error_code != 'TOKEN_INVALID') {
                            var err_msg = event.body.err_msg;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                                title: 'Error!',
                                text: err_msg,
                                type: 'error',
                                confirmButtonText: 'YES'
                            });
                            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) { return observer.error(event); });
                        }
                        //respone 成功
                    }
                    else {
                        console.log("response success:");
                        //console.log(event);
                        //如果sucess code = success 只截取data內容 直接進行回傳結果前處理
                        if (event.body.data && event.body.success_code == 'SUCCESS') {
                            var detail = event.body.data;
                            event = event.clone({ body: detail });
                            console.log(event);
                        }
                        return event;
                    }
                }
            }
            return event;
        }), 
        //錯誤處理 返回登入畫面 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (res) {
            var err_code = res.error.err_code;
            var err_msg = res.error.err_msg;
            var err_detail = res.error.err_detail;
            switch (res.status) {
                //權限問題 token
                case 419:
                    if (err_code != 'TOKEN_EXPIRE') {
                        console.log('response error:419 權限問題/' + err_msg);
                        console.warn(err_detail);
                        //沒登入權限 需跳出警示窗
                        if (err_code == 'NO_LOGIN_PERMISSION') {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                                title: 'Error!',
                                text: err_msg,
                                type: 'error',
                                confirmButtonText: 'YES'
                            }).then(function (success) {
                                _this.cookieService.deleteCookie('token');
                                //this.router.navigate(['/login']);
                                _this.openDialog('/');
                            });
                            //token 失效 直接到登入頁
                        }
                        else {
                            //this.router.navigate(['/login']);
                            _this.openDialog('/');
                        }
                    }
                    break;
                case 422: //欄位有誤
                case 403: //操作錯誤
                case 500://其他問題
                    console.warn('err_msg:' + res.error.err_msg);
                    console.warn(res.error.err_detail);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                        title: 'Error!',
                        text: err_msg,
                        type: 'error',
                        confirmButtonText: 'YES'
                    });
                    break;
                case 404:
                    _this.router.navigate(['/error404']);
                    break;
            }
            // 以错误的形式结束本次请求
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) { return observer.error(res); });
        }));
    };
    //開啟pop up
    ResponseInterceptor.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    ResponseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]])
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/tokenRefresh.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/interceptors/tokenRefresh.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: TokenRefreshInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenRefreshInterceptor", function() { return TokenRefreshInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/auth/token.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
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
 //popup dialog

var TokenRefreshInterceptor = /** @class */ (function () {
    function TokenRefreshInterceptor(tokenService, router, dialog) {
        this.tokenService = tokenService;
        this.router = router;
        this.dialog = dialog;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    TokenRefreshInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        console.log("tokenRefresh.interceptor.ts");
        //request =this.addAuthenticationToken(request);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                console.log(err);
                switch (err.status) {
                    case 401:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('401Error');
                    //toekn relative token expired
                    case 419:
                        var err_code = err.error.err_code;
                        if (err_code == 'TOKEN_EXPIRE') {
                            console.log("進行token更新");
                            return _this.handleTokenError(request, next);
                        }
                        else {
                            //THIS PART DOESN'T WORK
                            console.log("419錯誤 導向login");
                            //this.router.navigate(['/login']);
                            _this.openDialog('/');
                            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(err); });
                        }
                    case 400:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('400Error');
                    case 200:
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('200Error');
                    //success?
                    default:
                        console.warn('HttpResponse不知名錯誤');
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.status);
                }
                //non error response
            }
            else {
                return next.handle(request);
            }
        }));
    };
    TokenRefreshInterceptor.prototype.handleTokenError = function (request, next) {
        var _this = this;
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);
            return this.tokenService.tokeRefresh()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
                if (data.token) {
                    console.log('refresh token 回傳囉~~~~');
                    console.log(data);
                    _this.tokenSubject.next(data.token);
                    var newReq = request.clone({ headers: request.headers.set('token', data.token) });
                    return next.handle(newReq);
                }
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error('token 更新失敗1'); });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                console.log('catchError');
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error('token 更新失敗2'); });
                ;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                console.log('finalize');
                _this.isRefreshingToken = false;
                return next.handle(request);
            }));
        }
        else {
            this.isRefreshingToken = false;
            return next.handle(request);
        }
    };
    //開啟pop up
    TokenRefreshInterceptor.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    TokenRefreshInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], TokenRefreshInterceptor);
    return TokenRefreshInterceptor;
}());



/***/ }),

/***/ "./src/app/layout/banner/banner.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/banner/banner.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-carousel *ngIf=\"banners\" [options]=\"mySlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\" class=\"banner-carousel\">\n <div class=\"banner-item\" *ngFor=\"let image of mySlideImages;let i = index\">\n  <a href=\"\" class=\"banner-item-link\">\n  \t<div class=\"banner-item-image\" [ngStyle]=\"{'background-image':'url(' + image + ')'}\"></div>\n  </a>\n </div>\n</owl-carousel>"

/***/ }),

/***/ "./src/app/layout/banner/banner.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/banner/banner.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-item-image {\n  width: 100%;\n  height: 430px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/layout/banner/banner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/banner/banner.component.ts ***!
  \***************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
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



//import * as $ from 'jquery';
var BannerComponent = /** @class */ (function () {
    //myCarouselOptions={items: 3, dots: true, nav: true};
    function BannerComponent(http) {
        this.http = http;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //
        this.mySlideImages = [1, 2, 3].map(function (i) { return "https://picsum.photos/640/480?image=" + i; });
        //myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
        this.mySlideOptions = { items: 1, dots: true, loop: true };
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.getBannerList();
    };
    //取得類別列表
    BannerComponent.prototype.getBannerList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'website_id': 1,
            'type': this.inputType,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/banner?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            _this.banners = res.banners;
            console.log(res);
            _this.mySlideImages = res.banners.map(function (banner) { return "" + _this.fileUrl + banner.filepath; });
            console.log(_this.mySlideImages);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BannerComponent.prototype, "inputType", void 0);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/layout/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/layout/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/layout/cart-count/cart-count.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/cart-count/cart-count.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/cart-count/cart-count.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/cart-count/cart-count.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"productService.number!=0\" class=\"badge badge-pill badge-danger\">\n{{ productService.number }}\n</span>"

/***/ }),

/***/ "./src/app/layout/cart-count/cart-count.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/cart-count/cart-count.component.ts ***!
  \***********************************************************/
/*! exports provided: CartCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCountComponent", function() { return CartCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartCountComponent = /** @class */ (function () {
    function CartCountComponent(httpService, productService) {
        this.httpService = httpService;
        this.productService = productService;
    }
    CartCountComponent.prototype.ngOnInit = function () {
        this.productService.getCartNumber();
    };
    CartCountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-count',
            template: __webpack_require__(/*! ./cart-count.component.html */ "./src/app/layout/cart-count/cart-count.component.html"),
            styles: [__webpack_require__(/*! ./cart-count.component.css */ "./src/app/layout/cart-count/cart-count.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], CartCountComponent);
    return CartCountComponent;
}());



/***/ }),

/***/ "./src/app/layout/category/category.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/category/category.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\n\t<ul *ngIf=\"categories\" class=\"navbar-nav categories\">\n\t\t<li *ngFor=\"let category of categories\" class=\"nav-item\">\n\t\t\t<div (click)=\"onClicked(category.id)\" class=\"nav-link category\">{{ category.name }}</div>\n\t\t\t<!-- 子類別 -->\n\t\t\t<div *ngIf=\"category.sub_categories != ''\" class=\"navbar-nav navbar-sub sub-categories\">\n\t\t\t\t<div *ngFor=\"let sub_category of category.sub_categories\" (click)=\"onClicked(sub_category.id)\" class=\"nav-link sub-category\">\n\t\t\t\t\t{{ sub_category.name }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\t\n\t</ul>\n</nav>"

/***/ }),

/***/ "./src/app/layout/category/category.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/category/category.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav {\n  width: 100%; }\n  .navbar-nav .nav-link {\n    margin: 0.25rem 0;\n    cursor: pointer; }\n  .navbar-sub {\n  left: 0;\n  position: absolute;\n  display: none;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-top: 1px solid #dcddde;\n  background-color: #f8f9fa; }\n  .navbar-fixed-block {\n  height: 96px; }\n"

/***/ }),

/***/ "./src/app/layout/category/category.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/category/category.component.ts ***!
  \*******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
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

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getCategoryList();
    };
    //output id
    CategoryComponent.prototype.onClicked = function ($event) {
        console.log($event);
        //output data
        this.childEvent.emit($event);
    };
    //取得類別列表
    CategoryComponent.prototype.getCategoryList = function () {
        var _this = this;
        var url;
        var paramObject = {
            'website_id': 1,
            'parent_id': 0,
        };
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/category?" + param;
        this.http.getHttp(url).subscribe(function (res) {
            _this.categories = res.categories;
            console.log(res);
            _this.uiControl();
        });
    };
    // ui jquery
    CategoryComponent.prototype.uiControl = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            // 主類別
            jquery__WEBPACK_IMPORTED_MODULE_4__('.category').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.sub-categories').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).siblings('.sub-categories').css('display', 'flex');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.category').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_4__('.sub-category').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass('active');
            });
            // 子類別
            jquery__WEBPACK_IMPORTED_MODULE_4__('.sub-category').click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.sub-category').removeClass('active');
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass('active');
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "childEvent", void 0);
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/layout/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/layout/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/layout/content/content.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- banner -->\n<section>\n\t<app-banner [inputType]=\"'home'\"></app-banner>\n</section>\n\n<!-- 心理測驗 -->\n<section *ngIf=\"layoutService.module.home_test.block.status\" class=\"theme-test\">\n\n\t<div class=\"section-heading\">\n\t\t<!-- <h4>{{ layoutService.module.home_test.block.title }}</h4> -->\n\t\t<p>{{ layoutService.module.home_test.modules[1].content }}</p>\n\t</div>\n\t\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\t  \t<div class=\"row\">\n\t    \t<div class=\"col-sm-6\">\n\t    \t\t<!-- <img src=\"{{ fileUrl }}{{ layoutService.module.home_test.modules[0].content }}\" > -->\n\t    \t\t<div \n\t    \t\t\tclass=\"media-cover\"\n\t    \t\t\t[ngStyle]=\"{'background-image':'url(' + fileUrl + layoutService.module.home_test.modules[0].content + ')'}\"\n\t    \t\t>\n\t    \t\t</div>\n\t    \t</div>\n\n\t    \t<!-- 列表 -->\n\t    \t<div class=\"col-sm-6\">\n      \t\t<div *ngIf=\"list.tests\">\n\n      \t\t\t<swiper [config]=\"config1\" class=\"swiper-media\">\n      \t\t\t  <div *ngFor=\"let test of list.tests\">\n      \t\t\t    <div class=\"media mb-0\">\n      \t\t\t    \t<div class=\"media-header\">\n      \t\t\t    \t\t<a routerLink=\"/psychology/questionnaire/{{ test.id }}\">\n      \t\t\t    \t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + test.image + ')'}\"></div>\n      \t\t\t    \t\t</a>\n      \t\t\t    \t</div>\n      \t\t\t    \t<div class=\"media-body\">\n    \t\t\t    \t\t\t<h5 class=\"media-title single-line\">\n    \t\t\t    \t\t\t\t<a routerLink=\"/psychology/questionnaire/{{ test.id }}\">{{ test.title }}</a>\n    \t\t\t    \t\t\t</h5>\n      \t\t\t    \t\t<div class=\"media-info\">\n    \t\t\t    \t\t\t\t<p class=\"media-text\">{{ test.summary }}</p>\n    \t\t\t    \t\t\t\t<p class=\"media-text\">作者: {{ test.writer.name }}</p>\n    \t\t\t    \t\t\t\t<p class=\"media-text\">日期: {{ test.post_date }}</p>\n    \t\t\t    \t\t\t\t<p class=\"media-text\">觀看人數: {{ test.viewed }}</p>\n      \t\t\t    \t\t</div>\n      \t\t\t    \t\t<div class=\"media-button\">\n      \t\t\t    \t\t\t<a routerLink=\"/psychology/questionnaire/{{ test.id }}\" class=\"btn btn-test\">開始測驗</a>\n      \t\t\t    \t\t</div>\n      \t\t\t    \t</div>\n      \t\t\t    </div>\n      \t\t\t  </div>\n      \t\t\t</swiper>\n\n\t\t\t\t\t</div>\n\t    \t</div>\n\n\t  \t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!-- 電子書 -->\n<section *ngIf=\"layoutService.module.home_ebook.block.status\" class=\"theme-ebook\">\n\t\n\t<div class=\"section-heading\">\n\t\t<!-- <h4>{{ layoutService.module.home_ebook.block.title }}</h4> -->\n\t\t<p>{{ layoutService.module.home_ebook.modules[0].content }}</p>\n\t</div>\n\n\t<!-- 列表 -->\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\t\t\t<div *ngIf=\"list\">\n\n\t\t\t\t<swiper [config]=\"config2\" class=\"swiper-card\">\n\t\t\t  \t<div *ngFor=\"let ebook of list.ebooks\">\n\t\t\t  \t  <div class=\"card card-border card-ebook mb-0\">\n\t\t\t  \t  \t<div class=\"card-header\">\n\t\t\t  \t  \t\t<a [routerLink]=\"['/product/ebook/info', ebook.id]\">\n\t\t\t  \t  \t\t\t<div class=\"card-img-top\" [ngStyle]=\"{'background-image':'url(' + fileUrl + ebook.image + ')'}\"></div>\n\t\t\t  \t  \t\t</a>\n\t\t\t  \t  \t</div>\t\n\t\t\t  \t  \t<div class=\"card-body\">\n\t\t\t  \t  \t\t<h6 class=\"card-title multiline\">\n\t\t\t  \t  \t\t\t<a [routerLink]=\"['/product/ebook/info', ebook.id]\">\n\t\t\t  \t  \t\t\t\t<span>{{ ebook.name }}</span>\n\t\t\t  \t  \t\t\t</a>\n\t\t\t  \t  \t\t</h6>\n\t\t\t  \t  \t  <p class=\"card-text\">作者: {{ ebook.writer.name }}</p>\n\t\t\t  \t  \t  <p class=\"card-text\">購買人數: {{ ebook.sell_quantity }}</p>\n\t\t\t  \t  \t  <p class=\"card-text\">購買金額: <strong>{{ ebook.price }}</strong></p>\n\t\t\t  \t  \t  <div class=\"btn-group-block btn-group-ebook\">\n\t\t\t  \t  \t  \t<app-cart-add [input_pId]=\"ebook.id\" [add_check]=false [product_type]=\"ebook.type\" [add_status]=\"ebook.add_cart_status\"></app-cart-add>\n\t\t\t  \t  \t  </div>\n\t\t\t  \t  \t</div>\n\t\t\t  \t  </div>\n\t\t\t  \t</div>\n\t\t\t  </swiper>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</section>\n\n\n<!-- 線上課程 -->\n<section *ngIf=\"layoutService.module.home_course.block.status\" class=\"theme-course\">\n\t\n\t<div class=\"section-heading\">\n\t\t<!-- <h4>{{ layoutService.module.home_course.block.title }}</h4> -->\n\t\t<p>{{ layoutService.module.home_course.modules[1].content }}</p>\n\t</div>\n\t\n\t<!-- 列表 -->\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\t  \t<div class=\"row\">\n\t    \t<div class=\"col-sm-6\">\n\t    \t\t<!-- <img src=\"{{ fileUrl }}{{ layoutService.module.home_course.modules[0].content }}\" > -->\n\t    \t\t<div \n\t    \t\t\tclass=\"media-cover\"\n\t    \t\t\t[ngStyle]=\"{'background-image':'url(' + fileUrl + layoutService.module.home_course.modules[0].content + ')'}\"\n\t    \t\t>\n\t    \t\t</div>\n\t    \t</div>\n\n\t    \t<div class=\"col-sm-6\">\n      \t\t<div *ngIf=\"list\">\n\t\t\t\t\t\t\n      \t\t\t<swiper [config]=\"config1\" class=\"swiper-media\">\n\t\t\t\t\t\t\t<div *ngFor=\"let course of list.courses\">\n\t\t\t\t\t\t\t\t<div class=\"media mb-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-header\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/product/course/info', course.id]\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + course.image + ')'}\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t    \t<h5 class=\"media-title multiline\">\n\t\t\t\t\t\t\t    \t\t<a [routerLink]=\"['/product/course/info', course.id]\">\n\t\t\t\t\t\t\t    \t\t\t<span>{{ course.name }}</span>\n\t\t\t\t\t\t\t    \t\t</a>\n\t\t\t\t\t\t\t    \t</h5>\n\t\t\t\t\t\t\t      <div class=\"media-info\">\n\t\t\t\t\t\t      \t\t<p class=\"media-text\">作者: {{ course.writer.name }}</p>\n\t\t\t\t\t\t      \t\t<!-- <p class=\"media-text\">作者大頭照: <img src=\"{{ fileUrl }}{{ course.writer.avatar }}\" width=\"100\"></p> -->\n\t\t\t\t\t\t      \t\t<p class=\"media-text\">課程時間: {{ course.detail.hour }}</p>\n\t\t\t\t\t\t      \t\t<p class=\"media-text\">購買人數: {{ course.sell_quantity }}</p>\n\t\t\t\t\t\t      \t\t<p class=\"media-text\">購買金額: {{ course.price }}</p>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t      <div class=\"media-button\">\n\t\t\t      \t      \t<div class=\"btn-group btn-group-course\">\n\t\t\t      \t\t      \t<app-cart-add [input_pId]=\"course.id\" [add_check]=false [product_type]=\"course.type\" [add_status]=\"course.add_cart_status\"></app-cart-add>\n\t\t\t      \t\t      \t<app-buy-later [input_pId]=\"course.id\" [add_check]=false [add_status]=\"course.add_cart_status\"></app-buy-later>\n\t\t\t      \t      \t</div>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</swiper>\n\n\t\t\t\t\t</div>\n\t    \t</div>\n\n\t  \t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!-- 文章 -->\n<section *ngIf=\"layoutService.module.home_article.block.status\" class=\"theme-article\">\n\t\n\t<div class=\"section-heading\">\n\t\t<!-- <h4>{{ layoutService.module.home_article.block.title }}</h4> -->\n\t\t<p>{{ layoutService.module.home_article.modules[1].content }}</p>\n\t</div>\n\t\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\t  \t<div class=\"row\">\n\t    \t<div class=\"col-sm-6\">\n\t    \t\t<!-- <img src=\"{{ fileUrl }}{{ layoutService.module.home_article.modules[0].content }}\" > -->\n\t    \t\t<div \n\t    \t\t\tclass=\"media-cover\"\n\t    \t\t\t[ngStyle]=\"{'background-image':'url(' + fileUrl + layoutService.module.home_article.modules[0].content + ')'}\"\n\t    \t\t>\n\t    \t\t</div>\n\t    \t</div>\n\n\t    \t<!-- 列表 -->\n\t    \t<div class=\"col-sm-6\">\n      \t\t<div *ngIf=\"list\">\n\n      \t\t\t<swiper [config]=\"config1\" class=\"swiper-media\">\n  \t\t\t\t\t\t<div *ngFor=\"let article of list.articles\">\n  \t\t\t\t\t\t\t<div class=\"media mb-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"media-header\">\n\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/writer/article/read/{{ article.id }}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + article.image + ')'}\"></div>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t      \t<h5 class=\"media-title multiline\">\n\t\t\t\t\t\t      \t\t<a routerLink=\"/writer/article/read/{{ article.id }}\">\n\t\t\t\t\t\t      \t\t\t<span>{{ article.title }}</span>\n\t\t\t\t\t\t      \t\t</a>\n\t\t\t\t\t\t      \t</h5>\n\t\t\t\t\t\t\t      <div class=\"media-info\">\n\t\t\t\t\t\t\t      \t<!-- <p>摘要: {{ article.summary }}</p> -->\n\t\t\t\t\t\t\t      \t<p class=\"media-text\">作者: {{ article.writer.name }}</p>\n\t\t\t\t\t\t\t      \t<p class=\"media-text\">日期: {{ article.post_date }}</p>\n\t\t\t\t\t\t\t      \t<p class=\"media-text\">觀看人數: {{ article.viewed }}</p>\t\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t      <div class=\"media-button\">\n\t\t\t\t\t\t\t      \t<a routerLink=\"/writer/article/read/{{ article.id }}\" class=\"btn btn-article\">前往閱讀</a>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t    </div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t</div>\n\t\t\t\t\t\t</swiper>\n\n\t\t\t\t\t</div>\n\t    \t</div>\n\n\t  \t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!-- 實體活動 -->\n<section *ngIf=\"layoutService.module.home_activity.block.status\" class=\"theme-activity\">\n\n\t<div class=\"section-heading\">\n\t\t<!-- <h4>{{ layoutService.module.home_activity.block.title }}</h4> -->\n\t\t<p>{{ layoutService.module.home_activity.modules[1].content }}</p>\n\t</div>\n\t\n\t<div class=\"section-contents\">\n\t\t<div class=\"container\">\n\t  \t<div class=\"row\">\n\t    \t<div class=\"col-sm-6\">\n\t    \t\t<!-- <img src=\"{{ fileUrl }}{{ layoutService.module.home_activity.modules[0].content }}\" > -->\n\t    \t\t<div \n\t    \t\t\tclass=\"media-cover\"\n\t    \t\t\t[ngStyle]=\"{'background-image':'url(' + fileUrl + layoutService.module.home_activity.modules[0].content + ')'}\"\n\t    \t\t>\n\t    \t\t</div>\n\t    \t</div>\n\n\t    \t<!-- 列表 -->\n\t    \t<div class=\"col-sm-6\">\n      \t\t<div *ngIf=\"list\">\n\n      \t\t\t<swiper [config]=\"config3\" class=\"swiper-media\">\n    \t\t\t\t\t<div *ngFor=\"let activity of list.activities\">\n    \t\t\t\t\t\t<div class=\"media media-height-2 mb-0\">\n    \t\t\t\t\t\t\t<div class=\"media-header\">\n    \t\t\t\t\t\t\t\t<a [routerLink]=\"['/product/activity/info', activity.id]\">\n    \t\t\t\t\t\t\t\t\t<div class=\"media-image\" [ngStyle]=\"{'background-image':'url(' + fileUrl + activity.image + ')'}\"></div>\n    \t\t\t\t\t\t\t\t</a>\n    \t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t<div class=\"media-body\">\n    \t\t\t\t\t      <h5 class=\"media-title multiline\">\n    \t\t\t\t\t      \t<a [routerLink]=\"['/product/activity/info', activity.id]\">\n    \t\t\t\t\t      \t\t<span>{{ activity.name }}</span>\n    \t\t\t\t\t      \t</a>\n    \t\t\t\t\t      </h5>\n    \t\t\t\t\t\t\t\t<div class=\"media-info\">\n    \t\t\t\t\t\t\t\t\t<div class=\"media-avatar\">\n    \t\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-lg theme-activity\" [ngStyle]=\"{'background-image':'url(' + fileUrl + activity.writer.avatar + ')'}\"></div>\n    \t\t\t\t\t\t\t\t\t\t<span class=\"avatar-text\">{{ activity.writer.name }}</span>\n    \t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t\t<p class=\"media-summary multiline\">\n    \t\t\t\t\t\t\t\t\t\t<span>{{ activity.summary }}</span>\n    \t\t\t\t\t\t\t\t\t</p>\n    \t\t\t\t\t\t\t\t\t<p class=\"media-text\">活動時間: {{ activity.detail.activity_date }}</p>\n    \t\t\t\t\t\t\t\t\t<p class=\"media-text\">購買人數: {{ activity.sell_quantity }}</p>\n    \t\t\t\t\t\t\t\t\t<p class=\"media-text\">購買金額: <strong>{{ activity.price }}</strong></p>\n    \t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t<div class=\"media-button\">\n    \t\t\t\t\t\t\t\t\t<div class=\"btn-group-activity theme-activity\">\n    \t\t\t\t\t\t\t\t\t\t<app-cart-add [input_pId]=\"activity.id\" [add_check]=true [product_type]=\"activity.type\" [add_status]=\"activity.add_cart_status\"></app-cart-add>\n    \t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t\t</div>\n    \t\t\t\t\t\t</div>\n    \t\t\t\t\t</div>\n      \t\t\t</swiper>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t    \t</div>\n\n\t  \t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/layout/content/content.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .banner-item-image {\n  height: 800px !important; }\n\n.media {\n  border-bottom: 0; }\n\n.media:not(.media-height-2) .media-button {\n    right: 1rem;\n    bottom: 0.75rem;\n    position: absolute; }\n"

/***/ }),

/***/ "./src/app/layout/content/content.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/content/content.component.ts ***!
  \*****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
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




var ContentComponent = /** @class */ (function () {
    function ContentComponent(layoutService, httpService) {
        this.layoutService = layoutService;
        this.httpService = httpService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        this.list = {};
        this.config1 = {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 0,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        this.config2 = {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        this.config3 = {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.layoutService.getModule('home_test');
        this.layoutService.getModule('home_ebook');
        this.layoutService.getModule('home_activity');
        this.layoutService.getModule('home_course');
        this.layoutService.getModule('home_writer');
        this.layoutService.getModule('home_article');
        //list
        this.getList('tests', '/api/content/psychological-test/home?website_id=1');
        this.getList('articles', '/api/content/article/home?website_id=1');
        this.getList('activities', '/api/shop/product/home?type=activity&website_id=1');
        this.getList('ebooks', '/api/shop/product/home?type=e-book&website_id=1');
        this.getList('courses', '/api/shop/product/home?type=course&website_id=1');
    };
    //取得首頁各類別的清單
    ContentComponent.prototype.getList = function (zone, url) {
        var _this = this;
        url = "" + _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + url;
        this.httpService.getHttp(url).subscribe(function (res) {
            Object.keys(res).map(function (key) { return _this.list[zone] = res[key]; });
            console.log(_this.list);
        });
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/layout/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <h5>關於花園</h5>\n            <ul>\n              <li *ngFor=\"let item of footer.position_1\">\n                <a href=\"{{ item.link }}\">{{ item.title }}</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-sm\">\n            <h5>關於商城</h5>\n            <ul>\n              <li *ngFor=\"let item of footer.position_2\">\n                <a href=\"{{ item.link }}\">{{ item.title }}</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-sm\">\n            <h5>常見問題</h5>\n            <ul>\n              <li *ngFor=\"let item of footer.position_3\">\n                <a href=\"{{ item.link }}\">{{ item.title }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"footer-social\">\n          <a href=\"https://www.facebook.com/inbound.tw/\" target=\"_blank\"><i data-icon=\"\"></i></a>\n          <a href=\"https://www.instagram.com/inbound.tw/\" target=\"_blank\"><i data-icon=\"\"></i></a>\n          <a href=\"https://www.youtube.com/channel/UCUNfabP37V50n8MzOzgdTUg\" target=\"_blank\"><i data-icon=\"\"></i></a>\n          <a href=\"support@inbound.tw\" target=\"_blank\" class=\"icon-email\"><i data-icon=\"\"></i></a>\n        </div>\n        <div class=\"footer-copyright\">Copyright © 英邦德科技股份有限公司</div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding: 4rem 0;\n  color: #dcddde;\n  background-color: #58595b; }\n  .footer ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .footer ul li a {\n      color: #dcddde; }\n  .footer .footer-social {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 0.25rem; }\n  .footer .footer-social a {\n      margin-right: 0.75rem;\n      color: #dcddde; }\n  .footer .footer-social a:hover {\n        text-decoration: none; }\n  .footer .footer-social a.icon-email i:before {\n        position: relative;\n        top: -3px; }\n  .footer .footer-social a i:before {\n        font-size: 1.8rem; }\n  .footer .footer-copyright {\n    font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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



var FooterComponent = /** @class */ (function () {
    function FooterComponent(httpService) {
        this.httpService = httpService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.getFooter();
    };
    FooterComponent.prototype.getFooter = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/footer?website_id=1";
        this.httpService.getHttp(url).subscribe(function (res) { return _this.footer = res.footer; });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/google-search/google-search.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/google-search/google-search.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  google-search works!\n</p>\n\n<input type=\"text\" [(ngModel)]=\"search\">\n<button (click)=\"getGSearchResult()\">search</button>"

/***/ }),

/***/ "./src/app/layout/google-search/google-search.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/google-search/google-search.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/google-search/google-search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/google-search/google-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: GoogleSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSearchComponent", function() { return GoogleSearchComponent; });
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



var GoogleSearchComponent = /** @class */ (function () {
    function GoogleSearchComponent(httpService) {
        this.httpService = httpService;
    }
    GoogleSearchComponent.prototype.ngOnInit = function () {
    };
    GoogleSearchComponent.prototype.getGSearchResult = function () {
        var url = "https://www.googleapis.com/customsearch/v1?key=" + _models_config_model__WEBPACK_IMPORTED_MODULE_2__["GoogleSearchKey"] + "&cx=" + _models_config_model__WEBPACK_IMPORTED_MODULE_2__["GoogleSearchID"] + "&q=" + this.search;
        this.httpService.getHttp(url).subscribe(function (res) { return console.log(res); });
    };
    GoogleSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-search',
            template: __webpack_require__(/*! ./google-search.component.html */ "./src/app/layout/google-search/google-search.component.html"),
            styles: [__webpack_require__(/*! ./google-search.component.scss */ "./src/app/layout/google-search/google-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], GoogleSearchComponent);
    return GoogleSearchComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header sticky-top theme-home-light\"\n\t[ngClass]=\"{\n\t\t'theme-home-light': true,\n\t\t'theme-test-light': test.isActive,\n\t\t'theme-ebook-light': ebook.isActive,\n\t\t'theme-course-light': course.isActive,\n\t\t'theme-article-light': article.isActive,\n\t\t'theme-activity-light': activity.isActive,\n\t\t'theme-writer-light': writer.isActive,\n\t\t'theme-diary-light': diary.isActive\n\t}\"\n>\n\t\n\t<!-- gnb -->\n\t<nav class=\"navbar navbar-expand-lg navbar-gnb\">\n\t\t<a class=\"navbar-brand brand-logo\" routerLink=\"/\"></a>\n\t\t<a class=\"navbar-brand\" routerLink=\"/\">失落戀花園</a>\n\t\t\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n\t\t\t<!-- <form class=\"form-inline my-2 my-lg-0\">\n\t\t\t\t<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n\t\t\t\t<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n\t\t\t</form> -->\n\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"nav-link\">\n\t\t\t\t\t\t<svg viewBox=\"0 0 16 16\" role=\"presentation\" aria-hidden=\"true\" focusable=\"false\" style=\"height:18px;width:18px;display:block;fill:currentColor\"><path d=\"m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7\"></path></svg>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"!memberService.user\"><a href=\"javascript:void(0);\" class=\"nav-link\" (click)=\"login()\">登入/註冊</a></li>\n\t\t\t\t<!-- <li class=\"nav-item\" *ngIf=\"memberService.user\">\n\t\t\t\t\t<img *ngIf=\"memberService.user.avatar==''\" src=\"{{ config.defaultAvatar }}\" width=\"50\">\n\t\t\t\t\t<img *ngIf=\"memberService.user.avatar!=''\" src=\"{{ config.FileUrl }}{{ memberService.user.avatar }}\" width=\"50\">\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"memberService.user\">\n\t\t\t\t\t<a class=\"nav-link\">\n\t\t\t\t\t\t<div *ngIf=\"memberService.user.avatar==''\" class=\"avatar\" [ngStyle]=\"{'background-image':'url(' + config.defaultAvatar + ')'}\"></div>\n\t\t\t\t\t\t<div *ngIf=\"memberService.user.avatar!=''\" class=\"avatar\" [ngStyle]=\"{'background-image':'url(' + config.FileUrl + memberService.user.avatar + ')'}\"></div>\n\t\t\t\t\t\tHI~{{ memberService.user.name }}\n\t\t\t\t\t\t<span *ngIf=\"memberService.mailCount > 0\" class=\"badge badge-pill badge-danger\">{{ memberService.mailCount }}</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<!-- <li class=\"nav-item\" *ngIf=\"memberService.mailCount > 0\">{{ memberService.mailCount }}</li> -->\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"memberService.user\"><app-logout></app-logout></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/member\">會員中心</a></li>\n\t\t\t\t\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/cart\">購物車<app-cart-count></app-cart-count></a>\n\t\t\t\t<!-- <li class=\"nav-item\"><app-cart-count></app-cart-count></li> -->\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\t\n\t<!-- lnb -->\n\t<nav class=\"navbar navbar-expand-lg navbar-lnb\">\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-test-light\" routerLinkActive=\"active\" routerLink=\"/psychology\" #test=\"routerLinkActive\">心理測驗</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-ebook-light\" routerLinkActive=\"active\" routerLink=\"/product/ebook\" #ebook=\"routerLinkActive\">電子書</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-course-light\" routerLinkActive=\"active\" routerLink=\"/product/course\" #course=\"routerLinkActive\">線上課程</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-article-light\" routerLinkActive=\"active\" routerLink=\"/writer/article\" #article=\"routerLinkActive\">文章</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-activity-light\" routerLinkActive=\"active\" routerLink=\"/product/activity\" #activity=\"routerLinkActive\">實體活動</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-writer-light\" routerLinkActive=\"active\" routerLink=\"/writer\" #writer=\"routerLinkActive\" [routerLinkActiveOptions]=\"{exact: true}\">作者專區</a></li>\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link nav-link-diary-light\" routerLinkActive=\"active\" routerLink=\"/diary_cover\" #diary=\"routerLinkActive\">日記本</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\n</header>"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.navbar-gnb {\n  position: relative;\n  z-index: 1000;\n  height: 70px;\n  padding-top: 1rem;\n  background-color: currentColor; }\n\n.navbar-gnb .brand-logo {\n    width: 110px;\n    height: 110px;\n    display: flex;\n    align-self: flex-start;\n    background: currentColor url(/assets/img/brand_logo.png) 50% 50%/cover no-repeat;\n    margin-top: -1rem;\n    color: inherit; }\n\n.navbar-gnb .navbar-brand {\n    font-size: 1.5rem; }\n\n.navbar-gnb .navbar-collapse {\n    justify-content: flex-end; }\n\n.navbar-gnb .nav-item {\n    display: flex;\n    align-items: center;\n    position: relative; }\n\n.navbar-gnb .nav-item:first-child:after, .navbar-gnb .nav-item:last-child:after {\n      content: \"\"; }\n\n.navbar-gnb .nav-item:after {\n      position: absolute;\n      right: -2px;\n      content: \"|\";\n      margin-top: -1px;\n      opacity: 0.3; }\n\n.navbar-gnb .nav-item .nav-link {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n.navbar-gnb .nav-item .avatar {\n      border: 0; }\n\n.navbar-lnb {\n  background-color: #fff; }\n\n.navbar-lnb .navbar-nav {\n    margin-left: 112px; }\n\n.navbar-lnb .navbar-nav .nav-item {\n      margin: 0 1px;\n      min-width: 100px;\n      text-align: center; }\n\n.navbar-lnb .navbar-nav .nav-item .nav-link {\n        color: #fff;\n        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n.nav-link-home-light {\n  background-color: #fbdad1; }\n\n.nav-link-home-light:hover {\n    background-color: #f7b4a2; }\n\n.nav-link-test-light {\n  background-color: #debaa8; }\n\n.nav-link-test-light:hover {\n    background-color: #d09d83; }\n\n.nav-link-ebook-light {\n  background-color: #c2e3da; }\n\n.nav-link-ebook-light:hover {\n    background-color: #9fd3c5; }\n\n.nav-link-course-light {\n  background-color: #ead9a5; }\n\n.nav-link-course-light:hover {\n    background-color: #e0c87c; }\n\n.nav-link-article-light {\n  background-color: #a5bbcb; }\n\n.nav-link-article-light:hover {\n    background-color: #85a3b8; }\n\n.nav-link-activity-light {\n  background-color: #facea7; }\n\n.nav-link-activity-light:hover {\n    background-color: #f7b377; }\n\n.nav-link-writer-light {\n  background-color: #c9caca; }\n\n.nav-link-writer-light:hover {\n    background-color: #afb1b1; }\n\n.nav-link-diary-light {\n  background-color: #d5dabc; }\n\n.nav-link-diary-light:hover {\n    background-color: #c0c89b; }\n\n.nav-link-member-light {\n  background-color: #c9caca; }\n\n.nav-link-member-light:hover {\n    background-color: #afb1b1; }\n\n.nav-link-home-light.active {\n  background-color: #d63845; }\n\n.nav-link-test-light.active {\n  background-color: #85656d; }\n\n.nav-link-ebook-light.active {\n  background-color: #4a8f81; }\n\n.nav-link-course-light.active {\n  background-color: #b48534; }\n\n.nav-link-article-light.active {\n  background-color: #3a5778; }\n\n.nav-link-activity-light.active {\n  background-color: #d66c48; }\n\n.nav-link-writer-light.active {\n  background-color: #58595b; }\n\n.nav-link-diary-light.active {\n  background-color: #a0aa58; }\n\n.nav-link-member-light.active {\n  background-color: #58595b; }\n\n:host /deep/ .nav-link {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important; }\n\n:host /deep/ .badge-danger {\n  top: -5px;\n  right: 0;\n  position: absolute;\n  padding-top: 0.15em;\n  padding-bottom: 0.15em;\n  font-weight: 400;\n  background-color: #d63845; }\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //popup dialog

 //接收route para
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, route, cookieService, httpService, memberService, dialog) {
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.httpService = httpService;
        this.memberService = memberService;
        this.dialog = dialog;
        this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_2__;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.cookieService.getCookie('name');
        if (this.user)
            this.memberService.getUser();
    };
    HeaderComponent.prototype.login = function () {
        console.log(this.router.url);
        this.openDialog(this.router.url);
    };
    //開啟pop up
    HeaderComponent.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _member_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService) {
        this.httpService = httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/member/cart/cart.component.css":
/*!************************************************!*\
  !*** ./src/app/member/cart/cart.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/cart/cart.component.html":
/*!*************************************************!*\
  !*** ./src/app/member/cart/cart.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tcart works!\n</p>\n<div *ngIf=\"products.length==0\">\n\t購物車無商品\n</div>\n\n<div *ngIf=\"products.length!=0\" >\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t<th scope=\"col\">商品圖片</th>\n\t\t\t\t<th scope=\"col\">商品名稱</th>\n\t\t\t\t<th scope=\"col\">商品類型</th>\n\t\t\t\t<th scope=\"col\">金額</th>\n\t\t\t\t<th scope=\"col\">購買數量</th>\n\t\t\t\t<th scope=\"col\">小計</th>\n\t\t\t\t<th scope=\"col\">操作</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let product of products; let i = index\">\n\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\n\t\t\t\t<td><img src=\"{{ fileUrl }}{{ product.image }}\" width=\"50\" /></td>\n\t\t\t\t<td>{{ product.name }}</td>\n\t\t\t\t<td>{{ product.type }}</td>\n\t\t\t\t<td>{{ product.price }}</td>\n\t\t\t\t<td *ngIf=\"product.type=='activity'\"><input type=\"number\" [(ngModel)]=\"product.quantity\" (ngModelChange)=\"changeQuantity(product.id, product.quantity)\"></td>\n\t\t\t\t<td *ngIf=\"product.type!='activity'\">{{ product.quantity }}</td>\n\t\t\t\t<td>{{ product.price*product.quantity }}</td>\n\t\t\t\t<td><a (click)=\"deleteItem(product.id)\">刪除</a></td>\n\n\t\t\t\t<div *ngIf=\"checkQuantity(product.quantity,product.product_now_quantity)\" class=\"alert alert-danger\">\n\t      \t\t\t購買數量不可超過庫存(剩餘庫存:{{ product.product_now_quantity }})\n\t      \t\t\t{{ product.quantity }}\n\t        \t</div>\t\n\n\t        \t<div *ngIf=\"product.status != 1\" class=\"alert alert-danger\">\n\t      \t\t\t此產品已下架，請從購物車中刪除\n\t        \t</div>\t\n\n\t        \t<div *ngIf=\"product.quantity <=0\" class=\"alert alert-danger\">\n\t      \t\t\t請輸入產品數量且不可小於或等於0\n\t        \t</div>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"row\"></th>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td>總計</td>\n\t\t\t\t<td>{{ total }}</td>\n\t\t\t\t<td></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\n\t<button (click)=\"sentCart()\">下一步</button>\n\t<a [routerLink]=\"['/']\">繼續選購</a>\n</div>"

/***/ }),

/***/ "./src/app/member/cart/cart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/member/cart/cart.component.ts ***!
  \***********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



 //接收route para

var CartComponent = /** @class */ (function () {
    function CartComponent(productService, httpService, router, route) {
        this.productService = productService;
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    //html內容改變時
    CartComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        //計算總和
        this.total = Object.keys(this.products).reduce(function (runningValue, key) {
            return runningValue = runningValue + (_this.products[key].price * _this.products[key].quantity);
        }, 0);
    };
    //檢查庫存
    CartComponent.prototype.checkQuantity = function (quantity, product_quantity) {
        if (Number(quantity) > Number(product_quantity)) {
            return true;
        }
        else {
            return false;
        }
    };
    //刪除商品
    CartComponent.prototype.deleteItem = function (pId) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/cart/product?product_id=" + pId;
        this.httpService.deleteHttp(url).subscribe(function (res) {
            _this.productService.getCartNumber();
            _this.products = res.products;
        });
    };
    //取得購物車內容
    CartComponent.prototype.getCart = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/cart";
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.productService.getCartNumber();
            _this.products = res.products;
        });
    };
    //變更購買數量
    CartComponent.prototype.changeQuantity = function (id, quantity) {
        var _this = this;
        if (quantity) {
            if (quantity <= 0) {
                return;
            }
            var params = new FormData();
            params.append('product_id', id);
            params.append('quantity', quantity);
            params.append('_method', "PUT");
            var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/cart/product";
            this.httpService.postHttp(url, params).subscribe(function (res) {
                _this.productService.getCartNumber();
                _this.products = res.products;
            });
        }
    };
    //檢查是否可以送出
    CartComponent.prototype.checkCart = function () {
        var _this = this;
        var filter_cart = Object.keys(this.products).filter(function (key) { return (Number(_this.products[key].quantity) > Number(_this.products[key].product_now_quantity) || _this.products[key].status != 1 || Number(_this.products[key].quantity <= 0)); });
        console.log(filter_cart);
        return filter_cart.length;
    };
    //送出購物車
    CartComponent.prototype.sentCart = function () {
        //重新讀取購物車內容
        //let url = `${Config.APIUrl}/api/shop/cart`;
        //this.httpService.getHttp(url).subscribe(
        //res => {
        //this.products = res.products;
        //檢查
        var check = this.checkCart();
        if (check != 0)
            return;
        //進入下一步
        this.router.navigate(['../order_edit'], { relativeTo: this.route });
        //}
        //);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/member/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/member/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/member/member.service.ts":
/*!******************************************!*\
  !*** ./src/app/member/member.service.ts ***!
  \******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberService = /** @class */ (function () {
    function MemberService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    MemberService.prototype.getUserInfo = function () {
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/user";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log(res);
            return res;
        }));
    };
    //取得(更新)Header的使用者資訊 和 未讀訊息數量
    MemberService.prototype.getUser = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/user";
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.user = res;
            console.log(res);
            //未讀訊息數量
            _this.mailReadCount();
        });
    };
    //取得(更新)Header的使用者資訊 和 未讀訊息數量 
    MemberService.prototype.setUserLogin = function (data) {
        //const url = `${Config.APIUrl}/api/user`;
        //this.httpService.getHttp(url).subscribe(res => {
        this.user = data.user_info;
        this.mailCount = data.mail_notify;
    };
    //未讀訊息數量
    MemberService.prototype.mailReadCount = function () {
        var _this = this;
        var end_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-US');
        var paramObject = {
            'start_date': '1990-01-01',
            'end_date': end_date,
            'read': 0
        };
        var param = this.httpService.getParamFormat(paramObject);
        var mailurl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/member/mail/count?" + param;
        this.httpService.getHttp(mailurl).subscribe(function (res) { return _this.mailCount = res.count; });
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/member/order-edit/order-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/member/order-edit/order-edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/member/order-edit/order-edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/member/order-edit/order-edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<form [formGroup]='Form' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n    \t<label>訂購姓名:</label><br>\n        <input [ngModel]=\"user.name\" type=\"text\" formControlName=\"name\">\n      \t<div *ngIf=\"submitted && name.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"name.errors.required\">訂購姓名為必填</div>\n        </div>  \n    </div>\n\n    <div class=\"form-group\">\n      \t<label>訂購電話:</label><br>\n        <input [ngModel]=\"user.phone\" type=\"text\" formControlName=\"phone\">\n      \t<div *ngIf=\"submitted && phone.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"phone.errors.required\">訂購電話為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>聯絡信箱:</label><br>\n        <input [ngModel]=\"user.email\" type=\"text\" formControlName=\"email\" >\n      \t<div *ngIf=\"submitted && email.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"email.errors.required\">聯絡信箱為必填</div>\n            <div *ngIf=\"email.errors.pattern\">聯絡信箱須為email格式</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>國家:</label><br>\n        <input [ngModel]=\"user.country\" type=\"text\" formControlName=\"country\" >\n      \t<div *ngIf=\"submitted && country.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"country.errors.required\">聯絡信箱為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>地址:</label><br>\n        <input [ngModel]=\"user.address\" type=\"text\" formControlName=\"address\" >\n      \t<div *ngIf=\"submitted && address.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"address.errors.required\">聯絡信箱為必填</div>\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>開立發票方式:</label><br>\n        <select formControlName=\"invoice_type\" >\n        \t<option value=\"e-invoice\">電子載具</option>\n        \t<option value=\"donate\">捐贈</option>\n        </select>\n      \t<div *ngIf=\"submitted && invoice_type.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"invoice_type.errors.required\">開立發票方式為必填</div>\n        </div>\t\n    </div>\n\n    <!-- 電子載具專用 -->\n    <div *ngIf=\"invoice_type.value=='e-invoice'\" class=\"form-group\">\n\n      \t<label>載具類別:</label><br>\n        <select formControlName=\"carrier_type\" [(ngModel)]=\"carrier_type_value\" (change)=\"isCertificated(carrier_type_value)\">\n        \t<option value=\"0\">手機條碼載具</option>\n        \t<option value=\"1\">自然人憑證條碼載具</option>\n        </select>\n        <div *ngIf=\"submitted && !carrier_type_value\" class=\"alert alert-danger\">\n      \t\t載具類別為必填\n        </div>\t\n\n        <label>載具編號（手機條碼or自然人憑證號碼）:</label><br>\n        <input type=\"text\" formControlName=\"carrier_num\" [(ngModel)]=\"carrier_num_value\" (change)=\"isCertificated(carrier_type_value)\">\n      \t<div *ngIf=\"submitted && !carrier_num_value\" class=\"alert alert-danger\">\n      \t\t載具編號為必填\n        </div>\t\n        <div *ngIf=\"submitted && !carrier_reg\" class=\"alert alert-danger\">\n          載具編號不符合手機條碼or自然人憑證號碼之格式\n        </div>  \n    </div>\n\n    <!-- 捐贈 -->\n    <div *ngIf=\"invoice_type.value=='donate'\" class=\"form-group\">\n\n      \t<label>愛心碼:</label><br>\n        <select formControlName=\"love_code\" [(ngModel)]=\"love_code_value\" >\n          <option value=\"1577\">社團法人中華民國自閉症總會</option>\n          <option value=\"9527\">財團法人罕見疾病基金會</option>\n          <option value=\"599\">台灣動物不再流浪協會</option>\n          <option value=\"5299\">社團法人台灣導盲犬協會</option>\n          <option value=\"5222\">社團法人台北市愛兔協會</option>\n          <option value=\"391\">台灣預防醫學學會</option>\n          <option value=\"9487\">社團法人台灣芒草心慈善協會</option>\n          <option value=\"17930\">社團法人台灣環境資訊協會</option>\n          <option value=\"52982\">社團法人中華民國寵物友善協會</option>\n          <option value=\"111\">財團法人華山社會福利慈善事業基金會</option>\n          <option value=\"172\">流浪貓保護協會</option>\n          <option value=\"7088\"> 中華民國關懷生命協會</option>\n          <option value=\"99520\">社團法人台灣動物保護協進會</option>\n          <option value=\"4545\">社團法人台灣全民食物銀行協會</option>\n          <option value=\"52668\">社團法人臺北市支持流浪貓絕育計畫</option>\n        </select>\n   \n      \t<div *ngIf=\"submitted && !love_code_value\" class=\"alert alert-danger\">\n      \t\t愛心碼為必填\n        </div>\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>備註:</label><br>\n        <input type=\"text\" formControlName=\"comment\" >\t\n    </div>\n\n    <div class=\"form-group\">\n      \t<label>第三方支付服務條款:</label><br>\n        <input type=\"checkbox\" formControlName=\"thirdparty\" >我同意第三方支付服務條款\n      \t<div *ngIf=\"submitted && thirdparty.invalid\" class=\"alert alert-danger\">\n      \t\t<div *ngIf=\"thirdparty.errors.required\">需同意第三方支付服務條款</div>\n        </div>\t\n    </div>\n\n    <button class=\"btn-primary\" type=\"submit\">送出訂單</button>\n\t</form>\n</div>\n\n<!-- 購物車資訊 -->\n<div *ngIf=\"products\">\n\t<table class=\"table\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t<th scope=\"col\">商品圖片</th>\n\t\t\t\t<th scope=\"col\">商品名稱</th>\n\t\t\t\t<th scope=\"col\">商品類型</th>\n\t\t\t\t<th scope=\"col\">金額</th>\n\t\t\t\t<th scope=\"col\">購買數量</th>\n\t\t\t\t<th scope=\"col\">小計</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let product of products; let i = index\">\n\t\t\t\t<th scope=\"row\">{{ i+1 }}</th>\n\t\t\t\t<td><img src=\"{{ fileUrl }}{{ product.image }}\" width=\"50\" /></td>\n\t\t\t\t<td>{{ product.name }}</td>\n\t\t\t\t<td>{{ product.type }}</td>\n\t\t\t\t<td>{{ product.price }}</td>\n\t\t\t\t<td>{{ product.quantity }}</td>\n\t\t\t\t<td>{{ product.price*product.quantity }}</td>\n\n\t\t\t\t<div *ngIf=\"checkQuantity(product.quantity, product.product_now_quantity)\" class=\"alert alert-danger\">\n\t      \t\t\t購買數量不可超過庫存(剩餘庫存:{{ product.product_now_quantity }})\n\t        \t</div>\t\n\n\t        \t<div *ngIf=\"product.status != 1\" class=\"alert alert-danger\">\n\t      \t\t\t此產品已下架，請從購物車中刪除\n\t        \t</div>\t\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th scope=\"row\"></th>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td></td>\n\t\t\t\t<td>總計</td>\n\t\t\t\t<td>{{ total }}</td>\n\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/member/order-edit/order-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/member/order-edit/order-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(formBuilder, memberService, httpService, router, route) {
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        this.submitted = false;
        this.love_code_value = "1577";
        this.carrier_type_value = "0";
        this.carrier_reg = false;
        this.Form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$')]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            thirdparty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            invoice_type: ['e-invoice', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            carrier_type: [''],
            carrier_num: [''],
            love_code: [''],
            comment: [''],
        });
    }
    Object.defineProperty(OrderEditComponent.prototype, "name", {
        // convenience getter for easy access to form fields
        get: function () { return this.Form.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "email", {
        get: function () { return this.Form.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "phone", {
        get: function () { return this.Form.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "country", {
        get: function () { return this.Form.get('country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "address", {
        get: function () { return this.Form.get('address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "thirdparty", {
        get: function () { return this.Form.get('thirdparty'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderEditComponent.prototype, "invoice_type", {
        get: function () { return this.Form.get('invoice_type'); },
        enumerable: true,
        configurable: true
    });
    OrderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCart();
        this.memberService.getUserInfo().subscribe(function (data) { return _this.user = data; });
    };
    //取得購物車內容
    OrderEditComponent.prototype.getCart = function () {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/cart";
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.products = res.products;
            //計算總和
            _this.total = Object.keys(_this.products).reduce(function (runningValue, key) {
                return runningValue = runningValue + (_this.products[key].price * _this.products[key].quantity);
            }, 0);
        });
    };
    //檢查庫存
    OrderEditComponent.prototype.checkQuantity = function (quantity, product_quantity) {
        if (Number(quantity) > Number(product_quantity)) {
            return true;
        }
        else {
            return false;
        }
    };
    //submit form
    OrderEditComponent.prototype.onSubmit = function () {
        var _this = this;
        //判斷是否已按了送出 按了就要顯示驗證訊息
        this.submitted = true;
        //判斷電子發票資訊
        if (this.Form.value.invoice_type == 'e-invoice') {
            console.log('ee');
            if (!this.Form.value.carrier_type || !this.Form.value.carrier_num || !this.carrier_reg)
                return;
        }
        else if (this.Form.value.invoice_type == 'donate') {
            console.log(this.Form.value);
            if (!this.Form.value.love_code)
                return;
        }
        //表單沒有驗證成功 沒有動作
        if (this.Form.invalid) {
            return;
        }
        console.log(this.Form.value);
        var params = new FormData();
        Object.keys(this.Form.value).map(function (key) { return params.append(key, _this.Form.value[key]); });
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/checkout/shop";
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            console.log(res);
            switch (res.success_code) {
                case "EMPTY_CART":
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: '購物車內無商品',
                        text: '請先選購商品再送出訂單',
                        type: 'error',
                    }).then(function (success) {
                        _this.router.navigate(['/home']);
                    });
                    break;
                case "OUT_OF_STOCK":
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: '選購商品庫存不足',
                        text: '請回購物車修改商品內容',
                        type: 'error',
                    }).then(function (success) {
                        _this.router.navigate(['../cart'], { relativeTo: _this.route });
                    });
                    break;
                case "STATUS_ERROR":
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: '選購商品已下架',
                        text: '請回購物車修改商品內容',
                        type: 'error',
                    }).then(function (success) {
                        _this.router.navigate(['../cart'], { relativeTo: _this.route });
                    });
                    break;
                //成功
                default:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: '操作成功',
                        text: '查看訂單資訊',
                        type: 'success',
                    }).then(function (success) {
                        _this.router.navigate(['/member/order-detail', res.id]);
                    });
                    //console.log(res.id);
                    break;
            }
        });
    };
    //自然人憑證或手機條碼檢測
    OrderEditComponent.prototype.isCertificated = function (type) {
        //自然人憑證
        if (type == "1") {
            var regexp = /^[a-zA-Z]{2}[0-9]{14}$/;
            this.carrier_reg = regexp.test(this.carrier_num_value);
            //手機條碼
        }
        else if (type == "0") {
            var regexp = /^\/{1}[0-9A-Z]{7}$/;
            this.carrier_reg = regexp.test(this.carrier_num_value);
        }
        console.log(this.carrier_reg + this.carrier_num_value + type);
    };
    OrderEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__(/*! ./order-edit.component.html */ "./src/app/member/order-edit/order-edit.component.html"),
            styles: [__webpack_require__(/*! ./order-edit.component.css */ "./src/app/member/order-edit/order-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "./src/app/models/config.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/config.model.ts ***!
  \****************************************/
/*! exports provided: sep, version, APIUrl, FBappId, FileUrl, UploadSize, UploadVideoTime, defaultAvatar, diaryCover, GoogleRecaptcha, GoogleSearchKey, GoogleSearchID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIUrl", function() { return APIUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBappId", function() { return FBappId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUrl", function() { return FileUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadSize", function() { return UploadSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVideoTime", function() { return UploadVideoTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAvatar", function() { return defaultAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diaryCover", function() { return diaryCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleRecaptcha", function() { return GoogleRecaptcha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSearchKey", function() { return GoogleSearchKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSearchID", function() { return GoogleSearchID; });
var sep = '/';
var version = "22.2.2";
var APIUrl = "http://inbound-api.labspace.com.tw/public";
var FBappId = "578141545937739";
var FileUrl = "http://inbound-api.labspace.com.tw/storage/app/public";
var UploadSize = 2000000;
var UploadVideoTime = 5;
//預設大頭貼路徑-
var defaultAvatar = "assets/img/default_avatar.jpg";
var diaryCover = "assets/img/diary_cover.jpg";
var GoogleRecaptcha = "6LfeoHgUAAAAAHAf7STNiJyGliWQStxlOZTgq-YL";
var GoogleSearchKey = "AIzaSyBUWwYqBiUrhveEL6zxskURm7E-agdDvmw";
var GoogleSearchID = "013260005329638453905:wuqk-iaohtg";


/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
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

var CookieService = /** @class */ (function () {
    function CookieService() {
    }
    CookieService.prototype.setCookie = function (name, val) {
        var date = new Date();
        var value = val;
        // Set it expire in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        // Set it
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    };
    CookieService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    };
    CookieService.prototype.deleteCookie = function (name) {
        var date = new Date();
        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
        // Set it
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.loadingOpen = true;
    }
    HttpService.prototype.getHttp = function (url) {
        return this.http.get(url)
            .pipe(
        //retry(3),
        //catchError(this.handleError('getHttp', ['HttpError'])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorStop));
    };
    HttpService.prototype.getParamFormat = function (params) {
        console.log(Object.keys(params));
        var return_param = Object.keys(params).reduce(function (result, key, index) {
            if (index == 1) {
                return result + "=" + params[result] + "&" + key + "=" + params[key] + "&";
            }
            else {
                return "" + result + key + "=" + params[key] + "&";
            }
        });
        //console.log(return_param);
        return return_param;
    };
    HttpService.prototype.postHttp = function (url, formData, headers) {
        if (headers === void 0) { headers = {}; }
        return this.http.post(url, formData, headers)
            .pipe(
        //catchError(this.handleError('postHttp', ['HttpError'])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorStop));
    };
    HttpService.prototype.deleteHttp = function (url) {
        return this.http.delete(url)
            .pipe(
        //atchError(this.handleError('deleteHttp', ['HttpError'])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorStop));
    };
    HttpService.prototype.putHttp = function (url, putData, headers) {
        if (headers === void 0) { headers = {}; }
        return this.http.put(url, putData, headers)
            .pipe(
        //catchError(this.handleError('putHttp', ['HttpError'])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrorStop));
    };
    HttpService.prototype.handleErrorStop = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) { return observer.error(error); });
        ;
    };
    HttpService.prototype.handleError = function (operation, result) {
        //return Observable.throw("123");
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.warn(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.warn(operation + " failed: " + error.message);
            /*
            swal({
              title: 'Error!',
              text: '系統出現錯誤，請通知系統管理員',
              type: 'error',
              confirmButtonText: '確定'
            });
            */
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
            //return of(result as T);
        };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/layout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutService = /** @class */ (function () {
    function LayoutService(httpService, meta) {
        this.httpService = httpService;
        this.meta = meta;
        this.module = {};
    }
    //設定metadata
    LayoutService.prototype.setMetaId = function (id) {
        var _this = this;
        //console.log("111111111111111111111");
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/metadata?id=" + id;
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.meta.updateTag({ name: 'keyword', content: res.metadata.keyword }, "name='keyword'");
            _this.meta.updateTag({ name: 'title', content: res.metadata.title }, "name='title'");
            _this.meta.updateTag({ name: 'description', content: res.metadata.description }, "name='description'");
            /*
            this.meta.addTags([
                { name: 'keyword', content: res.metadata.keyword },
                { name: 'title', content: res.metadata.title },
                { name: 'description', content: res.metadata.description },
            ]);
            */
        });
    };
    //設定metadata
    LayoutService.prototype.setMetaData = function (metadata) {
        this.meta.updateTag({ name: 'keyword', content: metadata.keyword }, "name='keyword'");
        this.meta.updateTag({ name: 'title', content: metadata.title }, "name='title'");
        this.meta.updateTag({ name: 'description', content: metadata.description }, "name='description'");
        /*
        this.meta.addTags([
            { name: 'keyword', content: metadata.keyword },
            { name: 'title', content: metadata.title },
            { name: 'description', content: metadata.description },
        ]);
        */
    };
    //取得單一區塊內容
    LayoutService.prototype.getSummary = function (code) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/module?website_id=1&code=" + code;
        this.httpService.getHttp(url).subscribe(function (res) { return _this.page_summary = res.module.content; });
    };
    //首頁取得整個模組內的所有區塊內容
    LayoutService.prototype.getModule = function (code) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/content/block?website_id=1&code=" + code;
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.module[code] = res;
            console.log(_this.module);
        });
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token.service */ "./src/app/auth/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http, cookieService, tokenService) {
        this.http = http;
        this.cookieService = cookieService;
        this.tokenService = tokenService;
    }
    //取得購物車 數量
    ProductService.prototype.getCartNumber = function () {
        var _this = this;
        this.tokenService.loginCheck().subscribe(function (res) {
            //登入狀態
            if (res) {
                var url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/shop/cart";
                _this.http.getHttp(url).subscribe(function (res) {
                    _this.number = res.sum_quantity;
                });
                //not login
            }
            else {
                var cart = _this.cookieService.getCookie('cart');
                var cartArray_1 = {};
                if (cart)
                    cartArray_1 = JSON.parse(cart);
                //計算總和
                _this.number = Object.keys(cartArray_1).reduce(function (runningValue, key) {
                    return runningValue = runningValue + cartArray_1[key];
                }, 0);
            }
        });
    };
    //取得商品列表
    ProductService.prototype.getProductList = function (paramObject) {
        var url;
        //console.log(paramObject);
        var param = this.http.getParamFormat(paramObject);
        url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/shop/product?" + param;
        return this.http.getHttp(url);
    };
    //將cookie購物車內容合併至DB
    ProductService.prototype.mergeCookieCart = function () {
        var _this = this;
        var cart = this.cookieService.getCookie('cart');
        if (cart) {
            var url = void 0;
            var params = new FormData();
            params.append('products', cart);
            url = _models_config_model__WEBPACK_IMPORTED_MODULE_3__["APIUrl"] + "/api/shop/cart/merge";
            this.http.postHttp(url, params).subscribe(function (res) {
                _this.cookieService.deleteCookie('cart');
            });
        }
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _auth_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/share/buy-later/buy-later.component.css":
/*!*********************************************************!*\
  !*** ./src/app/share/buy-later/buy-later.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/buy-later/buy-later.component.html":
/*!**********************************************************!*\
  !*** ./src/app/share/buy-later/buy-later.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"add_status==3\">\n\t<input type=\"number\" *ngIf=\"add_check\" [(ngModel)]=\"product_number\">\n\t<button (click)=\"add()\" class=\"btn ml-2\">下次再買</button>\n</div>"

/***/ }),

/***/ "./src/app/share/buy-later/buy-later.component.ts":
/*!********************************************************!*\
  !*** ./src/app/share/buy-later/buy-later.component.ts ***!
  \********************************************************/
/*! exports provided: BuyLaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyLaterComponent", function() { return BuyLaterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 //popup dialog

 //接收route para
var BuyLaterComponent = /** @class */ (function () {
    function BuyLaterComponent(memberService, httpService, router, dialog) {
        this.memberService = memberService;
        this.httpService = httpService;
        this.router = router;
        this.dialog = dialog;
        this.product_number = 1;
    }
    BuyLaterComponent.prototype.ngOnInit = function () {
    };
    //加入下次再買清單
    BuyLaterComponent.prototype.add = function () {
        //未登入 跳出登入畫面
        if (!this.memberService.user) {
            this.login();
            return;
        }
        var cart = {};
        cart["" + this.input_pId] = this.product_number;
        var params = new FormData();
        params.append('products', JSON.stringify(cart));
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/later-buy/merge";
        this.httpService.postHttp(url, params).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '操作成功!',
                text: '已加入至下次購買清單',
                type: 'success',
            });
        });
    };
    BuyLaterComponent.prototype.login = function () {
        console.log(this.router.url);
        this.openDialog(this.router.url);
    };
    //開啟pop up
    BuyLaterComponent.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuyLaterComponent.prototype, "input_pId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuyLaterComponent.prototype, "add_check", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BuyLaterComponent.prototype, "add_status", void 0);
    BuyLaterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-later',
            template: __webpack_require__(/*! ./buy-later.component.html */ "./src/app/share/buy-later/buy-later.component.html"),
            styles: [__webpack_require__(/*! ./buy-later.component.css */ "./src/app/share/buy-later/buy-later.component.css")]
        }),
        __metadata("design:paramtypes", [_member_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], BuyLaterComponent);
    return BuyLaterComponent;
}());



/***/ }),

/***/ "./src/app/share/calendar/calendar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/share/calendar/calendar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/calendar/calendar.component.html":
/*!********************************************************!*\
  !*** ./src/app/share/calendar/calendar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        上月\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        本月\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        下月\n      </div>\n      <div class=\"btn btn-outline-secondary\">\n      \t<h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'zh' }}</h3>\n      </div>\n</div>\n\n\n\n<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  (dayClicked)=\"dayClicked($event.day)\"\n  [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [weekendDays]=\"weekendDays\">\n\n</mwl-calendar-month-view>"

/***/ }),

/***/ "./src/app/share/calendar/calendar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/share/calendar/calendar.component.ts ***!
  \******************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-date-formatter.provider */ "./src/app/share/calendar/custom-date-formatter.provider.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//加入語系黨


Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a, 'zh');
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarView"];
        this.locale = 'zh';
        this.viewDate = new Date();
        this.weekStartsOn = angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].MONDAY;
        this.weekendDays = [angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].FRIDAY, angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].SATURDAY];
        //預設測試資料
        this.events = [
            {
                start: new Date(),
                title: '123'
            },
            {
                start: new Date('2018/10/20'),
                title: '1fff23'
            },
            {
                start: new Date('2018/09/20'),
            },
        ];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        //input 日曆標籤
        if (this.inputCalendarEvents)
            this.events = this.inputCalendarEvents;
    };
    CalendarComponent.prototype.ngOnChanges = function (changes) {
        //input 日曆標籤
        this.inputCalendarEvents = changes.inputCalendarEvents.currentValue;
        if (this.inputCalendarEvents)
            this.events = this.inputCalendarEvents;
        var log = [];
        for (var propName in changes) {
            var changedProp = changes[propName];
            var to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push("Initial value of " + propName + " set to " + to);
            }
            else {
                var from = JSON.stringify(changedProp.previousValue);
                log.push(propName + " changed from " + from + " to " + to);
            }
        }
    };
    CalendarComponent.prototype.dayClicked = function ($event) {
        console.log($event);
        //output data
        this.childEvent.emit($event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "inputCalendarEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarComponent.prototype, "childEvent", void 0);
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/share/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/share/calendar/calendar.component.css")],
            providers: [
                {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"],
                    useClass: _custom_date_formatter_provider__WEBPACK_IMPORTED_MODULE_2__["CustomDateFormatter"]
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/share/calendar/custom-date-formatter.provider.ts":
/*!******************************************************************!*\
  !*** ./src/app/share/calendar/custom-date-formatter.provider.ts ***!
  \******************************************************************/
/*! exports provided: CustomDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatter", function() { return CustomDateFormatter; });
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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


var CustomDateFormatter = /** @class */ (function (_super) {
    __extends(CustomDateFormatter, _super);
    function CustomDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](locale).transform(date, 'E', locale);
    };
    CustomDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](locale).transform(date, 'MMM y', locale);
    };
    CustomDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](locale).transform(date, 'E', locale);
    };
    CustomDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](locale).transform(date, 'HH:mm', locale);
    };
    return CustomDateFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_0__["CalendarDateFormatter"]));



/***/ }),

/***/ "./src/app/share/cart-add/cart-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/share/cart-add/cart-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show_status==3\" class=\"btn-group-cart\">\n\t<!-- 數量 -->\n\t<div class=\"add-qty\" *ngIf=\"add_check\">\n    <button (click)=\"less()\" class=\"btn-count\"><i data-icon=\"O\"></i></button>\n    <input type=\"number\" [(ngModel)]=\"product_number\" class=\"form-control\" min=\"1\">\n    <button (click)=\"more()\" class=\"btn-count\"><i data-icon=\"P\"></i></button>\n\t</div>\n\t<button (click)=\"add()\" class=\"btn\"><i data-icon=\"\"></i>加入購物車</button>\n</div>\n\n<div *ngIf=\"show_status==2\">\n\t此商品已訂購 \n</div>\n\n<div *ngIf=\"show_status==1\">\n\t<!-- 123 {{ product_type }} -->\n\t<div [ngSwitch]=\"product_type\">\n\t\t<span *ngSwitchCase=\"'course'\"><a [routerLink]=\"['/product/course/video/', input_pId]\" class=\"btn\">進入課程</a></span>\n\t\t<span *ngSwitchCase=\"'e-book'\"><a [routerLink]=\"['/product/ebook/read/', input_pId]\" class=\"btn\">進入電子書</a></span>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/share/cart-add/cart-add.component.scss":
/*!********************************************************!*\
  !*** ./src/app/share/cart-add/cart-add.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-qty {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  margin-right: 0.5rem;\n  padding: 0 10px;\n  border: 1px solid currentColor; }\n  @media (min-width: pad) {\n    .add-qty {\n      margin-right: 20px; } }\n  .add-qty [data-icon] {\n    top: -2px;\n    font-size: 25px;\n    color: currentColor; }\n  .add-qty .btn-count {\n    height: 32px;\n    padding: 0;\n    color: currentColor;\n    border: 0;\n    outline: 0;\n    opacity: .6;\n    background-color: transparent;\n    cursor: pointer;\n    transition: all .3s; }\n  .add-qty .btn-count:hover {\n      opacity: 1; }\n  .add-qty .form-control {\n    min-width: 10px;\n    height: auto;\n    padding: 0;\n    border: none;\n    text-align: center; }\n  .add-qty .form-control:focus {\n      box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/share/cart-add/cart-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/share/cart-add/cart-add.component.ts ***!
  \******************************************************/
/*! exports provided: CartAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartAddComponent", function() { return CartAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/token.service */ "./src/app/auth/token.service.ts");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _member_member_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../member/member.service */ "./src/app/member/member.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartAddComponent = /** @class */ (function () {
    function CartAddComponent(memberService, productService, tokenService, cookieService, httpService) {
        this.memberService = memberService;
        this.productService = productService;
        this.tokenService = tokenService;
        this.cookieService = cookieService;
        this.httpService = httpService;
        this.product_number = 1;
    }
    CartAddComponent.prototype.ngOnInit = function () {
        this.show_status = this.add_status;
        //this.checkBought();
    };
    //檢查是否可以繼續購買
    CartAddComponent.prototype.checkBought = function () {
        var _this = this;
        console.log(this.show_status);
        //this.tokenService.loginCheck().subscribe(
        //	res => {
        //登入狀態
        if (this.memberService.user) {
            var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/shop/my-product/check-if-buy?id=" + this.input_pId;
            this.httpService.getHttp(url).subscribe(function (res) {
                _this.show_status = res.check_result;
                console.log(_this.show_status);
            });
            //未登入 都可以加入購物車
        }
        else {
            this.show_status = 3;
            console.error(this.show_status);
        }
        //}
        //);
    };
    //加入購物車
    CartAddComponent.prototype.add = function () {
        var _this = this;
        //this.tokenService.loginCheck().subscribe(
        //res => {
        //登入狀態
        if (this.memberService.user) {
            console.log("login");
            var cart = {};
            cart["" + this.input_pId] = this.product_number;
            var params = new FormData();
            params.append('products', JSON.stringify(cart));
            var url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/shop/cart/merge";
            this.httpService.postHttp(url, params).subscribe(function (res) {
                //更新購物車數量
                _this.productService.getCartNumber();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    title: '操作成功!',
                    text: '加入購物車成功',
                    type: 'success',
                });
            });
            //未登入狀態
        }
        else {
            console.log(this.input_pId);
            var cart = this.cookieService.getCookie('cart');
            var cartArray = {};
            if (cart)
                cartArray = JSON.parse(cart);
            //更新或者增加數量
            if (this.add_check) {
                if (cartArray["" + this.input_pId])
                    cartArray["" + this.input_pId] += this.product_number;
                else
                    cartArray["" + this.input_pId] = this.product_number;
            }
            else {
                cartArray["" + this.input_pId] = 1;
            }
            console.log(cartArray);
            //console.log(JSON.stringify(cartArray));
            this.cookieService.setCookie('cart', JSON.stringify(cartArray));
            cart = this.cookieService.getCookie('cart');
            console.log(cart);
            //更新購物車數量
            this.productService.getCartNumber();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: '操作成功!',
                text: '加入購物車成功',
                type: 'success',
            });
        }
    };
    //);
    //}
    CartAddComponent.prototype.more = function () {
        this.product_number += 1;
    };
    CartAddComponent.prototype.less = function () {
        if (this.product_number >= 2) {
            this.product_number -= 1;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartAddComponent.prototype, "input_pId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartAddComponent.prototype, "add_check", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartAddComponent.prototype, "product_type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartAddComponent.prototype, "add_status", void 0);
    CartAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-add',
            template: __webpack_require__(/*! ./cart-add.component.html */ "./src/app/share/cart-add/cart-add.component.html"),
            styles: [__webpack_require__(/*! ./cart-add.component.scss */ "./src/app/share/cart-add/cart-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_member_member_service__WEBPACK_IMPORTED_MODULE_7__["MemberService"], _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _auth_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], CartAddComponent);
    return CartAddComponent;
}());



/***/ }),

/***/ "./src/app/share/ckeditor/ckeditor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/share/ckeditor/ckeditor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/ckeditor/ckeditor.component.html":
/*!********************************************************!*\
  !*** ./src/app/share/ckeditor/ckeditor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ck-editor (change)=\"sendChild($event)\" name=\"editor1\" [(ngModel)]=\"editorValue\" skin=\"moono-lisa\" language=\"zh-tw\" [fullPage]=\"true\" [config]=\"ckeditorConfig\"></ck-editor>\n\n"

/***/ }),

/***/ "./src/app/share/ckeditor/ckeditor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/share/ckeditor/ckeditor.component.ts ***!
  \******************************************************/
/*! exports provided: CkeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorComponent", function() { return CkeditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CkeditorComponent = /** @class */ (function () {
    function CkeditorComponent() {
        //Output event to parent
        this.outputCkeditorEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
        this.editorValue = '';
        this.ckeditorConfig = {
            filebrowserImageUploadUrl: _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/upload/image/ckeditor-json?id=0",
            filebrowserUploadUrl: _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/upload/video/ckeditor-json?id=0",
            extraPlugins: 'html5video',
        };
    }
    CkeditorComponent.prototype.sendChild = function (eventdata) {
        this.outputCkeditorEvent.emit(eventdata);
    };
    CkeditorComponent.prototype.ngOnInit = function () {
        if (this.inputCkeditor) {
            console.log(this.inputCkeditor);
            this.editorValue = this.inputCkeditor;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CkeditorComponent.prototype, "inputCkeditor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CkeditorComponent.prototype, "outputCkeditorEvent", void 0);
    CkeditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckeditor',
            template: __webpack_require__(/*! ./ckeditor.component.html */ "./src/app/share/ckeditor/ckeditor.component.html"),
            styles: [__webpack_require__(/*! ./ckeditor.component.css */ "./src/app/share/ckeditor/ckeditor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CkeditorComponent);
    return CkeditorComponent;
}());



/***/ }),

/***/ "./src/app/share/datepicker/datepicker.component.css":
/*!***********************************************************!*\
  !*** ./src/app/share/datepicker/datepicker.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/datepicker/datepicker.component.html":
/*!************************************************************!*\
  !*** ./src/app/share/datepicker/datepicker.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- bootstrap datepicker \n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (ngModelChange)=\"onChildClick()\" >\n      <div class=\"input-group-append\">\n        <button class=\"fas fa-angle-double-down\" (click)=\"d.toggle()\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n\n<hr/>\n<pre>Model: {{ model | json }}</pre>\n-->\n\n<!-- mat datepicker -->\n<mat-form-field>\n  <input [(ngModel)]=\"matDate\" (ngModelChange)=\"onChildClick()\" matInput [matDatepicker]=\"dp3\" placeholder=\"\" disabled>\n  <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n<!-- <pre>date: {{ matDate }}</pre> -->"

/***/ }),

/***/ "./src/app/share/datepicker/datepicker.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/share/datepicker/datepicker.component.ts ***!
  \**********************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(calendar) {
        this.calendar = calendar;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.matDate = new Date(this.inputDate);
        console.log(this.inputDate);
    };
    DatepickerComponent.prototype.onChildClick = function () {
        this.childEvent.emit(this.matDate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "inputDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatepickerComponent.prototype, "childEvent", void 0);
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/share/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.css */ "./src/app/share/datepicker/datepicker.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/share/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/share/error/error.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/share/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n   找不到頁面\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/share/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/share/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
 //接收route para
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route, location) {
        this.route = route;
        this.location = location;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        this.getErrMsg();
    };
    ErrorComponent.prototype.getErrMsg = function () {
        this.msg = this.route.snapshot.paramMap.get('msg');
    };
    ErrorComponent.prototype.goBack = function () {
        this.location.back();
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/share/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/share/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/share/file-upload/file-upload.component.css":
/*!*************************************************************!*\
  !*** ./src/app/share/file-upload/file-upload.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/file-upload/file-upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/share/file-upload/file-upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<form [formGroup]='uploadForm' (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n    \t<input type=\"file\" id=\"file\" (change)=\"onFileChange($event)\" #fileInput>\n        <button id=\"submit_file\" class=\"btn-primary\" type=\"submit\" disabled>上傳</button>\n\t</div>\t\n\t</form>\n\n    <img src=\"{{ img_url }}\">\n\n    <div [hidden]=\"video_url==null\">\n        <video id=\"myVideo\" width=\"320\" height=\"240\" controls>\n            <source src=\"{{ video_url }}\" type=\"video/mp4\">\n            Your browser does not support the video tag.\n        </video>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/share/file-upload/file-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/share/file-upload/file-upload.component.ts ***!
  \************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
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

var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(httpService, router, formBuilder) {
        this.httpService = httpService;
        this.router = router;
        this.formBuilder = formBuilder;
        //Output event to parent
        this.outputFileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //提供Output裝飾器，讓該事件成為父親模板的事件
        this.uploadForm = this.formBuilder.group({
            file: null,
        });
        this.type = 'avatar';
        this.width = '0';
        this.img_url = null;
        this.video_url = null;
        this.submitted = false;
        //這裡控制要檢查的項目，true表示要檢查，false表示不檢查 
        this.isCheckImageType = false; //是否檢查圖片副檔名 
        this.isCheckFileSize = true; //是否檢查圖片檔案
        this.isCheckVideoType = true; //是否檢查video副檔名 
        this.isCheckVideoTime = true; //是否檢查video時間 
    }
    FileUploadComponent.prototype.sendChild = function (eventdata) {
        this.outputFileEvent.emit(eventdata);
    };
    FileUploadComponent.prototype.ngOnInit = function () {
        if (this.inputImageUpload) {
            console.log(this.inputImageUpload);
            this.isCheckImageType = this.inputImageUpload.isCheckImageType;
            this.isCheckFileSize = this.inputImageUpload.isCheckFileSize;
            this.isCheckVideoType = this.inputImageUpload.isCheckVideoType;
            this.isCheckVideoTime = this.inputImageUpload.isCheckVideoTime;
            this.width = this.inputImageUpload.width;
        }
    };
    FileUploadComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0]; //取得元素的file欄位
            this.uploadForm.get('file').setValue(file);
            jquery__WEBPACK_IMPORTED_MODULE_6__('#submit_file').prop('disabled', false);
            console.log(file);
            //檢查檔案格式
            this.checkFileType(file);
            //檢查檔案大小
            this.checkFileSize(file);
            //檢查影片時間
            this.checkVideoTime(file);
        }
    };
    //檢查檔案格式
    FileUploadComponent.prototype.checkFileType = function (file) {
        var allowType = ['image/jpeg', 'image/png']; //允許的圖片副檔名 
        if (this.isCheckImageType && allowType.indexOf(file.type) == -1) {
            this.img_url = null;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#submit_file').prop('disabled', true);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '檔案格式不符',
                text: '只允許jpg,png',
                type: 'error',
                confirmButtonText: '確認'
            });
        }
        var allowType_video = ['video/mp4']; //允許的影片副檔名 
        if (this.isCheckVideoType && allowType_video.indexOf(file.type) == -1) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#submit_file').prop('disabled', true);
            this.video_url = null;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '檔案格式不符',
                text: '只允許mp4',
                type: 'error',
                confirmButtonText: '確認'
            });
        }
    };
    //檢查檔案大小
    FileUploadComponent.prototype.checkFileSize = function (file) {
        if (this.isCheckFileSize && file.size > _models_config_model__WEBPACK_IMPORTED_MODULE_4__["UploadSize"]) {
            this.video_url = null;
            this.img_url = null;
            jquery__WEBPACK_IMPORTED_MODULE_6__('#submit_file').prop('disabled', true);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: '檔案大小不符',
                text: "\u9700\u5C0F\u65BC" + _models_config_model__WEBPACK_IMPORTED_MODULE_4__["UploadSize"] + "btyes",
                type: 'error',
                confirmButtonText: '確認'
            });
        }
    };
    //檢查影片秒數
    FileUploadComponent.prototype.checkVideoTime = function (file) {
        if (this.isCheckVideoTime) {
            this.video_url = null;
            var objectUrl = URL.createObjectURL(file);
            jquery__WEBPACK_IMPORTED_MODULE_6__("#myVideo").prop("src", objectUrl); //指定audio來源
            jquery__WEBPACK_IMPORTED_MODULE_6__("#myVideo").on("canplaythrough", function (e) {
                var video_element = jquery__WEBPACK_IMPORTED_MODULE_6__("#myVideo")[0];
                var v_durtation = video_element.duration;
                if (v_durtation > _models_config_model__WEBPACK_IMPORTED_MODULE_4__["UploadVideoTime"]) {
                    jquery__WEBPACK_IMPORTED_MODULE_6__('#submit_file').prop('disabled', true);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: '影片長度過長',
                        text: "\u9700\u5C0F\u65BC" + _models_config_model__WEBPACK_IMPORTED_MODULE_4__["UploadVideoTime"] + "\u79D2",
                        type: 'error',
                        confirmButtonText: '確認'
                    });
                }
            });
        }
        console.log(this.submitted);
    };
    //submit form
    FileUploadComponent.prototype.onSubmit = function () {
        var _this = this;
        var params = new FormData();
        var url;
        params.append('file', this.uploadForm.get('file').value);
        if (this.isCheckImageType == true) {
            url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/upload/image/file";
            params.append('type', this.type);
            params.append('width', this.width);
        }
        else if (this.isCheckVideoType == true) {
            url = _models_config_model__WEBPACK_IMPORTED_MODULE_4__["APIUrl"] + "/api/upload/video/file";
        }
        this.httpService.postHttp(url, params)
            .subscribe(function (res) {
            if (_this.isCheckImageType == true) {
                _this.img_url = "" + _models_config_model__WEBPACK_IMPORTED_MODULE_4__["FileUrl"] + res.filepath;
            }
            else if (_this.isCheckVideoType == true) {
                _this.video_url = "" + _models_config_model__WEBPACK_IMPORTED_MODULE_4__["FileUrl"] + res.filepath;
            }
            //傳送資料給母component
            _this.sendChild(res.filepath);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "inputImageUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "outputFileEvent", void 0);
    FileUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/share/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/share/file-upload/file-upload.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/share/product/product.component.css":
/*!*****************************************************!*\
  !*** ./src/app/share/product/product.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/share/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/share/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/share/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");
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


var ProductComponent = /** @class */ (function () {
    function ProductComponent(httpService, route, cookieService, layoutService) {
        this.httpService = httpService;
        this.route = route;
        this.cookieService = cookieService;
        this.layoutService = layoutService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
        //this.layoutService.setMeta();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getProduct(params['id']);
            _this.getSliders(params['id']);
        });
    };
    //取得商品資訊
    ProductComponent.prototype.getProduct = function (id) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/product/show?id=" + id + "&viewed=1";
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.product = res.product;
            _this.layoutService.setMetaData(res.product.metadata);
        });
    };
    //取得商品幻燈片
    ProductComponent.prototype.getSliders = function (id) {
        var _this = this;
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["APIUrl"] + "/api/shop/product/sliders?id=" + id;
        this.httpService.getHttp(url).subscribe(function (res) {
            _this.sliders = res.sliders;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/share/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/share/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/share/share-routing/share-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/share-routing/share-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRoutingModule", function() { return ShareRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var ShareRoutingModule = /** @class */ (function () {
    function ShareRoutingModule() {
    }
    ShareRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShareRoutingModule);
    return ShareRoutingModule;
}());



/***/ }),

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-http-loader */ "./node_modules/ng-http-loader/fesm5/ng-http-loader.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/share/datepicker/datepicker.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/share/file-upload/file-upload.component.ts");
/* harmony import */ var _ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ckeditor/ckeditor.component */ "./src/app/share/ckeditor/ckeditor.component.ts");
/* harmony import */ var _layout_category_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../layout/category/category.component */ "./src/app/layout/category/category.component.ts");
/* harmony import */ var _layout_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../layout/banner/banner.component */ "./src/app/layout/banner/banner.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product/product.component */ "./src/app/share/product/product.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/share/calendar/calendar.component.ts");
/* harmony import */ var _cart_add_cart_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cart-add/cart-add.component */ "./src/app/share/cart-add/cart-add.component.ts");
/* harmony import */ var _single_writer_single_writer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./single-writer/single-writer.component */ "./src/app/share/single-writer/single-writer.component.ts");
/* harmony import */ var _share_routing_share_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./share-routing/share-routing.module */ "./src/app/share/share-routing/share-routing.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./error/error.component */ "./src/app/share/error/error.component.ts");
/* harmony import */ var _buy_later_buy_later_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./buy-later/buy-later.component */ "./src/app/share/buy-later/buy-later.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//calendar


//import module




//import { SweetAlertService } from 'angular-sweetalert-service';






//ckeditor

//banner


//component












var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_6__["NgHttpLoaderModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_3__["adapterFactory"]
                }),
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
                _share_routing_share_routing_module__WEBPACK_IMPORTED_MODULE_25__["ShareRoutingModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__["OwlModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"]
            ],
            declarations: [
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_17__["FileUploadComponent"],
                _ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_18__["CkeditorComponent"],
                _layout_category_category_component__WEBPACK_IMPORTED_MODULE_19__["CategoryComponent"],
                _layout_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarComponent"],
                _cart_add_cart_add_component__WEBPACK_IMPORTED_MODULE_23__["CartAddComponent"],
                _single_writer_single_writer_component__WEBPACK_IMPORTED_MODULE_24__["SingleWriterComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_26__["ErrorComponent"],
                _buy_later_buy_later_component__WEBPACK_IMPORTED_MODULE_27__["BuyLaterComponent"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng_http_loader__WEBPACK_IMPORTED_MODULE_6__["NgHttpLoaderModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_16__["DatepickerComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_17__["FileUploadComponent"],
                _ckeditor_ckeditor_component__WEBPACK_IMPORTED_MODULE_18__["CkeditorComponent"],
                _layout_category_category_component__WEBPACK_IMPORTED_MODULE_19__["CategoryComponent"],
                _layout_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarComponent"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"],
                //BrowserAnimationsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"],
                _cart_add_cart_add_component__WEBPACK_IMPORTED_MODULE_23__["CartAddComponent"],
                _single_writer_single_writer_component__WEBPACK_IMPORTED_MODULE_24__["SingleWriterComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_26__["ErrorComponent"],
                _buy_later_buy_later_component__WEBPACK_IMPORTED_MODULE_27__["BuyLaterComponent"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_14__["OwlModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"]
            ]
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/share/single-writer/single-writer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/share/single-writer/single-writer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/single-writer/single-writer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/share/single-writer/single-writer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul *ngIf=\"writerService.writer\">\n\t<li>\n\t\t<ul>\n\t\t\t<li>圖<img src=\"{{ fileUrl }}{{ writerService.writer.avatar }}\" width=\"100\"> </li>\n\t\t\t<li>摘要: {{ writerService.writer.introduction }}</li>\n\t\t\t<li>作者: {{ writerService.writer.jpb_title }} {{ writerService.writer.name }}</li>\n\t\t\t<li>商品數量: {{ writerService.writer.product_count }}</li>\n\t\t\t<li>文章數量: {{ writerService.writer.article_count }}</li>\n\n\t\t\t\n\t\t</ul>\n\t</li>\t\n</ul>\n"

/***/ }),

/***/ "./src/app/share/single-writer/single-writer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/share/single-writer/single-writer.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleWriterComponent", function() { return SingleWriterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _writer_writer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../writer/writer.service */ "./src/app/writer/writer.service.ts");
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



var SingleWriterComponent = /** @class */ (function () {
    function SingleWriterComponent(writerService) {
        this.writerService = writerService;
        this.fileUrl = _models_config_model__WEBPACK_IMPORTED_MODULE_2__["FileUrl"];
    }
    SingleWriterComponent.prototype.ngOnInit = function () {
        if (this.writer_id)
            this.writerService.getWriterInfo(this.writer_id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleWriterComponent.prototype, "writer_id", void 0);
    SingleWriterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-writer',
            template: __webpack_require__(/*! ./single-writer.component.html */ "./src/app/share/single-writer/single-writer.component.html"),
            styles: [__webpack_require__(/*! ./single-writer.component.css */ "./src/app/share/single-writer/single-writer.component.css")]
        }),
        __metadata("design:paramtypes", [_writer_writer_service__WEBPACK_IMPORTED_MODULE_1__["WriterService"]])
    ], SingleWriterComponent);
    return SingleWriterComponent;
}());



/***/ }),

/***/ "./src/app/validator/comfirm-pw.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/validator/comfirm-pw.directive.ts ***!
  \***************************************************/
/*! exports provided: ComfirmPwDirective, ComfirmPwValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComfirmPwDirective", function() { return ComfirmPwDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComfirmPwValidator", function() { return ComfirmPwValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComfirmPwDirective = /** @class */ (function () {
    function ComfirmPwDirective() {
    }
    ComfirmPwDirective_1 = ComfirmPwDirective;
    ComfirmPwDirective.prototype.validate = function (control) {
        var comfirm_pw = control.value;
        return (comfirm_pw == this.pw) ? null : {
            validatePassword: {
                valid: false
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appComfirmPw'),
        __metadata("design:type", String)
    ], ComfirmPwDirective.prototype, "pw", void 0);
    ComfirmPwDirective = ComfirmPwDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appComfirmPw]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ComfirmPwDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], ComfirmPwDirective);
    return ComfirmPwDirective;
    var ComfirmPwDirective_1;
}());

function ComfirmPwValidator() {
    return function (control) {
        console.log(control.root);
        console.log(control.root.value.password);
        console.log(control.root.value.password_comfirm);
        //let e = control.root.get(this.validateEqual);
        return (control.root.value.password == control.root.value.password_comfirm) ? null : {
            comfirmPw: true
        };
    };
}


/***/ }),

/***/ "./src/app/writer/writer.service.ts":
/*!******************************************!*\
  !*** ./src/app/writer/writer.service.ts ***!
  \******************************************/
/*! exports provided: WriterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterService", function() { return WriterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/services/layout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WriterService = /** @class */ (function () {
    function WriterService(httpService, layoutService) {
        this.httpService = httpService;
        this.layoutService = layoutService;
        this.list = {};
    }
    //單一作者資訊
    WriterService.prototype.getWriterInfo = function (id) {
        var _this = this;
        var paramObject = {
            'id': id,
            'viewed': 1,
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/writer/show?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            console.log(res);
            _this.writer = res.writer;
            _this.layoutService.setMetaData(res.writer.metadata);
        });
    };
    //作者相關文章
    WriterService.prototype.getWriterArticle = function (writer_id, from, limit) {
        var _this = this;
        var paramObject = {
            'id': writer_id,
            'from': from,
            'limit': limit
        };
        var param = this.httpService.getParamFormat(paramObject);
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/writer/articles?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            console.warn(res);
            _this.articles = res.articles;
        });
    };
    //作者相關商品
    WriterService.prototype.getWriterProduct = function (writer_id, product_type, from, limit) {
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
        var url = _models_config_model__WEBPACK_IMPORTED_MODULE_1__["APIUrl"] + "/api/writer/products?" + param;
        this.httpService.getHttp(url).subscribe(function (res) {
            console.log(res);
            if (product_type == 'e-book')
                _this.list['ebook'] = res.products;
            else
                _this.list[product_type] = res.products;
        });
    };
    WriterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], WriterService);
    return WriterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




//angular material 

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/inbound/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map