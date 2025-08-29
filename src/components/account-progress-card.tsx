import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import { CircularProgressBar } from "./circular-progress-bar"


export const AccountProgressCard = ({ progress } : { progress : number }) => {

    const sampleData = [
        {
            name : "Steps Completed",
            steps : ["Profile Setup", "Initial Training", "Legal Documents"],
        },
        {
            name : "Steps Remaining",
            steps: ["Financial Integration", "Final Review"],
        }
    ]
    
    return (
        <Card className="flex flex-col items-center">
            <CardHeader className="w-full">
                <CardTitle className="text-center">Account Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-start">

                <CircularProgressBar progress={progress} />

                {sampleData.map((item, index) => (
                    <div key={index} className="bg-violet-100/50 p-3 rounded-md flex flex-col gap-4 py-5 px-4 mt-5 w-[300px]">
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="flex flex-col gap-2">
                            {item.steps.map((step, index) => (
                                <div className="flex justify-between items-center" key={index}>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="h-3 w-3 bg-gray-300 rounded-full inline-block"></span>
                                        <span className="text-slate-600 font-semibold">{step}</span>
                                    </div>
                                    <div className="p-0.5 rounded-full bg-green-600 mt-3">
                                        <Check className="h-4 w-4 text-green-100"/>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>

                ))}
                


            </CardContent>
        </Card>
    )
}