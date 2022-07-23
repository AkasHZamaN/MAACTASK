import React from "react";

const CreateArea = () => {
  return (
    <div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="form-control w-full max-w-xs mx-6 mt-6">
          <label class="label">
            <span class="label-text font-bold">Pick Your Region</span>
          </label>
          <select class="select select-bordered">
            <option disabled selected>
              Pick Your Region
            </option>
            <option>Dhaka</option>
          <option>Sylhet</option>
          <option>Barishal</option>
          <option>Rajshahi</option>
          <option>Barguna</option>
          <option>Kustia</option>
          <option>Khulna</option>
          <option>Bagura</option>
          <option>Chittagong</option>
          <option>Cox's Bazar</option>
          <option>Sherpur</option>
          <option>Dinajpur</option>
          <option>Bhula</option>
          <option>Rangpur</option>
          <option>Jessore</option>
          </select>
        </div>

        <div class="card-body">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Area</span>
            </label>
            <input
              type="text"
              placeholder="Type Area"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-secondary my-4 btn-sm">Add Area</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArea;
