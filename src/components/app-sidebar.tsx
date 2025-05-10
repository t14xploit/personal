import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar";
  import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import '@/styles/augmented-ui.css';
import { BsMenuButtonWideFill } from "react-icons/bs";
 import styles from './TerminalContent.module.css'; 
 
  const items = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Blog", url: "/blog" },
    { title: "Contact", url: "/contact" },
    
  ];
  
  export function AppSidebar() {
    return (
      <Sidebar className=" sidebar-glow  font-light">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>T14Xploit <BsMenuButtonWideFill className="ml-3" />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu >
                {items.map((item) => (
                    <SidebarMenuItem
  key={item.title}
  className={styles.cyber}
 
  data-augmented-ui="tr-clip bl-clip border"
>
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-trasparent hover:text-inherit focus-visible:ring-0"
                    >
                      <Link href={item.url} className="flex items-center gap-2 justify-center">
                      <ChevronLeft  />
                      <span>{item.title}</span>
                                             <ChevronRight  />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }
  