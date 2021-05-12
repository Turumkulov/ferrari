import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { carsContext } from "../../contexts/CarsContext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // color: theme.palette.text.secondary,
        color: "black",
    },
    root: {
        width: 300,
    },
}));
const Sidebar = () =>
    // { history }
    {
        const history = useHistory();
        const { getCars } = useContext(carsContext);
        const handleChangeMemory = (e) => {
            if (e.target.value === "all") {
                history.push(`${history.location.pathname.replace("model")}`);
                getCars(history);
                return;
            }
            const search = new URLSearchParams(history.location.search);
            search.set("model", e.target.value);
            history.push(`${history.location.pathname}?${search.toString()}`);
            getCars(history);
        };
        const classes = useStyles();
        const [value, setValue] = React.useState([0, 100000]);
        const handleChange = (event, newValue) => {
            setValue(newValue);
        };
        const showChangePrice = () => {
            const search = new URLSearchParams(history.location.search);
            history.push(
                `${history.location.pathname}?price_gte=${value[0]}&price_lte=${value[1]}`
            );

            getCars(history);
            search.toString();
        };
        const [searchValue, setSearchValue] = useState(getSearchValue());

        const handleValue = (e) => {
            const search = new URLSearchParams(history.location.search);
            search.set("q", e.target.value);
            history.push(`${history.location.pathname}?${search.toString()}`);
            setSearchValue(e.target.value);
            getCars(history);
        };
        function getSearchValue() {
            const search = new URLSearchParams(history.location.search);
            return search.get("q");
        }
        return (
            <Grid item m={3}>
                <Paper className={classes.paper}>
                    {" "}
                    <Typography style={{ fontSize: 30, textAlign: "center" }}>
                        FILTER
                    </Typography>
                    <input
                        style={{ width: 300 }}
                        onChange={handleValue}
                        value={searchValue}
                    />
                    <div className={classes.root}>
                        <Typography id="range-slider" gutterBottom>
                            Price from... ...to
                        </Typography>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={100000}
                            step={100}
                        />
                        <Button
                            onClick={showChangePrice}
                            variant="outlined"
                            color="primary"
                        >
                            Show
                        </Button>
                    </div>
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">MODELS</FormLabel>
                        <RadioGroup
                            onChange={handleChangeMemory}
                            aria-label="model"
                            name="model"
                        >
                            <FormControlLabel
                                value="Ferrari California"
                                control={<Radio />}
                                label="Ferrari California"
                            />
                            <FormControlLabel
                                value="Ferrari FF"
                                control={<Radio />}
                                label="Ferrari FF"
                            />
                            <FormControlLabel
                                value="Ferrari 812 SuperFast"
                                control={<Radio />}
                                label="Ferrari 812 SuperFast"
                            />
                            <FormControlLabel
                                value="Ferrari 458 Italia"
                                control={<Radio />}
                                label="Ferrari 458 Italia"
                            />
                            <FormControlLabel
                                value="all"
                                control={<Radio />}
                                label="All"
                            />
                        </RadioGroup>
                    </FormControl>
                </Paper>
                <Paper className={classes.paper}> </Paper>
            </Grid>
        );
    };

export default Sidebar;
