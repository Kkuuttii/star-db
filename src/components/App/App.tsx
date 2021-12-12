import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList"
import PlanetDetails from "../PlanetDetails/PlanetDetails"
function App () {
		let [planetId, setPlanetId] = useState("11");

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <RandomPlanet/>
                <div className = "item-list-and-planet-details">
                    <ItemList onClick={(value: any) => setPlanetId(value)}/>
                    <PlanetDetails id={planetId}/>
                </div>
            </div>
        </div>
        
    )
}

export default App;