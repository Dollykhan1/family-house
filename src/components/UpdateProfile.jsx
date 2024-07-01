
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    console.log(name, photoUrl);

    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
    //.then(() => {
     // setFatching(true);
    //});
    };
    return (
        <div>
        <div className="hero bg-slate-200">
          <div>
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Update Profile</h1>
            </div>
            <div className="card mt-9 lg:w-[500px] border-2 border-[#023222] bg-white">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    defaultValue={user.displayName}
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
                    defaultValue={user.photoURL}
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
                    value={user.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#023222] hover:bg-[#023222] text-white">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};
export default UpdateProfile;