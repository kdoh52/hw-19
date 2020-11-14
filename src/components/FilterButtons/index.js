import React from "react";
import "./style.css";

function SortButtons(props) {
  return (
      <div>
          <button type="button" className="btn btn-info" onClick={props.filterManagers}>Managers</button>
          <button type="button" className="btn btn-info" onClick={props.filterSales}>Sales</button>
          <button type="button" className="btn btn-info" onClick={props.filterAccountants}>Accountants</button>
      </div>
  )
}

export default SortButtons;
