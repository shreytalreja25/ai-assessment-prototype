"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen,
    LayoutDashboard,
    Settings,
    Users,
    LogOut,
    FileCheck2,
    ListTodo,
    FileUp,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar";

const adminNav = [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
    { title: "Users", url: "/admin/users", icon: Users },
    { title: "System Settings", url: "/admin/settings", icon: Settings },
];

const instructorNav = [
    { title: "Dashboard", url: "/instructor/dashboard", icon: LayoutDashboard },
    { title: "Assessments", url: "/instructor/assessments", icon: BookOpen },
    { title: "Grading Queue", url: "/instructor/grading", icon: FileCheck2 },
    { title: "Settings", url: "/instructor/settings", icon: Settings },
];

const studentNav = [
    { title: "Dashboard", url: "/student/dashboard", icon: LayoutDashboard },
    { title: "My Tasks", url: "/student/tasks", icon: ListTodo },
    { title: "Submissions", url: "/student/submissions", icon: FileUp },
    { title: "Settings", url: "/student/settings", icon: Settings },
];

export function AppSidebar() {
    const pathname = usePathname();

    let navItems = studentNav;
    let roleTitle = "Student Portal";

    if (pathname.startsWith("/admin")) {
        navItems = adminNav;
        roleTitle = "Admin Portal";
    } else if (pathname.startsWith("/instructor")) {
        navItems = instructorNav;
        roleTitle = "Instructor Portal";
    }

    return (
        <Sidebar>
            <SidebarHeader className="border-b p-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold tracking-tight">AI Assessment</span>
                        <span className="text-xs text-muted-foreground">{roleTitle}</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const isActive = pathname.startsWith(item.url);
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <LogOut className="text-destructive" />
                                <span className="text-destructive">Sign Out</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
