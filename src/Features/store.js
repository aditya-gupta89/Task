
import { createSlice,configureStore, createNextState } from '@reduxjs/toolkit'

const initialAuthState={
    isAuthenticated:false,
    userName:"",
    userPassword:"",
}
const authSlice=createSlice(
    {
        name:'auth',
        initialState:initialAuthState,
        reducers:{
            login(state){
                state.isAuthenticated=true;
            },
            logout(state){
                state.isAuthenticated=false;
            },
            passwordChange(state,action){
                state.userPassword=action.payload;
           },
           setUser(state,action){
               state.userName=action.payload.userName;
               state.userPassword=action.payload.userPassword
           }
        }
    }
)

const store= configureStore(
    {
        reducer:{auth:authSlice.reducer},
    }
);

export const authActions=authSlice.actions;
export default store;
