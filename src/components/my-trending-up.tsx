import { TrendingUp } from "lucide-react"

export const MyTrendingUp = ({ percentage } : { percentage : number }) => { 
    return (
        <div className="flex gap-x-1 items-center rounded-full px-2 py-0.5 border-[2px] border-green-500 mt-1">
            <TrendingUp className="h-4 w-4 text-green-500"/>
            <span className="text-green-500 text-sm">{percentage}%</span>
        </div>
    )
}