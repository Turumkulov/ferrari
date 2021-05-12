import React, { useContext, useEffect, useState } from "react";
import { carsContext } from "../../contexts/CarsContext";
import CarCard from "../CarsListForAdmin/CarCard";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const CarsListForAdmin = (props) => {
    const { getCars, carsData, paginationPages } = useContext(carsContext);
    const [page, setPage] = useState(getCars());
    const history = useHistory();

    useEffect(() => {
        getCars(props.history);
        // console.log(paginationPages);
        // console.log(carsData);
    }, []);

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", page);
        history.push(`${history.location.pathname}?${search.toString()}`);
        setPage(page);
        getCars(history);
    };
    // console.log(carsData);
    // console.log(typeof carsData);
    // console.log(paginationPages);
    return (
        <>
            {carsData ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar />
                    <Grid container spacing={3} style={{ margin: 0 }}>
                        {carsData?.map((item) => (
                            <CarCard item={item} key={item.id} />
                        ))}
                    </Grid>
                    <Pagination
                        page={+page}
                        onChange={handlePage}
                        count={paginationPages}
                    />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
    // =======
    // const CarsListForAdmin = () => {
    //   const { getCars, carsData } = useContext(carsContext);
    //   useEffect(() => {
    //     getCars();
    //   }, []);
    //   // console.log(carsData);
    //   return (
    //     <div style={{ display: "flex", flexDirection: "row" }}>
    //       <Sidebar />
    //       <Grid container spacing={3} style={{ margin: 0 }}>
    //         {carsData.map((item) => (
    //           <CarCard item={item} key={item.id} />
    //         ))}
    //       </Grid>
    //     </div>
    //   );
    // >>>>>>> master
};

export default CarsListForAdmin;
