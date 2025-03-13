/* eslint-disable react/prop-types */

const FeatureCards = ({ logo, headers, description }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl p-6 bg-white transition hover:shadow-2xl w-full sm:w-[48%] md:w-[30%]">
      <div className="text-green-800 text-4xl mb-3">{logo}</div>

      <h4 className="text-lg font-semibold">{headers}</h4>

      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCards;
