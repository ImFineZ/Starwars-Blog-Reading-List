import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <img
            width={100}
            src="https://w7.pngwing.com/pngs/633/357/png-transparent-star-wars-logo-cupcake-r2-d2-anakin-skywalker-c-3po-chewbacca-star-wars-logo-blue-text-trademark.png"
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
              Favorites {(store.favoritos.length-1)}
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item" href="#"/>
                  {store.favoritos.map((element, i)=>{
                    if (element.name !== "") {
                      return(
                        <div
											key={i}
											className="dropdown-item liS d-flex justify-content-between"
											href="#">
											<p className="m-0">{element.name}</p>
											<i
												onClick={() => {
													actions.BorrarIdElement(i);
												}}
												className="bi bi-trash2-fill"
                        
											/>
										</div>
                      );
                    }
                  })}
              </li>
            </ul>
          </div>
        </div>


      </nav>
    </div>
  );
};
