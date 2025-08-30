import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Settings } from "lucide-react"

export const TopBar = () => {
    
    return (
        <div className="sticky top-0 left-0 bg-white h-14 border-b border-gray-200 flex items-center px-8 ">
            <div className="flex gap-5 items-center ml-auto">
                <Settings className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
                <Avatar>
                    <AvatarImage alt="User profile image" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}