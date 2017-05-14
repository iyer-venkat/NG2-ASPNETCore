import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/loginService';
import { KeysPipe } from '../../pipes/keys';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: `../../../views/login/login.html`,
    providers: [LoginService]
})
export class Login {
    loginForm = this.formBuilder.group({
        userId: ["", Validators.required],
        password: ["", Validators.compose([Validators.required, Validators.minLength(8)])],
        isAdmin: [""]
    });
    pageError: any;
    hasPageError: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private formBuilder: FormBuilder, private _loginSvc: LoginService
    ) { }

    Login(form: any): void {
        console.log('-off: ');
        console.log(form);

        let loginReq: LoginReq = {
            userId: this.loginForm.controls["userId"].value,
            password: this.loginForm.controls["password"].value,
            //isAdmin: this.loginForm.controls["isAdmin"].value != "" ? this.loginForm.controls["isAdmin"].value : false
        };

        this._loginSvc.VerifyUser(loginReq)
            .subscribe(data => { console.log(data); },
            error => {
                console.log(`${JSON.stringify(error)}::${error.statusText}`);
                this.hasPageError = true;

                if (error.status == 404) {
                    this.pageError = { "message": "User not found." };
                } else {
                    this.pageError = JSON.parse(error._body);
                }
            },
            () => {
                console.log('verification complete');
                this.router.navigate(['dashboard']);
            });
    }
    Login1(event) {
        //console.log(event);
        //console.log(this.loginForm.value);
    }
}

export interface IError {
    message?: string;
}

export interface LoginReq {
    userId: string;
    password: string;
    //isAdmin: boolean;
}
