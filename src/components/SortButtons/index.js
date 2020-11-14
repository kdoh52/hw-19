import React from "react";
import "./style.css";

function SortButtons(props) {
  return (
      <div>
          <button type="button" className="btn btn-primary" onClick={props.sortId}>Sort by ID</button>
          <button type="button" className="btn btn-secondary" onClick={props.sortName}>Sort by Name</button>
          <button type="button" className="btn btn-success" onClick={props.sortDob}>Sort by DOB</button>
      </div>
  )
}

export default SortButtons;
