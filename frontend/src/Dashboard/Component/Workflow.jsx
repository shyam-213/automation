import React from 'react'
import { MoreVertical, ChevronUp, Search } from 'lucide-react';

export default function Workflow() {

  const apps = [
    {
      id: 1,
      name: 'Webhook',
      icon: '🔗',
      color: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Email Parser',
      subtitle: '(Pabbly)',
      icon: '📧',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Schedule',
      subtitle: '(Pabbly)',
      icon: 'P',
      color: 'bg-green-500'
    },
    {
      id: 4,
      name: '123FormBuilder',
      icon: '123',
      color: 'bg-blue-500'
    },
    {
      id: 5,
      name: '360 Dialog',
      subtitle: '(Cloud)',
      icon: '360',
      color: 'bg-pink-500'
    },
    {
      id: 6,
      name: '360 Dialog',
      subtitle: '(On-Premise)',
      icon: '360',
      color: 'bg-pink-500'
    },
    {
      id: 7,
      name: '3veta',
      icon: '3v',
      color: 'bg-purple-500'
    }
  ];

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


      {/* <div className="max-w-full mx-auto mt-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 bg-blue-50 rounded-lg p-4">
              <img
                src="./img/workflow.png"
                alt="Workflow illustration"
                className="w-full h-auto"
              />
            </div>

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
      </div> */}


      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
              P
            </div>
            <div>
              <div className="text-gray-500 mb-1">Trigger : When this happens ...</div>
              <h2 className="text-xl font-bold">
                1. Choose Your First Application : <span className="text-gray-500">Trigger</span>
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md text-sm">
              Free Task
            </span>
            <button className="p-2 hover:bg-gray-100 rounded">
              <MoreVertical size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <ChevronUp size={20} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">Choose App</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {apps.map(app => (
            <button
              key={app.id}
              className="p-4 border rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-center"
            >
              <div className={`w-12 h-12 ${app.color} text-white rounded-full flex items-center justify-center mx-auto mb-2`}>
                {app.icon}
              </div>
              <div className="text-sm font-medium">{app.name}</div>
              {app.subtitle && (
                <div className="text-xs text-gray-500">{app.subtitle}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    
    </>
  )
}
