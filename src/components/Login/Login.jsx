import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { logInUser, signInwithgoogle,gitHubSignIn } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate();
  console.log(location)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInwithgoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitHubLogIn = () => {
    gitHubSignIn()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        
      })
      .catch((error) => {
        console.error(error);
       
      });
};

  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="mt-5">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Log In</h1>
        </div>
        <div className="card mt-9 w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
            </div>
          </form>
          <div className="p-4 text-center">
            <p>
              New to this website ? Please{" "}
              <Link to="/register" className="underline font-bold">
                Register
              </Link>
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className="btn">
                Google
              </button>
              <button onClick={handleGitHubLogIn} className="btn">
                Github
              </button>
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
