import React, { useState } from "react";
import "./KnowAboutCompany.css";

function KnowAbout() {
  //   props.cont = "";
  //   let cont = "";
  const [cont, changing] = useState();
  // const [cont,showData]=useState();
  const [newContent, addContent] = useState("");

  const showData = () => {
    changing(
      "It is an all-in-one-solution that maps out the necessary business functions for construction enterprises, such as bidding, cost estimation, project management, accounting, plant and machinery, client billing,subcontractor management, sales, CRM, and HR & Payroll."
    );
  };
  //   const fun = (e) => {
  //     addContent(e){
  //         newContent=e.target.value
  //     }
  //   };
  const fun = (e) => {
    addContent(e.target.value);
  };

  return (
    <div>
      <h1 class="heading">ABOUT COMPANY</h1>
      <div>
        <h2 class="details">Click below to get details</h2>
        <button onClick={showData}>Click </button>
        <p>
          {cont} {newContent}
        </p>
        <p>write more to add content</p>
        <input type="text" value={newContent} onChange={fun} />
      </div>
    </div>
  );
}
export default KnowAbout;
