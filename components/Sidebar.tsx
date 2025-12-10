import React from 'react';
import { Page } from '../types';
import DashboardIcon from './icons/DashboardIcon';
import ProjectsIcon from './icons/ProjectsIcon';
import TasksIcon from './icons/TasksIcon';
import TeamIcon from './icons/TeamIcon';
import SettingsIcon from './icons/SettingsIcon';
import LogoIcon from './icons/LogoIcon';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', label: 'داشبورد', icon: <DashboardIcon /> },
    { id: 'projects', label: 'پروژه‌ها', icon: <ProjectsIcon /> },
    { id: 'tasks', label: 'وظایف', icon: <TasksIcon /> },
    { id: 'team', label: 'تیم', icon: <TeamIcon /> },
  ] as const;

  // FIX: Replaced JSX.Element with React.ReactNode to fix "Cannot find namespace 'JSX'" error.
  const NavLink: React.FC<{ id: Page; label: string; icon: React.ReactNode }> = ({ id, label, icon }) => {
    const isActive = currentPage === id;
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage(id);
        }}
        className={`flex items-center p-3 my-1 text-base rounded-lg transition-colors duration-200 ${
          isActive
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        <span className="ml-4">{icon}</span>
        <span>{label}</span>
      </a>
    );
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white flex flex-col p-4 shadow-2xl">
      <div className="flex items-center justify-center py-4 mb-6 border-b border-gray-700">
        <LogoIcon />
        <h1 className="text-2xl font-bold mr-3">مدیریت پروژه</h1>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink key={item.id} id={item.id} label={item.label} icon={item.icon} />
        ))}
      </nav>

      <div>
        <NavLink id="settings" label="تنظیمات" icon={<SettingsIcon />} />
      </div>
    </aside>
  );
};

export default Sidebar;
