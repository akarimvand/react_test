
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ProjectProgressData } from '../types';

const data: ProjectProgressData[] = [
  { name: 'پروژه آلفا', 'پیشرفت': 75, 'وظایف': 120 },
  { name: 'پروژه بتا', 'پیشرفت': 40, 'وظایف': 80 },
  { name: 'پروژه گاما', 'پیشرفت': 90, 'وظایف': 150 },
  { name: 'پروژه دلتا', 'پیشرفت': 65, 'وظایف': 95 },
  { name: 'پروژه امگا', 'پیشرفت': 25, 'وظایف': 50 },
  { name: 'پروژه سیگما', 'پیشرفت': 82, 'وظایف': 110 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-3 rounded-md border border-gray-700 shadow-lg">
        <p className="font-bold">{label}</p>
        <p className="text-indigo-400">{`پیشرفت: ${payload[0].value}%`}</p>
        <p className="text-sky-400">{`تعداد وظایف: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const ProjectChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
        <XAxis dataKey="name" tick={{ fill: '#A0AEC0' }} />
        <YAxis yAxisId="left" orientation="left" stroke="#A0AEC0" />
        <YAxis yAxisId="right" orientation="right" stroke="#A0AEC0" />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(113, 128, 150, 0.1)' }} />
        <Legend wrapperStyle={{ color: '#E2E8F0' }} />
        <Bar yAxisId="left" dataKey="پیشرفت" fill="#6366F1" name="پیشرفت (%)" />
        <Bar yAxisId="right" dataKey="وظایف" fill="#38BDF8" name="تعداد وظایف" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProjectChart;
