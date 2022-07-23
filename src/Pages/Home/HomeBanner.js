import React from "react";
import frameImg from '../../images/Frame 13.png';
import NavbarTop from "../Navbar/NavbarTop";

const HomeBanner = () => {
  return (
    <div style={{backgroundImage:"url('https://i.postimg.cc/rwFzxHVP/Frame-14.png')", backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'380px'}}>
        <NavbarTop></NavbarTop>
      <div  className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Analytics that transform your product inside-out</h1>
            <div className="mt-4">
            <button className="btn btn-primary mr-4">Request for demo</button>
            <button className="btn btn-outline btn-primary">Download</button>
            </div>

            <img className="" src={frameImg} alt="photos" />
            

          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomeBanner;
