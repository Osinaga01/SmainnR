import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
// import Components from "views/Components/Components.js";
import Components from "views/LandingPage/LandingPage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
// import Dasboard from "views/Dashboard/Dashboard.js";

var hist = createBrowserHistory();

class LandingPageFullState extends Component{
  state = {
    loading: true,
    data: {
      national: [],
      departamental: []
    }
  };
  componentDidMount(){
    this.fetchData();  
  }

  fetchData = () => {
    let url = `http://192.168.0.13/blog/public/administrativeDivision/info`;
    this.setState({
      loading:true,
    })

    fetch(url)
      .then( respuesta => {
      return respuesta.json();
    })
    .then( datos => {
      console.log("Datos", datos)
      this.setState({
        loading:false,
        data:datos
      })
    })
    .catch(error => {
      console.log("Error", error);
      this.setState({
        loading:false,
        error
      });

    })
  }

  render(){
    console.log("State", this.state);
    return <LandingPage results={this.state} />
  }
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPageFullState} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      {/* <Route path="/dasboard" component={Dasboard} /> */}
      <Route path="/" component={LandingPageFullState} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
