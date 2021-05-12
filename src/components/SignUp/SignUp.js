import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import app from "../../FireBase";
import "./SignUp.css";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(
                        email.value,
                        password.value
                    );

                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    return (
        <div>
            <div>
                <img
                    className="signUp-video"
                    src="https://images.unsplash.com/photo-1602422042160-f4a6e5260fe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                />
            </div>
            <div className="signUp">
                <form className="signUp-block" onSubmit={handleSignUp}>
                    <label>
                        <input
                            className="signUp-inp1"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        <input
                            className="signUp-inp2"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </label>
                    <button className="signUp-btn" type="Submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);
