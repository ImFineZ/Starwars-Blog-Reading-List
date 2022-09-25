import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const CharactersViews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.characterIndividual);
  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualPeople(params?.theid);
    }
  }, [params?.theid]);
  return (
    <div className="container">
      {/* characters {params?.theid} */}
      <div className="container">
       {/*  <p>Nombre: {store.characterIndividual?.name}</p> */}

        <div className="card mb-3">
          <img
            src={store.imgPersonas[params?.theid - 1].url}
            height={300}
            width={100}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.characterIndividual.name}</h5>
            <hr style={{ color: "red" }} />
            <div className="container">
              <div className="row align-items-start">
                <div className="col" style={{ color: "red" }}>
                  Name{" "}
                </div>
                <div className="col" style={{ color: "red" }}>
                  Birth Year{" "}
                </div>
                <div className="col" style={{ color: "red" }}>
                  Gender{" "}
                </div>
                <div className="col" style={{ color: "red" }}>
                  Height{" "}
                </div>
                <div className="col" style={{ color: "red" }}>
                  Skin Color{" "}
                </div>
                <div className="col" style={{ color: "red" }}>
                  Eye Color{" "}
                </div>
              </div>
              <div className="row align-items-center">
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.name}
                </small>
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.birth_year}
                </small>
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.gender}
                </small>
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.height}
                </small>
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.skin_color}
                </small>
                <small className="col" style={{ color: "red" }}>
                  {store.characterIndividual.eye_color}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
