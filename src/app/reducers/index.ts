import { ActionReducerMap, createSelector } from '@ngrx/store';
import { loginReducer, stateoflogin, getRole, getStatus } from './login-reducer';
export interface state{
    login:stateoflogin
}


export const rootReducer:ActionReducerMap<state>={
      login:loginReducer

}

export const loginsate = (state:state)=>state.login;
export const getfinalRole = createSelector(loginsate,getRole);
export const getfinalStatus = createSelector(loginsate,getStatus); 