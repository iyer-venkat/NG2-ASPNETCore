"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var loginService_1 = require("../../services/login/loginService");
var Login = (function () {
    function Login(router, route, formBuilder, _loginSvc) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this._loginSvc = _loginSvc;
        this.loginForm = this.formBuilder.group({
            userId: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            isAdmin: [""]
        });
        this.hasPageError = false;
    }
    Login.prototype.Login = function (form) {
        var _this = this;
        console.log('-off: ');
        console.log(form);
        var loginReq = {
            userId: this.loginForm.controls["userId"].value,
            password: this.loginForm.controls["password"].value,
        };
        this._loginSvc.VerifyUser(loginReq)
            .subscribe(function (data) { console.log(data); }, function (error) {
            console.log(JSON.stringify(error) + "::" + error.statusText);
            _this.hasPageError = true;
            if (error.status == 404) {
                _this.pageError = { "message": "User not found." };
            }
            else {
                _this.pageError = JSON.parse(error._body);
            }
        }, function () {
            console.log('verification complete');
            _this.router.navigate(['dashboard']);
        });
    };
    Login.prototype.Login1 = function (event) {
        //console.log(event);
        //console.log(this.loginForm.value);
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "../../../views/login/login.html",
        providers: [loginService_1.LoginService]
    })
], Login);
exports.Login = Login;
//# sourceMappingURL=login.js.map