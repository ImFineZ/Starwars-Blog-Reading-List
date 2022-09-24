/* import React, { Component } from "react"; */
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    /*    <div className="card col-4 mx-2">
      <img
        src="https://www.prensalibre.com/wp-content/uploads/2019/11/luke-skywalker-644x362.jpg?quality=52"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6>Gender:{props.gender}</h6>
        <br></br>
        <h6>Hair Color:{props.hairColor}</h6>
        <br></br>
        <h6>Eye-Color:{props.eyeColor}</h6>
        <br></br>
        <div className="d-flex">
          <div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="">
            <a href="#" className="btn btn-warning mx-5">
              <i className="bi bi-suit-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </div> */

    <div className="card col-4 mx-2">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="container d-flex">
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
            <a lin className="btn btn-warning mx-5">
              <i className="bi bi-suit-heart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
