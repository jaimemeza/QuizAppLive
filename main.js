(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "questions/:id",
        component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"]
    },
    {
        path: "results",
        component: _results_results_component__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"]
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
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

module.exports = "<main>\n        <router-outlet></router-outlet>\n      </main>\n      "

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz.service */ "./src/app/quiz.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                _quiz_service__WEBPACK_IMPORTED_MODULE_8__["QuizService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myVideo {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%; \n  min-height: 100%;\n}\n\n/* Header CSS */\n\nbody {\n   background: transparent;\n   font-family: 'Cinzel', serif;\n   position: fixed;\n   text-align: center\n  }\n\n.area {\n    font-family: 'Cinzel', serif;\n    position: absolute;\n    text-align: center;\n    margin-top: 2em;\n    font-size: 5em;\n    color: #fff;\n    letter-spacing: -7px;\n    font-weight: 700;\n    text-transform: uppercase;\n    -webkit-animation: blur 3s ease-out infinite;\n            animation: blur 3s ease-out infinite;\n    text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;\n  }\n\n@-webkit-keyframes blur {\n    from {\n      text-shadow:0px 0px 10px #2ceb06,\n        0px 0px 10px rgb(0, 247, 41), \n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 50px rgb(0, 247, 41),\n        0px 0px 50px rgb(0, 247, 41),\n        0px 0px 50px #7B96B8,\n        0px 0px 150px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px -10px 100px #7B96B8,\n        0px -10px 100px #7B96B8;\n    }\n  }\n\n@keyframes blur {\n    from {\n      text-shadow:0px 0px 10px #2ceb06,\n        0px 0px 10px rgb(0, 247, 41), \n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 25px rgb(0, 247, 41),\n        0px 0px 50px rgb(0, 247, 41),\n        0px 0px 50px rgb(0, 247, 41),\n        0px 0px 50px #7B96B8,\n        0px 0px 150px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px 10px 100px #7B96B8,\n        0px -10px 100px #7B96B8,\n        0px -10px 100px #7B96B8;\n    }\n  }\n\n/* Button Css */\n\n.btn {\n    position: relative;\n    width: 180px;\n    height: 50px;\n    margin-top: 450px;\n    border-radius: 6px 22px;\n    transition: all .2s ease;\n    box-sizing: border-box;\n    text-align: center;\n    color: rgb(236, 240, 241);\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 14px 0;\n    overflow: hidden;\n    \n  }\n\n.btn:hover {\n    border-radius: 22px 6px;\n    background: rgb(46, 204, 113);\n    cursor: pointer;\n  }\n\n.btn--trees {\n    background: #18df6b;\n  }\n\n.btn--trees:hover{\n    background: rgb(46, 204, 113);\n    padding: 10px;\n  }\n  \n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div>\n        <video autoplay muted loop id=\"myVideo\">\n          <source src=\"./assets/Home-Assets/creature.mp4\" type=\"video/mp4\">\n        </video>\n      </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"area\">What Mythical Creature\n      <br> Are You?\n    </div>\n    <div class=\"section section--trees\">\n      <button class=\"btn btn--trees\" routerLink=\"/questions/0\">\n        Begin Quiz\n      </button>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");
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
    function HomeComponent(quiz) {
        this.quiz = quiz;
        this.quiz = quiz;
    }
    HomeComponent.prototype.handleKeyboardEvent = function (event) {
        event.keyCode == 39 || event.keyCode == 13 ? this.quiz.router.navigate(['/questions', 0]) : null;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "handleKeyboardEvent", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/questions/animations.ts":
/*!*****************************************!*\
  !*** ./src/app/questions/animations.ts ***!
  \*****************************************/
/*! exports provided: fadeFwdAnimation, fadeBwdAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeFwdAnimation", function() { return fadeFwdAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeBwdAnimation", function() { return fadeBwdAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeFwdAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeFwdAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(-100%)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(100%)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0%)'
        }))
    ])
]);
var fadeBwdAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeBwdAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(100%)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateX(-100%)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateX(0%)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main, .carousel-control-next, .carousel-control-prev {\n    height: 100vh;\n\n}\n\n.carousel-control-next, .carousel-control-prev {\n    cursor: pointer;\n    width: 250px;\n}\n\n.carousel-indicators li {\n    cursor: pointer;\n    height: 7px; \n    margin: 2px;\n}\n\n#myVideo {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%; \n    min-height: 100%;\n}\n\n#questions {\n    width: 75vw;\n}\n\nh1 {\n    font-size: 3rem;\n    font-family: 'Cinzel', serif;\n}\n\n.image-radio .selectIt {\n    top: -5px;\n    transition: top ease 0.5s;\n    box-shadow: 0 4px 8px 0 rgba(250, 250, 250, .8), 0 6px 20px 0 rgba(250, 250, 250, 0.79);\n}\n\nimg {\n    width: 280px;\n    height: 188px; \n}\n\n.cards label {\n    position: relative;\n    top: 10px;\n    bottom: 10px;\n    height: 45px;\n}\n\n.cards {\n    cursor: pointer;\n    top: 0;\n    position: relative;\n    transition: top ease 0.5s;\n    border-radius: 5px;\n}\n\n.cards:hover {\n    top: -5px;\n    box-shadow: 0 4px 8px 0 rgba(150, 150, 150, .7), 0 6px 20px 0 rgba(150, 150, 150, 0.69);\n}"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"main bg-dark px-0\">\n<!-- Background Video -->\n  <video volume=\"0\" autoplay muted loop id=\"myVideo\">\n    <source src=\"./assets/questions.mp4\" type=\"video/mp4\">\n  </video>\n  <!-- Animated block -->\n  <div \n  [@fadeFwdAnimation]=\"quiz.isAnimateFwd\" \n  [@fadeBwdAnimation]=\"quiz.isAnimateBwd\" \n  id=\"carouselExampleControls\" \n  class=\"carousel slide\"\n  data-ride=\"carousel\">\n    <div>\n      <!-- Question title -->\n      <div class=\"col-12 py-3 text-center text-white px-0\">\n        <h1>{{ quiz.questions[quiz.qId].name }}</h1>\n      </div>\n    </div>\n    <div class=\"justify-content-center d-flex\">\n      <div id=\"questions\" class=\"row flex-row d-flex justify-content-between\">\n        <br>\n        <!-- Answers For Loop -->\n        <div \n        *ngFor=\"let answer of quiz.questions[quiz.qId].answers; let i = index\" \n        class=\"image-radio text-white col-xl-6 col-lg-12 d-flex d-flex justify-content-center py-2\">\n         <!-- Radio input hidden -->\n          <input \n          class=\"d-none px-4\" \n          type=\"radio\" \n          name=\"{{ answer.name }}\" \n          [value]=\"answer.index\" \n          [disabled]=\"quiz.questions[quiz.qId].locked\"\n          [(ngModel)]=\"quiz.questions[quiz.qId].userResponseId\">\n          <!-- Image and text answer -->\n          <span \n          class=\"cards bordered bg-dark d-flex flex-column\" \n          [ngClass] = \"{'selectIt': quiz.questions[quiz.qId].userResponseId == i}\"\n          (click)=\"quiz.selectIt(answer.index)\">\n            <img src=\"{{ answer.img }}\" alt=\"\">\n            <label \n            class=\"h6 my-auto text-center px-4\" \n            for=\"{{ answer.name }}\">{{ answer.name }}</label>\n          </span>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n<!-- Home button just at the question 1 -->\n  <span \n  class=\"carousel-control-prev\" \n  *ngIf=\"quiz.qId == 0\" \n  (click)=\"quiz.goHome()\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"quiz.qId == 0\">Home</span>\n  </span>\n\n<!-- Back button just when are in question 2 o later -->\n  <span \n  class=\"carousel-control-prev\" \n  *ngIf=\"quiz.qId > 0\" \n  (click)=\"quiz.backQuestion()\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"quiz.qId > 0\">Back</span>\n  </span>\n\n  <!-- Next button just when your are not in the last question -->\n  <span \n  class=\"carousel-control-next\" \n  *ngIf=\"quiz.qId < quiz.questions.length - 1\" \n  (click)=\"quiz.nextQuestion()\">\n    <span *ngIf=\"quiz.qId < quiz.questions.length - 1\">Next</span>\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  </span>\n\n  <!-- Results button just when your are in the last question -->\n  <span \n  class=\"carousel-control-next\" \n  *ngIf=\"quiz.qId == quiz.questions.length - 1\" \n  (click)=\"quiz.nextQuestion()\">\n    <span *ngIf=\"quiz.qId == quiz.questions.length - 1\">Results</span>\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n  </span>\n\n  <!-- Current question indicator -->\n  <ol class=\"carousel-indicators\">\n    <li  \n    *ngFor=\"let bars of quiz.questions; let i = index\" \n    [ngClass] = \"{'active': quiz.qId == i}\" \n    (click)= \"quiz.jumpTo(i)\"></li>\n  </ol>\n\n  <!-- Modal -->\n\n  <!-- Modal button  hidden -->\n  <button id='launchModal' type=\"button\" class=\"d-none\" data-toggle=\"modal\" data-target=\"#modal\">\n  </button>\n\n  <!-- Modal window -->\n  <div class=\"modal fade\" id=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Attention</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Please, select your answer!</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/questions/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(quiz) {
        this.quiz = quiz;
        this.quiz = quiz;
    }
    QuestionsComponent.prototype.handleKeyboardEvent = function (event) {
        event.keyCode == 39 || event.keyCode == 13 ? this.quiz.nextQuestion() : null;
        event.keyCode == 37 ? this.quiz.backQuestion() : null;
        event.keyCode == 49 ? this.quiz.selectIt(0) : null;
        event.keyCode == 50 ? this.quiz.selectIt(1) : null;
        event.keyCode == 51 ? this.quiz.selectIt(2) : null;
        event.keyCode == 52 ? this.quiz.selectIt(3) : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], QuestionsComponent.prototype, "handleKeyboardEvent", null);
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fadeFwdAnimation"], _animations__WEBPACK_IMPORTED_MODULE_2__["fadeBwdAnimation"]] // register the animation
        }),
        __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizService = /** @class */ (function () {
    function QuizService(router) {
        this.router = router;
        // Control animation
        this.isAnimateFwd = false;
        this.isAnimateBwd = false;
        // Control the questions and results Index
        this.qId = 0;
        this.rId = null;
        // Answers Values
        this.answersValues = [
            ['C', 'V', 'P', 'D'],
            ['V', 'D', 'P', 'C'],
            ['V', 'C', 'P', 'D'],
            ['V', 'C', 'P', 'D'],
            ['D', 'C', 'V', 'P'],
            ['D', 'C', 'V', 'P'],
            ['P', 'C', 'V', 'D']
        ];
        // Results title, summary and image path
        this.results = [
            {
                title: 'You are a Dragon',
                summary: 'You are a symbol of life, fire, ferocity,strength, and wisdom. Because Dragons are as ancient as litriture itself Dragons are wise, intelligent, and cunning Beasts. Most are regarded as Respected Creatures in there society.',
                backgroundURL: './assets/dragon.jpg'
            },
            {
                title: 'You are a Vampire',
                summary: 'You are a symbol of of the night, beauty, and mystery. Because the the Roots of Vampires are found in folklore there is a \'terror\' in the night and pefer the night, dark cloths, and have aristocratic tastes, these are all traites that Vampires display.',
                backgroundURL: './assets/vampire.jpg'
            },
            {
                title: 'You are a Phoneix',
                summary: 'You are a symbol of fire, renewal, hope and balanced. Because a Phoneix is rooted in rebirth, they are the very wise and intelligent most are a symbol of hope and optimism.',
                backgroundURL: './assets/phenoix.jpg'
            },
            {
                title: 'You are a Centaur',
                summary: 'You are a symbol of a free spirit, food, wine and kindness. Because the roots of the centaur are founded in shamanic society there is an \'earthiness\' and love of life, sensuality, food, wine, women and all things of this earth that the centaur displays. They are often very wise and can be kind and loving, but they are always \'free spirits\' – not capable of being tethered.',
                backgroundURL: './assets/centaur.jpg'
            },
        ];
        // Questions array
        this.questions = [
            {
                id: 0,
                name: "What element are you most connected to?",
                answers: [{
                        index: 0,
                        name: 'Fire',
                        img: './assets/answer_imgs/q1/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Water',
                        img: './assets/answer_imgs/q1/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Earth',
                        img: './assets/answer_imgs/q1/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'Air',
                        img: './assets/answer_imgs/q1/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 1,
                name: "Which one do you prefer?",
                answers: [{
                        index: 0,
                        name: 'Sun',
                        img: './assets/answer_imgs/q2/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Moon',
                        img: './assets/answer_imgs/q2/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Dusk',
                        img: './assets/answer_imgs/q2/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'Dawn',
                        img: './assets/answer_imgs/q2/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 2,
                name: "Where would you dwell?",
                answers: [{
                        index: 0,
                        name: 'Caves',
                        img: './assets/answer_imgs/q3/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Open spaces',
                        img: './assets/answer_imgs/q3/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Bodies of water',
                        img: './assets/answer_imgs/q3/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'The sky',
                        img: './assets/answer_imgs/q3/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 3,
                name: "How big are you?",
                answers: [{
                        index: 0,
                        name: 'Puny',
                        img: './assets/answer_imgs/q4/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Just undersize',
                        img: './assets/answer_imgs/q4/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Huge',
                        img: './assets/answer_imgs/q4/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'Enormous',
                        img: './assets/answer_imgs/q4/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 4,
                name: "How do you feed?",
                answers: [{
                        index: 0,
                        name: 'Hunting',
                        img: './assets/answer_imgs/q5/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Gathering',
                        img: './assets/answer_imgs/q5/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Soul consumption',
                        img: './assets/answer_imgs/q5/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'I don\'t eat',
                        img: './assets/answer_imgs/q5/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 5,
                name: "Which one is your weakness?",
                answers: [{
                        index: 0,
                        name: 'Arrows',
                        img: './assets/answer_imgs/q6/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Magic items',
                        img: './assets/answer_imgs/q6/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Bullets',
                        img: './assets/answer_imgs/q6/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'Fire',
                        img: './assets/answer_imgs/q6/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
            {
                id: 6,
                name: "Would you be able to take over the world?",
                answers: [{
                        index: 0,
                        name: 'Without a doubt',
                        img: './assets/answer_imgs/q7/1.jpg'
                    },
                    {
                        index: 1,
                        name: 'Not sure',
                        img: './assets/answer_imgs/q7/2.jpg'
                    },
                    {
                        index: 2,
                        name: 'Definitely',
                        img: './assets/answer_imgs/q7/3.jpg'
                    },
                    {
                        index: 3,
                        name: 'It\'s in my possession already',
                        img: './assets/answer_imgs/q7/4.jpg'
                    }
                ],
                userResponseId: null,
                locked: false
            },
        ];
        this.router = router;
    }
    // Need to select a answer before move to next one or get result
    QuizService.prototype.validateAnswerIsNotEmpty = function () {
        if (this.questions[this.qId].userResponseId == null) {
            document.getElementById('launchModal').click();
            return true;
        }
        else {
            return false;
        }
    };
    // Animate Forward 
    QuizService.prototype.animateFwd = function () {
        this.isAnimateFwd = !this.isAnimateFwd;
    };
    // Animate Backward
    QuizService.prototype.animateBwd = function () {
        this.isAnimateBwd = !this.isAnimateBwd;
    };
    // Jump to the next question and validate that you have selected a answer
    QuizService.prototype.nextQuestion = function () {
        if (!this.validateAnswerIsNotEmpty()) {
            if (this.qId < this.questions.length - 1) {
                this.questions[this.qId].locked = true;
                this.animateFwd();
                this.qId++;
                this.router.navigate(['/questions', this.qId]);
            }
            else {
                this.getResults();
            }
        }
    };
    // Jump to other questions
    QuizService.prototype.jumpTo = function (index) {
        if (!this.validateAnswerIsNotEmpty()) {
            if (this.qId < index) {
                this.animateFwd();
            }
            else if (this.qId > index) {
                this.animateBwd();
            }
            this.questions[this.qId].locked = true;
            this.qId = index;
            this.router.navigate(['/questions', this.qId]);
        }
    };
    // Asign the value from image clicks to the user response variable and avoid the user change the answer after  
    QuizService.prototype.selectIt = function (index) {
        if (!this.questions[this.qId].locked) {
            this.questions[this.qId].userResponseId = index;
        }
    };
    // Go back 1 time
    QuizService.prototype.backQuestion = function () {
        if (this.qId == 0) {
            this.router.navigate(['/home']);
        }
        else {
            this.jumpTo(this.qId - 1);
        }
    };
    // Go to the main page
    QuizService.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    // Restart the quiz clearing the values and go to the main page
    QuizService.prototype.restartQuiz = function () {
        this.cleanUserValues();
        this.goHome();
    };
    // Verify all the questions have been answered
    QuizService.prototype.checkAllAnswers = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].userResponseId == null) {
                this.jumpTo(i);
                this.validateAnswerIsNotEmpty();
                return true;
            }
            else {
            }
        }
    };
    // Compare the values from the user answers and quiz anwers
    QuizService.prototype.getResults = function () {
        if (!this.checkAllAnswers()) {
            var dragon = 0;
            var vampire = 0;
            var pheonix = 0;
            var centaurs = 0;
            var tempResult = [];
            for (var i = 0; i < this.questions.length; i++) {
                var index = this.questions[i].userResponseId;
                this.answersValues[i][index] == 'D' ? dragon++ : null;
                this.answersValues[i][index] == 'V' ? vampire++ : null;
                this.answersValues[i][index] == 'P' ? pheonix++ : null;
                this.answersValues[i][index] == 'C' ? centaurs++ : null;
            }
            tempResult.push(dragon, vampire, pheonix, centaurs);
            this.rId = tempResult.indexOf(Math.max.apply(Math, tempResult));
            this.router.navigate(['/results']);
        }
    };
    // Clear all the quiz values to the default
    QuizService.prototype.cleanUserValues = function () {
        this.qId = 0;
        this.rId = null;
        for (var i = 0; i < this.questions.length; i++) {
            this.questions[i].locked = false;
            this.questions[i].userResponseId = null;
        }
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    width: 100vw;\n    height: 100vh;\n    background-size: cover !important;\n}\n\n\n\n.container {\n    width: 800px;\n    height: 400px;\n        opacity: 0.7;\n        text-align: justify;\n   padding-top: 50px;\n    \n}\n\n\n\nlead {\n    overflow-wrap: break-word;\n}\n\n\n\n.p {\noverflow-wrap: break-word;\n}\n\n\n\nh1 {\n    text-align: center;\n}\n\n\n\na {\n    \n}\n"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body [ngStyle]=\"{'background': 'url(' + quiz.results[quiz.rId].backgroundURL + ')'}\">\n  <div class=\"container\">\n    <div class=\"jumbotron  justify-content-center\">\n      <h1 class=\"display-4\">{{ quiz.results[quiz.rId].title }} </h1>\n      <p class=\"lead\"></p>\n      <hr class=\"my-4\">\n      <p>{{ quiz.results[quiz.rId].summary }}\n      </p>\n      <div class=\" d-flex justify-content-center\">\n        <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"quiz.restartQuiz()\">Return home</a>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(quiz) {
        this.quiz = quiz;
    }
    ResultsComponent.prototype.handleKeyboardEvent = function (event) {
        event.keyCode == 13 ? this.quiz.restartQuiz() : null;
    };
    ResultsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ResultsComponent.prototype, "handleKeyboardEvent", null);
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], ResultsComponent);
    return ResultsComponent;
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

module.exports = __webpack_require__(/*! /Users/jaimemeza/iCloud Drive (Archive)/Documents/vta/week4/project/QuizApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map