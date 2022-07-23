import React from "react";
import { 
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";



const SignIn = () => {
  const { register,formState: { errors },handleSubmit,} = useForm();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500 pb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password, data.jobId);


    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
    .then(res => res.json())
    .then(data =>{
        if(data.success){
            localStorage.setItem('accessToken', data.accessToken)
        }
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
          <h2 className="text-center text-2xl font-bold">Welcome Back!</h2>
          <small className="text-center">Please login to your account</small>
          
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
          <label className="label">
                <span className="label-text">Job ID</span>
              </label>
                <input
                  type="text"
                  name="jobId"
                id="jobId"
                  placeholder="Your Job ID"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("jobId", {
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
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
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

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
