import React from 'react';
import { CheckCircle, PieChart, Clock, Gift } from 'lucide-react';

function Cards() {
  const MetricCard = ({ icon: Icon, title, value, bgColor }) => (
    <div className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden">
      <div className={`absolute -top-6 -left-6 ${bgColor} w-16 h-16 rounded-full opacity-10`} />
      <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center opacity-90 mb-3`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );

  const metrics = [
    {
      icon: CheckCircle,
      title: "TASKS ALLOTTED",
      value: "100",
      bgColor: "bg-yellow-400"
    },
    {
      icon: PieChart,
      title: "TASKS CONSUMED",
      value: "0",
      bgColor: "bg-blue-400"
    },
    {
      icon: Clock,
      title: "TASKS REMAINING",
      value: "100",
      bgColor: "bg-green-400"
    },
    {
      icon: Gift,
      title: "FREE TASKS CONSUMED",
      value: "0",
      bgColor: "bg-cyan-400"
    }
  ];

  return (
    <>
      
      <div className="bg-gray-50">
            <h1>Dashboard</h1>
      </div>
    
      <div className="p-6 mt-14 lg:ml-5 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
              bgColor={metric.bgColor}
            />
          ))}
        </div>
      </div>
    
    </>
  );
}

export default Cards;