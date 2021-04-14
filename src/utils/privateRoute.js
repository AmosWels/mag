import React from "react";
import { Route, Redirect } from "react-router-dom";
import useToken from "./useToken";

export const fakeAuth = {
  isAuthenticated: false,
  token: "",
  authenticate(cb, token) {
    this.isAuthenticated = true
    this.token = localStorage.getItem('value');
    // const user = JSON.parse(sessionStorage.getItem('user'));
    // if (user && user.accessToken) {
    //   this.isAuthenticated = true;
    //   this.tokenn = user.accessToken;
    // }
    // const userToken = JSON.parse(tokenString);
    // console.log("userToken.accessToken", userToken.accessToken);
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    // setTimeout(cb, 100);
  }
};

// export const isLogin = () => {
//   if (sessionStorage.getItem('user')) {
//     return true;
//   }

//   return false;
// };

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, setToken } = useToken();
  // let user = ''
  // setTimeout(() => {}, 3000);
  // user = JSON.parse(sessionStorage.getItem('user'));
  // if (user && user.accessToken) {}
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === false && fakeAuth.token === '' && !token? 
        // isLogin()? (
          // user && user.accessToken? (
          // !token
          <Redirect to={{
          pathname: '/',
          // pathname: '/',
          // state: { from: '/home' }
          state: { from: props.location }
          }} />
         : 
          <Component {...props} />
          // <Redirect to="/" />
        
      }
    />
  );
};
