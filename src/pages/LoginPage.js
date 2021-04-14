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
  MDBNavLink,
  MDBAlert
} from "mdbreact";
import { useHistory, Redirect } from 'react-router-dom';
import { fakeAuth } from '../utils/privateRoute'
import SectionContainer from "../components/sectionContainer";

// class LoginPage extends Component {
  const LoginPage = props => {
    // let history = useHistory();
    // const props = history;
    const { history } = props;
  // constructor(props) {
  //   super(props);
  // }
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)
  const [state, setState] = React.useState({
    username: "",
    password: "",
    loader: false,
    error: false
  });
  const { from } = props.location.state || { from: { pathname: '/' } }
  // state = {
  //   username: "",
  //   password: "",
  //   loader: false,
  //   error: false
  // };

  const toggleLoader = event => {
    const{loader}=state;
    setState({loader:!loader})
  };

  const toggleError = event => {
    const{error}=state;
    setState({error:!error})
  };

  const handleSubmit = async values => {
    toggleLoader()
    const config = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    
    const apiUrl = "/api/auth/signin";
    const { username, password } = state;
    const objValues = {
      username,
      password
    };
    await Axios.post(apiUrl, objValues, config)
      .then(res => {
        // console.log("resp>", res);
        if (res.status === 200) {
          fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
          })
          history.push("/dashboard");
          sessionStorage.setItem("user", JSON.stringify(res.data));
          const { accessToken, id, email, username } = res.data;
          sessionStorage.setItem('token', JSON.stringify(accessToken));
          localStorage.setItem('value', accessToken);
          localStorage.setItem('id', id);
          localStorage.setItem('email', email);
          // sessionStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem('username', username);
          // handleOpenSuccess();
        } else {
          fakeAuth.authenticate(() => {
            setRedirectToReferrer(false);
          })
          toggleError()
          setTimeout(() => {
            toggleError()
          }, 3000);
        }
      })
      .catch(() => {
        toggleLoader()
        toggleError()
        setTimeout(() => {
          toggleError()
        }, 3000);
      });
  };

  // submitHandler = event => {
  //   const { history } = props;
  //   event.preventDefault();
  //   // event.target.className += " was-validated";
  //   history.push("/dashboard");
  // };

  const changeHandler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  // render() {
    const { username, password, loader, error } = state;
    const submitBoolean = username === "" || password === "" || loader === true;
    // console.log(">>", username, password, loader);

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    } else {

      return (
        <MDBContainer className="mt-2 text-center">
        {error?(<MDBAlert color="danger" dismiss>
            Unable to login now, ensure that you have good network and the correct credentials!
          </MDBAlert>):null}
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
                    // onClick={scrollToTop}
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
                    <form onSubmit={{handleSubmit}}>
                    <MDBInput
                      label="Your Username"
                      name="username"
                      group
                      type="text"
                      icon="user"
                      required
                      onChange={changeHandler}
                    />
                    <MDBInput
                      label="Your Password"
                      onChange={changeHandler}
                      group
                      name="password"
                      type="password"
                      icon="lock"
                      required
                    />
                    <MDBBtn
                      color="primary"
                      // onClick={toggleLoader}
                      onClick={handleSubmit}
                      disabled={submitBoolean}
                      type="submit"
                    >
                      Submit
                    </MDBBtn>
                      {loader?(<div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>):null}
                      
                    </form>
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
  // }
}

export default LoginPage;
