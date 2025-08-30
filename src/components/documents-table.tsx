import { EllipsisVertical, ListFilter, Search, Tally1 } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Switch } from "./ui/switch"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export const DocumentsTable = () => {

    const sampleDocuments = [
        {
            documentName : "Tech requirements.pdf",
            documentType : "Legal",
            aiAppInclusion : true,
            dashboardInclusion : true,
            stageAccess : "Full",
            size : "200 KB",
            color : "text-blue-500"
        },
        {
            documentName : "Dashboard screenshot.jpg",
            documentType : "Vendors & Assets",
            aiAppInclusion : true,
            dashboardInclusion : true,
            stageAccess : "Onboarding",
            size : "720 KB",
            color : "text-green-500"
        },
        {
            documentName : "Dashboard prototype recording.mp4",
            documentType : "Technology",
            aiAppInclusion : false,
            dashboardInclusion : true,
            stageAccess : "Franchisee",
            size : "16 MB",
            color : "text-orange-500"
        },
        {
            documentName : "Financial Overview",
            documentType : "Financial",
            aiAppInclusion : true,
            dashboardInclusion : true,
            stageAccess : "Prospect",
            size : "4.2 MB",
            color : "text-pink-500"
        },
        {
            documentName : "UX Design Guidelines.docx",
            documentType : "Legal",
            aiAppInclusion : true,
            dashboardInclusion : false,
            stageAccess : "Onboarding",
            size : "400 KB",
            color : "text-blue-500"
        },
        {
            documentName : "Dashboard interaction.aep",
            documentType : "Legal",
            aiAppInclusion : true,
            dashboardInclusion : true,
            stageAccess : "Onboarding",
            size : "12 MB",
            color : "text-blue-500"
        },
        {
            documentName : "Briefing call recording.mp3",
            documentType : "Financial",
            aiAppInclusion : false,
            dashboardInclusion : false,
            stageAccess : "Full",
            size : "18.6 MB",
            color : "text-pink-500"
        },
    ]

    return (
        <div className="border rounded-md shadow-sm p-5 mt-5 mx-7">

            {/* Header section */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold">My Uploads</h2>
                    <p className="text-gray-500">Documents that are uploaded by you</p>
                </div>
                <Button name="menuButtonForTable" id="menuButtonForTable" className="bg-white">
                    <EllipsisVertical className="h-4 w-4 text-black"/>
                </Button>
            </div>
            
            <div className="flex justify-between mb-4">
                <div className="flex items-center border rounded-md px-3 py-1 w-sm">
                    <Search className="h-5 w-5 text-black"/>
                    <Input type="text" placeholder="Search here..." className="ml-2 border-0 focus:ring-0"/>
                </div>
                <div className="flex items-center gap-2 border px-3 py-1 rounded-md">
                    <ListFilter className="h-5 w-5 text-black"/>
                    <span className="text-gray-800">Filters</span>
                </div>
            </div>

            {/* Table section */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[120px]">Document Name</TableHead>
                        <TableHead className="w-[100px]">Document Type</TableHead>
                        <TableHead className="w-[100px]">AI App Inclusion</TableHead>
                        <TableHead className="w-[100px]">Dashboard Inclusion</TableHead>
                        <TableHead className="w-[100px]">Stage Access</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sampleDocuments.map((doc, index) => (
                        <TableRow key={index}>
                            <TableCell className="flex items-center w-[340px]">
                                <label htmlFor="rowSelect">
                                    <input id="rowSelect" type="radio" className="w-4 h-4 border border-gray-300 rounded-sm mr-2 appearance-none"></input> 
                                </label>
                                <Image src="/pdfDocument.png" alt="pdf icon" width={50} height={50} className="mr-2"/>
                                <div className="flex flex-col gap-1">
                                    <span className="font-semibold">{doc.documentName}</span>
                                    <span className="text-slate-500">{doc.size}</span>
                                </div>
                            </TableCell>
                            <TableCell className={cn(`${doc.color}`,"w-[150px] font-semibold")}>
                                <span className={`rounded-full px-2 py-0.5 bg-current/10 border border-current/20`}>{doc.documentType}</span>
                            </TableCell>

                            <TableCell>
                                <Switch
                                    checked={doc.aiAppInclusion}
                                    className="data-[state=checked]:bg-blue-400"
                                 />
                            </TableCell>

                            <TableCell>
                                <Switch
                                    checked={doc.dashboardInclusion}
                                    className="data-[state=checked]:bg-blue-400"
                                 />
                            </TableCell>
                            <TableCell>
                                <Select defaultValue={doc.stageAccess}>
                                    <SelectTrigger className="w-[130px]">
                                        <SelectValue placeholder="Select Stage Access" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="Full">Full</SelectItem>
                                            <SelectItem value="Onboarding">Onboarding</SelectItem>
                                            <SelectItem value="Franchisee">Franchisee</SelectItem>
                                            <SelectItem value="Prospect">Prospect</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                    </Select>
                                </TableCell>
                            <TableCell className="flex justify-center">
                                <div className="flex gap-1">
                                    <Button variant='ghost' className="font-semibold bg-white text-slate-700">Delete</Button>
                                    <Button variant="ghost" className="text-blue-500">Edit</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                        ))}
                </TableBody>
            </Table>
            
        </div>
    )
}