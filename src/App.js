import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import Header from "./components/Header/Header";
import Routes from "./Routes";
import AuthApi from './Auth/Auth';
import cookie from './Auth/MyCookies';
import { useDispatch } from "react-redux";
import { getCustomerDetails } from "./redux/actions/RegistrationActions";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // background: ' #FF0F00 ',
    border: 0,
    borderRadius: 3,
    //width: isMobile ? "100%" : "60%"
  },
  app: {
    display: 'flex',
    background: ' #FF0F00 ',
    flexDirection: 'column',
    //width: isMobile ? "100%" : "60%",
    justifyContent: 'center',
    alignItems: 'center'
  }
})


function App() {
  const classes = useStyles()
  const [auth, setAuth] = useState(false)

  const dispatch = useDispatch();
  const readCookie = () => {
    const cookieValue = cookie.readCookie("key")
    if (cookieValue) {
        setAuth(true)
        dispatch(getCustomerDetails(cookieValue))
    }
  }

  useEffect(() => {
    readCookie();
  }, []);
  return (
    <div className="container">
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
