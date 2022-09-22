import React from "react";
import { Card } from "../component/card";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="container-sm">
		<div className="row">
			<div className="card ">
			<h1>Character</h1>
				<Card></Card>
			</div>
		</div>
	</div>
	<div className="container-sm">
		<div className="row">
			<div className="card ">
			<h1>Planets</h1>
				<Card></Card>
			</div>
		</div>
	</div>
	</>
);
