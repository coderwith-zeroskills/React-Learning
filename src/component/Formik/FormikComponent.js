import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import "./Css.css";
import "./Css.css";
import * as Yup from "yup";
function FormikComponent(props) {
  const initialValues = {
    name: "",
    Roll: "",
    email: "",
    number: "",
    comments: "",
  };

  const xyz = Yup.object({
    name: Yup.string().required("name required"),
    Roll: Yup.string().required("Roll required"),
    email: Yup.string().required("email required"),
    number: Yup.string().required("number required"),
    comments: Yup.string().required("Comment required"),
  });
  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={validate}
      validationSchema={xyz}
      onSubmit={onSubmit}
    >
      <Form>
        <label>Name:</label>
        <Field type="text" id="name" name="name" placeholder="Enter Name" />
        <ErrorMessage className="error" name="name" />

        <br></br>
        <label>Roll-Number:</label>
        <Field type="number" id="Roll-Number" name="Roll" />
        <ErrorMessage name="Roll" className="error" />
        <br></br>
        <label>E-mail Address:</label>
        <Field type="email" id="email" name="email" />

        <ErrorMessage name="email" />

        <br></br>
        <label>Phone-Number:</label>
        <Field type="number" id="number" name="number" />
        <ErrorMessage name="number" />
        <br></br>
        <br></br>
        <label>COMMMENTS:</label>
        <Field as="textarea" name="comments" />
        <ErrorMessage name="comments" />

        <br></br>
        <input type="submit" value="SUBMIT" />
      </Form>
    </Formik>
  );
}

export default FormikComponent;
