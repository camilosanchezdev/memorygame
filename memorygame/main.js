(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");



class AppComponent {
    constructor() {
        this.title = 'memorygame';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game");
    } }, directives: [_components_game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function GameComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tarjeta_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.flip(tarjeta_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tarjeta_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", tarjeta_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", tarjeta_r1, "-i");
} }
class GameComponent {
    constructor() {
        this.flips = 0;
        this.flag = true;
        this.arrNumbers = [];
        this.level1 = [0, 1, 2, 3, 4, 5, 6, 7];
        this.level1Results = [];
        this.level2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.level3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.level4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.level5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.tortugas = {
            "0": {
                "imagen": "015-leonardo.png",
            },
            "1": {
                "imagen": "020-raphael.png",
            },
            "2": {
                "imagen": "017-michaelangelo.png",
            },
            "3": {
                "imagen": "007-donatello.png",
            },
            "4": {
                "imagen": "004-karai.png",
            },
            "5": {
                "imagen": "005-casey.png",
            },
            "6": {
                "imagen": "022-rocksteady.png",
            },
            "7": {
                "imagen": "028-splinter.png",
            },
        };
    }
    ngOnInit() {
        //console.log(this.tortugas[1].imagen);
        this.randomTarjetas();
    }
    prueba() {
        // console.log(this.card);
        this.level1.forEach(element => {
            var card1 = document.getElementById(element);
            card1.style.transform = 'translateX(0%) rotateY(0deg)';
        });
        this.arrNumbers = [];
        this.randomTarjetas();
        this.jugar();
    }
    ngAfterViewChecked() {
        this.jugar();
    }
    flip(value) {
        this.flips++;
        if (this.flips == 1) {
            var card = document.getElementById(value);
            card.style.transform = 'translateX(-100%) rotateY(-180deg)';
            this.turtle = this.level1Results[value];
            this.choice = value;
        }
        else {
            var card = document.getElementById(value);
            card.style.transform = 'translateX(-100%) rotateY(-180deg)';
            if (this.turtle != this.level1Results[value]) {
                // console.log(this.card);
                var sec = 1;
                let pip = this.choice.toString();
                let idInterval = setInterval(function () { fname(pip); }, 1000);
                function fname(arg) {
                    sec--;
                    if (sec == 0) {
                        sec = 1;
                        // habilito botones
                        var card1 = document.getElementById(arg);
                        var card2 = document.getElementById(value);
                        card1.style.transform = 'translateX(0%) rotateY(0deg)';
                        card2.style.transform = 'translateX(0%) rotateY(0deg)';
                        clearInterval(idInterval);
                    }
                    //this.flag = true;
                } // fin timer
            }
            //restart
            this.flips = 0;
            this.turtle = -1;
            this.choice = -1;
        }
        // });
    }
    jugar() {
        for (let i = 0; i < 4; i++) {
            for (let j = 2 * i; j < 2 * (i + 1); j += 2) {
                // console.log(i + "---" + j + "---" + (j+1));
                // + '-i'
                let card1 = document.getElementById(this.arrNumbers[j] + '-i');
                this.level1Results[this.arrNumbers[j]] = i;
                card1.style.backgroundImage = "url('./assets/" + this.tortugas[i].imagen + "')";
                card1.style.backgroundSize = '100%';
                card1.style.backgroundPosition = '50% 50%';
                card1.style.backgroundRepeat = 'no-repeat';
                let card2 = document.getElementById(this.arrNumbers[j + 1] + '-i');
                this.level1Results[this.arrNumbers[j + 1]] = i;
                card2.style.backgroundImage = "url('./assets/" + this.tortugas[i].imagen + "')";
                card2.style.backgroundSize = '100%';
                card2.style.backgroundPosition = '50% 50%';
                card2.style.backgroundRepeat = 'no-repeat';
            }
        }
    }
    randomNumbers() {
        // Random números
        let ranNumber;
        let flag = false;
        do {
            ranNumber = Math.floor(Math.random() * 8);
            for (let i = 0; i < this.arrNumbers.length; i++) {
                if (ranNumber === this.arrNumbers[i]) {
                    flag = true;
                    break;
                }
                else {
                    flag = false;
                }
            }
        } while (flag);
        this.arrNumbers.push(ranNumber);
    }
    randomTarjetas() {
        // LEVEL 1
        for (let i = 0; i < 8; i++) {
            this.randomNumbers();
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 9, vars: 1, consts: [[1, "container"], [1, "tarjetas"], ["class", "tarjeta", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "myButton", 3, "click"], [1, "tarjeta", 3, "id", "click"], [1, "elemento"], [1, "card__face", "card__face--back", 3, "id"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Memory Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Teenage Mutant Ninja Turtles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_button_click_7_listener() { return ctx.prueba(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Restart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.level1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n.container[_ngcontent-%COMP%]   .tarjetas[_ngcontent-%COMP%]{\r\n    height: 500px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-content: center;\r\n}\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    color: rgb(4, 80, 25);\r\n    font-size: 50px;\r\n    text-align: center;\r\n    text-shadow: 0 0 2px #fff;\r\n}\r\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-family: 'Do Hyeon', sans-serif;\r\n    color: rgb(4, 80, 25);\r\n    font-size: 30px;\r\n    text-align: center;\r\n    text-shadow: 0 0 2px #fff;\r\n}\r\n.container[_ngcontent-%COMP%]   .tarjetas[_ngcontent-%COMP%]   .tarjeta[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 160px;\r\n    background-color: rgb(147, 233, 171);\r\n    margin: 15px;\r\n    cursor: pointer;\r\nbox-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);\r\n\r\nposition: relative;\r\ncursor: pointer;\r\ntransform-style: preserve-3d;\r\ntransform-origin: center right;\r\ntransition: transform 1s;\r\n\r\n\r\n}\r\n.myButton[_ngcontent-%COMP%] {\r\n    \r\n\tbox-shadow:inset 0px 1px 0px 0px #caefab;\r\n\tbackground:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);\r\n\tbackground-color:#77d42a;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #268a16;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#306108;\r\n\tfont-family:Arial;\r\n\tfont-size:25px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n    text-shadow:0px 1px 0px #aade7c;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.myButton[_ngcontent-%COMP%]:hover {\r\n\tbackground:linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);\r\n\tbackground-color:#5cb811;\r\n}\r\n.myButton[_ngcontent-%COMP%]:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n.card__face--back[_ngcontent-%COMP%] {\r\n\r\n    -webkit-backface-visibility: hidden;\r\n\r\n            backface-visibility: hidden;\r\n    \r\n    width: 120px;\r\n    height: 160px;\r\n    transform: rotateY(180deg);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZUFBZTtBQUduQiw0Q0FBNEM7QUFDNUMsS0FBSztBQUNMLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5Qix3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QjtBQUNBOztDQUVDLHdDQUF3QztDQUN4QywrREFBK0Q7Q0FDL0Qsd0JBQXdCO0NBQ3hCLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtJQUNqQiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtDQUNDLCtEQUErRDtDQUMvRCx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0FBQ1I7QUFFQTs7SUFFSSxtQ0FBMkI7O1lBQTNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGFpbmVyIC50YXJqZXRhc3tcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnRG8gSHllb24nLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig0LCA4MCwgMjUpO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZjtcclxufVxyXG4uY29udGFpbmVyIGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdEbyBIeWVvbicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDQsIDgwLCAyNSk7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjZmZmO1xyXG59XHJcbi5jb250YWluZXIgLnRhcmpldGFzIC50YXJqZXRhIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCAyMzMsIDE3MSk7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4tbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLyogICovXHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG50cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG50cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgcmlnaHQ7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG5cclxufVxyXG4ubXlCdXR0b24ge1xyXG4gICAgXHJcblx0Ym94LXNoYWRvdzppbnNldCAwcHggMXB4IDBweCAwcHggI2NhZWZhYjtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3N2Q0MmEgNSUsICM1Y2I4MTEgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNzdkNDJhO1xyXG5cdGJvcmRlci1yYWRpdXM6NnB4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgIzI2OGExNjtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRjb2xvcjojMzA2MTA4O1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG5cdGZvbnQtc2l6ZToyNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0cGFkZGluZzo2cHggMjRweDtcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIHRleHQtc2hhZG93OjBweCAxcHggMHB4ICNhYWRlN2M7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5teUJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNWNiODExIDUlLCAjNzdkNDJhIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzVjYjgxMTtcclxufVxyXG4ubXlCdXR0b246YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcblxyXG4uY2FyZF9fZmFjZS0tYmFjayB7XHJcblxyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLyogYmFja2dyb3VuZDogYmx1ZTsgKi9cclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\memorygame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map