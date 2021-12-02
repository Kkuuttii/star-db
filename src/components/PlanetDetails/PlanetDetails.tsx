import React, { useState, useEffect } from "react";
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

		let [planet, setPlanet] = useState<any>();

		// сработает только после мотнирования компонента, при обновлении не будет срабатывать т.к в зависимостях указаны []
		useEffect(() => {
			getPlanet();
		}, []);

		async function getPlanet() {
			let response = await fetch('https://swapi.dev/api/planets/11');

			let commits = await response.json();

			let info = [
				`Diameter: ${commits.diameter}`,
				`Gravity: ${commits.gravity}`,
				`Orbital Period: ${commits.orbital_period}`,
				`Population: ${commits.population}`,
				`Terrain: ${commits.terrain}`,
				`Population: ${commits.climate}`,
			];

			console.log(commits);
			console.log(getId(commits.url));
			setPlanet({
				id: getId(commits.url),
				name: commits.name,
				info,
			});
		}

		function getId (url: string) {
			let arr = url.split("/");
			return arr[arr.length - 2];
		}

    return (
        <div className="planet-details">
            <div className="planet-details-image"> 
                <Image 
                    width={120}
                    src={`https://starwars-visualguide.com/assets/img/planets/${planet?.id}.jpg`}
                />      
            </div>
            <div className="planet-details-div-list">  
                <Divider orientation="left">{planet?.name}</Divider>
                <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                //bordered
                dataSource={planet?.info}
                renderItem={(item: any) => (
                    <List.Item>
                    <Typography.Text>{item}</Typography.Text> 
                    </List.Item>
                )}
                />
            </div>
        </div>
        
    )
}

export default PlanetDetails;