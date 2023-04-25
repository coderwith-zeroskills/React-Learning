import React, { useEffect, useState } from "react";

function RegistrationForm() {
  const intitVal = {
    firstName: "",
    lastName: "",
  };
  const [details, setFunction] = useState(intitVal);
  const change1 = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFunction({
      ...details,
      [name]: value,
    });
    // setFunction({ ...details, fisrtName: e.target.value });
  };

  //   const change2 = (e) => {
  //     setFunction({ ...details, lastName: e.target.value });
  //   };
  //   const change3 = (e) => {
  //     setFunction({ ...details, age: e.target.value });
  //   };
  //   const change4 = (e) => {
  //     setFunction({ ...details, company: e.target.value });
  //   };
  const display = () => {
    console.log("Details :", details);

    //   alert(details.fisrtName);
    //   alert(details.lastName);
    //   alert(details.age);
    //   alert(details.company);
  };
  // useEffect(() => {
  //   console.log("triggered");// will run every time we render
  // });

  return (
    <div className="App-header">
      <h1>REGISTRATION-FORM</h1>
      <form>
        <label for="firstName">FIRSTNAME: </label>

        <input
          type="text"
          value={details.fisrtName}
          name="firstName"
          id="firstName"
          onChange={change1}
        ></input>
        <br></br>
        <label for="lastName">LAST NAME: </label>
        <input
          type="text"
          value={details.lastName}
          name="lastName"
          id="lastName"
          onChange={change1}
        />
      </form>
      <h1>{intitVal.firstName}</h1>

      {/* <input type="text" value={details.age} onChange={change3} />
      <input type="text" value={details.company} onChange={change4} /> */}
      <br></br>
      <button onClick={display}>SUBMIT</button>
      <h>{intitVal.firstName}</h>
    </div>
  );
}

export default RegistrationForm;
