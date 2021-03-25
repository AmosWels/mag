import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render() {
    return (
      <>
        <MDBEdgeHeader color="indigo darken-3" className="" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
              <MDBNavLink 
                              tag="button"
                              to="/login"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              // onClick={this.scrollToTop}
                            >
                              Back to Login
                          </MDBNavLink>
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      {/* <img
                        src="https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png"
                        alt="mdbreact-logo"
                        className="pr-2"
                      /> */}
                      Identify, Monitor and aid Growth
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>Provide opportunites to untapped talent</p>
                  <p className="pb-4">
                    Realise, activate, empower and accelerate access to skills,
                    knowledge, technology and resources.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      // href="https://mdbootstrap.com/react/"
                      // target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">Partner with Us</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                <li>Why should you Partner?</li>
                </h2>
                <p className="text-center text-muted mb-1">
                <li>You have passion for the transfomation of the less priviledged.</li>
                </p>
                <p className="text-center text-muted mb-1">
                  <li>You desire to improve the general livelihoods of children</li>
                </p>
                <p className="text-center text-muted">
                <li>You love Uganda and would love to contribute to building a better future for Ugandans</li>
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="css3"
                              brand
                              className="pink-text pr-2"
                            />
                            <strong>LOVE</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            We are driven by love for fellow Ugandans
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="#"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              Love wins
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="cubes" className="blue-text pr-2" />
                            <strong>EMPOWER</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Access to knowledge and resources
                          </MDBCardText>
                          <MDBNavLink 
                              tag="button"
                              to="#"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              Empower to strengthen
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="arrows-alt" className="green-text pr-2" />
                            <strong>PROSPER</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Seek to see others prosper
                          </MDBCardText>

                          <MDBNavLink 
                              tag="button"
                              to="#"
                              color="mdb-color"
                              className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                              onClick={this.scrollToTop}
                            >
                              Prosper and Excel
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
