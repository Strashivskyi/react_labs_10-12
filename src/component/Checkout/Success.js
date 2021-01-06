import React from "react";
import "./Checkout.css";
import Economy from '../../assets/successright.png';
import "./Success.css";
import { Link } from "react-router-dom";
import StyledButton from "./StyledButton.styled.js"


const Success = ()=>{

   return(
      <div className="body">
       <div className="success_container">
        <img src={Economy} style={{ paddingTop:"100px",height:"39vh", background: "white", marginLeft: "auto", marginRight: "auto"}}/>
        <p className="success">SUCCESS</p>
        <p className="processing_first">Your order was sent to processing</p>
        <p className="processing_second">Check your email for further information</p>
        <Link to={'/products'}><StyledButton type="text" shape="round">Back to Catalog</StyledButton></Link>

       </div>
      </div>

  );
};

export default Success;
