import React, { Component } from "react";
import { Row, Col, Container, Navbar } from "react-bootstrap";
import "./App.css";

import Basic from "./components/Form";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  website: "",
  image: "",
  skills: [],
};

class App extends Component {
  state = {
    formSubmissions: [],
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.setState((prevState) => ({
      formSubmissions: [...prevState.formSubmissions, values],
    }));
    // this.show(values);
    resetForm();
  };
  handleClear = (formik) => {
    formik.resetForm();
  };
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="navbar">
            Student Enrollment Form
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Basic
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
                onClear={this.handleClear}
              />
            </Col>
            <Col>
  <div className="enrolled-section">
    <h3 className="enrolled-heading text-center">Enrolled Students</h3>
    {this.state.formSubmissions.length > 0 ? (
      <div className="enrolled-container">
        <div className="row enrolled-header">
          <div className="col">
            <h5 className="enrolled-heading">Descriptions</h5>
          </div>
          
        </div>
        {this.state.formSubmissions.map((submission, index) => (
          <div className="row enrolled-row" key={index}>
            <div className="col">
              <h6 className="enrolled-name">
                {submission.firstName} {submission.lastName}
              </h6>
              <div className="enrolled-details">
                <p className="enrolled-info">{submission.gender}</p>
                <a href={submission.website} className="enrolled-info">
                  {submission.website}
                </a>
                <p className="enrolled-info">{submission.email}</p>
                <p className="enrolled-info">
                  Skills: {submission.skills.toString()}
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src={submission.image}
                alt={submission.firstName}
                className="enrolled-image"
              />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No students enrolled yet.</p>
    )}
  </div>
</Col>
 
          </Row>
        </Container>
        
      </>
    );
  }
}

export default App;