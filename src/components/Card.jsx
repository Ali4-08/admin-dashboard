export default function Card({title, value, icon}){
return (
    <div className="bg-white dark:bg-gray-700 dark:text-gray-100 shadow rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h3 className="text-xl font-bold">{value}</h3>
        </div>
    </div>
);
}