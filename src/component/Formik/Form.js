import { useFormik } from "formik";
import React from "react";
import "./Css.css";
// import * as Yup from "yup";

function Form(props) {
  // console.log(props.children);
  // const yupValidation = Yup.object({
  //   name: Yup.string().required("blah"),
  // });
  const abcd = useFormik({
    initialValues: {
      name: "",
      Roll: "",
      email: "",
      number: "",
    },
    // yupValidation,
    // onSubmit: (a) => {
    //   console.log(a);
    // },
    validate: (a) => {
      let errors = {};
      if (a.name === "") {
        errors.name = "name required";
      }
      if (a.Roll === "") {
        errors.Roll = "roll required";
      }
      if (a.email === "") {
        errors.email = "email required";
      }
      if (a.number === "") {
        errors.number = "number required";
      }

      return errors;
    },
    onSubmit: (values) => console.log(values),
  });
  // console.log(abcd.touched);

  return (
    <>
      <div>
        <form onSubmit={abcd.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={abcd.handleChange}
            onBlur={abcd.handleBlur}
          ></input>
          {/* {abcd.touched.name && abcd.errors.name} */}
          {abcd.touched.name && abcd.errors.name ? (
            <div className="error">{abcd.errors.name}</div>
          ) : (
            ""
          )}
          <br></br>
          <label>Roll-Number:</label>
          <input
            type="number"
            id="Roll-Number"
            name="Roll"
            onChange={abcd.handleChange}
            onBlur={abcd.handleBlur}
            // value={abcd.values.Roll}
          ></input>
          {/* {abcd.touched.Roll && abcd.errors.Roll} */}

          {abcd.touched.Roll && abcd.errors.Roll ? (
            <div className="error">{abcd.errors.Roll}</div>
          ) : (
            ""
          )}
          <br></br>
          <label>E-mail Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={abcd.handleChange}
            onBlur={abcd.handleBlur}
            // value={abcd.values.email}
          ></input>
          {/* below one not good,touched way is good */}
          {/* {!abcd.values.email && abcd.errors.email} */}
          {abcd.touched.email && abcd.errors.email}

          {/* {abcd.touched.email && abcd.errors.email ? (
            <div className="error">{abcd.errors.email}</div>
          ) : (
            ""
          )} */}
          <br></br>
          <label>Phone-Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            onChange={abcd.handleChange}
            onBlur={abcd.handleBlur}
            // value={abcd.values.number}
          ></input>
          {abcd.touched.number && abcd.errors.number}

          {/* {abcd.touched.number && abcd.errors.number ? (
            <div className="error">{abcd.errors.number}</div>
          ) : (
            ""
          )} */}
          <br></br>

          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </>
  );
}

export default Form;
