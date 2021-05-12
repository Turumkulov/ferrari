import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { carsContext } from "../../contexts/CarsContext";
import BookmarkIcon from "@material-ui/icons/Bookmark";

import BurgerMenu from "./BurgerMenu";
const Header = () => {
    const { cartLength } = useContext(carsContext);
    return (
        <div className="header">
            <div className="hamburger_menu">
                <BurgerMenu />
            </div>
            <img
                className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aq_6-PPCGBB1LYtoadmarW0ZiSnsZLiamQ&usqp=CAU"
                alt=""
            />
            <div className="block-btn">
                <Link to="/store">
                    <button className="store-btn">Store</button>
                </Link>
                <Link to="cart">
                    <BookmarkIcon className="Mark-item" />
                </Link>
            </div>

            {/* <Link to="/cart">
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            style={{ marginRight: "5px" }}
                        >
                            <Badge badgeContent={cartLength} color="secondary">
                                <img
                                    src="https://img.icons8.com/material/452/shopping-cart--v1.png"
                                    style={{ width: 35 }}
                                    alt=""
                                />
                            </Badge>
                        </IconButton>
                    </Link> */}
        </div>
    );
};
export default Header;
