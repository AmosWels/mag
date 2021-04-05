import React, { Component } from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBIcon
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import TopBar from "./TopBar";

class NewStudents extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modal4: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  render() {
    return (
      <div className="flyout">
        <TopBar props={this.props} />
        <MDBContainer className="mt-3">
          <DocsLink
            title="New Students"
            href="https://mdbootstrap.com/docs/react/tables/datatables/"
          />
          <MDBRow className="py-3">
            <MDBCol md="12">
              <SectionContainer header="New Students Table" noBorder>
                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn rounded onClick={this.toggle(4)}>
                      Add New Student
                    </MDBBtn>
                    <MDBDataTable
                      striped
                      bordered
                      hover
                      data="https://my-json-server.typicode.com/Rotarepmi/exjson/db"
                    />
                  </MDBCardBody>
                </MDBCard>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <SectionContainer flexCenter>
          <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)}>
            <MDBModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={this.toggle(4)}
            >
              Add New Student
            </MDBModalHeader>
            <MDBModalBody>
              <form className="mx-8 grey-text">
                <div className="form-group row">
                  <label
                    htmlFor="inputEmdail3"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEma3"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    School
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEma"
                      placeholder="School / Institution (Previous / Current)"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Status
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmailf3"
                      placeholder="Current status /Proffesion /Address"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Course
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmailf3"
                      placeholder="Course / Proffession Taken"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">File Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="File Number"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Age"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Semister / term Fees</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Semister / term Fees"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Current Class</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Current Class"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Joining date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Joining date"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Active or Inactive</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Active or Inactive"
                    />
                  </div>
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="primary" onClick={this.toggle(4)}>
                Submit
                <MDBIcon icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
      </div>
    );
  }
}

export default NewStudents;
