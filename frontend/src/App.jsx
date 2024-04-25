import React, {useEffect, useState} from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import axios from "axios";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),


];
const App = () => {

    const [currencies , setcurrencies] = useState([])


    const fetchCur = () => {

        axios.get('http://127.0.0.1:8000/cryptocurriencies').then(responce =>{
            const ans = r.data



        })

    }

    useEffect(() => {
        fetchCur()
    }, []);



    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            style={{
                width: 256,
            }}
        >

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default App;