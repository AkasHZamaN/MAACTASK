import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";



const SignIn = () => {
  const { register,formState: { errors },handleSubmit,} = useForm();


  

  let signInError;
  const navigate = useNavigate();
  

  const token = localStorage.getItem('token')
  


  const onSubmit = (data) => {
    console.log(data);

    fetch('https://staging-api.erpxbd.com/api/v1/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
        
            localStorage.setItem('token', data.token)
        
        console.log(data);
    })

  }; 

  if (token) {
    navigate('/dashboard');
  }
  
  return (
    <div style={{
        backgroundImage: "url('https://i.postimg.cc/cJR5HwM0/Frame-17.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Welcome Back!</h2>
          <small className="text-center">Please login to your account</small>
          
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
          <label className="label">
                <span className="label-text">Job ID</span>
              </label>
                <input
                  type="text"
                  name="employeeId"
                id="employeeId"
                  placeholder="Your Job ID"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("employeeId", {
                    required: {
                      value: true,
                      message: "Job ID is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]/,
                      message: "Provide a valid Job Id",
                    },
                  })}
                />
                <label className="label">
                  {errors.jobId?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.jobId.message}
                    </span>
                  )}
                </label>
              </div>
            

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="input input-bordered input-secondary w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
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

            <small><Link to={'/resetPass'}><button className="text-secondary font-semibold mb-3">Forget Your Password?</button></Link></small>
            
            {/* error handle text down */}
            {signInError}
            <input
              className="btn w-full max-w-xs bg-gradient-to-r from-primary to-accent text-white border-0"
              type="submit"
              value="Sign In"
            />
          </form>

          <p>
            <small>
              New to FiledX{" "}
              <Link className="text-primary font-bold" to="/registration">
                Create New Account
              </Link>
            </small>
          </p>

          
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
