import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
//import { LoginReq } from '../../components/login/login';

@Injectable()
export class LoginService {
    constructor(private _http: Http) { }

    public VerifyUser = (loginReq): Observable<any> => {
        //let headers: Headers = { 'Content-Type': 'application/json' };
        //let options: RequestOptionsArgs = { headers: headers };
        return this._http.post(`/api/verifylogin`, JSON.parse(JSON.stringify(loginReq)))    //, { headers: { 'Content-Type': 'application/json' } })
            .map((response: Response) => <any>response)
            .do(x => console.log(`do===>${x}`));
    }
}