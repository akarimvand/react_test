import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return React.createElement('div', {
    className: 'min-h-screen bg-blue-500 text-white p-8'
  }, 
    React.createElement('h1', {
      className: 'text-4xl font-bold'
    }, 'داشبورد مدیریت پروژه'),
    React.createElement('p', {
      className: 'mt-4 text-xl'
    }, 'پروژه با موفقیت لود شد!')
  );
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));