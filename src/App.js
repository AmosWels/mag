import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink
} from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  state = {
    collapseID: ""
  };
  
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className="flyout">
          {collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <MDBFooter color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:
              <a href="#"> PPF </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
