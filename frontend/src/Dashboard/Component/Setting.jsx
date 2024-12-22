import React from 'react'

export default function Setting() {


  const Dashboard = [
    { name: "ASKS ALLOTTED", number: "1000", img: "./img/d2.png" },
    { name: "TASKS CONSUMED", number: "00", img: "./img/d1.png" },
    { name: "TASKS REMAINING", number: "600", img: "./img/d3.png" },
    { name: "FREE TASKS CONSUMED", number: "5000", img: "./img/d4.png" },
  ];


  return (
    <>

      <div className="container  max-w-full p-4">
        <div className="grid grid-cols-1">
          <div className="block">
            <p className="font-semibold text-3xl mb-4">Task Summary</p>
            <span className="text-gray-400 max-sm:text-sm">
              View all of your task summaries. Any action being performed in your workflow is considered a task. Triggers are not calculated as tasks, and internal applications of Pabbly Connect, such as the filter, router, and formatter, are also not counted as tasks. Note that the task summary is only available for the last 30 days.
            </span>
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
  )
}
