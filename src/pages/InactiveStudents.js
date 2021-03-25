import React, { Component } from "react";
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import TopBar from "./TopBar"

class InactiveStudents extends Component {
  constructor(props) {
    super(props)
}
  render(){
    
  return (
      <div className="flyout">
        <TopBar props={this.props}/>
      <MDBContainer className="mt-3">
        <DocsLink
          title="Inactive Students"
          href="https://mdbootstrap.com/docs/react/tables/datatables/"
        />
        <MDBRow className="py-3">
          <MDBCol md="12">
            <SectionContainer header="Inactive Students Table" noBorder>
              <MDBCard>
                <MDBCardBody>
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
      </div>
  );
};
};

export default InactiveStudents;
