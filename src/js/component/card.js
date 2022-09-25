/* import React, { Component } from "react"; */
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card col-4 mx-2">
      <img src={props.img} className="card-img-top" height={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="container">
          <div className="float-start">
            <Link
              to={
                props.type === "planets"
                  ? `/planets/${props.id}`
                  : `/characters/${props.id}`
              }
            >
              Ver mas!
            </Link>
          </div>
          <div className="float-end">
            <a className="btn btn-warning " > 
              <i className="bi bi-suit-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
