
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
const House = ({ data }) => {

  const { image_url, estate_title, id, agent_name, price } = data;
  return (
    <div>
      <div className="w-80 lg:w-full p-6 rounded-2xl border-2 border-[#023222]  space-y-6">
        <figure className="bg-[#F3F3F3] lg:w-[400px] w-[280px] lg:h-[220px] h-[150px] rounded-2xl flex justify-center items-center">
          <img
            src={image_url}
            alt="comming"
            className="w-full h-full rounded-2xl"
          />
        </figure>
        <div className="space-y-4 ">
          <h2 className="lg:text-2xl text-xl font-bold">{estate_title}</h2>
          <h2 className="lg:text-xl text-lg font-bold">{agent_name}</h2>
          <p className="font-medium text-[#023222]">
            <span className="text-2xl">Price : {price}</span>
          </p>
          <div className="flex flex-wrap gap-5 items-center justify-between text-[#023222] font-medium border-t border-dashed">
            <Link to={`/data/${id}`}>
              <button className="btn bg-[#023222] text-white hover:bg-white border-2 hover:border-[#023222] hover:text-[#023222]">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
House.propTypes = {
  data: PropTypes.object,
};
