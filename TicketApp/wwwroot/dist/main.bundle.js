webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/components/components.module": [
		"../../../../../src/app/views/components/components.module.ts",
		"components.module"
	],
	"./views/dashboard/dashboard.module": [
		"../../../../../src/app/views/dashboard/dashboard.module.ts",
		"dashboard.module",
		"common"
	],
	"./views/icons/icons.module": [
		"../../../../../src/app/views/icons/icons.module.ts",
		"icons.module"
	],
	"./views/widgets/widgets.module": [
		"../../../../../src/app/views/widgets/widgets.module.ts",
		"widgets.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_nav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navigation; });
var navigation = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'UI elements'
    },
    {
        name: 'Components',
        url: '/components',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Buttons',
                url: '/components/buttons',
                icon: 'icon-puzzle'
            },
            {
                name: 'Social Buttons',
                url: '/components/social-buttons',
                icon: 'icon-puzzle'
            },
            {
                name: 'Cards',
                url: '/components/cards',
                icon: 'icon-puzzle'
            },
            {
                name: 'Forms',
                url: '/components/forms',
                icon: 'icon-puzzle'
            },
            {
                name: 'Modals',
                url: '/components/modals',
                icon: 'icon-puzzle'
            },
            {
                name: 'Switches',
                url: '/components/switches',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tables',
                url: '/components/tables',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tabs',
                url: '/components/tabs',
                icon: 'icon-puzzle'
            }
        ]
    },
    {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
            {
                name: 'Font Awesome',
                url: '/icons/font-awesome',
                icon: 'icon-star',
                badge: {
                    variant: 'secondary',
                    text: '4.7'
                }
            },
            {
                name: 'Simple Line Icons',
                url: '/icons/simple-line-icons',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'root',
            template: '<ng4-loading-spinner> </ng4-loading-spinner><router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__custom_option__ = __webpack_require__("../../../../../src/app/custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Import containers

var APP_CONTAINERS = [
    __WEBPACK_IMPORTED_MODULE_9__containers__["a" /* FullLayoutComponent */]
];
// Import components

var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_10__components__["b" /* AppAsideComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["c" /* AppBreadcrumbsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["d" /* AppFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["e" /* AppHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["f" /* AppSidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["g" /* AppSidebarFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["h" /* AppSidebarFormComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["i" /* AppSidebarHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["j" /* AppSidebarMinimizerComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components__["a" /* APP_SIDEBAR_NAV */]
];
// Import directives

var APP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_11__directives__["a" /* AsideToggleDirective */],
    __WEBPACK_IMPORTED_MODULE_11__directives__["b" /* NAV_DROPDOWN_DIRECTIVES */],
    __WEBPACK_IMPORTED_MODULE_11__directives__["c" /* ReplaceDirective */],
    __WEBPACK_IMPORTED_MODULE_11__directives__["d" /* SIDEBAR_TOGGLE_DIRECTIVES */]
];
// Import routing module

// Import 3rd party components


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ].concat(APP_CONTAINERS, APP_COMPONENTS, APP_DIRECTIVES),
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["HashLocationStrategy"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastOptions"],
                    useClass: __WEBPACK_IMPORTED_MODULE_8__custom_option__["a" /* CustomOption */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__("../../../../../src/app/containers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Containers

var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'components',
                loadChildren: './views/components/components.module#ComponentsModule'
            },
            {
                path: 'icons',
                loadChildren: './views/icons/icons.module#IconsModule'
            },
            {
                path: 'widgets',
                loadChildren: './views/widgets/widgets.module#WidgetsModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\r\n  <tabset>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Today</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-warning m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Meeting with <strong>Lucas</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-info m-0 py-3\">\r\n        <div class=\"avatar float-right\">\r\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Skype with <strong>Megan</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\r\n        <small><b>Tomorrow</b></small>\r\n      </div>\r\n      <hr class=\"transparent mx-3 my-0\">\r\n      <div class=\"callout callout-danger m-0 py-3\">\r\n        <div>New UI Project - <strong>deadline</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-success m-0 py-3\">\r\n        <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n      <div class=\"callout callout-primary m-0 py-3\">\r\n        <div><strong>Team meeting</strong></div>\r\n        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\r\n        <div class=\"avatars-stack mt-2\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-3 my-0\">\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-3 pb-5 mr-3 float-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status badge-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n      </div>\r\n    </tab>\r\n    <tab>\r\n      <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n      <div class=\"p-3\">\r\n        <h6>Settings</h6>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-4\">\r\n            <small><b>Option 1</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 2</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 3</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-3\">\r\n            <small><b>Option 4</b></small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <h6>System Utilization</h6>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n        <div class=\"progress progress-xs\">\r\n          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n        </div>\r\n        <small class=\"text-muted\">25GB/256GB</small>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-aside/app-aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent() {
    }
    AppAsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppAsideComponent);
    return AppAsideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside_component__ = __webpack_require__("../../../../../src/app/components/app-aside/app-aside.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbsComponent = /** @class */ (function () {
    function AppBreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    AppBreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppBreadcrumbsComponent);
    return AppBreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-breadcrumbs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/app-breadcrumbs.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_breadcrumbs_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"app-footer\">\r\n  <span><a href=\"#\">Ticketing System</a> &copy; 2017 American Express.</span>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.html")
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_footer_component__ = __webpack_require__("../../../../../src/app/components/app-footer/app-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_footer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n\r\n<!--   <a class=\"navbar-brand\" href=\"#\"></a>\r\n --> \r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/app-header/app-header.component.html")
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__("../../../../../src/app/components/app-header/app-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-footer\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent() {
    }
    AppSidebarFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-footer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.html")
        })
    ], AppSidebarFooterComponent);
    return AppSidebarFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-footer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/app-sidebar-footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_footer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"sidebar-form\"></form> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent() {
    }
    AppSidebarFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-form',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.html")
        })
    ], AppSidebarFormComponent);
    return AppSidebarFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/app-sidebar-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_form_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidebar-header\"></div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent() {
    }
    AppSidebarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-header',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.html")
        })
    ], AppSidebarHeaderComponent);
    return AppSidebarHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-header/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/app-sidebar-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_header_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarMinimizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent() {
    }
    AppSidebarMinimizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-minimizer',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.html")
        })
    ], AppSidebarMinimizerComponent);
    return AppSidebarMinimizerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-minimizer/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/app-sidebar-minimizer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_minimizer_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-nav/app-sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppSidebarNavComponent */
/* unused harmony export AppSidebarNavItemComponent */
/* unused harmony export AppSidebarNavLinkComponent */
/* unused harmony export AppSidebarNavDropdownComponent */
/* unused harmony export AppSidebarNavTitleComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SIDEBAR_NAV; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav__ = __webpack_require__("../../../../../src/app/_nav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import navigation elements

var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent() {
        this.navigation = __WEBPACK_IMPORTED_MODULE_1__nav__["a" /* navigation */];
    }
    AppSidebarNavComponent.prototype.isDivider = function (item) {
        return item.divider ? true : false;
    };
    AppSidebarNavComponent.prototype.isTitle = function (item) {
        return item.title ? true : false;
    };
    AppSidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav',
            template: "\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <ng-template ngFor let-navitem [ngForOf]=\"navigation\">\n          <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n          <ng-template [ngIf]=\"isTitle(navitem)\">\n            <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>\n          </ng-template>\n          <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n            <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>\n          </ng-template>\n        </ng-template>\n      </ul>\n    </nav>"
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavComponent);
    return AppSidebarNavComponent;
}());


var AppSidebarNavItemComponent = /** @class */ (function () {
    function AppSidebarNavItemComponent(router) {
        this.router = router;
    }
    AppSidebarNavItemComponent.prototype.hasClass = function () {
        return this.item.class ? true : false;
    };
    AppSidebarNavItemComponent.prototype.isDropdown = function () {
        return this.item.children ? true : false;
    };
    AppSidebarNavItemComponent.prototype.thisUrl = function () {
        return this.item.url;
    };
    AppSidebarNavItemComponent.prototype.isActive = function () {
        return this.router.isActive(this.thisUrl(), false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavItemComponent.prototype, "item", void 0);
    AppSidebarNavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-item',
            template: "\n    <li *ngIf=\"!isDropdown(); else dropdown\" [ngClass]=\"hasClass() ? 'nav-item ' + item.class : 'nav-item'\">\n      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>\n    </li>\n    <ng-template #dropdown>\n      <li [ngClass]=\"hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'\"\n          [class.open]=\"isActive()\"\n          routerLinkActive=\"open\"\n          appNavDropdown>\n        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>\n      </li>\n    </ng-template>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AppSidebarNavItemComponent);
    return AppSidebarNavItemComponent;
}());

var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent() {
    }
    AppSidebarNavLinkComponent.prototype.hasVariant = function () {
        return this.link.variant ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isExternalLink = function () {
        return this.link.url.substring(0, 4) === 'http' ? true : false;
    };
    AppSidebarNavLinkComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavLinkComponent.prototype, "link", void 0);
    AppSidebarNavLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-link',
            template: "\n    <a *ngIf=\"!isExternalLink(); else external\"\n      [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[link.url]\">\n      <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ng-template #external>\n      <a [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{link.url}}\">\n        <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-template>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavLinkComponent);
    return AppSidebarNavLinkComponent;
}());

var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent() {
    }
    AppSidebarNavDropdownComponent.prototype.isBadge = function () {
        return this.link.badge ? true : false;
    };
    AppSidebarNavDropdownComponent.prototype.isIcon = function () {
        return this.link.icon ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavDropdownComponent.prototype, "link", void 0);
    AppSidebarNavDropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-dropdown',
            template: "\n    <a class=\"nav-link nav-dropdown-toggle\" appNavDropdownToggle>\n      <i *ngIf=\"isIcon()\" class=\"{{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ul class=\"nav-dropdown-items\">\n      <ng-template ngFor let-child [ngForOf]=\"link.children\">\n        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>\n      </ng-template>\n    </ul>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavDropdownComponent);
    return AppSidebarNavDropdownComponent;
}());

var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var li = this.renderer.createElement('li');
        var name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            var classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            var wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        }
        else {
            this.renderer.appendChild(li, name);
        }
        this.renderer.appendChild(nativeElement, li);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSidebarNavTitleComponent.prototype, "title", void 0);
    AppSidebarNavTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav-title',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AppSidebarNavTitleComponent);
    return AppSidebarNavTitleComponent;
}());

var APP_SIDEBAR_NAV = [
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent
];


/***/ }),

/***/ "../../../../../src/app/components/app-sidebar-nav/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_nav_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar-nav/app-sidebar-nav.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_nav_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <app-sidebar-header></app-sidebar-header>\r\n  <app-sidebar-form></app-sidebar-form>\r\n  <app-sidebar-nav></app-sidebar-nav>\r\n  <app-sidebar-footer></app-sidebar-footer>\r\n  <app-sidebar-minimizer></app-sidebar-minimizer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.html")
        })
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app-sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__ = __webpack_require__("../../../../../src/app/components/app-sidebar/app-sidebar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_sidebar_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_aside__ = __webpack_require__("../../../../../src/app/components/app-aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app_aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__ = __webpack_require__("../../../../../src/app/components/app-breadcrumbs/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__app_breadcrumbs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_footer__ = __webpack_require__("../../../../../src/app/components/app-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__app_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_header__ = __webpack_require__("../../../../../src/app/components/app-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__app_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_sidebar__ = __webpack_require__("../../../../../src/app/components/app-sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__app_sidebar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-footer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__app_sidebar_footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__ = __webpack_require__("../../../../../src/app/components/app-sidebar-form/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__app_sidebar_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__ = __webpack_require__("../../../../../src/app/components/app-sidebar-header/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__app_sidebar_header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__ = __webpack_require__("../../../../../src/app/components/app-sidebar-minimizer/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__app_sidebar_minimizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_sidebar_nav__ = __webpack_require__("../../../../../src/app/components/app-sidebar-nav/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__app_sidebar_nav__["a"]; });












/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"app-body\">\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n      <!-- Breadcrumb Menu-->\r\n    \r\n    </ol>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/containers/full-layout/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/containers/full-layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout_component__ = __webpack_require__("../../../../../src/app/containers/full-layout/full-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/containers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_layout__ = __webpack_require__("../../../../../src/app/containers/full-layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_layout__["a"]; });



/***/ }),

/***/ "../../../../../src/app/custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newestOnTop = true;
        _this.showCloseButton = true;
        _this.toastLife = 3000;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "../../../../../src/app/directives/aside/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/aside/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside_directive__ = __webpack_require__("../../../../../src/app/directives/aside/aside.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aside__ = __webpack_require__("../../../../../src/app/directives/aside/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__aside__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__nav_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace__ = __webpack_require__("../../../../../src/app/directives/replace/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__replace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar__ = __webpack_require__("../../../../../src/app/directives/sidebar/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__sidebar__["a"]; });






/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__nav_dropdown_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/nav-dropdown/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "../../../../../src/app/directives/replace/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__replace_directive__ = __webpack_require__("../../../../../src/app/directives/replace/replace.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__replace_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/replace/replace.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReplaceDirective = /** @class */ (function () {
    function ReplaceDirective(el) {
        this.el = el;
    }
    // wait for the component to render completely
    ReplaceDirective.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    ReplaceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            // tslint:disable-next-line:max-line-length
            selector: '[appHostReplace], app-aside, app-breadcrumbs, app-footer, app-header, app-sidebar, app-sidebar-footer, app-sidebar-form, app-sidebar-header, app-sidebar-minimizer, app-sidebar-nav, app-sidebar-nav-dropdown, app-sidebar-nav-item, app-sidebar-nav-link, app-sidebar-nav-title'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ReplaceDirective);
    return ReplaceDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__ = __webpack_require__("../../../../../src/app/directives/sidebar/sidebar.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_directive__["a"]; });



/***/ }),

/***/ "../../../../../src/app/directives/sidebar/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export BrandMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BrandMinimizeDirective.prototype, "toggleOpen", null);
    BrandMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appBrandMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], BrandMinimizeDirective);
    return BrandMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map