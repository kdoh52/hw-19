import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 mt-3">
                  <div className="card">
                      <div className="card-horizontal">
                          <div className="img-square-wrapper">
                              <img alt={props.name} src={props.image}/>
                          </div>
                          <div className="card-body">
                              <h4 className="card-title">{props.name}</h4>
                              <p className="card-text">ID: {props.id}</p>
                              <p className="card-text">Title: {props.title}</p>
                              <p className="card-text">Phone: {props.phone}</p>
                              <p className="card-text">Email: {props.email}</p>
                              <p className="card-text">DOB: {props.dob}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default FriendCard;
