(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["evenement-evenement-module"],{

/***/ "6IMM":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evenement/evenement.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-component-header-evenement [nomPage]=\"titre\" [routeRetour]=\"retour\"></app-component-header-evenement>\n  <ion-img class=\"imgFondHeader\" src=\"../../assets/elements-graphiques/shape-line-14.svg\"></ion-img>\n  <ion-img class=\"imgFondEvent\" src=\"../../assets/elements-graphiques/shape-line-6.svg\"></ion-img>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-img src=\"{{ img }}\"></ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <app-detail-evenement [id]=\"id\"></app-detail-evenement>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <qrcode [qrdata]=\"qrCodeTexte\" class=\"imgFondQrCode\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n</ion-content>\n");

/***/ }),

/***/ "Fg1s":
/*!*******************************************************!*\
  !*** ./src/app/evenement/evenement-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EvenementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenementPageRoutingModule", function() { return EvenementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evenement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evenement.page */ "xXDl");




var routes = [
    {
        path: '',
        component: _evenement_page__WEBPACK_IMPORTED_MODULE_3__["EvenementPage"]
    }
];
var EvenementPageRoutingModule = /** @class */ (function () {
    function EvenementPageRoutingModule() {
    }
    EvenementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EvenementPageRoutingModule);
    return EvenementPageRoutingModule;
}());



/***/ }),

/***/ "UP8c":
/*!***********************************************!*\
  !*** ./src/app/evenement/evenement.module.ts ***!
  \***********************************************/
/*! exports provided: EvenementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenementPageModule", function() { return EvenementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _evenement_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evenement-routing.module */ "Fg1s");
/* harmony import */ var _evenement_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./evenement.page */ "xXDl");
/* harmony import */ var _component_header_evenement_component_header_evenement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component-header-evenement/component-header-evenement.component */ "k0lw");
/* harmony import */ var _component_detail_evenement_detail_evenement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-detail-evenement/detail-evenement.component */ "pkJu");










var EvenementPageModule = /** @class */ (function () {
    function EvenementPageModule() {
    }
    EvenementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _evenement_routing_module__WEBPACK_IMPORTED_MODULE_6__["EvenementPageRoutingModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"]
            ],
            declarations: [_evenement_page__WEBPACK_IMPORTED_MODULE_7__["EvenementPage"], _component_detail_evenement_detail_evenement_component__WEBPACK_IMPORTED_MODULE_9__["DetailEvenementComponent"], _component_header_evenement_component_header_evenement_component__WEBPACK_IMPORTED_MODULE_8__["ComponentHeaderEvenementComponent"]]
        })
    ], EvenementPageModule);
    return EvenementPageModule;
}());



/***/ }),

/***/ "jwjE":
/*!************************************************************************************************!*\
  !*** ./src/app/evenement/component-header-evenement/component-header-evenement.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  --ion-background-color: none;\n  --ion-toolbar-background:none;\n  width: 100%;\n  height: 30%;\n  margin-bottom: 15px;\n}\n\n#zoneLogo {\n  display: flex;\n  align-items: flex-start;\n  width: 20%;\n  margin-top: 4px;\n  margin-left: 3px;\n}\n\n#zoneHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  width: 70%;\n}\n\n#zoneRetour {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: 25%;\n  height: 90%;\n  margin-top: 8%;\n}\n\n#iconeRetour {\n  width: 20%;\n}\n\n#texteRetour {\n  font-size: 1.8em;\n}\n\n#zoneTitre {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 75%;\n}\n\n.titrePage {\n  font-family: \"Neilvard-One\", sans-serif;\n  font-weight: bold;\n  font-size: 3em;\n  text-align: center;\n}\n\n.drapeau {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 5%;\n  width: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudC1oZWFkZXItZXZlbmVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoiY29tcG9uZW50LWhlYWRlci1ldmVuZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6bm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4jem9uZUxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4jem9uZUhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG59XG5cbiN6b25lUmV0b3Vye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuXG4jaWNvbmVSZXRvdXJ7XG4gIHdpZHRoOiAyMCU7XG59XG5cbiN0ZXh0ZVJldG91cntcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cblxuI3pvbmVUaXRyZXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLnRpdHJlUGFnZXtcbiAgZm9udC1mYW1pbHk6ICdOZWlsdmFyZC1PbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyYXBlYXV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "k0lw":
/*!**********************************************************************************************!*\
  !*** ./src/app/evenement/component-header-evenement/component-header-evenement.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComponentHeaderEvenementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHeaderEvenementComponent", function() { return ComponentHeaderEvenementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_component_header_evenement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./component-header-evenement.component.html */ "l4RB");
/* harmony import */ var _component_header_evenement_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-header-evenement.component.scss */ "jwjE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var ComponentHeaderEvenementComponent = /** @class */ (function () {
    function ComponentHeaderEvenementComponent(router) {
        this.router = router;
    }
    ComponentHeaderEvenementComponent.prototype.ngOnInit = function () {
        // on modifie le texte du bouton retour en fonction de la page depuis laquelle on vient
        if (this.routeRetour === 'home') {
            this.nomRetour = 'Accueil';
        }
        else if (this.routeRetour === 'agenda') {
            this.nomRetour = 'Agenda';
        }
    };
    /**
     * Redirige vers la page d'où l'on vient
     */
    ComponentHeaderEvenementComponent.prototype.navRetour = function () {
        this.router.navigate([this.routeRetour]);
    };
    ComponentHeaderEvenementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ComponentHeaderEvenementComponent.propDecorators = {
        nomPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        routeRetour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ComponentHeaderEvenementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-component-header-evenement',
            template: _raw_loader_component_header_evenement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_component_header_evenement_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ComponentHeaderEvenementComponent);
    return ComponentHeaderEvenementComponent;
}());



/***/ }),

/***/ "l4RB":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evenement/component-header-evenement/component-header-evenement.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div id=\"zoneLogo\">\n    <ion-img id=\"logoLCU\" slot=\"start\" src=\"../../assets/logo/Logo_CabanesUrbaines_Bichro_RVB.svg\"></ion-img>\n  </div>\n\n  <div id=\"zoneHeader\">\n    <div id=\"zoneRetour\" (click)=\"navRetour()\">\n      <ion-img id=\"iconeRetour\" src=\"../../assets/icones/picto-back.png\"></ion-img>\n      <ion-text id=\"texteRetour\" color=\"primary\">{{nomRetour}}</ion-text>\n    </div>\n    <div id=\"zoneTitre\">\n      <ion-text class=\"titrePage\" color=\"primary\">{{nomPage}}</ion-text>\n    </div>\n  </div>\n\n  <ion-buttons slot=\"end\" class=\"drapeau\" style=\"opacity: 0\">\n    <ion-button>\n      <ion-img src=\"../../assets/icones/drapeau_france.png\"></ion-img>\n    </ion-button>\n    <ion-button>\n      <ion-img src=\"../../assets/icones/drapeau_royaume-uni.jpg\"></ion-img>\n    </ion-button>\n  </ion-buttons>\n</div>\n");

/***/ }),

/***/ "l9uq":
/*!**************************************************************************************!*\
  !*** ./src/app/evenement/component-detail-evenement/detail-evenement.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#titre {\n  color: black;\n  font-size: 2.5vmax;\n  margin-left: 3%;\n  margin-bottom: auto;\n  margin-top: auto;\n}\n\n#heure {\n  color: black;\n  font-weight: bold;\n  font-size: 1.3vmax;\n  margin-left: 3%;\n  margin-bottom: auto;\n  margin-top: auto;\n}\n\n#desc {\n  color: black;\n  font-size: 2vmax;\n  display: block;\n  text-align: justify;\n  margin-right: 3%;\n  margin-left: 3%;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbC1ldmVuZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdGIiwiZmlsZSI6ImRldGFpbC1ldmVuZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0cmUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMi41dm1heDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuI2hldXJlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjN2bWF4O1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4jZGVzYyB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAydm1heDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbiJdfQ== */");

/***/ }),

/***/ "pkJu":
/*!************************************************************************************!*\
  !*** ./src/app/evenement/component-detail-evenement/detail-evenement.component.ts ***!
  \************************************************************************************/
/*! exports provided: DetailEvenementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailEvenementComponent", function() { return DetailEvenementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_evenement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-evenement.component.html */ "r/Jp");
/* harmony import */ var _detail_evenement_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-evenement.component.scss */ "l9uq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "Z2Br");





var DetailEvenementComponent = /** @class */ (function () {
    function DetailEvenementComponent(firestore) {
        this.firestore = firestore;
    }
    /**
     * Récupération des informations de la BD et convertion de la date
     */
    DetailEvenementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.event = this.firestore.getEventDocById(this.id);
        this.event.subscribe(function (data) {
            _this.date = data.date.toDate().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            _this.desc = data.desc;
            _this.heure = data.heure;
        });
    };
    DetailEvenementComponent.ctorParameters = function () { return [
        { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    DetailEvenementComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    DetailEvenementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail-evenement',
            template: _raw_loader_detail_evenement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_detail_evenement_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DetailEvenementComponent);
    return DetailEvenementComponent;
}());



/***/ }),

/***/ "r/Jp":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/evenement/component-detail-evenement/detail-evenement.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\">\n  <p id=\"titre\" style=\"font-weight: bolder;\">{{ date }}</p>\n\n  <p id=\"heure\">{{heure}}</p>\n  <br>\n\n  <p id=\"desc\">{{desc}}</p>\n</div>");

/***/ }),

/***/ "vuNO":
/*!***********************************************!*\
  !*** ./src/app/evenement/evenement.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  width: 100%;\n  margin-bottom: auto;\n  margin-top: 5%;\n  height: 70%;\n}\n\n.imgFondQrCode {\n  position: absolute;\n  right: -50px !important;\n  bottom: -50px !important;\n  width: 200px;\n  height: 195px;\n  padding: 0;\n  margin: 0;\n}\n\n.imgFondHeader {\n  position: absolute;\n  right: -660px !important;\n  top: -600px !important;\n}\n\n.imgFondEvent {\n  position: absolute;\n  left: -400px !important;\n  bottom: -340px !important;\n}\n\nion-grid {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW5lbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRiIsImZpbGUiOiJldmVuZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi5pbWdGb25kUXJDb2RlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTUwcHggIWltcG9ydGFudDtcbiAgYm90dG9tOiAtNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTk1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltZ0ZvbmRIZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNjYwcHggIWltcG9ydGFudDtcbiAgdG9wOiAtNjAwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ0ZvbmRFdmVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTQwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogLTM0MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "xXDl":
/*!*********************************************!*\
  !*** ./src/app/evenement/evenement.page.ts ***!
  \*********************************************/
/*! exports provided: EvenementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvenementPage", function() { return EvenementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_evenement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./evenement.page.html */ "6IMM");
/* harmony import */ var _evenement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evenement.page.scss */ "vuNO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var EvenementPage = /** @class */ (function () {
    function EvenementPage(firestore, route) {
        this.firestore = firestore;
        this.route = route;
    }
    EvenementPage.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération du paramètre indiquant la page d'où l'on vient
        this.route.queryParams.subscribe(function (props) {
            _this.retour = props.retour;
            // Récupération des informations de l'événement dans la BD
            _this.route.paramMap.subscribe(function (params) {
                // Récupération de l'id de l'évènement
                _this.id = params.get('id');
                _this.event = _this.firestore.getEventDocById(_this.id);
                // Requête pour récupérer les informations de l'énvènements
                _this.event.subscribe(function (data) {
                    _this.titre = data.titre;
                    _this.img = data.img;
                    _this.date = data.date.toDate().toLocaleDateString('fr-FR', { year: 'numeric', month: 'numeric', day: 'numeric' });
                    _this.heure = data.heure;
                    // On découpe la date pour avoir le jour, le mois et l'année en séparer
                    var dateEvenement = _this.date.split('/');
                    // On vérifie si l'évènement à une heure de début et de fin
                    // Si oui, on les convertit pour les utiliser
                    // Si non, on aura uniquement l'heure de départ et il faudra créer une date de fin 1 heure après
                    if (_this.heure.length > 5 && (_this.heure[4] === 'à' || _this.heure[6] === 'à')) {
                        _this.debutEvenement = _this.heure.split(' ')[0].replace('h', '');
                        _this.finEvenement = _this.heure.split(' ')[2].replace('h', '');
                    }
                    else {
                        _this.debutEvenement = _this.heure.replace('h', '');
                        // tslint:disable-next-line:radix
                        var heureEvenement = parseInt(_this.debutEvenement);
                        if (heureEvenement < 100) {
                            heureEvenement += 1;
                        }
                        else {
                            heureEvenement += 100;
                        }
                        _this.finEvenement = heureEvenement.toString();
                    }
                    // On vérifie la taille de l'heure pour savoir si il y aussi les minutes
                    // Si on a 2 caractères, alors on connait uniquement l'heure
                    // Sinon, on a l'heure et les minutes de connues
                    if (_this.debutEvenement.length === 2) {
                        _this.debutEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + _this.debutEvenement + '00' + '00Z';
                    }
                    else {
                        _this.debutEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + _this.debutEvenement + '00Z';
                    }
                    // On vérifie la taille de l'heure pour savoir si il y aussi les minutes
                    // Si on a 2 caractères, alors on connait uniquement l'heure
                    // Sinon, on a l'heure et les minutes de connues
                    if (_this.finEvenement.length === 2) {
                        _this.finEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + _this.finEvenement + '00' + '00Z';
                    }
                    else {
                        _this.finEvenement = dateEvenement[2] + dateEvenement[1] + dateEvenement[0] + 'T' + _this.finEvenement + '00Z';
                    }
                    // On écrit l'ensemble des informations dans le lien
                    _this.qrCodeTexte = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
                        _this.titre.split(' ').join('%20') + '&dates=' + _this.debutEvenement + '/' + _this.finEvenement + '&ctz=Europe/London';
                });
            });
        });
    };
    EvenementPage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EvenementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-evenement',
            template: _raw_loader_evenement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_evenement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], EvenementPage);
    return EvenementPage;
}());



/***/ })

}]);
//# sourceMappingURL=evenement-evenement-module.js.map