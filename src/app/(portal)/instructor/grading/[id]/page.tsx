"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, AlertCircle, FileText } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function GradingReviewPage() {
    const params = useParams();

    // Real implementation would fetch this data
    const submissionId = params.id;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="icon">
                    <Link href="/instructor/grading">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Review Submission: {submissionId}</h1>
                    <p className="text-muted-foreground">Student: Alice Smith • Assessment: COMP9900 Final Report</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Student Submission */}
                <Card className="flex flex-col h-[600px]">
                    <CardHeader className="border-b bg-muted/20 pb-4">
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Student Submission
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-auto p-6 bg-white dark:bg-black font-serif leading-relaxed text-sm">
                        <h2 className="text-xl font-bold mb-4">The Impact of AI in Modern Software Architecture</h2>
                        <p className="mb-4">
                            Artificial Intelligence (AI) has significantly altered how we design and implement software architectures.
                            Historically, monolithic structures dominated the landscape, but as systems grew in complexity,
                            microservices became the standard. Now, we are entering an era of "intelligent microservices" where agents
                            orchestrate distinct tasks dynamically...
                        </p>
                        <p className="mb-4 text-muted-foreground italic">
                            (Document continues for 1,200 words...)
                        </p>
                    </CardContent>
                </Card>

                {/* Right Column: AI Analysis & HITL Controls */}
                <div className="flex flex-col gap-6 h-[600px] overflow-auto">

                    <Card className="border-primary/50 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertCircle className="h-24 w-24 text-primary" />
                        </div>
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg">AI Assessment Report</CardTitle>
                                <Badge variant="outline" className="border-primary text-primary">Written Assessment Agent</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-6 flex items-end gap-2">
                                <span className="text-5xl font-black text-primary tracking-tighter">85</span>
                                <span className="text-xl text-muted-foreground mb-1">/ 100</span>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Structure & Formatting</span>
                                        <span>18/20</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                        <div className="h-full bg-green-500 w-[90%]" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Technical Accuracy</span>
                                        <span>35/40</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                        <div className="h-full bg-green-500 w-[87.5%]" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Critical Analysis</span>
                                        <span>32/40</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                                        <div className="h-full bg-yellow-500 w-[80%]" />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        AI Note: The document lacks deeper exploration of edge cases and security implications of LLM integration.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="flex-1 flex flex-col">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Human-in-the-Loop Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Override Score (Optional)</label>
                                    <input
                                        type="number"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="e.g. 88"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Instructor Feedback to Student</label>
                                    <textarea
                                        className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="Add your personal feedback here. The AI marks will be appended."
                                        defaultValue="Great introduction, Alice. However, as the AI noted, make sure to consider security contexts in future reports."
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-6 mt-auto">
                                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Approve & Release Grade
                                </Button>
                                <Button variant="outline" className="flex-1 text-destructive hover:bg-destructive/10">
                                    Request Resubmission
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
