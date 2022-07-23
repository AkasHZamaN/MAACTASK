import React from "react";

const Faq = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/Hxqw0SCf/Frame-20.png')",
      }}
    >
      <div className="text-center text-white py-4">
        <small>Common Question</small>
        <h2 className="font-bold text-2xl">Frequently asked questions</h2>
      </div>
      <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
        <div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border border-base-300 bg-base-100 w-4/5 mx-auto rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What kind of data I see in FieldX?
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 w-4/5 mx-auto rounded-box my-4"
          >
            <div className="collapse-title text-xl font-medium">
              Does Buzzy read my customer's date?
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 w-4/5 mx-auto rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What's your refund and cancellation process?
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
        </div>

        <div>

          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 w-4/5 mx-auto  rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              How do you take payment?
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 w-4/5 mx-auto  rounded-box my-4"
          >
            <div className="collapse-title text-xl font-medium">
              Can I also track analytics on FieldX?
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-plus border border-base-300 bg-base-100 w-4/5 mx-auto rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What make Buzzy differnt from other analytics tool
            </div>
            <div className="collapse-content">
              <p>
                Quis nostrud execitation ullamco laboris nisi ut aligquip ex ea
                commmondo consequat. Duis aute irure dolor in voluptate.
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Faq;
