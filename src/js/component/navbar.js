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
                <a className="dropdown-item" href="#">
                 {/*  <button
                    className="btn btn-outline-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <p className="d-flex p-0 m-0">
                       {store.favoritoNuevo.length - 1}
                    </p>
                  </button> */}
                  Action
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
