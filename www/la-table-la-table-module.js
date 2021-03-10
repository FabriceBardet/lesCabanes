(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["la-table-la-table-module"],{

/***/ "3Kt1":
/*!*********************************************************************!*\
  !*** ./src/app/la-table/details-table/details-table.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  text-align: justify;\n}\n\nion-text {\n  font-size: 1.3vmax !important;\n}\n\nion-label {\n  font-size: 1.8vmax !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0YiLCJmaWxlIjoiZGV0YWlscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW9uLXRleHR7XG4gIGZvbnQtc2l6ZTogMS4zdm1heCAgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVse1xuICBmb250LXNpemU6IDEuOHZtYXggICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "3rt9":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/la-table/la-table.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [nomPage]=\"nomPage\" [iconePage]=\"iconePage\" [texteIconeRetour]=\"texteIconeRetour\"\n    [routeRetour]=\"routeRetour\"></app-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <app-actualite></app-actualite>\n      </ion-col>\n      <ion-col size=\"6\">\n        <app-details-table></app-details-table>\n      </ion-col>\n      <ion-col size=\"3\">\n        <app-programme-page [nomPage]=\"nomActu\" [docBD]=\"docBD\"></app-programme-page>\n        <div class=\"imgFondQr\">\n          <ion-img class=\"imgFondQrCode\" src=\"../../assets/QrCode/Contact_La_Table (2).png\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "DiG7":
/*!*******************************************************************!*\
  !*** ./src/app/la-table/details-table/details-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTableComponent", function() { return DetailsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details-table.component.html */ "wjAE");
/* harmony import */ var _details_table_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-table.component.scss */ "3Kt1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");





var DetailsTableComponent = /** @class */ (function () {
    function DetailsTableComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    DetailsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération des informations sur la table depuis la BD
        this.donnees = [];
        this.firebaseService.getDetailsPage('Table').subscribe(function (data) {
            data.forEach(function (doc) {
                _this.donnees.push(doc);
            });
        });
    };
    DetailsTableComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    DetailsTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details-table',
            template: _raw_loader_details_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_details_table_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DetailsTableComponent);
    return DetailsTableComponent;
}());



/***/ }),

/***/ "GglJ":
/*!*****************************************************!*\
  !*** ./src/app/la-table/la-table-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LaTablePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaTablePageRoutingModule", function() { return LaTablePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _la_table_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./la-table.page */ "LMIR");




var routes = [
    {
        path: '',
        component: _la_table_page__WEBPACK_IMPORTED_MODULE_3__["LaTablePage"]
    }
];
var LaTablePageRoutingModule = /** @class */ (function () {
    function LaTablePageRoutingModule() {
    }
    LaTablePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LaTablePageRoutingModule);
    return LaTablePageRoutingModule;
}());



/***/ }),

/***/ "LMIR":
/*!*******************************************!*\
  !*** ./src/app/la-table/la-table.page.ts ***!
  \*******************************************/
/*! exports provided: LaTablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaTablePage", function() { return LaTablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_la_table_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./la-table.page.html */ "3rt9");
/* harmony import */ var _la_table_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./la-table.page.scss */ "lik1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LaTablePage = /** @class */ (function () {
    function LaTablePage() {
        // nom du document stockant les informations de contacts/tarifs en BD
        this.docBD = 'Table';
        // Stocke le nom du Component
        this.nomPage = 'La Table';
        // Stocke l'image allant avec le nom du Component
        this.iconePage = 'picto-restauration-orange.png';
        // Stocke le nom du bouton retour
        this.texteIconeRetour = 'Découverte';
        // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
        this.routeRetour = 'navigation';
        // Titre pour les actualités
        this.nomActu = 'de la Table';
    }
    LaTablePage.prototype.ngOnInit = function () {
    };
    LaTablePage.ctorParameters = function () { return []; };
    LaTablePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-la-table',
            template: _raw_loader_la_table_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_la_table_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], LaTablePage);
    return LaTablePage;
}());



/***/ }),

/***/ "SjZZ":
/*!*********************************************!*\
  !*** ./src/app/la-table/la-table.module.ts ***!
  \*********************************************/
/*! exports provided: LaTablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaTablePageModule", function() { return LaTablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _la_table_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./la-table-routing.module */ "GglJ");
/* harmony import */ var _la_table_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./la-table.page */ "LMIR");
/* harmony import */ var _details_table_details_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details-table/details-table.component */ "DiG7");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../camp4/camp4.module */ "7GtZ");










var LaTablePageModule = /** @class */ (function () {
    function LaTablePageModule() {
    }
    LaTablePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _la_table_routing_module__WEBPACK_IMPORTED_MODULE_5__["LaTablePageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomePageModule"],
                _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_9__["Camp4PageModule"]
            ],
            declarations: [_la_table_page__WEBPACK_IMPORTED_MODULE_6__["LaTablePage"], _details_table_details_table_component__WEBPACK_IMPORTED_MODULE_7__["DetailsTableComponent"]]
        })
    ], LaTablePageModule);
    return LaTablePageModule;
}());



/***/ }),

/***/ "lik1":
/*!*********************************************!*\
  !*** ./src/app/la-table/la-table.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgFondQrCode {\n  position: absolute;\n  width: 195px;\n  right: 40px;\n  bottom: -50px;\n  height: 195px;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhLXRhYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoibGEtdGFibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0ZvbmRRckNvZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTVweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGhlaWdodDogMTk1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "wjAE":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/la-table/details-table/details-table.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\" *ngFor=\"let donnee of donnees\">\n  <div>\n    <ion-label>{{ donnee?.titre }}</ion-label>\n    <br>\n    <ion-text > {{ donnee?.texte }}</ion-text>\n    <br>\n    <br>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=la-table-la-table-module.js.map