
const HeroSection = () => {
  return (

    <>
    
      {/* <div className="flex flex-col items-center mt-6 lg:mt-20">
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
            href="/signup"
            className="bg-gradient-to-r bg-orange-300 hover:bg-orange-500 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="/docs" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">

        </div>
      </div> */}

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-38 md:py-36 sm:py-16">
          <h1 class="mb-4 text-4xl font-bold max-sm:text-1xl tracking-tight leading-none bg-clip-text bg-gradient-to-r from-indigo-500  to-sky-800 text-transparent  md:text-5xl lg:text-6xl dark:text-white"> Automate without limits with Selkey</h1>
          <p class="mb-8 text-lg max-sm:text-base font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets,
            no delays. The only limit is your imagination.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Learn more
            </a>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default HeroSection;
