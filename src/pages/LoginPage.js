import React, { Component } from "react";
import Axios from "axios";
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
    password: "",
    loader: false
  };

  toggleLoader = event => {
    const{loader}=this.state;
    this.setState({loader:!loader})
  };

  handleSubmit = async values => {
    this.toggleLoader()
    const config = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };

    const apiUrl = "/api/auth/signin";
    const { username, password } = this.state;
    const objValues = {
      username,
      password
    };
    await Axios.post(apiUrl, objValues, config)
      .then(res => {
        this.toggleLoader()
        console.log("resp>", res);
        if (
          res.data.Status === "OK"
        ) {
          // handleCloseSnackBar()
          // handleOpenSuccess();
        } else {
          // handleCloseSnackBar()
          // handleOpenSnackError()
        }
      })
      .catch(() => {
        this.toggleLoader()
        // handleCloseSnackBar()
        // handleOpenSnackError();
      });
  };

  // submitHandler = event => {
  //   const { history } = this.props;
  //   event.preventDefault();
  //   // event.target.className += " was-validated";
  //   history.push("/dashboard");
  // };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  render() {
    const { username, password, loader } = this.state;
    const submitBoolean = username === "" || password === "" || loader === true;
    console.log(">>", username, password, loader);
    return (
      <MDBContainer className="mt-2 text-center">
        <SectionContainer>
          <MDBEdgeHeader color="mdb-color darken-2" />
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="8"
                lg="7"
                className="text-right mx-auto float-none white z-depth-5 py-2 px-2"
              >
                <MDBNavLink
                  tag="button"
                  to="/about"
                  color="mdb-color"
                  className="btn mx-right btn-outline-mdb-color btn-sm btn-rounded d-inline"
                  // onClick={this.scrollToTop}
                >
                  View About Page Instead
                </MDBNavLink>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol
                md="8"
                lg="7"
                className="text-left mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  <MDBCardTitle className="text-left">Login Page</MDBCardTitle>
                  <p className="pb-4" color="mdb-color">
                    Welcome to the <strong>Poor People's Foundation</strong>{" "}
                    Portal
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
                    // onClick={this.toggleLoader}
                    onClick={this.handleSubmit}
                    disabled={submitBoolean}
                  >
                    Submit
                  </MDBBtn>
                    {loader?(<div className="spinner-grow" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>):null}
                    
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
