import { testClickEvent } from "./PendingStudents";
// data for table
export const data = {
  columns: [
    {
      label: "File Number",
      field: "filenumber",
      width: 150,
      attributes: {
        "aria-controls": "DataTable",
        "aria-label": "filenumber"
      }
    },
    {
      label: "Name",
      field: "name",
      width: 150
      // attributes: {
      //   "aria-controls": "DataTable",
      //   "aria-label": "Name"
      // }
    },
    {
      label: "School",
      field: "school",
      width: 270
    },
    {
      label: "Class",
      field: "class",
      width: 270
    },
    {
      label: "Status",
      field: "status",
      width: 200
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 100
    },
    {
      label: "Joining date",
      field: "date",
      // sort: "disabled",
      width: 150
    },
    {
      label: "Fees",
      field: "fees",
      // sort: "disabled",
      width: 100
    }
  ],
  rows: [
    {
      filenumber: "Tiger Nixon",
      name: "System Architect",
      school: "Edinburgh",
      class: "Second Year",
      status: "Farmer",
      age: "61",
      date: "2011/04/25",
      fees: "$320",
      clickEvent: () => testClickEvent(1)
    }
  ]
};
