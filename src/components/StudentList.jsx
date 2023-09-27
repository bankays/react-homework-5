import React, { Component } from "react";

export class StudentList extends Component {
  render() {
    const { students, handleDelete } = this.props;
    return (
      <div className="py-3">
        <table className="w-100 table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th>Doeswork</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.firstName} </td>
                <td>{student.lastName} </td>
                <td>{student.group} </td>
                <td>{student.doesWork ? "yes" : "No"} </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
