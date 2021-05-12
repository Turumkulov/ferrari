import React, { useContext } from "react";
import { carsContext } from "../../contexts/CarsContext";
// import Carousel from "./Carousel";
import Carousel3d from "./Carousel3d";
import Video from "./Video";
import AOS from "aos";
AOS.init();
const Details = () => {
    const { detailsData } = useContext(carsContext);
    return (
        <div>
            {detailsData ? (
                <div>
                    <img src={{ detailsData }} alt="" />
                    {/* <Carousel detailsData={detailsData} />{" "} */}
                    {/* <div
                        data-aos="fade-right"
                        style={{
                            width: "40vw",
                            margin: "10vh 10vw",
                            fontWeight: 500,
                            fontSize: 20,
                            color: "#403a3a",
                            transition: "0.8s",
                        }}
                    > */}
                    {/* <span>{detailsData.desc1}</span> */}
                    {/* </div> */}
                    {/* <div
                        data-aos="fade-left"
                        style={{
                            width: "40vw",
                            margin: "10vh 45vw",
                            fontWeight: 500,
                            fontSize: 20,
                            color: "#403a3a",
                        }}
                    > */}
                    {/* <span>{detailsData.desc2}</span>
                    </div> */}
                    {/* <Carousel3d detailsData={detailsData} /> */}
                    {/* <div
                        data-aos="fade-down-left"
                        style={{
                            width: "70vw",
                            margin: "100px auto",
                            fontWeight: 500,
                            fontSize: 20,
                            color: "#403a3a",
                        }} */}
                    {/* >
                        <span>{detailsData.desc3}</span>
                    </div> */}
                </div>
            ) : (
                <h1>loading</h1>
            )}
        </div>
    );
};

export default Details;
