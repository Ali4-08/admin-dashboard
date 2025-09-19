import { Users, Package, DollarSign, ShoppingCart } from "lucide-react";

import Card from "../components/Card";
import Chart from "../components/Chart";
import UserTable from "../components/Table";
import ProductTable from "../components/ProductTable";

const stats = [
      { title: "Users", value: "1,245", icon: <Users className="w-6 h-6" /> },
      { title: "Products", value: "326", icon: <Package className="w-6 h-6" /> },
      { title: "Revenue", value: "$12,540", icon: <DollarSign className="w-6 h-6" /> },
      { title: "Orders", value: "895", icon: <ShoppingCart className="w-6 h-6" /> },
];

export default function Dashboard(){
    return(
        <div className="dark:bg-gray-800 dark:text-gray-100">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
               {stats.map((item) => (
                <Card key={item.title} {...item}/>
               ))}
            
            </div>

            <Chart />

            <UserTable />

            <ProductTable />

        </div>
    )
}