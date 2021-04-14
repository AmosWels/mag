import React, { Component } from "react";
import {
  MDBInput,
  MDBFormInline,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBAlert
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import "./Search.css";
import TopBar from "./TopBar"
import { useHistory } from 'react-router-dom';
import authHeader from "../utils/auth-header";
import Axios from "axios";

const SearchPage = () => {

let history = useHistory();
const props = history;

  const [modal, setModal] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [studentID, setStudentID] = React.useState("");
  // const [tableData, setTableData] = React.useState([{}]);
  const [tableData, setTableData] = React.useState("");
  const [error, toggleError] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const fetchData = async (event) => {
    event.preventDefault();
    setLoader(true);
    const config = {
      headers: authHeader()
    };

    const apiUrl = `/api/auth/student/${studentID}`;
    await Axios.get(apiUrl, config)
      .then(res => {
        if (res.status === 200) {
          setTableData(res.data);
          setLoader(false);
        } else {
          setLoader(false);
          setTimeout(() => {
            toggleError(true);
          }, 5000);
        }
      })
      .catch(() => {
        setLoader(false);
        setTimeout(() => {
          toggleError(true);
        }, 5000);
      });
  };

  const loading = (
    <SectionContainer>
      <div className="my-5 d-flex justify-content-around">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </SectionContainer>
  );
    const disabledValue = studentID==="" || loader ===true;
    // console.log("tableData", tableData)
    // console.log("tableData", tableData[0].name)
    // console.log("tableData length", tableData.length)
    return (
      <MDBContainer>
      <TopBar props={props}/>
        <DocsLink title="Search For Student" href="https://mdbootstrap.com/docs/react/forms/search/" />
        <SectionContainer header="Search Student">
        {error ? (
          <MDBAlert color="danger" dismiss>
            Unable to fetch students now, ensure that you have good network or
            contact admin!
          </MDBAlert>
        ) : null}
        <form className="mx-8 black-text" onSubmit={fetchData}>
        <MDBRow className="d-flex align-items-center">
        <MDBCol size="10"><input
              className="form-control my-0 py-1 lime-border"
              type="text"
              placeholder="Enter Student ID"
              aria-label="Search"
              name="studentID"
              value={studentID}
              onChange={e => { e.preventDefault(); setStudentID(e.target.value)}}
            /></MDBCol>
          <MDBCol>
            <MDBBtn disabled={disabledValue} color="primary" onClick={fetchData}>
              Search
            <MDBIcon icon="paper-plane" className="ml-2" />
            </MDBBtn>
          {/* {loader ? (
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : null} */}
            </MDBCol>
          </MDBRow>
          </form>
          {/* <MDBModal isOpen={modal} toggle={toggle} size="fluid"> */}
            {/* <MDBModalHeader toggle={toggle}>Student</MDBModalHeader> */}
            {/* <MDBModalBody> */}
              {/* <MDBTable striped> */}
              {/* <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
              Be always up to date
            </MDBModalHeader> */}
            {loader ? (
                loading
              ) : (
            tableData === "" ? null : tableData.length === 0 ? 
            <MDBModalBody className="">
              <SectionContainer className="d-flex" header="">
                <MDBListGroup className="my-4 mx-4 justify-content-left" style={{ width: "100%" }}>
                  <MDBListGroupItem className="text-center" color="primary">No Student was found with student ID as: <strong>{studentID}</strong></MDBListGroupItem>
                  </MDBListGroup>
                  </SectionContainer>
                </MDBModalBody>
            : tableData.length === 1 ?
            <MDBModalBody className="">
              <SectionContainer className="d-flex" header="">
                <MDBListGroup className="my-4 mx-4" style={{ width: "50%" }}>
                  <MDBListGroupItem color="primary">Name : <strong className="mx-right">{tableData[0].name}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="danger">school : <strong className="mx-right">{tableData[0].school}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Status : <strong className="mx-right">{tableData[0].status}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="warning">Course : <strong className="mx-right">{tableData[0].course}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="info">File No. : <strong className="mx-right">{tableData[0].filenumber}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Date of Birth : <strong className="mx-right">{tableData[0].dateofbirth}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="dark">Fees : <strong className="mx-right">{tableData[0].fees}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Joining date : <strong className="mx-right">{tableData[0].joiningdate}</strong></MDBListGroupItem>
                </MDBListGroup>
                <MDBListGroup className="my-4 mx-4" style={{ width: "50%" }}>
                  <MDBListGroupItem color="primary">Active state : <strong className="mx-right">{tableData[0].active}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="danger">Activation state : <strong className="mx-right">{tableData[0].state}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Created By : <strong className="mx-right">{tableData[0].createdby}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="warning">Edited By : <strong className="mx-right">{tableData[0].editedby ===""?"..............":tableData[0].editedby}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="info">Comment : <strong className="mx-right">{tableData[0].comment === ""?"..............":tableData[0].comment}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Created On : <strong className="mx-right">{tableData[0].createdAt}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="dark">Updated On : <strong className="mx-right">{tableData[0].updatedAt}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="light">Unique ID : <strong className="mx-right">{tableData[0]._id}</strong></MDBListGroupItem>
                  {/* <MDBListGroupItem color="dark"><strong className="mx-right">{tableData[15]}</strong></MDBListGroupItem>
                  <MDBListGroupItem color="dark"><strong className="mx-right">{tableData[16]}</strong></MDBListGroupItem> */}
                </MDBListGroup>
                {/* <MDBListGroup className="my-4 mx-4 justify-content-right" style={{ width: "22rem" }}>
                  <MDBListGroupItem color="primary">Cras justo odio</MDBListGroupItem>
                  <MDBListGroupItem color="secondary">Dapibus ac facilisis in</MDBListGroupItem>
                  <MDBListGroupItem color="danger">Morbi leo risus</MDBListGroupItem>
                  <MDBListGroupItem color="warning">Porta ac consectetur ac</MDBListGroupItem>
                  <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem>
                  <MDBListGroupItem color="light">Vestibulum at eros</MDBListGroupItem>
                  <MDBListGroupItem color="dark">Vestibulum at eros</MDBListGroupItem>
                </MDBListGroup> */}
              </SectionContainer>
            </MDBModalBody> : null )}
            {/* <MDBModalFooter className="justify-content-end">
            </MDBModalFooter> */}
        </SectionContainer>
      </MDBContainer>
    );
}

export default SearchPage;
