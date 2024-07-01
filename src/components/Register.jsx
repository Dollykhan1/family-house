import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handlerRegisterSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
const photoUrl = e.target.photourl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="mt-5">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card mt-9 w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handlerRegisterSubmit} className="card-body">
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo_URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photoURL"
                  name="photourl"
                  className="input input-bordered"
                />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <div className="relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full pr-12"
                  required
                />
                <span className="absolute right-4 text-2xl mt-3 cursor-pointer"></span>
              </div>
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="p-4 text-center">
            <p>
              Already have an account ?{" "}
              <Link to="/login" className="underline font-bold">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;
