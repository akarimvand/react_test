const { useState } = React;

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100 font-vazir">
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold">داشبورد</h1>
        </div>
      </div>
      <div className="flex-1 p-6">
        <h2 className="text-2xl mb-6">مدیریت پروژه</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">پروژه‌های فعال</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">وظایف تکمیل شده</h3>
            <p className="text-3xl font-bold text-green-600">85</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">اعضای تیم</h3>
            <p className="text-3xl font-bold text-purple-600">24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));