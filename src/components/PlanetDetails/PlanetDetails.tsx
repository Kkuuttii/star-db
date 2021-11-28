import React from "react";
import ReactDOM from 'react-dom';
import './PlanetDetails.css';
import { List, Typography, Divider, Image } from 'antd';

function PlanetDetails () {
    let data = [
        '8900',
        'N/A',
        '341',
        'unknown',
        'swamp, jungles',
        'murky',
    ];
    let itemHeader = [
        'Diameter',
        'Gravity',
        'Orbital Period',
        'Population',
        'Terrain',
        'Climate',
    ]

    return (
        <div className="planet-details">
            <div> 
                <Image className="planet-details-image"
                    width={120}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />      
            </div>
            <div className="planet-details-div-list">  
                <Divider orientation="left">Dagobah</Divider>
                <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
                />
            </div>
        </div>
        
    )
}

export default PlanetDetails;