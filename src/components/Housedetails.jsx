import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Housedetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const {
    image_url,
    estate_title,

    agent_name,
    description,
    price,
    status,
  } = details;
  useEffect(() => {
    const found = data.find((b) => b.id == id);
    setDetails(found);
  }, [id, data]);
  return (
    <div className="flex justify-center items-center">
      <div className="w-80 lg:w-[600px] p-6 rounded-2xl border border-[#13131326] space-y-6">
        <figure className="bg-[#F3F3F3] w-full h-56 rounded-2xl flex justify-center items-center">
          <img src={image_url} alt="" className=" w-full h-full" />
        </figure>
        <div>
          <h2 className="text-2xl font-bold">{estate_title}</h2>
          <h2 className="text-2xl font-bold">{agent_name}</h2>
          <p className="font-medium text-[#131313CC]">{description}</p>
          <div className="flex items-center justify-between text-[#131313CC] font-medium pt-6 border-t border-dashed">
            <p>{price}</p>
            <p className="flex items-center gap-2">
              {
                status
              }
           
            </p>
          </div>
          <div>
          <Link to="/"><button className="btn hover:bg-[#023222] bg-[#023222] text-white">view property</button></Link>

          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Housedetails;
