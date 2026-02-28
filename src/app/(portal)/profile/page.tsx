"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Save, User, Mail, Building, BellRing } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your personal information and preferences.
                    </p>
                </div>
                <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                </Button>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your photo and personal details here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <Avatar className="h-24 w-24 border-4 border-muted">
                                <AvatarImage src="" alt="User avatar" />
                                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
                                    UN
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                                <Button variant="outline" size="sm">Change Photo</Button>
                                <p className="text-xs text-muted-foreground">
                                    JPG, GIF or PNG. 1MB max.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <div className="relative">
                                    <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input id="firstName" className="pl-9" defaultValue="Test" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <div className="relative">
                                    <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input id="lastName" className="pl-9" defaultValue="User" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input id="email" type="email" className="pl-9" defaultValue="user@unsw.edu.au" readOnly />
                                </div>
                                <p className="text-[0.8rem] text-muted-foreground">
                                    Your university email cannot be changed.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="faculty">Faculty / School</Label>
                                <div className="relative">
                                    <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input id="faculty" className="pl-9" defaultValue="Computer Science and Engineering" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BellRing className="h-5 w-5" />
                            Notifications
                        </CardTitle>
                        <CardDescription>Configure how you receive platform updates.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Email Notifications</Label>
                                <div className="text-sm text-muted-foreground">Receive daily summaries of AI grading progress.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label>In-App Alerts</Label>
                                <div className="text-sm text-muted-foreground">Get notified when a submission requires manual review.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
