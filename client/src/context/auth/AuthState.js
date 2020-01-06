import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  //state allows us to access anything in the state
  //dispatch allows to dispatch objects to the reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  //Register User
const register=async formData=>{
  cosnt config={
    headers:{
      'Content-Type':'application/json'
    }
  }
  try {
    const res=await axios.post('/api/users',formData,config)
    dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data
    })
  } catch (err) {
    
  }
}
  //Login User

  //Logout

  //Clear Errors
  //return our provider so that we can wrap our entire application with the contact context
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
        // register,
        // loadUser,
        // login,
        // logout,
        // clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
