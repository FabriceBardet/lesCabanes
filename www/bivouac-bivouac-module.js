(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bivouac-bivouac-module"],{

/***/ "88IM":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bivouac/details-bivouac/details-bivouac.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\">\n  <div>\n    <ion-label>{{ donnees[0]?.titre }}</ion-label>\n    <br>\n    <ion-text> {{ donnees[0]?.texte }}</ion-text>\n    <br>\n    <br>\n  </div>\n\n  <div>\n    <ion-label>{{ donnees[1]?.titre }}</ion-label>\n    <br>\n    <ion-text> {{ donnees[1]?.texte }}</ion-text>\n    <br>\n    <br>\n  </div>\n\n  <div>\n    <ion-label>{{ donnees[2]?.titre }}</ion-label>\n    <br>\n    <ion-text> {{ donnees[2]?.texte }}</ion-text>\n    <br>\n    <br>\n  </div>\n</div>");

/***/ }),

/***/ "AQba":
/*!*******************************************!*\
  !*** ./src/app/bivouac/bivouac.module.ts ***!
  \*******************************************/
/*! exports provided: BivouacPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BivouacPageModule", function() { return BivouacPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bivouac_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bivouac-routing.module */ "OUEo");
/* harmony import */ var _bivouac_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bivouac.page */ "Avyv");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _details_bivouac_details_bivouac_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-bivouac/details-bivouac.component */ "tz/U");
/* harmony import */ var _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../camp4/camp4.module */ "7GtZ");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");











var BivouacPageModule = /** @class */ (function () {
    function BivouacPageModule() {
    }
    BivouacPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bivouac_routing_module__WEBPACK_IMPORTED_MODULE_5__["BivouacPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomePageModule"],
                _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_9__["Camp4PageModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_10__["QRCodeModule"],
            ],
            declarations: [_bivouac_page__WEBPACK_IMPORTED_MODULE_6__["BivouacPage"], _details_bivouac_details_bivouac_component__WEBPACK_IMPORTED_MODULE_8__["DetailsBivouacComponent"]]
        })
    ], BivouacPageModule);
    return BivouacPageModule;
}());



/***/ }),

/***/ "Avyv":
/*!*****************************************!*\
  !*** ./src/app/bivouac/bivouac.page.ts ***!
  \*****************************************/
/*! exports provided: BivouacPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BivouacPage", function() { return BivouacPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bivouac_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bivouac.page.html */ "cZrz");
/* harmony import */ var _bivouac_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bivouac.page.scss */ "BSsv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BivouacPage = /** @class */ (function () {
    function BivouacPage() {
        // nom du document stockant les informations de contacts/tarifs en BD
        this.docBD = 'Bivouac';
        // Stocke le nom du Component
        this.nomPage = 'Le Bivouac';
        // Stocke l'image allant avec le nom du Component
        this.iconePage = 'picto-coworking-orange.png';
        // Stocke le nom du bouton retour
        this.texteIconeRetour = 'Découverte';
        // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
        this.routeRetour = 'navigation';
        // Titre pour les actualités
        this.nomActu = 'des Cabanes';
    }
    BivouacPage.prototype.ngOnInit = function () {
    };
    BivouacPage.ctorParameters = function () { return []; };
    BivouacPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bivouac',
            template: _raw_loader_bivouac_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_bivouac_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], BivouacPage);
    return BivouacPage;
}());



/***/ }),

/***/ "BSsv":
/*!*******************************************!*\
  !*** ./src/app/bivouac/bivouac.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgFondQrCode {\n  position: absolute;\n  width: 190px;\n  right: 40px;\n  bottom: -120px;\n  height: 195px;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jpdm91YWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJiaXZvdWFjLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdGb25kUXJDb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTkwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBib3R0b206IC0xMjBweDtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "OUEo":
/*!***************************************************!*\
  !*** ./src/app/bivouac/bivouac-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BivouacPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BivouacPageRoutingModule", function() { return BivouacPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bivouac_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bivouac.page */ "Avyv");




var routes = [
    {
        path: '',
        component: _bivouac_page__WEBPACK_IMPORTED_MODULE_3__["BivouacPage"]
    }
];
var BivouacPageRoutingModule = /** @class */ (function () {
    function BivouacPageRoutingModule() {
    }
    BivouacPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BivouacPageRoutingModule);
    return BivouacPageRoutingModule;
}());



/***/ }),

/***/ "QyY7":
/*!************************************************************************!*\
  !*** ./src/app/bivouac/details-bivouac/details-bivouac.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  text-align: justify;\n}\n\nion-text {\n  font-size: 1.3vmax !important;\n}\n\nion-label {\n  font-size: 1.8vmax !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbHMtYml2b3VhYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJkZXRhaWxzLWJpdm91YWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmlvbi10ZXh0e1xuICBmb250LXNpemU6IDEuM3ZtYXggICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOiAxLjh2bWF4ICAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "cZrz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bivouac/bivouac.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [nomPage]=\"nomPage\" [iconePage]=\"iconePage\" [texteIconeRetour]=\"texteIconeRetour\"\n    [routeRetour]=\"routeRetour\"> </app-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <app-actualite></app-actualite>\n      </ion-col>\n      <ion-col size=\"6\">\n        <app-details-bivouac></app-details-bivouac>\n      </ion-col>\n      <ion-col size=\"3\">\n        <app-programme-page [nomPage]=\"nomActu\" [docBD]=\"docBD\"></app-programme-page>\n        <div class=\"imgFondQr\">\n          <ion-img class=\"imgFondQrCode\" src=\"../../assets/QrCode/Contact_Le_Bivouac.png\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "tz/U":
/*!**********************************************************************!*\
  !*** ./src/app/bivouac/details-bivouac/details-bivouac.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetailsBivouacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBivouacComponent", function() { return DetailsBivouacComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_bivouac_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details-bivouac.component.html */ "88IM");
/* harmony import */ var _details_bivouac_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-bivouac.component.scss */ "QyY7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");





var DetailsBivouacComponent = /** @class */ (function () {
    function DetailsBivouacComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    DetailsBivouacComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération des informations du bivouac dans la bd
        this.donnees = [];
        this.firebaseService.getDetailsPage('Bivouac').subscribe(function (data) {
            data.forEach(function (doc) {
                _this.donnees.push(doc);
            });
        });
    };
    DetailsBivouacComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    DetailsBivouacComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details-bivouac',
            template: _raw_loader_details_bivouac_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_details_bivouac_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DetailsBivouacComponent);
    return DetailsBivouacComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bivouac-bivouac-module.js.map