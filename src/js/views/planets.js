import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
export const PlanetsViews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    if (params?.theid) {
      actions.informacionIndividualPlanets(params?.theid);
    }
  }, [params?.theid]);

  return (
    <div>
      <div className="container">
        <div className="container">
          <div className="card mb-3">
            <img
              src={store.imgPlanetas[params?.theid - 1].url}
              height={300}
              width={100}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{store.planetIndividual.name}</h5>
              <hr style={{ color: "red" }} />
              <div className="container">
                <div className="row align-items-start">
                  <div className="col" style={{ color: "red" }}>
                    Name{" "}
                  </div>
                  <div className="col" style={{ color: "red" }}>
                    Climate{" "}
                  </div>
                  <div className="col" style={{ color: "red" }}>
                    Population{" "}
                  </div>
                  <div className="col" style={{ color: "red" }}>
                    Orbital Period{" "}
                  </div>
                  <div className="col" style={{ color: "red" }}>
                    Rotation Period{" "}
                  </div>
                  <div className="col" style={{ color: "red" }}>
                    Diameter{" "}
                  </div>
                </div>
                <div className="row align-items-center">
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.name}
                  </small>
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.climate}
                  </small>
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.population}
                  </small>
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.orbital_period}
                  </small>
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.rotation_period}
                  </small>
                  <small className="col" style={{ color: "red" }}>
                    {store.planetIndividual.diameter}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
