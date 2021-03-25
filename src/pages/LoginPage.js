import React, { Component } from "react";
import {
  MDBFreeBird,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBContainer,
  MDBEdgeHeader,
  MDBNavLink
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    password: ""
  };

  submitHandler = event => {
    const { history } = this.props;
    event.preventDefault();
    // event.target.className += " was-validated";
    history.push("/dashboard");
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  render() {
    const state = this.state;
    const submitBoolean = state.username === "" || state.password === "";
    // console.log('>>', state)
    return (
      <MDBContainer className="mt-2 text-center">
        <SectionContainer>
          <MDBEdgeHeader color="mdb-color darken-2" />
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="8"
                lg="7"
                className="text-left mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  <MDBCardTitle>Login Page </MDBCardTitle>
                  <p className="pb-4">
                    Only authorised users can view the data
                    <MDBNavLink
                      tag="button"
                      to="/about"
                      color="mdb-color"
                      className="btn mx-right btn-outline-mdb-color btn-sm btn-rounded d-inline"
                      // onClick={this.scrollToTop}
                    >
                      View About Page Instead
                    </MDBNavLink>
                  </p>
                  {/* <form> */}
                    <MDBInput
                      label="Your Username"
                      name="username"
                      group
                      type="text"
                      icon="user"
                      required
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Your Password"
                      onChange={this.changeHandler}
                      group
                      name="password"
                      type="password"
                      icon="lock"
                      required
                    />
                    <MDBBtn
                      color="primary"
                      onClick={this.submitHandler}
                      disabled={submitBoolean}
                    >
                      Submit
                    </MDBBtn>
                  {/* </form> */}
                  <div className="my-4">
                    <p style={{ fontWeight: "300", fontSize: "0.75rem" }}></p>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default LoginPage;
