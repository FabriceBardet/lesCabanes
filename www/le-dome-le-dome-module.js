(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["le-dome-le-dome-module"],{

/***/ "09ss":
/*!*******************************************!*\
  !*** ./src/app/le-dome/le-dome.module.ts ***!
  \*******************************************/
/*! exports provided: LeDomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeDomePageModule", function() { return LeDomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _le_dome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./le-dome-routing.module */ "jFQE");
/* harmony import */ var _le_dome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./le-dome.page */ "GNe2");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../camp4/camp4.module */ "7GtZ");
/* harmony import */ var _details_dome_details_dome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details-dome/details-dome.component */ "c5Yq");










var LeDomePageModule = /** @class */ (function () {
    function LeDomePageModule() {
    }
    LeDomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _le_dome_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeDomePageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomePageModule"],
                _camp4_camp4_module__WEBPACK_IMPORTED_MODULE_8__["Camp4PageModule"]
            ],
            declarations: [_le_dome_page__WEBPACK_IMPORTED_MODULE_6__["LeDomePage"], _details_dome_details_dome_component__WEBPACK_IMPORTED_MODULE_9__["DetailsDomeComponent"]]
        })
    ], LeDomePageModule);
    return LeDomePageModule;
}());



/***/ }),

/***/ "GNe2":
/*!*****************************************!*\
  !*** ./src/app/le-dome/le-dome.page.ts ***!
  \*****************************************/
/*! exports provided: LeDomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeDomePage", function() { return LeDomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_le_dome_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./le-dome.page.html */ "MjNC");
/* harmony import */ var _le_dome_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./le-dome.page.scss */ "yQmB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var LeDomePage = /** @class */ (function () {
    function LeDomePage() {
        // nom du document stockant les informations de contacts/tarifs en BD
        this.docBD = 'Dome';
        // Stocke le nom du Component
        this.nomPage = 'Le Dôme';
        // Stocke l'image allant avec le nom du Component
        this.iconePage = 'picto-yoga-orange.png';
        // Stocke le nom du bouton retour
        this.texteIconeRetour = 'Découverte';
        // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
        this.routeRetour = 'navigation';
        // Titre pour les actualités
        this.nomActu = 'du Dôme';
    }
    LeDomePage.prototype.ngOnInit = function () {
    };
    LeDomePage.ctorParameters = function () { return []; };
    LeDomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-le-dome',
            template: _raw_loader_le_dome_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_le_dome_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], LeDomePage);
    return LeDomePage;
}());



/***/ }),

/***/ "MjNC":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/le-dome/le-dome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [nomPage]=\"nomPage\" [iconePage]=\"iconePage\" [texteIconeRetour]=\"texteIconeRetour\"\n    [routeRetour]=\"routeRetour\"></app-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <app-actualite></app-actualite>\n      </ion-col>\n      <ion-col size=\"6\">\n        <app-details-dome></app-details-dome>\n      </ion-col>\n      <ion-col size=\"3\">\n        <app-programme-page [nomPage]=\"nomActu\" [docBD]=\"docBD\"></app-programme-page>\n\n        <div class=\"imgFondQr\">\n          <ion-img class=\"imgFondQrCode\" src=\"../../assets/QrCode/Contact_Le_D_me (1).png\"></ion-img>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "Xsyr":
/*!******************************************************************!*\
  !*** ./src/app/le-dome/details-dome/details-dome.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#planning {\n  --background: #f7d5ba;\n  color: #E05B32;\n  margin-left: 450px;\n}\n\nion-text {\n  font-size: 1.3vmax !important;\n}\n\nion-label {\n  font-size: 1.8vmax !important;\n}\n\ndiv {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbHMtZG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUYiLCJmaWxlIjoiZGV0YWlscy1kb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BsYW5uaW5nIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjdkNWJhO1xuICBjb2xvcjogI0UwNUIzMjtcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xufVxuXG5pb24tdGV4dHtcbiAgZm9udC1zaXplOiAxLjN2bWF4ICAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMS44dm1heCAgIWltcG9ydGFudDtcbn1cblxuXG5kaXZ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4iXX0= */");

/***/ }),

/***/ "c5Yq":
/*!****************************************************************!*\
  !*** ./src/app/le-dome/details-dome/details-dome.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsDomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsDomeComponent", function() { return DetailsDomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_dome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details-dome.component.html */ "ie+8");
/* harmony import */ var _details_dome_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-dome.component.scss */ "Xsyr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _planning_dome_planning_dome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planning-dome/planning-dome.component */ "J9LS");







var DetailsDomeComponent = /** @class */ (function () {
    function DetailsDomeComponent(firebaseService, controleurModal) {
        this.firebaseService = firebaseService;
        this.controleurModal = controleurModal;
    }
    DetailsDomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération des informations du Dome dans la bd
        this.donnees = [];
        this.firebaseService.getDetailsPage('Dome').subscribe(function (data) {
            data.forEach(function (doc) {
                _this.donnees.push(doc);
            });
        });
    };
    /**
     * Transition vers le modal du planning
     */
    DetailsDomeComponent.prototype.presenterModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controleurModal.create({
                            component: _planning_dome_planning_dome_component__WEBPACK_IMPORTED_MODULE_6__["PlanningDomeComponent"],
                            cssClass: 'modal-css'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetailsDomeComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    DetailsDomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details-dome',
            template: _raw_loader_details_dome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_details_dome_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DetailsDomeComponent);
    return DetailsDomeComponent;
}());



/***/ }),

/***/ "ie+8":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/le-dome/details-dome/details-dome.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\" *ngFor=\"let donnee of donnees\">\n  <div>\n    <ion-label>{{ donnee?.titre }}</ion-label>\n    <br>\n    <ion-text > {{ donnee?.texte }}</ion-text>\n    <br>\n  </div>\n</div>\n\n<ion-button id=\"planning\" (click)=\"presenterModal()\"> Voir le planning</ion-button>\n\n");

/***/ }),

/***/ "jFQE":
/*!***************************************************!*\
  !*** ./src/app/le-dome/le-dome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LeDomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeDomePageRoutingModule", function() { return LeDomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _le_dome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./le-dome.page */ "GNe2");




var routes = [
    {
        path: '',
        component: _le_dome_page__WEBPACK_IMPORTED_MODULE_3__["LeDomePage"]
    }
];
var LeDomePageRoutingModule = /** @class */ (function () {
    function LeDomePageRoutingModule() {
    }
    LeDomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LeDomePageRoutingModule);
    return LeDomePageRoutingModule;
}());



/***/ }),

/***/ "yQmB":
/*!*******************************************!*\
  !*** ./src/app/le-dome/le-dome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgFondQrCode {\n  position: absolute;\n  width: 195px;\n  right: 40px;\n  height: 195px;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xlLWRvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6ImxlLWRvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0ZvbmRRckNvZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTVweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGhlaWdodDogMTk1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=le-dome-le-dome-module.js.map