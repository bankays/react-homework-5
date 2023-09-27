import React, { Component } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

export class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: JSON.parse(localStorage.getItem("students")) || [],
      search: "",
      modalOpen: false,
    };
  }
  handleSearchChnage = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault();
  };
  handleClose = () => {
    this.setState({ modalOpen: false });
  };
  handleOpen = () => {
    this.setState({ modalOpen: true });
  };
  addStudent = (student) => {
    let newaStudents = [
      ...this.state.students,
      {
        id: Math.floor(Math.random() * 1000000),
        ...student,
      },
    ];

    localStorage.setItem("students", JSON.stringify(newaStudents));
  };
  deleteStudent = (id) => {
    let newaStudents = this.state.students.filter(
      (student) => student.id !== id
    );
    localStorage.setItem("students", JSON.stringify(newaStudents));
    this.setState({
      students: JSON.parse(localStorage.getItem("students")),
    });
  };

  render() {
    const { students, search, modalOpen } = this.state;
    return (
      <div className="container py-3">
        <div className="d-flex">
          <form onSubmit={this.handleSearchSubmit} className="d-flex w-75">
            <input
              className="form-control "
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={this.handleSearchChnage}
            />
            <button className="btn btn-primary " type="submit">
              Search
            </button>
          </form>
          <select name="filter" id="filter" className="form-select w-25">
            <option value="all">All</option>
            <option value="N10">React N10</option>
            <option value="N14">React N14</option>
            <option value="N32">React N32</option>
          </select>
          <button
            onClick={this.handleOpen}
            className="btn btn-outline-success"
            style={{ whiteSpace: "nowrap" }}
          >
            Add Student
          </button>
        </div>
        <AddStudent
          modalOpen={modalOpen}
          handleClose={this.handleClose}
          addStudent={this.addStudent}
        />
        <StudentList students={students} handleDelete={this.deleteStudent} />
      </div>
    );
  }
}

export default Students;
