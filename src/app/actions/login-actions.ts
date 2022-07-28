import {logindetails} from "../login-page/login-page.component"
export const login_start ="Login Satrted";
export const login_sucessfull ="Login Successfull";
export const login_error ="Login Error";


export class loginstartAction{
    readonly type = login_start;
    constructor(payload?:any){ }
}
export class loginsucessfullAction{
    readonly type = login_sucessfull;
    constructor(payload?:{data:logindetails}){ }
}
export class loginerrorAction{
    readonly type = login_error;
    constructor(payload?:{data:logindetails},private error?:string){ }
}