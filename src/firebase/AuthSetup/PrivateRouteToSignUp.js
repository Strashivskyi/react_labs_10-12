
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRouteToSignUp = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <Redirect to={"/home"} />
                   
                ) : (
                    <RouteComponent {...routeProps} />
                   
                       
                    )
            }
        />
    );
};


export default PrivateRouteToSignUp;