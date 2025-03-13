/* eslint-disable react/prop-types */
const DashCards = ({ name, description, title,Logo }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl m-4 p-6 bg-white transition hover:shadow-2xl w-full sm:w-[48%] md:w-[30%]">
      <div className="text-green-800  mb-3">
        <div>
          {name} 
              </div>
              <div className="flex justify-between">
                  {title}
                  {Logo}
              </div>
          </div>
          <hr />
      <h4 className="text-sm ">{description}</h4>
    </div>
  );
};

export default DashCards;
