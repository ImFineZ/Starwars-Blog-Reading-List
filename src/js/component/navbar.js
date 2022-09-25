import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            className="mx-2"
          />
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <a
              className="btn btn-primary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              
            >
              Favorites
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item" href="#"/>

              </li>
            </ul>
          </div>
        </div>


      </nav>
    </div>
  );
};
