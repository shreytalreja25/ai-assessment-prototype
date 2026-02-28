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
import { CheckCircle2, Clock, CalendarIcon } from "lucide-react";
import Link from "next/link";

export default function StudentTasksPage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
                <p className="text-muted-foreground">
                    View all your upcoming assessments and submission deadlines.
                </p>
            </div>

            <div className="grid gap-6">
                <Card className="border-primary/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Clock className="h-32 w-32 text-primary" />
                    </div>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">React UI Presentation</CardTitle>
                            <Badge variant="destructive" className="animate-pulse">Due in 2 days</Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2 mt-2">
                            <CalendarIcon className="h-4 w-4" /> Oct 24, 2026 (11:59 PM)
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm max-w-2xl text-muted-foreground">
                            Please upload a video recording (MP4) of your presentation OR an audio recording with the accompanying slide deck (PDF). Our AI agent will transcribe and evaluate the content.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href="/student/submissions">Go to Submission</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">Backend API Repository</CardTitle>
                            <Badge variant="outline">Upcoming</Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2 mt-2">
                            <CalendarIcon className="h-4 w-4" /> Nov 2, 2026 (11:59 PM)
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm max-w-2xl text-muted-foreground">
                            Submit your final backend code repository (ZIP). Ensure you include the docker-compose.yml file.
                            The Code Agent will automatically test your docker container.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild variant="outline">
                                <Link href="/student/submissions">View Details</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="opacity-75 bg-muted/30">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <CardTitle className="text-xl flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                Midterm Essay
                            </CardTitle>
                            <Badge className="bg-green-600">Submitted & Graded</Badge>
                        </div>
                        <CardDescription className="flex items-center gap-2 mt-2">
                            <CalendarIcon className="h-4 w-4" /> Sept 15, 2026
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-sm max-w-2xl text-muted-foreground">
                            Write a 1500-word essay on the impact of microservices.
                        </p>
                        <div className="flex gap-4">
                            <Button asChild variant="secondary">
                                <Link href="/student/dashboard">View Feedback</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
