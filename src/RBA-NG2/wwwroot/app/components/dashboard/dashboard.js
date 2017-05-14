"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboardService_1 = require("../../services/dashboard/dashboardService");
var Dashboard = (function () {
    function Dashboard(_dashSvc) {
        this._dashSvc = _dashSvc;
        this.userAccounts = [];
        this.hasPageError = false;
        this.userAccountsReq = { userID: 123456789 };
    }
    Dashboard.prototype.ngOnInit = function () {
        var _this = this;
        this._dashSvc.GetUserAccounts(this.userAccountsReq)
            .subscribe(function (data) { console.log(data); _this.userAccounts = JSON.parse(data._body); }, function (error) {
            console.log(JSON.stringify(error) + "::" + error.statusText);
            _this.hasPageError = true;
            if (error.status == 404) {
                _this.pageError = { "message": "No data found." };
            }
            else {
                _this.pageError = JSON.parse(error._body);
            }
        }, function () {
            console.log('verification complete');
        });
    };
    return Dashboard;
}());
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: "../../../views/dashboard/dashboard.html",
        providers: [dashboardService_1.DashboardService]
    })
], Dashboard);
exports.Dashboard = Dashboard;
var UserAccountReq = (function () {
    function UserAccountReq() {
    }
    return UserAccountReq;
}());
exports.UserAccountReq = UserAccountReq;
var Accounts = (function () {
    function Accounts() {
    }
    return Accounts;
}());
exports.Accounts = Accounts;
//# sourceMappingURL=dashboard.js.map