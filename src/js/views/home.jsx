import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="container">
        <h1 className="text-muted">Character</h1>
        <div className="overflow-auto">
          <div className="d-flex">
            {store.characters.map((singlename, index) => {
              return (
                <Card
                  img={store.imgPersonas[index].url}
                  key={index}
                  name={singlename.name}
                  type="characters"
                  id={singlename.uid}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-muted">Planets</h1>
        <div className="overflow-auto">
          <div className="d-flex">
            {store.planets.map((singlename, index) => {
              return (
                <Card
                  img={store.imgPlanetas[index].url}
                  key={index}
                  name={singlename.name}
                  type="planets"
                  id={singlename.uid}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};