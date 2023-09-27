import { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      group: "",
      doesWork: false,
    };
  }
  //   handleStudentChange = (e) => {
  //     this.setState({
  //       student: {
  //         [e.target.name]: e.target.value,
  //       },
  //     });
  //   };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      group: "",
      doesWork: false,
    });

    this.props.handleClose();
  };
  render() {
    const { firstName, lastName, group, doesWork } = this.state;
    const { modalOpen, handleClose } = this.props;
    return (
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                name="firstName"
                id="firsName"
                value={firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName">lastName</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="group">Group</label>
              <input
                type="text"
                name="group"
                id="group"
                value={group}
                onChange={(e) => this.setState({ group: e.target.value })}
                className="form-control"
              />
            </div>

            <div className=" form-check mb-3  ">
              <label htmlFor="doesWork " className="form-check-lebel">
                Doeswork?
              </label>
              <input
                type="checkbox"
                name="doesWork"
                id="doesWork"
                checked={doesWork}
                onChange={(e) => this.setState({ doesWork: e.target.value })}
                className="  form-check-input"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button
            type="hendleSubmit"
            variant="primary"
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddStudent;
