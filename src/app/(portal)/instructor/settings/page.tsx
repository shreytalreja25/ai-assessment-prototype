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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Save, AlertTriangle, UserCheck } from "lucide-react";

export default function InstructorSettingsPage() {
    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Instructor Preferences</h1>
                    <p className="text-muted-foreground">
                        Configure your AI Grading workflow and automation preferences.
                    </p>
                </div>
                <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Save Configurations
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-800 dark:text-amber-200 p-4 flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 mt-0.5 text-amber-600 dark:text-amber-400" />
                    <div>
                        <h4 className="font-semibold text-sm">Automated Release Warning</h4>
                        <p className="text-sm mt-1">
                            You currently have "AI Auto-Release for scores &gt; 90" turned ON.
                            UNSW guidelines strongly recommend a Human-in-the-Loop review for ALL final assignments.
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Settings className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Grading & Workflow Automation</CardTitle>
                        </div>
                        <CardDescription>Setup rules to streamline your marking queue.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Auto-Approve High Scores</Label>
                                <div className="text-sm text-muted-foreground">Automatically release grades if the AI assigns a score above the threshold.</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Input type="number" defaultValue="90" className="w-20 text-center" />
                                <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Plagiarism Flag Highlight</Label>
                                <div className="text-sm text-muted-foreground">Push potential academic misconducts to the top of your grading queue.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label>Strict Rubric Enforcement (AI Focus)</Label>
                                <div className="text-sm text-muted-foreground">Forces the Multi-Agent LLMs to be highly critical and penalize minor deviations.</div>
                            </div>
                            <div className="h-6 w-11 bg-muted rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 h-4 w-4 bg-background rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <UserCheck className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Tutor & TA Access Controls</CardTitle>
                        </div>
                        <CardDescription>Manage permissions for your teaching assistants.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Tutors can alter AI Provisional Scores</Label>
                                <div className="text-sm text-muted-foreground">Give TAs the ability to override AI marks before you give final approval.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label>Tutors can create Assessments/Rubrics</Label>
                                <div className="text-sm text-muted-foreground">Allow teaching assistants to launch new tasks.</div>
                            </div>
                            <div className="h-6 w-11 bg-muted rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 h-4 w-4 bg-background rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
