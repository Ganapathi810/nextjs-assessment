import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AvatarFallback, AvatarImage,Avatar} from "./ui/avatar"

export const KeyInsightsAndWellBeingCard = ({ salesGrowthPercentage } : { salesGrowthPercentage : number }) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Key Insights & Feedback</CardTitle></CardHeader>
            <CardContent>

                <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                        <h3 className="text-3xl font-bold">{salesGrowthPercentage}%</h3>
                        <p className="text-slate-600">Sales Growth</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Avatar className="w-9 h-9">
                            <AvatarImage src="/backedBear.jpeg"/>
                            <AvatarFallback>BB</AvatarFallback>
                        </Avatar>
                        <span className="rounded-full border border-blue-500 bg-blue-300/20 px-3 py-0.5 text-blue-400 text-sm font-semibold">Top Performer</span>
                    </div>
                </div>

                <hr className="h-1 w-full mt-2"></hr>

                <div className="flex flex-col gap-2 mt-3 bg-violet-100/50 p-3 rounded-md">
                    <h3 className="font-semibold">Feedback</h3>
                    <p className="text-slate-600  text-sm flex gap-2 items-baseline">
                        <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
                        <span className="">Franchisees are requesting more detailed information</span>
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}