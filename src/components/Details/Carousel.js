// import React, { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import "./Carousel.css";
// const Сarousel = ({ detailsData }) => {
//   const [showWhite, setShowWhite] = useState(false);
//   return (
//     <div>
//       <div data-aos="flip-left">
//         {" "}
//         <h1 style={{ margin: "50px auto", fontSize: 35, fontWeight: 400 }}>
//           EXPLORE AND CUSTOMIZE
//         </h1>
//         <h2>{detailsData.model}</h2>
//       </div>

//       {showWhite ? (
//         <Carousel showThumbs={false}>
//           <div>
//             <img src={detailsData.img1} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img2} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img3} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img4} alt="" />
//           </div>
//         </Carousel>
//       ) : (
//         <Carousel showThumbs={false}>
//           <div>
//             <img src={detailsData.img5} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img6} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img7} alt="" />
//           </div>
//           <div>
//             <img src={detailsData.img8} alt="" />
//           </div>
//         </Carousel>
//       )}

//       <div
//         style={{
//           display: "flex",
//           margin: "50px auto",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           onClick={() => setShowWhite(true)}
//           style={{
//             width: 30,
//             height: 30,
//             borderRadius: 18,
//             backgroundColor: "white",
//             border: "2px solid black",
//             margin: "10px",
//             cursor: "pointer",
//           }}
//         ></div>
//         <div
//           onClick={() => setShowWhite(false)}
//           style={{
//             width: 30,
//             height: 30,
//             borderRadius: 18,
//             backgroundColor: "black",
//             border: "2px solid black",
//             margin: "10px",
//             cursor: "pointer",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Сarousel;
