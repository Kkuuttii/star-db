import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import './ItemList.css';

import 'antd/dist/antd.css';
import { Menu } from 'antd';

function ItemList () {
		let [planets, setPlanets] = useState([]);

		// сработает только после мотнирования компонента, при обновлении не будет срабатывать т.к в зависимостях указаны []
		useEffect(() => {
			getPlanets();
		}, []);

		async function getPlanets() {
			let response = await fetch('https://swapi.dev/api/planets/?page=2');

			let commits = await response.json();

			setPlanets(commits.results);
		}

		let getMenuItems = () => {
			return planets.map((item: any) => {
				return <Menu.Item key={item.url}>{item.name}</Menu.Item>
			});
		};

    return (
        <div className="item-list">
            <Menu className="item-list-menu" mode="inline">
								{/* <Menu.Item key="1">Alderaan</Menu.Item>
                <Menu.Item key="2">Yavin IV</Menu.Item>
                <Menu.Item key="3">Hoth</Menu.Item>
                <Menu.Item key="4">Dagobah</Menu.Item>
                <Menu.Item key="5">Bespin</Menu.Item>*/}

							{getMenuItems()}
            </Menu>
        </div>
    );
}

export default ItemList;