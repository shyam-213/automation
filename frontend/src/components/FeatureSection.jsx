import { features } from "../constants/Constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide uppercase">
          Feature
        </h2>
        <hr className="w-1/4 mx-auto border-neutral-800" />
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your automation
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map(( index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
