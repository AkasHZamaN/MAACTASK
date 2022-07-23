import React from "react";
import { useForm } from "react-hook-form";

const CreateRegion = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) =>{
    fetch('https://staging-api.erpxbd.com/api/v1/region', {
      method: 'POST',
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div class="card w-96 bg-base-100 shadow-xl mx-4 mt-4">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold mx-4">Region</span>
            </label>
            <input
              type="text"
              placeholder="Type Region"
              class="input input-bordered input-primary w-full max-w-xs mx-6"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
          </div>

          <div class="card-body">
            <div class="card-actions justify-end">
              <button class="btn btn-primary btn-sm">Add Region</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateRegion;
