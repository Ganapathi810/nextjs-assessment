import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { MyTrendingUp } from "./my-trending-up"

export const TotalFranchiseesOnBoardCard = () => {   
    
    const sampleData = {
        avatars : [   
            'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
            'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
            'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
            'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        ],
        stages : [
            {
                name : "Stage 1 (Intial Inquiry)",
                count : 2,
                percentege : 30,
                color : "bg-cyan-600"
            },
            {
                name : "Stage 2 (Document Submission)",
                count : 7,
                percentege : 20,
                color : "bg-cyan-400"
            },
            {
                name : "Stage 3 (Trading)",
                count : 5,
                percentege : 50,
                color : "bg-cyan-300"
            },

        ]
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Total Franchisees On Board</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex gap-5 items-center">
                        <h3 className="text-3xl font-bold">14</h3>
                        <MyTrendingUp percentage={7.4}/>
                    </div>
                    <div className="flex -space-x-2">
                        {sampleData.avatars.map((avatar, index) => (
                            <Avatar key={index}>
                                <AvatarImage src={avatar} key={index} alt={`U${index}`} className="w-8 h-8 rounded-full border-2 border-white" />
                                <AvatarFallback>U{index + 1}</AvatarFallback>
                            </Avatar>
                        ))}
                        <div className="relative z-10 rounded-full text-sm bg-gray-200 border-[2px] border-white p-1 px-1.5">7+</div>
                    </div>
                </div>   

                <div className="flex gap-1 rounded-xs h-7 mt-5">
                    {sampleData.stages.map((stage, index) => (
                        <div 
                            key={index} 
                            className={`h-3  ${stage.color} rounded-sm`} 
                            style={{width: `${stage.percentege}%`}}
                        ></div>
                    ))}
                </div>
                <div>
                    {sampleData.stages.map((stage, index) => (
                        <div key={index} className="flex justify-between text-sm mt-2">
                            <div className='flex gap-2 items-center'>
                                <span className={`${stage.color} rounded-sm h-3 w-3`}></span>
                                <span className="text-slate-600 font-semibold">{stage.name}</span>
                            </div>
                            <span className="font-semibold text-xl text-black">0{stage.count}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}