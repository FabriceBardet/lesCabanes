(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bivouac-bivouac-module~camp4-camp4-module~la-table-la-table-module~le-dome-le-dome-module"],{

/***/ "06uh":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/programme-page/programme-page.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"programme\">\n  <ion-item lines=\"none\">\n    <ion-title>Programme {{ nomPage }}:</ion-title>\n  </ion-item>\n  <ion-slides [options]=\"sliderConfig\" pager=true>\n    <ion-slide *ngFor=\"let cen of programmeEnCours | async\">\n      <ion-card>\n        <ion-card-title>{{cen.titre}}</ion-card-title>\n        <img src=\"{{cen.img}}\" />\n        <ion-label>\n          {{cen.dateDeDebut?.toDate().toLocaleDateString('fr-FR', { month: 'numeric', day: 'numeric' })}}\n          <br>\n          {{cen.dateDeFin?.toDate().toLocaleDateString('fr-FR', { month: 'numeric', day: 'numeric' })}}\n        </ion-label>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n  <ion-item lines=\"none\">\n    <ion-title class=\"tarif\" *ngIf=\"tarifs.length!=0\">Tarifs :</ion-title>\n  </ion-item>\n  <ion-text *ngFor=\"let tarif of tarifs\"> {{ tarif?.tarif }}<br></ion-text>\n  <ion-item lines=\"none\">\n    <ion-title class=\"tarif\" *ngIf=\"contacts.length!=0\">Contact :</ion-title>\n  </ion-item>\n  <ion-text *ngFor=\"let contact of contacts\"> {{ contact?.contact }}<br></ion-text>\n</div>\n");

/***/ }),

/***/ "0y8B":
/*!********************************************************************!*\
  !*** ./src/app/camp4/social-boulder/social-boulder.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#zoneRetour {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 25%;\n}\n\n#iconeRetour {\n  width: 15%;\n  margin: 10px;\n}\n\n#texteRetour {\n  font-size: 1.5em;\n}\n\n#images {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#parcours {\n  width: 30%;\n  margin-bottom: 5%;\n  margin-left: 5%;\n}\n\n#detail {\n  width: 50%;\n  margin-bottom: 5%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvY2lhbC1ib3VsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNvY2lhbC1ib3VsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3pvbmVSZXRvdXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI2ljb25lUmV0b3Vye1xuICB3aWR0aDoxNSU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3RleHRlUmV0b3Vye1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4jaW1hZ2Vze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNwYXJjb3Vyc3tcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuI2RldGFpbHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG4iXX0= */");

/***/ }),

/***/ "1e1h":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camp4/social-boulder/social-boulder.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"zoneRetour\" (click)=\"dismiss()\">\n  <ion-img id=\"iconeRetour\" src=\"../../assets/icones/picto-back.png\"></ion-img>\n  <ion-text id=\"texteRetour\" color=\"primary\">Camp 4</ion-text>\n</div>\n\n<div id=\"images\">\n  <ion-img id=\"parcours\" src=\"../../assets/img/socialboulder.png\"></ion-img>\n  <ion-img id=\"detail\" src=\"../../assets/img/socialboulderblocs.png\"></ion-img>\n</div>\n");

/***/ }),

/***/ "7GtZ":
/*!***************************************!*\
  !*** ./src/app/camp4/camp4.module.ts ***!
  \***************************************/
/*! exports provided: Camp4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camp4PageModule", function() { return Camp4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camp4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camp4-routing.module */ "MeHq");
/* harmony import */ var _camp4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camp4.page */ "MWOS");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _Components_actualite_actualite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/actualite/actualite.component */ "EO6K");
/* harmony import */ var _component_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component-details/details.component */ "Y8kl");
/* harmony import */ var _Components_programme_page_programme_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/programme-page/programme-page.component */ "bK+D");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../navigation/navigation.module */ "sO0u");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");













var Camp4PageModule = /** @class */ (function () {
    function Camp4PageModule() {
    }
    Camp4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _camp4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Camp4PageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomePageModule"],
                _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__["NavigationPageModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_12__["QRCodeModule"]
            ],
            exports: [
                _Components_actualite_actualite_component__WEBPACK_IMPORTED_MODULE_8__["ActualiteComponent"],
                _component_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _Components_programme_page_programme_page_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammePageComponent"]
            ],
            declarations: [_camp4_page__WEBPACK_IMPORTED_MODULE_6__["Camp4Page"], _Components_actualite_actualite_component__WEBPACK_IMPORTED_MODULE_8__["ActualiteComponent"], _component_details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"], _Components_programme_page_programme_page_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammePageComponent"]]
        })
    ], Camp4PageModule);
    return Camp4PageModule;
}());



/***/ }),

/***/ "Bjcl":
/*!***************************************!*\
  !*** ./src/app/camp4/camp4.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgFondQrCode {\n  position: absolute;\n  width: 195px;\n  right: 40px;\n  bottom: -70px;\n  height: 195px;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhbXA0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiY2FtcDQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0ZvbmRRckNvZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTVweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJvdHRvbTogLTcwcHg7XG4gIGhlaWdodDogMTk1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "EO6K":
/*!*************************************************************!*\
  !*** ./src/app/Components/actualite/actualite.component.ts ***!
  \*************************************************************/
/*! exports provided: ActualiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualiteComponent", function() { return ActualiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_actualite_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./actualite.component.html */ "V7QO");
/* harmony import */ var _actualite_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actualite.component.scss */ "nTpt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");





var ActualiteComponent = /** @class */ (function () {
    function ActualiteComponent(firestore) {
        this.firestore = firestore;
        this.collectionEnCours = 'ActiviteEnCours';
        this.collectionAVenir = 'ActiviteAVenir';
        // récupérations des actualités dans la base de données
        this.activiteEnCours = this.firestore.getCollectionValue(this.collectionEnCours);
        this.activiteAVenir = this.firestore.getCollectionValue(this.collectionAVenir);
    }
    ActualiteComponent.prototype.ngOnInit = function () { };
    ActualiteComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    ActualiteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-actualite',
            template: _raw_loader_actualite_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_actualite_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ActualiteComponent);
    return ActualiteComponent;
}());



/***/ }),

/***/ "Jbqw":
/*!******************************************************************!*\
  !*** ./src/app/camp4/social-boulder/social-boulder.component.ts ***!
  \******************************************************************/
/*! exports provided: SocialBoulderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialBoulderComponent", function() { return SocialBoulderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_social_boulder_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./social-boulder.component.html */ "1e1h");
/* harmony import */ var _social_boulder_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-boulder.component.scss */ "0y8B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





var SocialBoulderComponent = /** @class */ (function () {
    function SocialBoulderComponent(controleurModal) {
        this.controleurModal = controleurModal;
    }
    SocialBoulderComponent.prototype.ngOnInit = function () { };
    /**
     * Cache le modal
     */
    SocialBoulderComponent.prototype.dismiss = function () {
        this.controleurModal.dismiss({
            dismissed: true
        });
    };
    SocialBoulderComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    SocialBoulderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-social-boulder',
            template: _raw_loader_social_boulder_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_social_boulder_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], SocialBoulderComponent);
    return SocialBoulderComponent;
}());



/***/ }),

/***/ "MWOS":
/*!*************************************!*\
  !*** ./src/app/camp4/camp4.page.ts ***!
  \*************************************/
/*! exports provided: Camp4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camp4Page", function() { return Camp4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_camp4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./camp4.page.html */ "lXqz");
/* harmony import */ var _camp4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camp4.page.scss */ "Bjcl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var Camp4Page = /** @class */ (function () {
    function Camp4Page() {
        // nom du document stockant les informations de contacts/tarifs en BD
        this.docBD = 'Camp4';
        // Stocke le nom du Component
        this.nomPage = 'Camp 4';
        // Stocke l'image allant avec le nom du Component
        this.iconePage = 'picto-magasin-orange.png';
        // Stocke le nom du bouton retour
        this.texteIconeRetour = 'Découverte';
        // Stocke la route permettant de faire le retour vers la page au dessus de celle-ci
        this.routeRetour = 'navigation';
        // Titre pour les actualités
        this.nomActu = 'de Camp 4';
    }
    Camp4Page.prototype.ngOnInit = function () {
    };
    Camp4Page.ctorParameters = function () { return []; };
    Camp4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-camp4',
            template: _raw_loader_camp4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_camp4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], Camp4Page);
    return Camp4Page;
}());



/***/ }),

/***/ "MeHq":
/*!***********************************************!*\
  !*** ./src/app/camp4/camp4-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Camp4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camp4PageRoutingModule", function() { return Camp4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _camp4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camp4.page */ "MWOS");




var routes = [
    {
        path: '',
        component: _camp4_page__WEBPACK_IMPORTED_MODULE_3__["Camp4Page"]
    }
];
var Camp4PageRoutingModule = /** @class */ (function () {
    function Camp4PageRoutingModule() {
    }
    Camp4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Camp4PageRoutingModule);
    return Camp4PageRoutingModule;
}());



/***/ }),

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

/***/ "V7QO":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/actualite/actualite.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"border\">\n  <ion-item lines=\"none\">\n    <ion-label>En ce moment :</ion-label>\n  </ion-item>\n  <ion-card  *ngFor=\"let cen of activiteEnCours | async\">\n      <ion-card-title>{{cen.titre}}</ion-card-title>\n      <ion-card-subtitle>{{cen.descriptif}}</ion-card-subtitle>\n    <img src=\"{{cen.img}}\"/>\n    <ion-label>\n      {{cen.dateDebut}}<br>{{cen.dateDeFin}}\n    </ion-label>\n  </ion-card>\n  <ion-item lines=\"none\">\n    <ion-label>A venir :</ion-label>\n  </ion-item>\n  <ion-card *ngFor=\"let cav of activiteAVenir | async\">\n      <ion-card-title>{{cav.titre}}</ion-card-title>\n      <ion-card-subtitle>{{cav.Descriptif}}</ion-card-subtitle>\n    <img src=\"{{cav.img}}\"/>\n    <ion-label>\n      {{cav.heureDebut}}<br>{{cav.heureDeFin}}\n    </ion-label>\n  </ion-card>\n</div>\n");

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

/***/ "Y8kl":
/*!**************************************************************!*\
  !*** ./src/app/camp4/component-details/details.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details.component.html */ "wtZL");
/* harmony import */ var _details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.component.scss */ "pK2x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _component_planning_planning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component-planning/planning.component */ "IUBa");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _social_boulder_social_boulder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../social-boulder/social-boulder.component */ "Jbqw");








var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(controleurModal, firebaseService) {
        this.controleurModal = controleurModal;
        this.firebaseService = firebaseService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération des informations de camp4 dans la bd
        this.donnees = [];
        this.firebaseService.getDetailsPage('Camp4').subscribe(function (data) {
            data.forEach(function (doc) {
                _this.donnees.push(doc);
            });
        });
    };
    /**
     * Transition vers le modal du planning
     */
    DetailsComponent.prototype.presenterModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controleurModal.create({
                            component: _component_planning_planning_component__WEBPACK_IMPORTED_MODULE_5__["PlanningComponent"],
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
    /**
     * Transition vers le modal de SocialBoulder
     */
    DetailsComponent.prototype.presenterModalSocialBoulder = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controleurModal.create({
                            component: _social_boulder_social_boulder_component__WEBPACK_IMPORTED_MODULE_7__["SocialBoulderComponent"],
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
    DetailsComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"] }
    ]; };
    DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-details',
            template: _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "bK+D":
/*!***********************************************************************!*\
  !*** ./src/app/Components/programme-page/programme-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgrammePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammePageComponent", function() { return ProgrammePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_programme_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./programme-page.component.html */ "06uh");
/* harmony import */ var _programme_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programme-page.component.scss */ "hFSq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");





var ProgrammePageComponent = /** @class */ (function () {
    function ProgrammePageComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.sliderConfig = {
            autoplay: true,
            effect: 'flip',
        };
    }
    /**
     * Récupération des informations de la BD
     */
    ProgrammePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tarifs = [];
        this.contacts = [];
        // récupération des tarifs pour la page
        this.firebaseService.getTarifs(this.docBD).subscribe(function (tarifs) {
            tarifs.forEach(function (doc) {
                _this.tarifs.push(doc);
            });
            // récupération des contacts pour la page
            _this.firebaseService.getContacts(_this.docBD).subscribe(function (contacts) {
                contacts.forEach(function (doc) {
                    _this.contacts.push(doc);
                });
            });
        });
        // récupération du programme en cours
        this.programmeEnCours = this.firebaseService.getProgramme('Programme', this.docBD);
    };
    ProgrammePageComponent.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
    ]; };
    ProgrammePageComponent.propDecorators = {
        docBD: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        nomPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ProgrammePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-programme-page',
            template: _raw_loader_programme_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_programme_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ProgrammePageComponent);
    return ProgrammePageComponent;
}());



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

/***/ "hFSq":
/*!*************************************************************************!*\
  !*** ./src/app/Components/programme-page/programme-page.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-text {\n  font-size: 1.3vmax !important;\n}\n\n.tarif {\n  font-size: 1.8vmax !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2dyYW1tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFRTtFQUNFLDZCQUFBO0FBQ0oiLCJmaWxlIjoicHJvZ3JhbW1lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dHtcbiAgICBmb250LXNpemU6IDEuM3ZtYXggICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC50YXJpZntcbiAgICBmb250LXNpemU6IDEuOHZtYXggICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "lXqz":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camp4/camp4.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-header [nomPage]=\"nomPage\" [iconePage]=\"iconePage\" [texteIconeRetour]=\"texteIconeRetour\"\n    [routeRetour]=\"routeRetour\"> </app-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <app-actualite></app-actualite>\n      </ion-col>\n      <ion-col size=\"6\">\n        <app-details></app-details>\n      </ion-col>\n      <ion-col size=\"3\">\n        <app-programme-page [nomPage]=\"nomActu\" [docBD]=\"docBD\"></app-programme-page>\n        <div class=\"imgFondQr\">\n          <ion-img class=\"imgFondQrCode\" src=\"../../assets/QrCode/Contact_Camp4 (1).png\"></ion-img>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "nTpt":
/*!***************************************************************!*\
  !*** ./src/app/Components/actualite/actualite.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3R1YWxpdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pK2x":
/*!****************************************************************!*\
  !*** ./src/app/camp4/component-details/details.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bouton {\n  --background: #f7d5ba;\n  color: #E05B32;\n  margin-left: 450px;\n}\n\ndiv {\n  text-align: justify;\n}\n\nion-text {\n  font-size: 1.3vmax !important;\n}\n\nion-label {\n  font-size: 1.8vmax !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGIiwiZmlsZSI6ImRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm91dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjdkNWJhO1xuICBjb2xvcjogI0UwNUIzMjtcbiAgbWFyZ2luLWxlZnQ6IDQ1MHB4O1xufVxuXG5cbmRpdntcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuXG5pb24tdGV4dHtcbiAgZm9udC1zaXplOiAxLjN2bWF4ICAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWx7XG4gIGZvbnQtc2l6ZTogMS44dm1heCAgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

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



/***/ }),

/***/ "wtZL":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camp4/component-details/details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\">\n <div>\n  <ion-label>{{ donnees[0]?.titre }}</ion-label>\n  <br>\n  <ion-text > {{ donnees[0]?.texte }}</ion-text>\n   <br>\n   <ion-button class=\"bouton\" (click)=\"presenterModalSocialBoulder()\"> Voir les parcours</ion-button>\n\n   <br>\n  <br>\n </div>\n\n <div>\n  <ion-label>{{ donnees[1]?.titre }}</ion-label>\n  <br>\n  <ion-text > {{ donnees[1]?.texte }}</ion-text>\n  <br>\n  <br>\n </div>\n\n <div>\n  <ion-label>{{ donnees[2]?.titre }}</ion-label>\n  <br>\n  <ion-text > {{ donnees[2]?.texte }}</ion-text>\n  <br>\n  <ion-button class=\"bouton\" (click)=\"presenterModal()\"> Voir le planning</ion-button>\n  <br>\n  <br>\n </div>\n\n <div>\n  <ion-label>{{ donnees[3]?.titre }}</ion-label>\n  <br>\n  <ion-text > {{ donnees[3]?.texte }}</ion-text>\n  <br>\n  <br>\n </div>\n\n <div>\n  <ion-label>{{ donnees[4]?.titre }}</ion-label>\n  <br>\n  <ion-text > {{ donnees[4]?.texte }}</ion-text>\n  <br>\n  <br>\n </div>\n</div>\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=default~bivouac-bivouac-module~camp4-camp4-module~la-table-la-table-module~le-dome-le-dome-module.js.map