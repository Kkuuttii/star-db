import React from "react";
import ReactDOM from 'react-dom';
import './ItemList.css';

import 'antd/dist/antd.css';
import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function ItemList () {
    return (
        <div className="item-list">

            <Menu className="item-list-menu"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline">
                            
                <Menu.Item key="1">Alderaan</Menu.Item>
                <Menu.Item key="2">Yavin IV</Menu.Item>
                <Menu.Item key="3">Hoth</Menu.Item>
                <Menu.Item key="4">Dagobah</Menu.Item>
                <Menu.Item key="5">Bespin</Menu.Item>         
                        
            </Menu>
        </div>
    );
}

export default ItemList;