import React from "react";

export default function Dashboard() {
  const Dashboard = [
    { name: "ASKS ALLOTTED", number: "1000", img: "./img/d2.png" },
    { name: "TASKS CONSUMED", number: "00", img: "./img/d1.png" },
    { name: "TASKS REMAINING", number: "600", img: "./img/d3.png" },
    { name: "FREE TASKS CONSUMED", number: "5000", img: "./img/d4.png" },
  ];

  return (
    <>
      <div className="container  w-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="block">
            <p className="font-semibold text-3xl mb-4">Dashboard</p>
            <span className="text-gray-400  max-sm:text-sm">
              Create & manage all of your automation workflows in one place with
              Pabbly Connect Dashboard.
            </span>
          </div>

          <div>
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="bg-blue-500 mt-4 max-sm:float-start float-end hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <span className="text-xl">+</span>
              Create Workflow
            </button>

            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-xl max-h-full">
                <div class="relative bg-slate-100 rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Create Workflow
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4">
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Workflow Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name of the workflow"
                      required
                    />
                  </div>

                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-md tracking-wider"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className=" mt-10 bg-slate-100 rounded-lg">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 p-2 gap-3">
          {Dashboard.map((item) => (
            <div className="flex border-1 rounded-lg shadow-md p-6 bg-white ">
              <img
                src={item.img}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="block ml-5">
                <span className="font-semibold text-sm uppercase text-gray-600  tracking-wider">
                  {item.name}
                </span>{" "}
                <br />
                <span className="font-semibold text-xl">{item.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    

      
    </>
  );
}
