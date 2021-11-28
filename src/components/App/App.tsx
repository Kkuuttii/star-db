import React from "react";
import './App.css';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList"
import PlanetDetails from "../PlanetDetails/PlanetDetails"
function App () {
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <RandomPlanet/>
                <div className = "item-list-and-planet-details">
                    <ItemList/>
                    <PlanetDetails/>
                </div>
            </div>
        </div>
        
    )
}

export default App;