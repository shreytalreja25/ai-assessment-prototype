"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, CalendarIcon, PlusCircle, Settings2 } from "lucide-react";
import Link from "next/link";

export default function InstructorAssessmentsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Assessments</h1>
                    <p className="text-muted-foreground">
                        Manage your AI-assisted tasks and configure grading rubrics.
                    </p>
                </div>
                <Button asChild className="gap-2">
                    <Link href="/instructor/assessments/new">
                        <PlusCircle className="h-4 w-4" />
                        Create Assessment
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6">
                <Card className="border-primary/50 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <BookOpen className="h-32 w-32 text-primary" />
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl">COMP9900 Final Report</CardTitle>
                                <CardDescription className="mt-1 flex items-center gap-2">
                                    <Badge variant="secondary">Written (Essay)</Badge>
                                    <span className="text-xs text-muted-foreground">Created 2 weeks ago</span>
                                </CardDescription>
                            </div>
                            <Badge className="bg-amber-500 hover:bg-amber-600">Active (Grading in Progress)</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Submissions</p>
                                <p className="text-2xl font-bold">145<span className="text-sm font-normal text-muted-foreground">/150</span></p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">AI Processed</p>
                                <p className="text-2xl font-bold text-primary">140</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                                <p className="text-sm font-medium mt-2 flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> Oct 10</p>
                            </div>
                        </div>

                        <div className="flex gap-3 border-t pt-4">
                            <Button asChild>
                                <Link href="/instructor/grading">Review Queue</Link>
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <Settings2 className="h-4 w-4" /> Edit Task / Rubric
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl">React UI Presentation</CardTitle>
                                <CardDescription className="mt-1 flex items-center gap-2">
                                    <Badge variant="secondary">Multimodal (Video/Audio+PDF)</Badge>
                                </CardDescription>
                            </div>
                            <Badge variant="outline" className="text-primary border-primary">Upcoming</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Submissions</p>
                                <p className="text-2xl font-bold">12<span className="text-sm font-normal text-muted-foreground">/150</span></p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">AI Processed</p>
                                <p className="text-2xl font-bold text-primary">10</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Due Date</p>
                                <p className="text-sm font-medium mt-2 flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> Oct 24</p>
                            </div>
                        </div>

                        <div className="flex gap-3 border-t pt-4">
                            <Button asChild variant="secondary">
                                <Link href="/instructor/grading">View Early Submissions</Link>
                            </Button>
                            <Button variant="ghost" className="gap-2">
                                <Settings2 className="h-4 w-4" /> Edit Configuration
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="opacity-75 bg-muted/30">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-xl text-muted-foreground">Midterm Essay</CardTitle>
                                <CardDescription className="mt-1">
                                    <Badge variant="outline" className="opacity-50">Written</Badge>
                                </CardDescription>
                            </div>
                            <Badge variant="secondary">Completed</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between mt-2 pt-4 border-t border-border/50">
                            <p className="text-sm text-muted-foreground">All grades released on Sept 20, 2026.</p>
                            <Button variant="link" className="h-auto p-0 text-muted-foreground">View Analytics</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
