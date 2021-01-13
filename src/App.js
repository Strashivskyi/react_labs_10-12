import React from "react";
import { Layout } from 'antd';
import './App.css';
import AppHeader from './component/General/header.js'
import Footer from "./component/General/Footer";
import CopyrightText from "./component/General/Copyright";
import Home from "./component/Home/Home";
import SingleProductInfo from "./component/SingleProduct/SingleProductInfo";
import HomeScreen from "./component/Catalog/ProductsContainer";
import CartScreen from "./component/Cart/CartScreen";
import Checkout from "./component/Checkout/Checkout";
import Success from "./component/Checkout/Success";
import Login from "./firebase/Login"
import SignUp from "./firebase/SignUp"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from "./firebase/AuthSetup/Auth"
import PrivateRouteToLogin from "./firebase/AuthSetup/PrivateRouteToLogin";
import PrivateRouteToSignUp from "./firebase/AuthSetup/PrivateRouteToSignUp";



const { Header, Content} = Layout;

function App() {
  return (
   <AuthProvider>
   <Router>
   <Layout>
   <Header>
      <AppHeader/>
   </Header>
   <Content className="content">
      <PrivateRouteToLogin exact path="/home" component={Home} />
      <PrivateRouteToLogin exact path="/products/:id" component={SingleProductInfo} />
      <PrivateRouteToLogin exact path="/products" component={HomeScreen} />
      <PrivateRouteToLogin exact path="/cart" component={CartScreen} />
      <PrivateRouteToLogin exact path="/form" component={Checkout} />
      <PrivateRouteToLogin exact path="/success" component={Success} />
      <Route exact path="/" component={Login} />
      <PrivateRouteToSignUp exact path="/signup" component={SignUp} />
   </Content>
  <Footer/>
  <CopyrightText/>
 </Layout>
 </Router>
 </AuthProvider>

  );

}

export default App;

