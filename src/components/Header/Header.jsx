import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => console.log("user logged"))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl font-semibold underline"
                      : "text-xl font-semibold"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-xl font-semibold underline"
                          : "text-xl font-semibold"
                      }
                      to="/profile"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-xl font-semibold underline"
                          : "text-xl font-semibold"
                      }
                      to="/updateProfile"
                    >
                      Update Profile
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Single-Family Homes.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-semibold underline"
                    : "text-xl font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-semibold underline"
                        : "text-xl font-semibold"
                    }
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-xl font-semibold underline"
                          : "text-xl font-semibold"
                      }
                      to="/updateProfile"
                    >
                      Update Profile
                    </NavLink>
                  </li>
              </>
            )}
          </ul>
        </div>
        <div></div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full bg-white">
                    <abbr title={user && user.displayName}>
                      <img alt="profile img" src={user && user.photoURL} />
                    </abbr>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-5 -mr-4 z-[100] p-2 shadow bg-base-100 rounded-box w-52 border-2 border-[#023222]"
                >
                  <li className="text-[#023222] text-center text-xl font-semibold">
                    {user && user.displayName}
                  </li>
                  <li className="btn mt-4 bg-[#023222] hover:bg-[#023222] text-white border-2 border-white rounded-xl font-semibold">
                    <Link className="text-xl" onClick={handleSignOut}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn bg-[#023222] hover:bg-[#023222] text-white border-2 border-white rounded-xl font-semibold">
                <Link className="text-xl" to="/login">
                  Log In
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
