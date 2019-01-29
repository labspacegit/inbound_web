(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/guards/complete-info.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/complete-info.guard.ts ***!
  \***********************************************/
/*! exports provided: CompleteInfoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteInfoGuard", function() { return CompleteInfoGuard; });
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

var CompleteInfoGuard = /** @class */ (function () {
    function CompleteInfoGuard(tokenService, router, dialog) {
        this.tokenService = tokenService;
        this.router = router;
        this.dialog = dialog;
    }
    CompleteInfoGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.tokenService.infoState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (code) {
            switch (code) {
                case "SUCCESS":
                    return true;
                //break;
                case "BLOCK":
                    console.warn(state.url);
                    console.warn(next);
                    _this.router.navigate(['/member/fillcompleteinfo', state.url]);
                    return false;
                //break;
                default:
                    console.warn(state.url);
                    console.warn(next);
                    _this.openDialog(state.url);
                    return false;
            }
        }));
    };
    //開啟pop up
    CompleteInfoGuard.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], {
            width: '500px',
            data: { returnUrl: data }
        });
    };
    CompleteInfoGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CompleteInfoGuard);
    return CompleteInfoGuard;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map