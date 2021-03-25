import React, {Component} from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import TopBar from "./TopBar"

class DashBoard extends Component {
  constructor(props) {
    super(props)
}
  render(){
  return (
    <MDBContainer>
    <TopBar props={this.props}/>
      <DocsLink title="Dashboard" href="https://mdbootstrap.com/docs/react/components/cards/" />

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
              <MDBCardTitle tag="h5">New</MDBCardTitle>
              <MDBCardText>
                Shows the total number of <strong>New students</strong>
              </MDBCardText>
              <MDBBtn color="dark" size="lg">
              <strong>30</strong>
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
              <strong>50</strong>
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
              <strong>100</strong>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
    </MDBContainer>
  );
};
};

export default DashBoard;
