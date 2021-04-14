import React, {Component, useState} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBAlert
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import TopBar from "./TopBar"
import Axios from "axios";
import { useHistory } from "react-router-dom";
import authHeader from "../utils/auth-header";

const DashBoard = () => {
  let history = useHistory();
  const props = history;
  const [tableData, setTableData] = useState([])
  const [loader, setLoader] = useState(false);
  const [error, toggleError] = useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoader(true);
    const config = {
      headers: authHeader()
    };

    const apiUrl = "/api/auth/student";
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
  // console.log('tableData', tableData)
  const tableDataValue =
    Object.values(tableData).length === 0 ? [] : Object.values(tableData);
  // console.log('tableDataValue', tableDataValue)
  const pendingTable = tableDataValue
    .filter(value => value.state === "PENDING")
  const activeTable = tableDataValue
    .filter(value => value.state === "ACTIVE")
  const inactiveTable = tableDataValue
    .filter(value => value.state === "COMPLETED" || value.state === "DISCONTINUED" || value.state === "DROPPED")
  
  // console.log("pendingTable", pendingTable.length)
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

  return (
    <MDBContainer>
    <TopBar props={props}/>
      <DocsLink title="Dashboard" href="https://mdbootstrap.com/docs/react/components/cards/" />
      {error ? (
          <MDBAlert color="danger" dismiss>
            Unable to fetch statistics now, ensure that you have good network or
            contact admin!
          </MDBAlert>
        ) : null}
      {loader ? (
          loading
        ) : (
      <SectionContainer header="Statisitics">
        <MDBCardGroup deck className="mt-3">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Pending</MDBCardTitle>
              <MDBCardText>
                Shows the total number of <strong>Pending students</strong>
              </MDBCardText>
              <MDBBtn color="dark" size="lg">
              <strong>{pendingTable.length}</strong>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Active</MDBCardTitle>
              <MDBCardText>
              Shows the total number of <strong>Active students</strong>
              </MDBCardText>
              <MDBBtn color="dark" size="lg">
              <strong>{activeTable.length}</strong>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Inactive</MDBCardTitle>
              <MDBCardText>
              Shows the total number of <strong>Inactive students</strong>
              </MDBCardText>
              <MDBBtn color="dark" size="lg">
              <strong>{inactiveTable.length}</strong>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>)}
    </MDBContainer>
  );
// };
};

export default DashBoard;
