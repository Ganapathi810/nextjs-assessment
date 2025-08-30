
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MyTrendingUp } from "./my-trending-up"

export const FinancialWellBeingCard = () => {

    const sampleData = {
        items : [
            {
            name : "Target",
            money : "500,000"
            },
            {
                name : "Current",
                money : "450,000"
            }
        ]
    }
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Financial Wellbeing</CardTitle></CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-bold">20</h3>
                        <p className="text-slate-600">Total franchisees</p>
                    </div>
                    <MyTrendingUp percentage={2.1}/>
                </div>
                <hr className="w-full h-1 mt-2"></hr>
                <div className="flex justify-between">
                    {sampleData.items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 items-center px-10 py-3 bg-violet-100/50 rounded-md mt-4">
                            <span className="text-slate-600 font-semibold">{item.name}</span>
                            <span className="text-lg font-semibold">${item.money}</span>    
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}