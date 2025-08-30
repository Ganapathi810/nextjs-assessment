"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState("Home")
  const { open, setOpen } = useSidebar()


  useEffect(() => {
    if(window.innerWidth > 768) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  },[])

  const navItems = [
    { name: "Home", href: "#"},
    { name: "Stages & Checklists", href: "#" },
    { name: "Upload Docs", href: "#" },
    { name: "Preferred Vendors", href: "#"},
    { name: "Tech Stack", href: "#" },
    { name: "Targets", href: "#" },
    { name: "Zee Sales Targets", href: "#" },
    { name: "MAI Settings", href: "#" },
    { name: "Pending Questions", href: "#" },
  ]

  
  return (
    <>
      <SidebarTrigger className={`${!open ? "opacity-100" : "opacity-0 "} fixed top-0 left-0 z-30  mt-3 ml-3 p-3 hover:bg-cyan-400/30"} `}></SidebarTrigger>
      <Sidebar className="bg-[#11455D]">

        <SidebarHeader className="flex justify-center bg-[#11455D] pt-4">
          <Image src="/logo.png" alt="Logo" width={120} height={30} />
            <SidebarTrigger className="text-white absolute right-2 top-2 hover:bg-white/10" onClick={() => setOpen(false)}/>
        </SidebarHeader>

        <SidebarContent className="bg-[#11455D]">
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.name} className="text-gray-400 p-1.5">
                    <SidebarMenuButton
                      asChild
                      isActive={activeItem === item.name} 
                      onClick={() => setActiveItem(item.name)}
                    >
                      <a href={item.href}>
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="bg-[#11455D]">
          <Button variant='ghost'>
            <span className="text-cyan-400">logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </>
  )
}