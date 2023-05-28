import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import "./form.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
});
const Basic = (props) => (
  <div>
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field type="text" name="firstName" className="form-control" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field type="text" name="lastName" className="form-control" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <Field type="text" name="website" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Link
            </label>
            <Field type="text" name="image" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="checkbox-label">
              Gender
            </label>
            <div className="form-check form-check-inline">
              <Field
                type="radio"
                name="gender"
                value="Male"
                className="form-check-input"
              />
              Male
            </div>
            <div className="form-check form-check-inline">
              <Field
                type="radio"
                name="gender"
                value="Female"
                className="form-check-input"
              />
              Female
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <label htmlFor="skills" className="checkbox-label">
                Skills
              </label>
              <div className="form-check form-check-inline">
                <Field
                  type="checkbox"
                  name="skills"
                  value="HTML"
                  className="form-check-input"
                />
                <label htmlFor="skills" className="form-check-label">
                  HTML
                </label>
              </div>
              <div className="form-check form-check-inline">
                <Field
                  type="checkbox"
                  name="skills"
                  value="CSS"
                  className="form-check-input"
                />
                <label htmlFor="skills" className="form-check-label">
                  CSS
                </label>
              </div>
              <div className="form-check form-check-inline">
                <Field
                  type="checkbox"
                  name="skills"
                  value="JavaScript"
                  className="form-check-input"
                />
                <label htmlFor="skills" className="form-check-label">
                  JavaScript
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="button"
            >
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={props.onClear}
              className="button"
            >
              Clear
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;