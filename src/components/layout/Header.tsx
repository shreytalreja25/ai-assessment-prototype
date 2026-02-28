import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, User, LogOut } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 flex h-2 w-2 rounded-full bg-destructive" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-80" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">Notifications</p>
                                <p className="text-xs leading-none text-muted-foreground mt-1">
                                    You have 2 unread messages
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/instructor/grading" className="flex flex-col items-start p-3 cursor-pointer">
                                <p className="text-sm font-medium">Auto-Grading Complete</p>
                                <p className="text-xs text-muted-foreground mt-1">AI has finished provisional grading for COMP9900 Final Report.</p>
                                <p className="text-xs text-primary mt-2">10 mins ago</p>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/instructor/grading" className="flex flex-col items-start p-3 cursor-pointer">
                                <p className="text-sm font-medium">New Submission</p>
                                <p className="text-xs text-muted-foreground mt-1">Alice Smith submitted 'React UI Presentation'.</p>
                                <p className="text-xs text-primary mt-2">1 hour ago</p>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="w-full text-center text-primary cursor-pointer font-medium p-2 block">
                            Mark all as read
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8 cursor-pointer">
                                <AvatarImage src="" alt="User avatar" />
                                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                                    UN
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">Test User</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    user@unsw.edu.au
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/profile" className="flex cursor-pointer items-center">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile Settings</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/" className="flex cursor-pointer items-center text-destructive focus:text-destructive">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
