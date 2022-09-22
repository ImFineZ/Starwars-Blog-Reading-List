import React, { Component } from "react";
/* import { Outlet } from "react-router";
 */
export const Card = () => {


    
  return (
    <>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <div className="card-text">
        {`Gender:
        Age:
        Color Eye:`}
          </div>
          <div>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <a href="#" className="btn btn-primary d-flex flex-grow-1">
              <ion-icon name="heart-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
