import React from 'react'

export default function Workflow() {
  return (
    <>
    
      <div className="container  w-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="block">
            <p className="font-semibold text-3xl mb-4">Workflows</p>
            <span className="text-gray-500 text-sm ">
              Create automation workflow below.
            </span>
          </div>
        </div>
      </div>


      <div className="max-w-full mx-auto mt-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/3 bg-blue-50 rounded-lg p-4">
              <img
                src="./img/workflow.png"
                alt="Workflow illustration"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">
                Add <span className="text-blue-600">new</span> Workflow
              </h2>

              <p className="text-gray-600 mb-6">
                Start by creating the automation workflow and integrate your applications together.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-600">Choose your trigger which will fire the workflow.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-600">Send data to a different application via API.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-gray-400 rounded-full"></span>
                  <span className="text-gray-600">Save your workflow and let the automation work.</span>
                </li>
              </ul>

              <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
                <span className="text-xl">+</span>
                Create Workflow
              </button>


              <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-xl max-h-full">

                  <div class="relative bg-slate-100 rounded-lg shadow dark:bg-gray-700">

                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Create Workflow
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                      </button>
                    </div>

                    <div className="p-4">
                      <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Workflow Name</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the workflow" required />
                    </div>

                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-md tracking-wider">Create</button>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
