import React, { useRef, useState, useEffect } from "react";
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
  MDBIcon,
  MDBAlert,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Axios from "axios";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";
import { useHistory } from "react-router-dom";
import TopBar from "./TopBar";
import authHeader from "../utils/auth-header";
import { currentDate, uniqueStudentID } from "../utils/uniqueID";

// const DatatablePage = () => {
function testClickEvent(param) {
  console.log(param);
}
// data for table

// class NewStudents extends Component {
const ActiveStudents = () => {
  let history = useHistory();
  const props = history;
  // const [selectedValue, setSelectedValue] = React.useState({modal4: false});
  const [modal, setModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [editValues, setEditValues] = React.useState({
    "id":"",
    editName: "",
    editSchool: "",
    editStatus: "",
    editCourse: "",
    editFileNumber:"",
    editDateofbirth: "",
    editFees: "",
    editClasss: "",
    editJoiningdate: "",
    editActive: "",
    editState: "",
    editcreatedby:"",
    editcomment:"",
  });
  const [tableData, setTableData] = useState("");
  const [loader, setLoader] = useState(false);
  const [addStudentloader, setStudentLoader] = useState(false);
  const [editStudentloader, setEditStudentLoader] = useState(false);
  const [error, toggleError] = useState(false);
  const [activateModal, setActivateModal] = useState(false);
  const [fileNumber, setfileNumber] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [successfulEdit, setSuccessfulEdit] = useState(false);
  const [failedCreation, setFailedCreation] = useState(false);
  const [failedEdit, setFailedEdit] = useState(false);
  const [student, setStudent] = React.useState({
    name: "",
    school: "",
    status: "",
    course: "",
    dateofbirth: "",
    fees: "",
    classs: "",
    joiningdate: "",
    active: "",
    state: "ACTIVE",
    createdby:"",
  });
  // console.log("student", student)
  // console.log("editValues", editValues)

  const actionBtn =({
    editName,
    editcreatedby,
    editcomment,
    editSchool,
    editFileNumber,
    editDateofbirth,
    editClasss,
    editJoiningdate,
    editActive,
    editFees,
    editCourse,
    editState,
    editStatus,
    id})=> {
  // console.log('..rest',editName)
  return(
    <MDBDropdown className="w-100">
      <MDBDropdownToggle caret color="indigo" outline size="sm" className="m-0">
        Click
      </MDBDropdownToggle>
      <MDBDropdownMenu basic color="info">
        <MDBDropdownItem onClick={()=>{setEditModal(!editModal);setEditValues({
          editName,
          id,
          editcreatedby,
          editcomment,
          editSchool,
          editFileNumber,
          editStatus,
          editCourse,
          editDateofbirth,
          editFees,
          editState,
          editClasss,
          editJoiningdate,
          editActive})}}>Edit</MDBDropdownItem>
        <MDBDropdownItem onClick={()=>{setActivateModal(true);setEditValues({
          editName,
          id,
          editcreatedby,
          editcomment,
          editSchool,
          editFileNumber,
          editStatus,
          editCourse,
          editDateofbirth,
          editFees,
          editState,
          editClasss,
          editJoiningdate,
          editActive
        })}}>Deactivate</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
)};

  const {
    name,
    school,
    status,
    course,
    dateofbirth,
    fees,
    classs,
    joiningdate,
    active,
    state,
  } = student;

  const {
    editName,
    editSchool,
    editStatus,
    editCourse,
    editFileNumber,
    editDateofbirth,
    editFees,
    editClasss,
    editJoiningdate,
    editActive,
    id,
    editState,
    editcreatedby,
    editcomment,
  } = editValues;

  const deactivateStudentloader =
    editcomment === "" || editStudentloader === true || editState === "ACTIVE" || editState === "";
  // console.log("addStudentBoolean", addStudentBoolean)
  // console.log("student", student)
  // console.log("editValues", editValues)
  // console.log("data >>", Object.values(tableData))
  const tableDataValue =
    Object.values(tableData).length === 0 ? [] : Object.values(tableData);
  const resultTable = tableDataValue
    .filter(value => value.state === "ACTIVE")
    .map(
      ({
        name,
        school,
        filenumber,
        dateofbirth,
        classs,
        joiningdate,
        active,
        fees,
        course,
        state,
        createdby,
        comment,
        editedby,
        createdAt,
        updatedAt,
        __v,
        _id,
        status,
        // ...rest
      }) => ({ name,school,filenumber,dateofbirth, classs,joiningdate, 
        action: actionBtn({"editName":name, "editSchool":school, "editFileNumber":filenumber, "editDateofbirth":dateofbirth, "editClasss":classs, "editJoiningdate":joiningdate, 
        "editActive":active, "editFees":fees, "editCourse":course, "editState":state, "editStatus":status, "id":_id, "editcreatedby":createdby, "editcomment":comment})})
    );
  // console.log("result", resultTable);
  // console.log("tableDataValue", tableDataValue);
  const data = {
    columns: [
      // {
      //   label: "ID",
      //   field: "_id",
      //   width: 150,
      //   attributes: {
      //     "aria-controls": "DataTable",
      //     "aria-label": "filenumber",
      //     "show":false,
      //     "display":false,
      //     initialState:{
      //         hiddenColumns:["name"]
      //       }
      //   }
      // },
      {
        label: "Name",
        field: "name",
        width: 150
      },
      {
        label: "School",
        field: "school",
        width: 270,
        options: {
          filter: false,
          sort: false,
          display: false,
          show: false
        }
      },
      // {
      //   label: "Status",
      //   field: "status",
      //   width: 200
      // },
      // {
      //   label: "Course",
      //   field: "course",
      //   width: 200
      // },
      {
        label: "File No.",
        field: "filenumber",
        width: 200
      },
      {
        label: "Date Of Birth",
        field: "dateofbirth",
        sort: "asc",
        width: 100
      },
      // {
      //   label: "Fees",
      //   field: "fees",
      //   // sort: "disabled",
      //   width: 100
      // },
      {
        label: "Class",
        field: "classs",
        width: 270,
        show: false
      },
      {
        label: "Joining date",
        field: "dateofbirth",
        // sort: "disabled",
        width: 150
      },
      {
        label: "Action",
        field: "action",
        // sort: "disabled",
        width: 150
      }
      // {
      //   label: "Active",
      //   field: "active",
      //   // sort: "disabled",
      //   width: 150
      // },
      // {
      //   label: "State",
      //   field: "new",
      //   // sort: "disabled",
      //   width: 150
      // },
      // {
      //   label: "Created On",
      //   field: "createdAt",
      //   // sort: "disabled",
      //   width: 150
      // },
      // {
      //   label: "Updated On",
      //   field: "updatedAt",
      //   // sort: "disabled",
      //   width: 150
      // },
      // {
      //   label: "Version",
      //   field: "_V",
      //   sort: "disabled",
      //   width: 150,
      //   options: {
      //     filter: false,
      //     sort: false,
      //     display:false
      //    }
      // },
    ],
    rows: resultTable
    // rows: [
    //   {
    //     filenumber: "Tiger Nixon",
    //     name: "System Architect",
    //     school: "Edinburgh",
    //     class: "Second Year",
    //     status: "Farmer",
    //     age: "61",
    //     date: "2011/04/25",
    //     fees: "$320",
    //     clickEvent: () => testClickEvent(1)
    //   }
    // ]
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const toggle = () => {
    setModal(!modal);
    // setEditModal(!editModal);
    setfileNumber(uniqueStudentID());
  };

  const editToggle = () => {
    setEditModal(!editModal);
  };

  const toggleActivatemodal = () => {
    setActivateModal(!activateModal);
  };

  const createdby = localStorage.getItem("username")
  const editedby = localStorage.getItem("username")

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
  //create student
  const handleCreate = async values => {
    setStudentLoader(true);
    const config = {
      headers: authHeader()
    };

    const apiUrl = "/api/auth/student";
    const objValues = {
      name,
      school,
      status,
      course,
      filenumber: fileNumber,
      dateofbirth,
      fees,
      classs: classs,
      joiningdate,
      active,
      state,
      createdby,
      "editedby":"",
      "comment":""
    };
    await Axios.post(apiUrl, objValues, config)
      .then(res => {
        // console.log("resp>", res);
        if (res.status === 200) {
          // setStudent({"filenumber":uniqueStudentID()})
          setStudentLoader(false);
          toggle();
          setSuccessfulCreation(true);
          fetchData();
          setTimeout(() => {
            setSuccessfulCreation(false);
          }, 5000);
        } else {
          toggle();
          setStudentLoader(false);
          setFailedCreation(true);
          setTimeout(() => {
            setFailedCreation(false);
          }, 5000);
        }
      })
      .catch(() => {
        toggle();
        setStudentLoader(false);
        setFailedCreation(true);
        setTimeout(() => {
          setFailedCreation(false);
        }, 5000);
      });
  };

// edit student
  const handleEdit = async values => {
    setEditStudentLoader(true);
    const config = {
      headers: authHeader()
    };

    const apiUrl = "/api/auth/student";
    const objValues = {
      "_id": id,
      "name":editName,
      "school":editSchool,
      "status":editStatus,
      "course":editCourse,
      filenumber: editFileNumber,
      "dateofbirth":editDateofbirth,
      "fees":editFees,
      "classs": editClasss,
      "joiningdate":editJoiningdate,
      "active":editActive,
      "createdby":editcreatedby,
      "editedby":editedby,
      "comment":editcomment,
      "state":"ACTIVE"
    };
    await Axios.put(apiUrl, objValues, config)
      .then(res => {
        // console.log("resp>", res);
        if (res.status === 200) {
          // setStudent({"filenumber":uniqueStudentID()})
          setEditStudentLoader(false);
          editToggle();
          setSuccessfulEdit(true);
          fetchData();
          setTimeout(() => {
            setSuccessfulEdit(false);
          }, 5000);
        } else {
          editToggle();
          setEditStudentLoader(false);
          setFailedEdit(true);
          setTimeout(() => {
            setFailedEdit(false);
          }, 5000);
        }
      })
      .catch(() => {
        editToggle();
        setEditStudentLoader(false);
        setFailedEdit(true);
        setTimeout(() => {
          setFailedEdit(false);
        }, 5000);
      });
  };
// activate student
  const handleDeactivate = async values => {
    setEditStudentLoader(true);
    const config = {
      headers: authHeader()
    };

    const apiUrl = "/api/auth/student";
    const objValues = {
      "_id": id,
      "name":editName,
      "school":editSchool,
      "status":editStatus,
      "course":editCourse,
      filenumber: editFileNumber,
      "dateofbirth":editDateofbirth,
      "fees":editFees,
      "classs": editClasss,
      "joiningdate":editJoiningdate,
      "active":editActive,
      "createdby":editcreatedby,
      "editedby":editedby,
      "comment":editcomment,
      "state":editState
    };
    await Axios.put(apiUrl, objValues, config)
      .then(res => {
        // console.log("resp>", res);
        if (res.status === 200) {
          // setStudent({"filenumber":uniqueStudentID()})
          setEditStudentLoader(false);
          toggleActivatemodal()
          setSuccessfulEdit(true);
          fetchData();
          setTimeout(() => {
            setSuccessfulEdit(false);
          }, 5000);
        } else {
          toggleActivatemodal()
          setEditStudentLoader(false);
          setFailedEdit(true);
          setTimeout(() => {
            setFailedEdit(false);
          }, 5000);
        }
      })
      .catch(() => {
        toggleActivatemodal()
        setEditStudentLoader(false);
        setFailedEdit(true);
        setTimeout(() => {
          setFailedEdit(false);
        }, 5000);
      });
  };

  const refreshPage = () => {
    // window.location.reload();
    // history.push(ROUTE.index);
  };

  const changeHandler = event => {
    event.preventDefault();
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const editChangeHandler = event => {
    event.preventDefault();
    setEditValues({ ...editValues, [event.target.name]: event.target.value });
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

  // render() {
  return (
    <div className="flyout">
      <TopBar props={props} />
      <MDBContainer className="mt-3">
        <DocsLink
          title="Active Students"
          href="https://mdbootstrap.com/docs/react/tables/datatables/"
        />
        {error ? (
          <MDBAlert color="danger" dismiss>
            Unable to fetch students now, ensure that you have good network or
            contact admin!
          </MDBAlert>
        ) : null}
        {successfulCreation ? (
          <MDBAlert color="info" dismiss>
            Student has been created Successfully!
          </MDBAlert>
        ) : null}
        {successfulEdit ? (
          <MDBAlert color="info" dismiss>
            Student has been Updated Successfully!
          </MDBAlert>
        ) : null}
        {failedEdit ? (
          <MDBAlert color="danger" dismiss>
            Unable to Update student now, ensure that you have good network or
            contact admin!
          </MDBAlert>
        ) : null}
        {failedCreation ? (
          <MDBAlert color="danger" dismiss>
            Unable to Create student now, ensure that you have good network or
            contact admin!
          </MDBAlert>
        ) : null}
        {loader ? (
          loading
        ) : (
          <MDBRow className="py-3">
            <MDBCol md="12">
              <SectionContainer header="Active Students Table" noBorder>
                <MDBCard>
                  <MDBCardBody>
                    {/* <MDBBtn rounded onClick={toggle}>
                      Add New Student
                    </MDBBtn> */}
                    <MDBDataTable
                      striped
                      bordered
                      hover
                      entriesOptions={[5, 10, 25, 50, 100]}
                      entries={5}
                      pagesAmount={4}
                      data={data}
                    />
                  </MDBCardBody>
                </MDBCard>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        )}
      </MDBContainer>
      <SectionContainer flexCenter>
      {/* <SectionContainer flexCenter> */}
        <MDBModal isOpen={editModal} toggle={editToggle}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-80 font-weight-bold"
            toggle={editToggle}
          >
            Edit Active Student{" "}
            <span className="footer-copyright w-100 font-weight-bold">
              ID : {editFileNumber}
            </span>
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-8 grey-text" onSubmit={handleEdit}>
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
                    name="editName"
                    value={editName}
                    required
                    onChange={editChangeHandler}
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
                    onChange={editChangeHandler}
                    name="editSchool"
                    value={editSchool}
                    required
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
                    onChange={editChangeHandler}
                    name="editStatus"
                    value={editStatus}
                    required
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
                    onChange={editChangeHandler}
                    name="editCourse"
                    value={editCourse}
                    required
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
                    onChange={editChangeHandler}
                    name="editFileNumber"
                    value={editFileNumber}
                    disabled
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Date of Birth"
                    value={editDateofbirth}
                    onChange={editChangeHandler}
                    name="editDateofbirth"
                    required
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
                    onChange={editChangeHandler}
                    name="editFees"
                    value={editFees}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Current Class</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Current Class"
                    onChange={editChangeHandler}
                    name="editClasss"
                    value={editClasss}
                    required
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
                    onChange={editChangeHandler}
                    name="editJoiningdate"
                    value={editJoiningdate}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">
                    Specify Student Activation
                  </label>
                  <select
                    onChange={editChangeHandler}
                    name="editActive"
                    className="custom-select bMDBRowser-default form-control"
                    required
                    value={editActive}
                  >
                    <option value="">Choose Active status</option>
                    <option value="Active">Yes</option>
                    <option value="Inactive">No</option>
                  </select>
                </div>
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              color="primary"
              onClick={handleEdit}
              disabled={editStudentloader}
            >
              Update
              <MDBIcon icon="paper-plane" className="ml-2" />
            </MDBBtn>
            {editStudentloader ? (
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : null}
          </MDBModalFooter>
        </MDBModal>
      {/* </SectionContainer>
      <SectionContainer flexCenter> */}
          <MDBModal
            backdrop={false}
            isOpen={activateModal}
            toggle={toggleActivatemodal}
          >
            <MDBModalHeader toggle={toggleActivatemodal}>Deactivate Student</MDBModalHeader>
            <MDBModalBody>
            <form className="mx-8" onSubmit={handleDeactivate}>
            <p>Are you sure that you want to <b>Deactivate</b> student with name <strong>{editName}</strong> and student Number <strong color="primary">{editFileNumber} {" ?"}</strong></p>
              
              <div className="form-row">
                <div className="form-group col-md-12">
                <label htmlFor="inputEmail4">
                    Select Deactivation
                  </label>
                  <select
                    onChange={editChangeHandler}
                    name="editState"
                    className="custom-select bMDBRowser-default form-control"
                    required
                    value={editState}
                  >
                    <option value="">Choose Deactivate Status</option>
                    <option value="DROPPED">Drop Out</option>
                    <option value="DISCONTINUED">Discontinue</option>
                    <option value="COMPLETED">Complete</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                <label htmlFor="inputPassword4">Any reason or Comment for Deactivation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Add a Comment for Deactivation"
                    onChange={editChangeHandler}
                    name="editcomment"
                    value={editcomment}
                    required
                  />
                </div>
              </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn disabled={editStudentloader} color="secondary" onClick={toggleActivatemodal}>
                No
              </MDBBtn>
              <MDBBtn color="primary" disabled={deactivateStudentloader} onClick={handleDeactivate}>Deactivate</MDBBtn>
              {editStudentloader ? (
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : null}
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
    </div>
  );
  // }
};

export default ActiveStudents;
