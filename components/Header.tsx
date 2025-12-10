
import React from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{pageTitle}</h2>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-48 sm:w-64 bg-gray-100 dark:bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg py-2 px-4 transition-all duration-300"
          />
        </div>
        <div className="flex items-center mr-4 cursor-pointer">
          <img
            src="https://picsum.photos/40/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="hidden sm:inline mr-2 font-medium text-gray-700 dark:text-gray-300">
            کاربر تست
          </span>
          <ChevronDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
