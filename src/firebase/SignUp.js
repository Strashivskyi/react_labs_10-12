import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./firebase";
import "./SignUp.css";
import {Link} from "react-router-dom";

function SignUp({ history }) {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, passwordCheck, phone } = event.target.elements;
        try {
            if (password.value === passwordCheck.value) {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                localStorage.setItem("phoneNumber", phone)
                history.push("/");
            }
            else {
                alert("Please, check your password")
            }
        } catch (error) {
            alert("Error occured. Please, check your inputs.");
        }
    }, [history]);

    return (
        <div>
            <form onSubmit={handleSignUp} className="singup-form">
            <h1 class="signup_text">Sign up</h1>
            <div className="signup_input">
            <input style={{borderTop: "3px solid grey"}}type="email" name="email" placeholder="Enter your email"/>
            </div>
            <div className="signup_input">
            <input type="password" name="password" placeholder="Enter password"/>
            </div>
            <div className="signup_input">
            <input type="password" name="passwordCheck" placeholder="Enter password again"/>
            </div>
            <div className="signup_input">
            <input type="text" name="phoneNumber" placeholder="Enter phone number"/>
            </div>
            <div class="already_member_flex_container">
    <h3>Already a member? &nbsp;&nbsp;&nbsp;</h3>
    <Link className="from_signup_to_login"to="/">Log in</Link>
    </div>
            <button className="signup_button" type="submit">Sign Up</button>
            </form>
        </div>

    );
}
export default withRouter(SignUp);