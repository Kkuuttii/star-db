import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './ItemList.css';
import { getId } from '../PlanetDetails/PlanetDetails';

import 'antd/dist/antd.css';
import { Menu, Spin } from 'antd';

function ItemList (props: any) {
		let [planets, setPlanets] = useState <any>([]);
		let [loading, setLoading] = useState(true);
		// сработает только после мотнирования компонента, при обновлении не будет срабатывать т.к в зависимостях указаны []
		useEffect(() => {
			getPlanets();
		}, []);

		async function getPlanets() {
			setLoading(true);
			let response = await fetch('https://swapi.dev/api/planets/?page=2');

			let commits = await response.json();

			setPlanets(commits.results);
			setLoading(false);
		}

		let getMenuItems = () => {
			return planets.map((item: any) => {
				return <Menu.Item key={getId(item.url)}>{item.name}</Menu.Item>
			});
		};

    return (
        <div className="item-list">
						{loading && <Spin />}
            {!loading && 
						<Menu 
							defaultSelectedKeys={["11"]} 
							className="item-list-menu" 
							mode="inline" 
							onClick={(value) => props.onClick(value.key)}
						>
								{/* <Menu.Item key="1">Alderaan</Menu.Item>
                <Menu.Item key="2">Yavin IV</Menu.Item>
                <Menu.Item key="3">Hoth</Menu.Item>
                <Menu.Item key="4">Dagobah</Menu.Item>
                <Menu.Item key="5">Bespin</Menu.Item>*/}

							{getMenuItems()}
            </Menu>}
        </div>
    );
}

export default ItemList;