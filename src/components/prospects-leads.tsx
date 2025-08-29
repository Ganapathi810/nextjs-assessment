import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export const ProspectsLeadsCard = () => {

    const sampleData = [
        {
            name : "Wade Warren",
            avatar : "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
            stage : "Initial Inquiry", 
        },
        {
            name: "Awa wright",
            avatar : "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
            stage : "Initial Inquiry",
        },
        {
            name: "Cody Fisher",
            avatar : "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
            stage : "Initial Inquiry",
        },
    ]
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Prospect Leads</CardTitle></CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    {sampleData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between gap-4 bg-violet-100/70 rounded-sm p-2 px-3">
                            <div className="flex items-center gap-2">
                                <Image src={item.avatar} alt={item.name} width="10" height="10" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-medium">{item.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">Stage: {item.stage}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}