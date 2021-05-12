import React, { useContext } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { carsContext } from "../../contexts/CarsContext";
import Badge from "@material-ui/core/Badge";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const BurgerMenu = () => {
    const { cartLength } = useContext(carsContext);
    return (
        <div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    <li className="links">
                        {" "}
                        <Link className="links" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="links">
                        <Link className="links" to="/login">
                            Log in
                        </Link>
                    </li>
                    <li className="links">
                        {" "}
                        <Link className="links" to="/signup">
                            Sign up
                        </Link>
                    </li>
                    <li className="links">
                        {" "}
                        <Link className="links" to="/store">
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ marginRight: "5px" }}
                            >
                                <Badge
                                    badgeContent={cartLength}
                                    color="secondary"
                                >
                                    <BookmarkIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
