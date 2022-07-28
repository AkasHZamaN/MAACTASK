import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const token = localStorage.getItem('token')

  
  

    if (token) {
        navigate(from, { replace: true });
      }
  

  const onSubmit = (data) => {

    fetch('https://staging-api.erpxbd.com/api/v1/users/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {

        localStorage.setItem('token', data.token)
        console.log(data);
    })

  };

  

  return (
    <div style={{
        backgroundImage: "url('https://i.postimg.cc/cJR5HwM0/Frame-17.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Create Account</h2>
            <small className="text-center mb-4">
              Fill in the details below to create an account
            </small>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your employeeId"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("employeeId", {
                    required: {
                      value: true,
                      message: "employeeId is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]/,
                      message: "Provide a valid employeeId",
                    },
                  })}
                />
                <label className="label">
                  {errors.employeeId?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.employeeId.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your Mobile"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("phoneNumber", {
                    required: {
                      value: true,
                      message: "Mobile Number is Required",
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: "Provide a valid Number",
                    },
                  })}
                />
                <label className="label">
                  {errors.mobile?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.mobile.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Your Confirm Password"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("passwordConfirm", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs mb-4">
                <select
                  className="select select-secondary w-full max-w-xs"
                  {...register("role", {
                    required: {
                      value: true,
                      message: "Role is Required",
                    },
                  })}
                  required
                >
                  <option value={"default"}>Select Your Role</option>
                  <option value={"HUB"}>
                    HUB
                  </option>
                  
                </select>
              </div>

              {/* error handle text down */}
              
              <input
                className="btn w-full max-w-xs bg-gradient-to-r from-primary to-accent text-white border-0"
                type="submit"
                value="Create Account"
              />
            </form>

            <p>
              <small>
                Allready have an account?{" "}
                <Link className="text-primary" to="/login">
                  Please Login
                </Link>
              </small>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
