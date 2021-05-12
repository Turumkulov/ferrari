import React, { useContext, useEffect, useState } from "react";
import { carsContext } from "../../contexts/CarsContext";
import CarCard from "../CarsListForUser/CarCard";
import { Grid, Paper } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import "./CarsListForUser.css";
const CarsListForUser = (props) => {
    const { getCars, carsData, paginationPages } = useContext(carsContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());

    function getPage() {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }
    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getCars(history);
    };
    useEffect(() => {
        getCars(props.history);
    }, []);
    return (
        <div className="cars-list">
            <div className="carsForUser">
                <Sidebar {...props} />
                <Paper>
                    <Grid className="grids" container spacing={3}>
                        {carsData.map((item) => (
                            <CarCard item={item} key={item.id} />
                        ))}
                    </Grid>
                    <Pagination
                        className="pagination"
                        onChange={handlePage}
                        count={paginationPages}
                        defaultPage={+page}
                    />{" "}
                </Paper>
            </div>
        </div>
    );
};

export default CarsListForUser;
