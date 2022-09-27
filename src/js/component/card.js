import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-4 mx-2">
      <img src={props.img} className="card-img-top" height={200} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="container">
          <div className="float-start ">
            <Link
              to={
                props.type === "planets"
                  ? `/planets/${props.id}`
                  : `/characters/${props.id}`
              }
            >
              <button type="button" class="btn btn-outline-primary">Ver mas!</button>
            </Link>
          </div>
          <button onClick={()=>{
              actions.setFavorito([...store.favoritos,{name: props.name}]);
              console.log(store)
            }}
           className="float-end">
            <div className="btn btn-warning " > 
              <i className="bi bi-suit-heart" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

