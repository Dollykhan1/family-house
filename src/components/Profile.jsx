import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
  
    return (
      <div className="flex justify-center items-center lg:h-[650px] h-[300px] gap-6"  >
        <div className="border-2 border-[#164133] flex justify-center flex-col items-center lg:p-8 p-3 rounded-lg">
          <figure className="lg:w-[200px] lg:h-[200px] rounded-full border-2 border-[#164133] p-3">
            <img
              src={user?.photoURL}
              alt="Profile photo is Comming soon......."
              className="w-full h-full rounded-full"
            />
          </figure>
          <div className="text-center space-y-4">
            <h1 className="font-bold lg:text-3xl text-xl">Name : {user?.displayName || 'name is Comming Soon.........'}</h1>
            <h2 className="font-semibold lg:text-2xl text-lg">Email : {user?.email || 'email is Comming Soon.........'}</h2>
          </div>
        </div>
    </div>
    );
};

export default Profile;