
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const pageTitles: { [key in Page]: string } = {
    dashboard: 'داشبورد',
    projects: 'پروژه‌ها',
    tasks: 'وظایف',
    team: 'تیم',
    settings: 'تنظیمات',
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <div className="text-white text-2xl">صفحه پروژه‌ها</div>;
      case 'tasks':
        return <div className="text-white text-2xl">صفحه وظایف</div>;
      case 'team':
        return <div className="text-white text-2xl">صفحه تیم</div>;
      case 'settings':
        return <div className="text-white text-2xl">صفحه تنظیمات</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-vazir text-gray-800 dark:text-gray-200">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={pageTitles[currentPage]} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
