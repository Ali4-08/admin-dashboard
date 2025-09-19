import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 800 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 1200 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 1500 },
];

export default function Chart() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow rounded-xl p-6 mt-8">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
