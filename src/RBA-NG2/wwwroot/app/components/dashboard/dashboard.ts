import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboardService';

@Component({
    selector: 'dashboard',
    templateUrl: `../../../views/dashboard/dashboard.html`,
    providers: [DashboardService]
})
export class Dashboard implements OnInit {
    userAccountsReq: UserAccountReq;
    userAccounts: Array<Accounts> = [];
    pageError: any;
    hasPageError: boolean = false;

    constructor(private _dashSvc: DashboardService) {
        this.userAccountsReq = { userID: 123456789 };
    }

    ngOnInit(): void {
        this._dashSvc.GetUserAccounts(this.userAccountsReq)
            .subscribe(data => { console.log(data); this.userAccounts = JSON.parse(data._body); },
            error => {
                console.log(`${JSON.stringify(error)}::${error.statusText}`);
                this.hasPageError = true;

                if (error.status == 404) {
                    this.pageError = { "message": "No data found." };
                } else {
                    this.pageError = JSON.parse(error._body);
                }
            },
            () => {
                console.log('verification complete');
            });
    }

}

export class UserAccountReq {
    userID: number;
}

export class Accounts {
    accountNbr: string;
    accountName: string;
    availableBal: string;
    accountBal: string;
}