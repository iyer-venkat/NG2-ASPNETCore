import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from './modules/pipeModule';

import { RouterModule, Routes } from '@angular/router';

import { AppMain } from './components/app';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

const appRoutes: Routes = [
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
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

@NgModule({
    declarations: [
        AppMain,
        Login,
        Dashboard
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        PipeModule
    ],
    providers: [ ],
    bootstrap: [AppMain]
})
export class RBAModule { }
