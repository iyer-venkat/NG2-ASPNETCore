import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { UserAccountReq } from '../../components/dashboard/dashboard';

@Injectable()
export class DashboardService {
    constructor(private _http: Http) { }

    public GetUserAccounts = (userAccountReq: UserAccountReq): Observable<any> => {
        //let headers: Headers = { 'Content-Type': 'application/json' };
        //let options: RequestOptionsArgs = { headers: headers };
        return this._http.post(`/api/getUserAccounts`, JSON.parse(JSON.stringify(userAccountReq)))    //, { headers: { 'Content-Type': 'application/json' } })
            .map((response: Response) => <any>response )
            .do(x => console.log(`do===>${x}`));
    }
}