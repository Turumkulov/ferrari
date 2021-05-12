import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import video from "../../components/Video/video.webm";

const Home = () => {
    return (
        <div className="home">
            <div className="first-image">
                <img
                    className="first-item1"
                    src="https://images.unsplash.com/photo-1554223090-7e482851df45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80"
                    alt=""
                />
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="signup">Sign up</button>
                </Link>
            </div>
            <div className="second-image">
                <video
                    className="first-item1"
                    src={video}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
};

export default Home;
