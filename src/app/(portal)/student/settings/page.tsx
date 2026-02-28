"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Settings, Save, ShieldCheck, Github, BellRing } from "lucide-react";

export default function StudentSettingsPage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Student Preferences</h1>
                    <p className="text-muted-foreground">
                        Manage your academic tool integrations and notifications.
                    </p>
                </div>
                <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Preferences
                </Button>
            </div>

            <div className="grid gap-6">
                {/* Alerts and Feedback using standard styling, no 'alert' component needed */}
                <div className="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-4 dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-300 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400" />
                    <div>
                        <h4 className="font-semibold text-sm">Security Notice</h4>
                        <p className="text-sm mt-1">Your multi-factor authentication is enabled. Make sure your recovery codes are securely stored.</p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Github className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Connected Accounts</CardTitle>
                        </div>
                        <CardDescription>Link external services for frictionless code submissions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>GitHub Integration</Label>
                                <div className="text-sm text-muted-foreground">Automatically import code repositories for "Code" assessment types.</div>
                            </div>
                            <Button variant="outline" size="sm">Connect GitHub</Button>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label>UNSW OneDrive</Label>
                                <div className="text-sm text-muted-foreground">Fetch multi-modal and large video files directly from cloud storage.</div>
                            </div>
                            <Button variant="secondary" size="sm">Synced (user@unsw.edu.au)</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <BellRing className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Assessment Alerts</CardTitle>
                        </div>
                        <CardDescription>Ensure you never miss a deadline.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Deadline Reminders</Label>
                                <div className="text-sm text-muted-foreground">Send notifications 48 hours before an assessment is due.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Grade Published Alerts</Label>
                                <div className="text-sm text-muted-foreground">Notify me as soon as the instructor finishes their HITL review.</div>
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
