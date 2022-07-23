import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useToken from '../../hooks/useToken';

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("updated done");
  };

  if (user || gUser) {
    navigate(from, { replace: true });
    //   console.log("google sign in: ", user, gUser);
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500 pb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
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
                <input
                  type="text"
                  placeholder="Your Mobile"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  {...register("mobile", {
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
                  <option value={"Front End Devoloper"}>
                    Front End Devoper
                  </option>
                  <option value={"Assistant Manager"}>Assistant Manager</option>
                  <option value={"Full Stack Web Developer"}>
                    Full Stack Web Developer
                  </option>
                  <option value={"MERN Stack Developer"}>
                    MERN Stack Developer
                  </option>
                  <option value={"React Js Developer"}>
                    React Js Developer
                  </option>
                </select>
              </div>

              {/* error handle text down */}
              {signInError}
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

export default SignUp;
