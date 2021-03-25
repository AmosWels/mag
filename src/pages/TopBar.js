import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBBtn
} from "mdbreact";
import { ReactComponent as Logo } from "../assets/logo.svg";

class TopBar extends Component {
  constructor(props) {
    super(props)
}

  state = {
    collapseID: ""
  };

  onLogout = event => {
    event.preventDefault();
    const {history} = this.props.props;
    history.push("/");
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
    return (
      <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
        <MDBNavbarBrand href="/dashboard" className="py-0 font-weight-bold">
          <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
          <strong className="align-middle">
            Monitoring & Growth Students Portal
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
        <MDBCollapse
          id="mainNavbarCollapse"
          isOpen={this.state.collapseID}
          navbar
        >
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                exact
                to="/dashboard"
                onClick={this.closeCollapse("mainNavbarCollapse")}
              >
                <strong>DashBoard</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/new"
                onClick={this.closeCollapse("mainNavbarCollapse")}
              >
                <strong>New</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/active"
              >
                <strong>Active</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/inactive"
              >
                <strong>Inactive</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={this.closeCollapse("mainNavbarCollapse")}
                to="/search"
              >
                <strong>Search</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
              <MDBBtn color="primary" onClick={this.onLogout}>
                Logout
              </MDBBtn>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
export default TopBar;
