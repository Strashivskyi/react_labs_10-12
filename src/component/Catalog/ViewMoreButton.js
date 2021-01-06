import React from 'react';
import { StyledButton} from "../Home/CardItem.styled";
import {
    Link,
    useRouteMatch
  } from "react-router-dom";

function ViewMoreButton(props) {
    let match = useRouteMatch();
    
    return <Link to={`${match.url}/${props.id}`}><StyledButton type="text" shape="round" style={{marginTop: "40px"}}>View more</StyledButton></Link>;
}

export default ViewMoreButton;