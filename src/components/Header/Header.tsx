import React from "react";
import './Header.css';
import {Radio} from "antd";
function Header () {
    return (
        <div className="header">
            <div className="header-h1"> <h1> STAR DB </h1> </div>
            <Radio.Group className="radio-group" size="large">
                <Radio.Button className="radio-button">People</Radio.Button>
                <Radio.Button className="radio-button">Planets</Radio.Button>
                <Radio.Button className="radio-button">Starships</Radio.Button>
            </Radio.Group>
        </div>
        
    )
}

export default Header;