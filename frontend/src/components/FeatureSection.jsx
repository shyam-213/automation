import { features } from "../constants/Constants";

const FeatureSection = () => {
  
  return (
    // <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    //   <div className="text-center">
    //     <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide uppercase">
    //       Feature
    //     </h2>
    //     <hr className="w-1/4 mx-auto border-neutral-800" />
    //     <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
    //       Easily build{" "}
    //       <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
    //         your automation
    //       </span>
    //     </h2>
    //   </div>
    //   <div className="flex flex-wrap mt-10 lg:mt-20">
    //     {features.map(( index) => (
    //       <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
    //         <div className="flex">
              
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <>
    
      <div className="container mx-auto">
        <h2 className="text-4xl my-14 uppercase max-sm:text-3xl max-md:text-4xl  font-semibold text-center">Meet our Automation Products</h2>
        <div className="grid grid-cols-1 justify-items-center gap-3 lg:grid-cols-4  md:grid-cols-2 lg:p-6 sm:grid-cols-2">



          { 
            features.map((item) => (
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex mb-3">
                  <span className=" text-indigo-600">{item.icon}</span>
                  <a href="#">
                    <h5 class="mb-2 mx-5 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.text}</h5>
                  </a>
              </div>
                <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{item.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            ))
          }

          
          </div>
    </div>
    
    </>
  );
};

export default FeatureSection;
