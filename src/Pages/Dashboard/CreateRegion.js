import React from "react";

const CreateRegion = () => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-4 mt-4">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text font-bold mx-4">Region</span>
          </label>
          <input
            type="text"
            placeholder="Type Region"
            class="input input-bordered input-primary w-full max-w-xs mx-6"
          />
        </div>

        <div class="card-body">
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">Add Region</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRegion;
