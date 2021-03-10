(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"],{

/***/ "OUQp":
/*!***********************************************!*\
  !*** ./src/app/navigation/navigation.page.ts ***!
  \***********************************************/
/*! exports provided: NavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPage", function() { return NavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.page.html */ "VEe1");
/* harmony import */ var _navigation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.page.scss */ "e8EO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var NavigationPage = /** @class */ (function () {
    function NavigationPage(router) {
        this.router = router;
        // Stocke le nom du Component
        this.nomPage = 'Découvrir les lieux';
        // Stocke l'image allant avec le nom du Component
        this.iconePage = '';
        // Stocke le nom du bouton retour
        this.texteIconeRetour = 'Accueil';
        // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
        this.routeRetour = 'home';
    }
    NavigationPage.prototype.ngOnInit = function () {
    };
    /**
     * Retourne sur la page d'accueil
     */
    NavigationPage.prototype.retourAccueil = function () {
        this.router.navigate(['home']);
    };
    /**
     * Va vers la page Présentation des cabanes
     */
    NavigationPage.prototype.navPresentation = function () {
        this.router.navigate(['presentation-cabanes']);
    };
    /**
     * Va vers la page camp4
     */
    NavigationPage.prototype.navCamp = function () {
        this.router.navigate(['camp4']);
    };
    /**
     *  Va vers la page le-dome
     */
    NavigationPage.prototype.navDome = function () {
        this.router.navigate(['le-dome']);
    };
    /**
     * Va vers la page bivouac
     */
    NavigationPage.prototype.navBivouac = function () {
        this.router.navigate(['bivouac']);
    };
    /**
     * Va vers la page la-table
     */
    NavigationPage.prototype.navTable = function () {
        this.router.navigate(['la-table']);
    };
    /**
     * Va vers la page de l'agenda
     */
    NavigationPage.prototype.navEvenements = function () {
        this.router.navigate(['agenda']);
    };
    NavigationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavigationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navigation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], NavigationPage);
    return NavigationPage;
}());



/***/ }),

/***/ "VEe1":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [nomPage]=\"nomPage\" [iconePage]=\"iconePage\" [texteIconeRetour]=\"texteIconeRetour\"\n    [routeRetour]=\"routeRetour\"></app-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button id=\"univers\" (click)=\"navPresentation()\">\n          <ion-img id=\"arbre\" src=\"../../assets/elements-graphiques/shape-line-10.svg\"></ion-img>\n          L'univers des cabanes\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button id=\"camp4\" style=\"--background:#F15175\" (click)=\"navCamp()\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/picto-magasin.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            Camp 4\n          </ion-col>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button id=\"boutique\" style=\"--background: #4D5F61\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/picto-montagne.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            Séjour\n          </ion-col>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button id=\"dome\" style=\"--background: #4CBBB5\" (click)=\"navDome()\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/picto-yoga.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            Le Dôme\n          </ion-col>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button id=\"bivouac\" style=\"--background: #C1CA53\" (click)=\"navBivouac()\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/picto-coworking.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            Le Bivouac\n          </ion-col>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button id=\"table\" style=\"--background: #FFA422\" (click)=\"navTable()\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/picto-restauration.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            La Table\n          </ion-col>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button id=\"evenements\" style=\"--background: #83B8BF\" (click)=\"navEvenements()\">\n          <ion-col size=\"3\">\n            <ion-img class=\"icone\" src=\"../../assets/icones/calendar-white.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"9\">\n            Agenda\n          </ion-col>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "e8EO":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-row {\n  justify-content: center;\n}\n\n#univers {\n  background-color: #e05b32;\n  height: 105px;\n  width: 100%;\n  border-radius: 8px;\n  font-size: 30pt;\n  font-family: \"Poppins\";\n  font-weight: bolder;\n}\n\n#camp4, #boutique, #dome, #bivouac, #table, #evenements {\n  height: 105px;\n  width: 99%;\n  border-radius: 8px;\n  font-size: 30pt;\n  font-weight: bolder;\n  font-family: \"Poppins\";\n}\n\n#arbre {\n  width: 150px;\n  height: 150px;\n}\n\n.icone {\n  width: 80px;\n  height: 80px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmlnYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoibmF2aWdhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tcm93e1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3VuaXZlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDViMzI7XG4gIGhlaWdodDogMTA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuI2NhbXA0LCAjYm91dGlxdWUsICNkb21lLCAjYml2b3VhYywgI3RhYmxlLCAjZXZlbmVtZW50cyB7XG4gIGhlaWdodDogMTA1cHg7XG4gIHdpZHRoOiA5OSU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xufVxuXG4jYXJicmV7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmljb25le1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "sO0u":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageModule", function() { return NavigationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-routing.module */ "vn2g");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.page */ "OUQp");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "ct+p");








var NavigationPageModule = /** @class */ (function () {
    function NavigationPageModule() {
    }
    NavigationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavigationPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomePageModule"]
            ],
            declarations: [_navigation_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPage"]]
        })
    ], NavigationPageModule);
    return NavigationPageModule;
}());



/***/ }),

/***/ "vn2g":
/*!*********************************************************!*\
  !*** ./src/app/navigation/navigation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NavigationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageRoutingModule", function() { return NavigationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.page */ "OUQp");




var routes = [
    {
        path: '',
        component: _navigation_page__WEBPACK_IMPORTED_MODULE_3__["NavigationPage"]
    }
];
var NavigationPageRoutingModule = /** @class */ (function () {
    function NavigationPageRoutingModule() {
    }
    NavigationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NavigationPageRoutingModule);
    return NavigationPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-navigation-module.js.map