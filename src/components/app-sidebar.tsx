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
  import { ChevronLeft, ChevronRight, FolderCode, GitCommitHorizontal, Terminal } from "lucide-react";
  
  const items = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Blog", url: "/blog" },
    { title: "Snippets", url: "/snippets" },
    { title: "Contact", url: "/contact" },
    { title: "Settings", url: "/settings" },
  ];
  
  export function AppSidebar() {
    return (
      <Sidebar className="sidebar-glow font-[PPSupplyMono] font-light">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>T1Xploit</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="cyber-li">
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-transparent hover:text-inherit focus-visible:ring-0"
                    >
                      <a href={item.url} className="flex items-center gap-2 justify-center">
                      <ChevronLeft  />
                      <span>{item.title}</span>
                                             <ChevronRight  />
                      </a>
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
  