import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { carsContext } from "../../contexts/CarsContext";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
    const { addCar } = useContext(carsContext);
    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(0.9),
                width: "50ch",
            },
        },
    }));
    const classes = useStyles();
    const [car, setCar] = useState({
        model: "",
        year: "",
        v: "",
        kpp: "",
        unit: "",
        price: "",
        img1: "",
        // img2: "",
        // img3: "",
        // img4: "",
        // img5: "",
        // img6: "",
        // img7: "",
        // img8: "",
        // img9: "",
        // img10: "",
        // img11: "",
        // img12: "",
        // video: "",
        // desc1: "",
        // desc2: "",
        // desc3: "",
    });
    const handleValues = (e) => {
        let newCar = {
            ...car,
            [e.target.name]: e.target.value,
        };
        setCar(newCar);
    };
    const handleClick = () => {
        if (
            car.model === "" ||
            car.year === "" ||
            car.v === "" ||
            car.kpp === "" ||
            car.unit === "" ||
            car.price === "" ||
            car.img1 === ""
        ) {
            setShowError(true);
            return;
        }
        setCar({
            model: "",
            year: "",
            v: "",
            kpp: "",
            unit: "",
            price: "",
            img1: "",
        });
        addCar(car, history);
        setShowAlert(true);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-flexible"
                name="model"
                label="Model"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.model}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="year"
                label="Year"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.year}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="v"
                label="V"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.v}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="kpp"
                label="Kpp"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.kpp}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="unit"
                label="Unit"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.unit}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="price"
                label="Price"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.price}
            />
            <br />
            <TextField
                id="outlined-multiline-flexible"
                name="img1"
                label="img1"
                multiline
                rowsMax={4}
                variant="outlined"
                onChange={handleValues}
                value={car.img1}
            />{" "}
            {showAlert ? (
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setShowAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    You have added a new product!
                </Alert>
            ) : (
                ""
            )}
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleClick}
            >
                Add new car
            </Button>
        </form>
    );
};

export default AddProduct;
