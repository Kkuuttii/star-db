import React from "react";
import './RandomPlanet.css';
import { Image, Card } from 'antd';
function RandomPlanet () {
    return (
        <div className="random-planet">
            <div className="random-planet-image">
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            
            <div>
                <Card className="random-planet-list" title="Card title" bordered={false} style={{ width: 300 }}>
                    <div className="random-planet-card-items"> 
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </div>
                </Card>
            </div>
        </div>
        
    )
}

export default RandomPlanet;