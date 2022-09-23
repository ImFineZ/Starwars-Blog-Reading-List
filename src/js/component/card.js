/* import React, { Component } from "react"; */
import React from "react";
import PropType from "prop-types";



export const Card = (props) => {
  /* const [addCharacters, setgetcharacters] = useState([""]);

  const getCharacters = () => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacters();
  }, []);
 */
  return (
    
    <div className="card col-4 mx-2">
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
    </div>
  );
};
Card.propTypes = {
  img: PropType.string,
  hairColor: PropType.string,
  eyeColor: PropType.string,
  name: PropType.string,
  description: PropType.string,
  Link: PropType.string,
  desLink: PropType.string,
};