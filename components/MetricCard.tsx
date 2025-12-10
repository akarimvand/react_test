import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  // FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'yellow';
}

const colorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300',
  green: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300',
  purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300',
};


const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 space-x-reverse">
       <div className={`p-4 rounded-full ${colorClasses[color]}`}>
          {icon}
       </div>
       <div>
           <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
           <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
       </div>
    </div>
  );
};

export default MetricCard;
