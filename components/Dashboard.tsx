
import React from 'react';
import MetricCard from './MetricCard';
import ProjectChart from './ProjectChart';
import ProjectsIcon from './icons/ProjectsIcon';
import TasksIcon from './icons/TasksIcon';
import TeamIcon from './icons/TeamIcon';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard title="پروژه‌های فعال" value="۱۲" icon={<ProjectsIcon />} color="blue" />
        <MetricCard title="وظایف تکمیل شده" value="۷۸" icon={<TasksIcon />} color="green" />
        <MetricCard title="اعضای تیم" value="۹" icon={<TeamIcon />} color="purple" />
        <MetricCard title="بودجه (تومان)" value="۴۵۰م" icon={<div className="w-6 h-6">💰</div>} color="yellow" />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">نمودار پیشرفت پروژه‌ها</h3>
        <div style={{ direction: 'ltr' }} className="h-96">
            <ProjectChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
