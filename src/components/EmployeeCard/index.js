import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>ID:</strong> {props.id}
    //       </li>
    //       <li>
    //         <strong>Phone:</strong> {props.phone}
    //       </li>
    //       <li>
    //         <strong>Email:</strong> {props.email}
    //       </li>
    //       <li>
    //         <strong>DOB:</strong> {props.dob}
    //       </li>
    //     </ul>
    //   </div>

      <div className="container-fluid">
          <div className="row">
              <div className="col-12 mt-3">
                  <div className="card">
                      <div className="card-horizontal">
                          <div className="img-square-wrapper">
                              <img alt={props.name} src={props.image}/>
                          </div>
                          <div className="card-body">
                              <h4 className="card-title">Card title</h4>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                      </div>
                      <div className="card-footer">
                          <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    // </div>
  );
}

export default FriendCard;
