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
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/logo.svg";

// class TopBar extends Component {
  const TopBar = (props) => {
    // console.log('props', props)
//   constructor(props) {
//     super(props)
// }
let username;
React.useEffect(() => {
}, []);

username = localStorage.getItem("username")
// console.log('username', username)

  let history = useHistory();
  // const props = history;
const [state, setState] = React.useState({collapseID: ""});
  // state = {
  //   collapseID: ""
  // };

  const onLogout = event => {
    event.preventDefault();
    // let {history} = props;
    sessionStorage.clear();
    localStorage.clear();
    history.push("/");
  };
  
  const toggleCollapse = collapseID => () =>
    setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  const closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    state === collapseID && setState({ collapseID: "" });
  };
  

  // render() {
    return (
      <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
        <MDBNavbarBrand href="/dashboard" className="py-0 font-weight-bold">
          <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
          <strong className="align-middle">
            Poor People's Foundation
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse("mainNavbarCollapse")} />
        <MDBCollapse
          id="mainNavbarCollapse"
          isOpen={state.collapseID}
          navbar
        >
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                exact
                to="/dashboard"
                onClick={closeCollapse("mainNavbarCollapse")}
              >
                <strong>DashBoard</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                to="/pending"
                onClick={closeCollapse("mainNavbarCollapse")}
              >
                <strong>Pending</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={closeCollapse("mainNavbarCollapse")}
                to="/active"
              >
                <strong>Active</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={closeCollapse("mainNavbarCollapse")}
                to="/inactive"
              >
                <strong>Inactive</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                onClick={closeCollapse("mainNavbarCollapse")}
                to="/search"
              >
                <strong>Search</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink
                to="#"
              >
                <em>Welcome <b>{username}</b></em>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
              <MDBBtn color="primary" onClick={onLogout}>
                Logout
              </MDBBtn>
        </MDBCollapse>
      </MDBNavbar>
    );
  // }
}
export default TopBar;
