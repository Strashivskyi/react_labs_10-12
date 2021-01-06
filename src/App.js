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


import { BrowserRouter as Router, Route } from "react-router-dom";




const { Header, Content} = Layout;

function App() {
  return (
   <Router>
   <Layout>
   <Header>
      <AppHeader/>
   </Header>
   <Content className="content"> 
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={SingleProductInfo} />
      <Route exact path="/products" component={HomeScreen} />
      <Route exact path="/cart" component={CartScreen} />
   </Content>
  <Footer/>
  <CopyrightText/>
 </Layout>
 </Router>
  );

}

export default App;

