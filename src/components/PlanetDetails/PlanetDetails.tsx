import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './PlanetDetails.css';
import { List, Typography, Divider, Image, Spin } from 'antd';

export function getId (url: string) {
	let arr = url.split("/");
	return arr[arr.length - 2];
}

function PlanetDetails (props: any) {
    // let data = [
    //     '8900',
    //     'N/A',
    //     '341',
    //     'unknown',
    //     'swamp, jungles',
    //     'murky',
    // ];

		const [planet, setPlanet] = useState<any>();
		const [loading, setLoading] = useState(true);
		// сработает только после мотнирования компонента, при обновлении не будет срабатывать т.к в зависимостях указаны []
		useEffect(() => {
				getPlanet();
		}, [props.id]);

		async function getPlanet() {
			setLoading(true);
			let response = await fetch(`https://swapi.dev/api/planets/${props.id}`);

			let commits = await response.json();

			let info = [
				`Diameter: ${commits.diameter}`,
				`Gravity: ${commits.gravity}`,
				`Orbital Period: ${commits.orbital_period}`,
				`Population: ${commits.population}`,
				`Terrain: ${commits.terrain}`,
				`Population: ${commits.climate}`,
			];

			setPlanet({
				id: getId(commits.url),
				name: commits.name,
				info,
			});
			setLoading(false);
		}

    return (
        <div className="planet-details">
						{loading && <Spin />}
            {!loading && 
						<div className="planet-details-wrapper">
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
						</div>}
        </div>
        
    )
}

export default PlanetDetails;