
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Automate without limits
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with Selkey
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-600 max-w-4xl">
      Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets, 
      no delays. The only limit is your imagination.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r bg-orange-300 hover:bg-orange-500 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        
      </div>
    </div>
  );
};

export default HeroSection;
