import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Link } from "react-router-dom";
import { carsContext } from "../../contexts/CarsContext";
import "./CarCard.css";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));
const CarCard = ({ item }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {
        showDetails,
        addProductToCart,
        checkProductInCart,
        likes,
    } = useContext(carsContext);
    return (
        <div className="details1">
            <Card
                className="details"
                style={{ padding: 15 }}
                className={classes.root}
            >
                <CardMedia className={classes.media} image={item.img1} />
                <div style={{ marginLeft: "40px" }}>
                    <div className="car_model">{item.model}</div>
                    <div
                        style={{ lineHeight: "40px", fontSize: "25px" }}
                        className="car_year"
                    >
                        {item.year}
                    </div>
                </div>

                <CardContent style={{ marginLeft: "25px" }}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {" "}
                        <div style={{ lineHeight: "30px" }} className="car_v">
                            <img
                                alt=""
                                style={{ width: 17, marginRight: 5 }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Motorkontrollleuchte.svg/1200px-Motorkontrollleuchte.svg.png"
                            />
                            {item.v}
                        </div>
                        <div style={{ lineHeight: "30px" }} className="car_kpp">
                            <img
                                alt=""
                                style={{ width: 17, marginRight: 5 }}
                                src="https://static.thenounproject.com/png/67420-200.png"
                            />
                            {item.kpp}
                        </div>
                        <div
                            style={{ lineHeight: "30px" }}
                            className="car_unit"
                        >
                            <img
                                alt=""
                                style={{ width: 17, marginRight: 5 }}
                                src="https://static.thenounproject.com/png/2904111-200.png"
                            />
                            {item.unit}
                        </div>
                        <div
                            style={{
                                fontSize: 27,
                                color: "black",
                                lineHeight: "40px",
                            }}
                            className="car_price"
                        >
                            {item.price} $
                        </div>
                    </Typography>
                </CardContent>
                <CardActions style={{ marginLeft: "20px" }} disableSpacing>
                    <IconButton
                        onClick={() => likes(item.id)}
                        aria-label="add to favorites"
                    >
                        <FavoriteIcon />
                        {item.likes}
                    </IconButton>
                    <IconButton
                        aria-label="share"
                        onClick={() => addProductToCart(item)}
                        color={checkProductInCart(item.id) ? "secondary" : ""}
                    >
                        <BookmarkIcon />
                    </IconButton>
                    {/* <Link to="/details">
                        <IconButton
                            onClick={() => showDetails(item.id)}
                            aria-expanded={expanded}
                            aria-label="show more"
                            style={{ fontSize: "25px" }}
                        >
                            {" "}
                            learn more
                            <ExpandMoreIcon />
                        </IconButton>
                    </Link> */}
                </CardActions>
            </Card>
        </div>
    );
};

export default CarCard;
