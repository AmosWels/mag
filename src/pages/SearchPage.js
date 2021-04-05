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
  MDBTableHead
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import "./Search.css";
import TopBar from "./TopBar"

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic (CAR)",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (UAE)",
  "United Kingdom (UK)",
  "United States of America (USA)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City (Holy See)",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

class SearchPage extends Component {
  constructor(props) {
    super(props)
}

  state = {
    dataSet: countries,
    filteredSet: countries,
    searchValue: "",
    modalOpen: false,
    modal10: false,
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  };

  handleSearch = event => this.setState({ searchValue: event.target.value }, () => this.searchForCountry());

  searchForCountry = () => {
    this.setState(prevState => {
      const filteredSet = prevState.dataSet.filter(item =>
        item.toLowerCase().match(this.state.searchValue.toLowerCase())
      );
      return { filteredSet };
    });
  };

  toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

  render() {
    return (
      <MDBContainer>
      <TopBar props={this.props}/>
        <DocsLink title="Search For Student" href="https://mdbootstrap.com/docs/react/forms/search/" />

        {/* <SectionContainer header="Search Student">
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              className="form-control my-0 py-1 lime-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <span className="input-group-text lime lighten-2" id="basic-text1">
                <MDBIcon icon="search" className="text-grey" />
              </span>
            </div>
          </div>
            <MDBRow className="d-flex align-items-center">
            <MDBBtn onClick={this.toggleModal}>Search for country example</MDBBtn>
          </MDBRow>
        </SectionContainer> */}

        <SectionContainer header="Search Student">
        <MDBRow className="d-flex align-items-center">
        <MDBCol size="10"><input
              className="form-control my-0 py-1 lime-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            /></MDBCol>
          <MDBCol><MDBBtn onClick={this.toggle(10)}>Search</MDBBtn></MDBCol>
          </MDBRow>
          <MDBModal isOpen={this.state.modal10} toggle={this.toggle(10)}>
            <MDBModalHeader toggle={this.toggle(10)}>Student</MDBModalHeader>
            <MDBModalBody>
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th />
                    <th>Student name</th>
                    <th>School</th>
                    <th>Amount Due</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>$100</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1 340$</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>30$</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>1 470$</strong>
                    </td>
                    <td />
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-end">
              {/* <MDBBtn color="primary" outline onClick={this.toggle(10)}>
                Close
              </MDBBtn> */}
              <MDBBtn color="primary" onClick={this.toggle(10)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <MDBModal
          isOpen={this.state.modalOpen}
          toggle={this.toggleModal}
          backdrop={false}
          size="sm"
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggleModal}>Modal title</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              value={this.state.searchValue}
              onChange={this.handleSearch}
              hint="Search for country"
              type="text"
              containerClass="mt-0"
            />
            <MDBListGroup>
              {this.state.filteredSet.map(item => (
                <MDBListGroupItem key={item}>{item}</MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleModal}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SearchPage;
