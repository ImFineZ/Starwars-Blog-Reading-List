/* import React from "react"; */
import { Card } from "../component/card";
import React, { useState, useEffect } from "react";
import "../../styles/home.css";

export const Home = () => {
  const [addCharacters, setgetcharacters] = useState([""]);

  const getCharacters = () => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setgetcharacters(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return(
  <>
    <div className="container">
      <h1>Character</h1>
      <div className="overflow-auto">
        <div className="d-flex">

		{/*   {img.map((singleimg, i) => {
          return (
            <Cards key={i}
              img={singleimg}
              alt={alt[i]}
              tittle={tittle[i]}
              description={description[i]}
              link={link[i]}
              desLink={desLink[i]}
            />
          );
        })} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
    <div className="container">
      <h1>Planets</h1>
      <div className="overflow-auto">
        <div className="d-flex">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  </>
  );
};
