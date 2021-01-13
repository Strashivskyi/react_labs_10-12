import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase";
import { AuthContext } from "./AuthSetup/Auth";
import "./Login.css"
import {Link} from "react-router-dom"

const Login = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);

            } catch (error) {
        alert("Error occured. Please, check your inputs. If you are not a member, then sign up")
            }
        },
        [history]
    );
    if (currentUser) {
        return <Redirect to="/home" />;
    }
  return (
      <div>
    <div className="login_page">
      <form onSubmit={handleLogin} className="login-form">
      <h1 className="login_text">Log in</h1>
      <div className="usual_input">
    <input style={{borderTop: "3px solid grey"}}type="email" name="email" placeholder="Enter your email"/>
    </div>
    <div className="usual_input">
    <input type="password" name="password" placeholder="Enter password"/>
    <div class="not_member_flex_container">
    <h3>Not a member? &nbsp;&nbsp;&nbsp;</h3>
    <Link className="from_login_to_signup"to="/signup">Sign up</Link>
    </div>
    </div>
        <button className="login_button" type="submit">Log in</button>
      </form>
    </div>
    </div>
  );
};

export default withRouter(Login);