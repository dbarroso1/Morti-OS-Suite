webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_rtc_module_rtc_module_component__ = __webpack_require__("./src/app/components/rtc-module/rtc-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_eqe_module_eqe_module_component__ = __webpack_require__("./src/app/components/eqe-module/eqe-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_lsi_module_lsi_module_component__ = __webpack_require__("./src/app/components/lsi-module/lsi-module.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'rtc', component: __WEBPACK_IMPORTED_MODULE_3__components_rtc_module_rtc_module_component__["a" /* RtcModuleComponent */] },
    { path: 'lsi', component: __WEBPACK_IMPORTED_MODULE_5__components_lsi_module_lsi_module_component__["a" /* LsiModuleComponent */] },
    { path: 'eqe', component: __WEBPACK_IMPORTED_MODULE_4__components_eqe_module_eqe_module_component__["a" /* EqeModuleComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<div class=\"app_body\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.version = '1.0.1';
        this.module_title = 'Home';
        this.module_desc = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rtc_module_rtc_module_component__ = __webpack_require__("./src/app/components/rtc-module/rtc-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eqe_module_eqe_module_component__ = __webpack_require__("./src/app/components/eqe-module/eqe-module.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_lsi_module_lsi_module_component__ = __webpack_require__("./src/app/components/lsi-module/lsi-module.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_rtc_module_rtc_module_component__["a" /* RtcModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_eqe_module_eqe_module_component__["a" /* EqeModuleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_lsi_module_lsi_module_component__["a" /* LsiModuleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/eqe-module/eqe-module.component.css":
/***/ (function(module, exports) {

module.exports = ".eqe_main {\r\n    margin: 0 auto;\r\n    padding-top: 50px;\r\n    width: 50%;\r\n}\r\n\r\n.eqe_trainer {\r\n    padding: 4px;\r\n    background: rgba(0, 0, 0, 0.100);\r\n}\r\n\r\n.eqe_trainer input {\r\n    margin: 2px;\r\n}"

/***/ }),

/***/ "./src/app/components/eqe-module/eqe-module.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"eqe_main\">\r\n    <div class=\"menu\">\r\n        <div class=\"name\">{{module_title}}</div>\r\n        <div class=\"members\">{{module_desc}}</div>\r\n        <div class=\"settings\">\r\n            <a href=\"/settings\">\r\n                <i class=\"material-icons md-light\">settings</i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <h1> Morti-OS: EQE Module</h1>\r\n\r\n    <h2>Summary</h2>\r\n    <p>\r\n        The EQE Module is the part of Morti that calculates the weight of a conversation and outputs a emotional value. the Emotional\r\n        Value (EV) comes from a Weight given to a word, the context of the scentence (weights of words surrounding it). Then\r\n        Based on the weights of both the context and the word an EV can be estimated.\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/eqe-module/eqe-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqeModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EqeModuleComponent = /** @class */ (function () {
    function EqeModuleComponent() {
        this.module_title = 'Eqe Module';
        this.module_desc = 'Emotional Quantification Engine';
    }
    EqeModuleComponent.prototype.ngOnInit = function () {
    };
    EqeModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eqe-module',
            template: __webpack_require__("./src/app/components/eqe-module/eqe-module.component.html"),
            styles: [__webpack_require__("./src/app/components/eqe-module/eqe-module.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EqeModuleComponent);
    return EqeModuleComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main welcome_info\">\r\n        <div class=\"menu\">\r\n                <div class=\"name\">{{module_title}}</div>\r\n                <div class=\"members\">{{module_desc}}</div>\r\n                <div class=\"settings\">\r\n                    <a href=\"/settings\">\r\n                        <i class=\"material-icons md-light\">settings</i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n    <h1>Welcome to Morti-OS</h1>\r\n    <p>To get started, open the sidebar to the left and pick a module you would like to work on.</p>\r\n\r\n    <hr>\r\n    <table style=\"margin: 0 auto;\" cellspacing=\"10\">\r\n\r\n        <tr>\r\n            <td>\r\n                <h3>RTC</h3>\r\n                <i>(Relationship Trained Communications)</i>\r\n                <p>\r\n                    The RTC Module is used by Morti as its main method of communication with the user. The goal of the RTC Module is to process\r\n                    user inputs, and define the context of said input, while calculating an emotional value (1-10) to the\r\n                    expression given.\r\n                </p>\r\n                <a href=\"https://github.com/dbarroso1/Morti-OS-RTC\">Learn More</a>\r\n            </td>\r\n\r\n            <td>\r\n                <h3>EQE</h3>\r\n                <i>(Emotional Quantifyer Engine)</i>\r\n                <p>\r\n                    Morti is planned to have a vast array of emotional responses. Although the amount of emotional responses are limited to Six\r\n                    Primary Emotions, Morti can calculate multiple emotions to get acheive Secondary Emotional responses.\r\n                    (See Image Below) Each word in the Input Phrase is seperated from the whole, given a corresponding Emotional\r\n                    Weight, and is then its averaged out to find the phrases Emotional Score.\r\n                </p>\r\n                <a href=\"https://github.com/dbarroso1/Morti-OS-RTC\">Learn More</a>\r\n            </td>\r\n            <td>\r\n                <h3>LSI</h3>\r\n                <i>(Live Simulation Interface)</i>\r\n                <p>\r\n                    The LS Module is where Morti exsists as a simulated avatar in a virtual world. This Module is how the user will mainly interact\r\n                    with Morti via a GUI. All modules will combine here to give a full live experience. Using an XOR Artificial\r\n                    Neural Network and Unity, Morti will need to train and learn about his environment so that he can survive.\r\n                </p>\r\n                <a href=\"https://github.com/dbarroso1/Morti-OS-RTC\">Learn More</a>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <div>\r\n        <!--h1>News and Events</h1>\r\n        {% if news %}\r\n        <p>{{news_body}}</p>\r\n        {% else %}\r\n        <i>- No News or Events - </i>\r\n        {% endif %}\r\n        -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.module_title = 'Home';
        this.module_desc = ' ';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/lsi-module/lsi-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LsiModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LsiModuleComponent = /** @class */ (function () {
    function LsiModuleComponent() {
    }
    LsiModuleComponent.prototype.ngOnInit = function () {
    };
    LsiModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lsi-module',
            template: "\n    <p>\n      lsi-module works!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LsiModuleComponent);
    return LsiModuleComponent;
}());



/***/ }),

/***/ "./src/app/components/rtc-module/rtc-module.component.css":
/***/ (function(module, exports) {

module.exports = "::-moz-selection {\r\n    background: rgba(82, 179, 217, 0.3);\r\n    color: inherit;\r\n}\r\n\r\n::selection {\r\n    background: rgba(82, 179, 217, 0.3);\r\n    color: inherit;\r\n}\r\n\r\n/* M E S S A G E S */\r\n\r\n.chat {\r\n    list-style: none;\r\n    background: rgba(46, 59, 70, 0.315);\r\n    border-radius: 6px;\r\n    min-width: 650px;\r\n    max-width: 750px;\r\n    margin: 0 auto;\r\n    padding: 0 0 50px 0;\r\n    margin-top: 60px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.chat li {\r\n    padding: 0.5rem;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.chat .day {\r\n    position: relative;\r\n    display: block;\r\n    text-align: center;\r\n    color: rgb(255, 255, 255);\r\n    height: 20px;\r\n    line-height: 38px;\r\n    margin-top: 5px;\r\n    margin-bottom: 20px;\r\n    cursor: default;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.chat .notification {\r\n    position: relative;\r\n    display: inherit;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: rgba(255, 255, 255, 0.904);\r\n    line-height: 30px;\r\n    border-radius: 100px;\r\n    margin: 7px 35%;\r\n    height: 30px;\r\n    width: 35%;\r\n    -webkit-box-shadow: 0px 1px 0px rgba(0, 0, 0, .05), 0px -1px 0px rgba(0, 0, 0, .05), inset 0px 1px 0px rgba(255, 255, 255, .02), inset 0px -1px 0px rgba(255, 255, 255, .02);\r\n            box-shadow: 0px 1px 0px rgba(0, 0, 0, .05), 0px -1px 0px rgba(0, 0, 0, .05), inset 0px 1px 0px rgba(255, 255, 255, .02), inset 0px -1px 0px rgba(255, 255, 255, .02);\r\n    text-shadow: 0px -1px 0px rgba(0, 0, 0, .1), 0px 1px 0px rgba(255, 255, 255, .05);\r\n    cursor: default;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    -webkit-transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n}\r\n\r\n.chat .notification time {\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 7px;\r\n    font-size: 11px;\r\n    padding: 8px;\r\n    border-radius: 100px;\r\n    background: #252C33;\r\n    -webkit-box-shadow: 0px 0px 2px rgba(255, 255, 255, .02), inset 0px 0px 1px rgba(27, 35, 42, 0.1);\r\n            box-shadow: 0px 0px 2px rgba(255, 255, 255, .02), inset 0px 0px 1px rgba(27, 35, 42, 0.1);\r\n    height: 1px;\r\n    line-height: 0px;\r\n    color: rgba(255, 255, 255, 0.1);\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    -webkit-transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n}\r\n\r\n.other .msg {\r\n    background: rgb(215, 252, 215);\r\n    max-width: 300px;\r\n    min-width: 300px;\r\n    border-top-left-radius: 0px;\r\n}\r\n\r\n.other:before {\r\n    content: \"\";\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n    left: 0px;\r\n    width: 0px;\r\n    height: 0px;\r\n    border: 5px solid rgb(215, 252, 215);\r\n    border-left-color: transparent;\r\n    border-bottom-color: transparent;\r\n}\r\n\r\n.self {\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.self .msg {\r\n    max-width: 300px;\r\n    min-width: 300px;\r\n    border-bottom-right-radius: 0px;\r\n    background: rgb(217, 203, 255);\r\n}\r\n\r\n.self:after {\r\n    content: \"\";\r\n    position: relative;\r\n    display: inline-block;\r\n    float: right;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    width: 0px;\r\n    height: 0px;\r\n    border: 5px solid rgb(217, 203, 255);\r\n    border-right-color: transparent;\r\n    border-top-color: transparent;\r\n}\r\n\r\n.msg {\r\n    background: #eef8ff;\r\n    min-width: 50px;\r\n    padding: 5px;\r\n    border-radius: 2px;\r\n    word-break: break-all;\r\n}\r\n\r\n.msg .user {\r\n    font-size: 14px;\r\n    margin: 0 0 2px 0;\r\n    color: #666;\r\n    padding-bottom: 4px;\r\n    border-bottom: dashed 2px #868686;\r\n    font-weight: 700;\r\n    margin-top: -2px;\r\n    margin-bottom: 5px;\r\n    -webkit-transition: all .2s ease;\r\n    transition: all .2s ease;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.msg .user .range.admin {\r\n    display: inline-block;\r\n    font-size: 10px;\r\n    font-weight: 300;\r\n    color: #6aea96;\r\n    padding: 2px;\r\n    border-radius: 3px;\r\n    border: solid 1px #6aea96;\r\n    background: rgba(255, 255, 255, 0);\r\n    margin-left: 5px;\r\n}\r\n\r\n.msg p {\r\n    font-size: 13px;\r\n    padding: 4px;\r\n    margin: 0 0 2px 0;\r\n    color: rgb(83, 83, 83);\r\n    -webkit-transition: all .2s ease;\r\n    transition: all .2s ease;\r\n}\r\n\r\n.msg img {\r\n    position: relative;\r\n    display: block;\r\n    width: 600px;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 3px #eee;\r\n            box-shadow: 0px 0px 3px #eee;\r\n    -webkit-transition: all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n    transition: all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n    cursor: default;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.msg time {\r\n    font-size: 0.7rem;\r\n    color: rgba(0, 0, 0, .35);\r\n    margin-top: 3px;\r\n    float: right;\r\n    cursor: default;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    min-width: 12px;\r\n    width: 12px;\r\n    max-width: 12px;\r\n    min-height: 12px;\r\n    height: 12px;\r\n    max-height: 12px;\r\n    background: #252C33;\r\n    -webkit-box-shadow: inset 0px 50px 0px rgba(27, 35, 42, 0.9), inset 0px -50px 0px #eee;\r\n            box-shadow: inset 0px 50px 0px rgba(27, 35, 42, 0.9), inset 0px -50px 0px #eee;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border: none;\r\n    border-radius: 100px;\r\n    border: solid 3px #252C33;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:active {\r\n    background: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    display: block;\r\n    height: 26px;\r\n}\r\n\r\n/* T Y P E */\r\n\r\n.typezone {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: -10px;\r\n    width: 100%;\r\n    height: 50px;\r\n    z-index: 99;\r\n    background: #eee;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\ntextarea,\r\ntextarea:hover {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 25%;\r\n    right: 5%;\r\n    width: 60%;\r\n    height: 30px;\r\n    z-index: 100;\r\n    background: #fafafa;\r\n    border: none;\r\n    outline: none;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    padding-top: 2%;\r\n    color: #666;\r\n    font-weight: 400;\r\n    border-top-right-radius: 10px;\r\n    border-top-left-radius: 10px;\r\n    overflow: hidden;\r\n    resize: none;\r\n    z-index: 200;\r\n    -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n    -webkit-transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);\r\n}\r\n\r\ntextarea:focus {\r\n    height: 300px;\r\n    -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.send {\r\n    position: fixed;\r\n    display: block;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    width: 90px;\r\n    height: 50px;\r\n    border: none;\r\n    outline: none;\r\n    z-index: 100;\r\n    cursor: pointer;\r\n    background-image: url(https://cdn2.iconfinder.com/data/icons/dark-action-bar-2/96/send-512.png);\r\n    background-repeat: no-repeat;\r\n    background-size: 34px 34px;\r\n    background-position: 95% 10px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n}\r\n\r\n.send:active {\r\n    opacity: 0.85;\r\n}\r\n\r\n/* R E S P O N S I V E   C O N F I G U R A T I O N */\r\n\r\n@media screen and (max-width: 750px) {\r\n    ::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n    .chat {\r\n        margin-bottom: 55px;\r\n    }\r\n    .msg p {\r\n        font-size: 11px;\r\n    }\r\n    .msg .user {\r\n        font-size: 13px;\r\n    }\r\n    .msg img {\r\n        width: 300px;\r\n    }\r\n    .chat .notification {\r\n        font-size: 12px;\r\n        margin: 7px 30%;\r\n        width: 40%;\r\n    }\r\n    .chat .day {\r\n        font-size: 11px;\r\n    }\r\n\r\n    .send {\r\n        width: 25%;\r\n    }\r\n    textarea {\r\n        left: 0px;\r\n        right: 0px;\r\n        bottom: 50px;\r\n        padding-left: 5%;\r\n        padding-right: 5%;\r\n        padding-top: 20px;\r\n        width: 90%;\r\n        border-radius: 0px;\r\n        height: 28px;\r\n        background: #fafafa;\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        -webkit-transition: all .4s cubic-bezier(0.2, -0.2, 0.2, 1.2);\r\n        transition: all .4s cubic-bezier(0.2, -0.2, 0.2, 1.2);\r\n    }\r\n    textarea:focus {\r\n        height: 30vh;\r\n        margin-top: 30vh;\r\n        -webkit-box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.1);\r\n                box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.1);\r\n    }\r\n    form:focus~.typezone {\r\n        bottom: 50vh;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n    .msg p {\r\n        max-width: 250px;\r\n    }\r\n    .msg img {\r\n        width: 200px;\r\n    }\r\n    .chat .notification {\r\n        font-size: 12px;\r\n        margin: 7px 0px;\r\n        width: 100%;\r\n        border-radius: 0px;\r\n    }\r\n    .chat .notification time {\r\n        right: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/rtc-module/rtc-module.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"rtc_main\">\r\n    <div>\r\n        <div class=\"menu\">\r\n            <div class=\"name\">{{module_title}}</div>\r\n            <div class=\"members\">{{module_desc}}</div>\r\n            <div class=\"settings\">\r\n                <a href=\"/settings\">\r\n                    <i class=\"material-icons md-light\">settings</i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <ol class=\"chat\">\r\n            <div class=\"day\">{{today| date:'shortDate'}}</div>\r\n            <div class=\"notification\">Wake Morti up by saying \"Hello\"</div>\r\n            <!--Chat Starts Here-->\r\n            <li class=\"other\">\r\n                <div class=\"msg\">\r\n                    <div class=\"user\">{{morti.name}}</div>\r\n                    <p>{{morti.message}} </p>\r\n                    <time>{{today | date:'shortTime' }}</time>\r\n                </div>\r\n            </li>\r\n            <li class=\"self\">\r\n                <div class=\"msg\">\r\n                    <div class=\"user\">{{user.name}}</div>\r\n                    <p>{{user.message}}</p>\r\n                    <time>{{today | date:'shortTime' }}</time>\r\n                </div>\r\n            </li>\r\n        </ol>\r\n        <div class=\"typezone\">\r\n            <form>\r\n                <textarea type=\"text\" placeholder=\"Say something\"></textarea>\r\n                <input type=\"submit\" class=\"send\" value=\"\" />\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rtc-module/rtc-module.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtcModuleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RtcModuleComponent = /** @class */ (function () {
    function RtcModuleComponent() {
        this.module_title = 'RTC Module';
        this.module_desc = 'Relationship Trained Communications';
        this.today = Date.now();
        this.user = {
            'name': 'You',
            'message': ''
        };
        this.morti = {
            'name': 'Morti',
            'message': ''
        };
    }
    RtcModuleComponent.prototype.ngOnInit = function () {
    };
    RtcModuleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rtc-module',
            template: __webpack_require__("./src/app/components/rtc-module/rtc-module.component.html"),
            styles: [__webpack_require__("./src/app/components/rtc-module/rtc-module.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RtcModuleComponent);
    return RtcModuleComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "/*Side bar Navigation*/\r\n\r\n.nav_sidebar {\r\n    -webkit-animation: color_change 5s infinite alternate;\r\n            animation: color_change 5s infinite alternate;\r\n    height: 100%;\r\n    width: 300px;\r\n    position: fixed;\r\n    z-index: 150;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgb(76, 68, 94);\r\n    overflow-x: hidden;\r\n    padding-top: 10px;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n#sub_header {\r\n    padding-left: 6px;\r\n    padding-top: 3px;\r\n    float: left;\r\n}\r\n\r\n.nav_sidebar .wrapper {\r\n    padding: 6px;\r\n    color: #FFF;\r\n}\r\n\r\n.nav_sidebar .sidebar_header {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding-top: 6px;\r\n    width: 100%;\r\n}\r\n\r\n.nav_sidebar .sidebar_header a {\r\n    text-decoration: none;\r\n    color: #ffffff;\r\n    -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n}\r\n\r\n.nav_sidebar .sidebar_header .title {\r\n    position: relative;\r\n    float: left;\r\n    width: 70%;\r\n    vertical-align: middle;\r\n    font-size: 24px;\r\n    padding-left: 12px;\r\n}\r\n\r\n.nav_sidebar .sidebar_header .title_btn {\r\n    position: relative;\r\n    float: right;\r\n    width: 20%;\r\n    text-align: right;\r\n    vertical-align: middle;\r\n    padding-right: 4px;\r\n}\r\n\r\n.nav_sidebar .sidebar_header a:hover {\r\n    color: aqua;\r\n}\r\n\r\n.nav_sidebar ul {\r\n    padding-left: 0;\r\n}\r\n\r\n.nav_sidebar li {\r\n    width: 100%;\r\n    margin-bottom: 6px;\r\n    margin-left: -10px;\r\n    padding-top: 4px;\r\n    padding-left: 6px;\r\n    list-style-type: none;\r\n    text-align: right;\r\n}\r\n\r\n.nav_sidebar .sub_section {\r\n    background: rgb(102, 91, 126);\r\n    -webkit-transition: 100ms;\r\n    transition: 100ms;\r\n    border-radius: 4px;\r\n}\r\n\r\n.nav_sidebar .sub_section:hover {\r\n    border-right: solid 8px rgb(111, 137, 148);\r\n}\r\n\r\n.nav_sidebar .sub_section a {\r\n    -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\r\n    text-decoration: none;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.nav_sidebar .sub_section a:hover {\r\n    color: aqua;\r\n}\r\n\r\n/* FOOTER AREA SIDEBAR */\r\n\r\n.sidebar_footer {\r\n    padding: 4px;\r\n    bottom: 0;\r\n    position: fixed;\r\n    text-align: center;\r\n}\r\n\r\n.sidebar_footer i {\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 10px;\r\n}\r\n\r\n.sidebar_footer a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.sidebar_footer a:hover {\r\n    color: rgb(1, 196, 255);\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    .nav_sidebar {\r\n        width: 200px;\r\n        text-align: center;\r\n        padding-top: 15px;\r\n    }\r\n    .nav_sidebar .sub_section h3 {\r\n        text-align: center;\r\n        padding-left: 6px;\r\n        font-weight: 300;\r\n        font-size: 16px\r\n    }\r\n    .sidebar_footer {\r\n        width: 200px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav_sidebar\">\r\n    <div class=\"wrapper\">\r\n        <div class=\"sidebar_header\">\r\n            <span class=\"title\">{{title}}</span>\r\n            <i class=\"material-icons md-24 title_btn\">\r\n                <a class=\"\" href=\"/\">home</a>\r\n            </i>\r\n        </div>\r\n        <ul>\r\n            <li class=\"sub_section\">\r\n                <a href=\"rtc\" *ngIf=\"rtcIsActive == true; else inactive1\">\r\n                    <span id=\"sub_header\">RTC Module</span>\r\n                    <i class=\"material-icons md-light\" style=\"color: rgb(110, 196, 110)\">power</i>\r\n                </a>\r\n                <ng-template #inactive1>\r\n                    <a href=\"rtc\">\r\n                        <span id=\"sub_header\">RTC Module</span>\r\n                        <i class=\"material-icons md-light\">power</i>\r\n                    </a>\r\n                </ng-template>\r\n            </li>\r\n            <li class=\"sub_section\">\r\n                <a href=\"eqe\" *ngIf=\"eqeIsActive == true; else inactive2\">\r\n                    <span id=\"sub_header\">EQE Module</span>\r\n                    <i class=\"material-icons md-light\" style=\"color: rgb(110, 196, 110)\">power</i>\r\n                </a>\r\n                <ng-template #inactive2>\r\n                    <a href=\"eqe\">\r\n                        <span id=\"sub_header\">EQE Module</span>\r\n                        <i class=\"material-icons md-light\">power</i>\r\n                    </a>\r\n                </ng-template>\r\n            </li>\r\n            <!--li class=\"sub_section\">\r\n                <a href=\"lsi\" *ngIf=\"lsiIsActive == true; else inactive3\">\r\n                    <span id=\"sub_header\">LSI Module</span>\r\n                    <i class=\"material-icons md-light\" style=\"color: rgb(110, 196, 110)\">power</i>\r\n                </a>\r\n                <ng-template #inactive3>\r\n                    <a href=\"lsi\">\r\n                        <span id=\"sub_header\">LSI Module</span>\r\n                        <i class=\"material-icons md-light\">power</i>\r\n                    </a>\r\n                </ng-template>\r\n            </li-->\r\n        </ul>\r\n\r\n\r\n        <div class=\"sidebar_footer\">\r\n            <i>\r\n                Morti-OS Suite {{version}} |\r\n                <a href=\"http://www.zn30.us\" target=\"_blank\">Zinc Media, Corp</a>\r\n                | Copyright 2018\r\n            </i>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.title = 'Morti-OS: Toolbox';
        this.rtcIsActive = true;
        this.eqeIsActive = false;
        this.lsiIsActive = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map