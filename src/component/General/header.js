import React from 'react'
import {Menu} from 'antd'
import Logo from '../../assets/logo.png';
import NewHeader from "./header.styled";
import {
    Link
  } from "react-router-dom";
import app from "../../firebase/firebase";
import "./Header.css"

function AppHeader() {
    return(
    <div className="container-fluid">
        <NewHeader>
        <img className="logo" src={Logo} alt="website logo"/>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/home" style={{color:"#680300"}}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/products" style={{color:"#680300"}}>Catalog</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/cart" style={{color:"#680300"}}>Cart</Link>
            </Menu.Item>
            </Menu>
            </NewHeader>
            <button className="sign_out_button" onClick={() => app.auth().signOut()}>Sign out</button>
     </div>
    );
}
export default AppHeader;