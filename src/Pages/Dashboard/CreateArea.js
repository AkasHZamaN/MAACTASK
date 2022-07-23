import React from "react";
import { useForm } from "react-hook-form";
import useRegion from "../../hooks/useRegion";

const CreateArea = () => {
  const [region] = useRegion();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch('https://staging-api.erpxbd.com/api/v1/area', {
        method: 'POST',
        headers: {
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
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="form-control w-full max-w-xs mx-6 mt-6">
          <label class="label">
            <span class="label-text font-bold">Pick Your Region</span>
          </label>
          <select class="select select-bordered"
          {...register("region", {
            required: {
              value: true,
              message: "Region is Required",
            },
          })}
          >
            <option disabled selected>
              Pick Your Region
            </option>
            
              {
                region.map(r => <option value={r._id} key={r._id} r={r}>{r.name}</option>)
              }
            
          
          </select>
        </div>

        <div class="card-body">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Area</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              placeholder="Type Area"
              class="input input-bordered w-full max-w-xs"
            />
          </div>

          <div class="card-actions justify-end">
          <input
                className="btn w-full max-w-xs bg-gradient-to-r from-primary to-accent text-white border-0"
                type="submit"
                value="Add Area"
              />
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default CreateArea;
