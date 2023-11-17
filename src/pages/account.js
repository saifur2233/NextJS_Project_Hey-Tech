import { signIn } from "next-auth/react";
import auth from "@/firebase/firebase.auth";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const AccountPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  //console.log("User", user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center m-12 lg:text-left">
          <img
            src="https://i.ibb.co/VTw5prg/signup.jpg"
            className="sm:max-w-sm md:max-w-md lg:max-w-2xl rounded-lg shadow-2xl"
            alt="Login"
          />
        </div>
        <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl bg-base-100">
          <h1 className="text-5xl text-secondary font-bold text-center py-5">
            Registration!
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
                Register
              </button>
            </div>
            <div className="divider">OR</div>
            <p className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-info">
                Login
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
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
// AccountPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
