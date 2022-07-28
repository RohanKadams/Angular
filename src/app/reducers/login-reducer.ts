import { logindetails } from './../login-page/login-page.component';
import { login_start, login_sucessfull, login_error } from './../actions/login-actions';
import { loginstartAction } from '../actions/login-actions';
import { Action } from './../actions/index';
export interface stateoflogin{
    status:string
    role:string
}

const initialstate:stateoflogin={
    status:"notvalid",
    role:'-'
}

export function loginReducer(state = initialstate,action:Action):stateoflogin{
    switch(action.type){
        case login_start:{
            return {...state,status:"inProcess"};
        }
        case login_sucessfull:{
            return {...state,status:"sucessfull",role:"admin"};
        }
        case login_error:{
            return {...state,status:"inValid"};
        }
        default :{
            return {...state};
        }
    }
    
}

export const getRole = (state:stateoflogin)=>state.role;
export const getStatus = (state:stateoflogin)=>state.status;