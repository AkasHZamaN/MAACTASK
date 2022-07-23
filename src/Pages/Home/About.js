import { DesktopComputerIcon, GiftIcon, UserGroupIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import frame16 from "../../images/Frame 16.png";
import ceoPic from '../../images/Frame 29.png';

const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/cJR5HwM0/Frame-17.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* about section */}

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-1xl font-bold text-primary">About Us</h1>
            <p className="py-6">
              Sed ut perspiciatis unde omnis ise natus error sit voluptatem
              accusantium dolorwmque laudantium, otam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et quasi archiecto beatae vitae
              disa sunt explicabo.
            </p>
            <hr className="my-6" />
            <div className="flex items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={ceoPic} alt=""/>
                  </div>
                </div>
              <div className="ml-12">
                <p>"fieldx is for teams that care about their product growth."</p>
                <p className="font-bold mt-4">CEO, FieldX</p>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <div className="card-body">
              <img src={frame16} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* about end  */}

        <div className="grid justify-center grid-cols-2 lg:grid-cols-4 gap-4 pb-6">
            <div className="text-center">
                <DesktopComputerIcon className="w-6 h-6 mx-auto text-primary"></DesktopComputerIcon>
                <p className="my-2 font-bold text-primary">10+</p>
                <small>Platforms Created</small>
            </div>
            <div className="text-center">
                <UserGroupIcon className="w-6 h-6 mx-auto text-primary"></UserGroupIcon>
                <p className="my-2 font-bold text-primary">1559+</p>
                <small>Total Users</small>
            </div>
            <div className="text-center">
                <UserIcon className="w-6 h-6 mx-auto text-primary"></UserIcon>
                <p className="my-2 font-bold text-primary">10+</p>
                <small>Total Clients</small>
            </div>
            <div className="text-center">
                <GiftIcon className="w-6 h-6 mx-auto text-primary"></GiftIcon>
                <p className="my-2 font-bold text-primary">300 Days</p>
                <small>In Opertations</small>
            </div>
        </div>

    </div>
  );
};

export default About;
