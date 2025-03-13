/* eslint-disable react/prop-types */
import { Star, StarHalf } from "lucide-react";


const Review = ({ name, description, title }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl p-6 bg-white transition hover:shadow-2xl w-full ">
      <div className="text-green-800  mb-3">
        <div>
          {name} <br />
          {title}
        </div>
      </div>

      <h4 className="text-sm ">{description}</h4>

      <p className="text-gray-600 mt-2 flex">
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <StarHalf  size={20} />
      </p>
    </div>
  );
};

export default Review