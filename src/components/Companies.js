import React from "react";
import img1 from "../assets/images/3k.png";
import img2 from "../assets/images/deye.png";
import img3 from "../assets/images/dj.png";
import img4 from "../assets/images/growatt.png";
import img5 from "../assets/images/must.png";
// import img6 from '../assets/images/luminous.png'
import img7 from "../assets/images/rocket.png";
import img8 from "../assets/images/felicitysolar.png";
import img9 from "../assets/images/superpower.png";
import img10 from "../assets/images/rambo.jpg";
import img11 from "../assets/images/orbit.png";
import img12 from "../assets/images/longi.png";
import img13 from "../assets/images/inkel.png";
import img14 from "../assets/images/exide.png";
import img15 from "../assets/images/tufbul.png";


const Companies = () => {
  return (
    <>
      <h3>Relating to which</h3>
      <div className="companies_logo_main_div">
        <img className="companies_logo" src={img1} alt="" />
        <img className="companies_logo" src={img2} alt="" />
        <img className='companies_logo' src={img3} alt="" />
        {/* <h3>Du</h3> */}
        <img style={{height:"70px"}} className="companies_logo" src={img4} alt="" />
        <img className="companies_logo" src={img5} alt="" />
        <img className="companies_logo" src={img1} alt="" />
        <img className="companies_logo" src={img7} alt="" />
        <img className="companies_logo" src={img8} alt="" />
        <img style={{height:"70px"}} className="companies_logo" src={img9} alt="" />
        <img className="companies_logo" src={img10} alt="" />
        <img className="companies_logo" src={img11} alt="" />
        <img className="companies_logo" src={img12} alt="" />
        <img className="companies_logo" src={img13} alt="" />
        <img style={{height:"20px"}} className="companies_logo" src={img14} alt="" />
        <img className="companies_logo" src={img15} alt="" />


        {/* <h3>Inkel</h3> */}
        {/* <h3>Exide</h3>
        <h3>Tuff Bull</h3> */}
      </div>
    </>
  );
};

export default Companies;
