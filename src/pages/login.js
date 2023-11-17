import { signIn } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log("User", user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Data", data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center m-12 lg:text-left">
          <img
            src="https://i.ibb.co/qCBxKzm/11683784-4794658.jpg"
            className="sm:max-w-sm md:max-w-md lg:max-w-2xl rounded-lg shadow-2xl"
            alt="Login"
          />
        </div>
        <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            User Login
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <p className="text-center text-red-600"></p>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                {...register("password", { required: true })}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-secondary" type="submit">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <p className="text-center">
              Are you new here?{" "}
              <Link href="/account" className="text-info">
                Sign Up
              </Link>
            </p>
            <button
              className="btn btn-outline btn-success"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
            >
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
// LoginPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
