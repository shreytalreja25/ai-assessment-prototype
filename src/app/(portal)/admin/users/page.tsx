"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus, ShieldAlert, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockUsers = [
    { id: "u-1", name: "Dr. Basem Suleiman", email: "basem.suleiman@unsw.edu.au", role: "Admin", status: "Active" },
    { id: "u-2", name: "Jinglin Sun", email: "jinglin.sun@unsw.edu.au", role: "Instructor", status: "Active" },
    { id: "u-3", name: "Alice Smith", email: "z1234567@ad.unsw.edu.au", role: "Student", status: "Active" },
    { id: "u-4", name: "Bob Jones", email: "z7654321@ad.unsw.edu.au", role: "Student", status: "Active" },
    { id: "u-5", name: "Charlie Davis", email: "z9876543@ad.unsw.edu.au", role: "Student", status: "Inactive" },
    { id: "u-6", name: "Sarah Li", email: "sarah.li@unsw.edu.au", role: "Tutor", status: "Active" },
];

export default function AdminUsersPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">System Users</h1>
                    <p className="text-muted-foreground">
                        Manage instructors, tutors, and student access directly.
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Import Users
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>User Directory</CardTitle>
                            <CardDescription>A list of all users currently registered in the platform.</CardDescription>
                        </div>
                        <div className="relative max-w-sm w-full">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search by name or zID..."
                                className="pl-8 bg-muted/20"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email (zID)</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{user.email}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={user.role === "Admin" ? "default" : user.role === "Instructor" || user.role === "Tutor" ? "secondary" : "outline"}
                                            >
                                                {user.role}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="flex items-center gap-2">
                                                <span className={`h-2 w-2 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
                                                <span className="text-sm text-muted-foreground">{user.status}</span>
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <span className="sr-only">Open menu</span>
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                                                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">Deactivate User</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4 text-sm text-muted-foreground">
                    Showing 1 to 6 of 14,245 users
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </CardFooter>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-2">
                <Card className="border-red-500/20 bg-red-500/5">
                    <CardHeader>
                        <CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2">
                            <ShieldAlert className="h-5 w-5" />
                            Security Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            2 users have flagged suspicious login attempts in the last 24 hours.
                        </p>
                        <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-900/20">
                            Review Security Logs
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
