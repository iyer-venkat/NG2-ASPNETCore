"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var pipeModule_1 = require("./modules/pipeModule");
var router_1 = require("@angular/router");
var app_1 = require("./components/app");
var login_1 = require("./components/login/login");
var dashboard_1 = require("./components/dashboard/dashboard");
var appRoutes = [
    { path: 'login', component: login_1.Login },
    { path: 'dashboard', component: dashboard_1.Dashboard },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var RBAModule = (function () {
    function RBAModule() {
    }
    return RBAModule;
}());
RBAModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_1.AppMain,
            login_1.Login,
            dashboard_1.Dashboard
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            pipeModule_1.PipeModule
        ],
        providers: [],
        bootstrap: [app_1.AppMain]
    })
], RBAModule);
exports.RBAModule = RBAModule;
//# sourceMappingURL=module.js.map