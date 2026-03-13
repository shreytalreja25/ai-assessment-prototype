"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, UploadCloud, Plus, CheckCircle2, Mic, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateAssessmentPage() {
    const router = useRouter();
    const [rubricState, setRubricState] = useState<"idle" | "uploading" | "done">("idle");
    const [isDeploying, setIsDeploying] = useState(false);
    const [assessmentType, setAssessmentType] = useState("written");

    const handleRubricUpload = () => {
        setRubricState("uploading");
        setTimeout(() => {
            setRubricState("done");
        }, 1500);
    };

    const handleDeploy = () => {
        setIsDeploying(true);
        setTimeout(() => {
            router.push("/instructor/assessments");
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-10">
            <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="icon">
                    <Link href="/instructor/assessments">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Create New Assessment</h1>
                    <p className="text-muted-foreground">Define instructions and AI grading rubrics</p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {/* Step 1: Basic Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>1. Assessment Details</CardTitle>
                        <CardDescription>Provide basic information about the task.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Task Title</Label>
                            <Input id="title" placeholder="e.g. COMP9900 Final Report" defaultValue="AI Agent Implementation Project" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="type">Assessment Type</Label>
                                <select 
                                    id="type" 
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    onChange={(e) => setAssessmentType(e.target.value)}
                                    value={assessmentType}
                                >
                                    <option value="written">Written (Essay / Report)</option>
                                    <option value="code">Code (Repository)</option>
                                    <option value="oral">Oral Assessment (Voice Based)</option>
                                    <option value="multimodal">Multimodal (Video / Audio presentation)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dueDate">Due Date</Label>
                                <Input id="dueDate" type="date" />
                            </div>
                        </div>

                        {assessmentType === "oral" && (
                            <div className="space-y-4 pt-4 border-t">
                                <h3 className="font-semibold text-sm flex items-center gap-2">
                                    <Mic className="h-4 w-4 text-primary" /> Oral Assessment Configuration
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Interaction Mode</Label>
                                        <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                                            <option>Turn-based (AI Counter Questioning)</option>
                                            <option>Live Mode (Real-time Processing)</option>
                                            <option>One-time Response (Recorded)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>AI Personality</Label>
                                        <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                                            <option>Formal & Academic</option>
                                            <option>Conversational & Encouraging</option>
                                            <option>Socratic & Challenging</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Initial Questions / Viva Prompts</Label>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <Input placeholder="Enter a starting question..." defaultValue="Explain the core challenge you faced during implementation." />
                                            <Button size="icon" variant="outline"><Plus className="h-4 w-4" /></Button>
                                        </div>
                                        <div className="flex gap-2">
                                            <Input placeholder="Enter another question..." defaultValue="How does your multi-agent system ensure data consistency?" />
                                            <Button size="icon" variant="outline"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="space-y-2 pt-2">
                            <Label htmlFor="instructions">Task Instructions for Students</Label>
                            <textarea
                                id="instructions"
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                                placeholder="Write the task brief here..."
                                defaultValue="In this project, you will build a multi-agent system..."
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Step 2: Configure AI Rubric */}
                <Card className="border-primary/20 shadow-md">
                    <CardHeader>
                        <CardTitle>2. {assessmentType === "oral" ? "Viva Assessment Rubric" : "AI Grading Rubric Setup"}</CardTitle>
                        <CardDescription>
                            {assessmentType === "oral" 
                                ? "Define the criteria against which the AI will mark the student's verbal responses."
                                : "Upload your grading rubric (PDF/CSV) or define the criteria manually."}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {rubricState === "done" ? (
                            <div className="rounded-lg border border-green-500/50 bg-green-500/5 p-4 flex gap-4 items-center">
                                <CheckCircle2 className="h-8 w-8 text-green-500" />
                                <div className="flex-1">
                                    <h4 className="font-semibold text-green-700 dark:text-green-500">Rubric Ready</h4>
                                    <p className="text-sm text-green-600/80 dark:text-green-400">
                                        Applied 4 marking criteria for {assessmentType === "oral" ? "Oral Assessment" : "Submission"}.
                                    </p>
                                </div>
                                <Button variant="outline" size="sm" onClick={() => setRubricState("idle")}>Remove</Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg transition-all ${rubricState === "uploading"
                                            ? "border-primary bg-primary/5 opacity-80"
                                            : "border-muted-foreground/25 hover:border-primary hover:bg-muted/50 cursor-pointer"
                                        }`}
                                    onClick={rubricState === "idle" ? handleRubricUpload : undefined}
                                >
                                    <UploadCloud className={`h-10 w-10 mb-2 ${rubricState === "uploading" ? "text-primary animate-pulse" : "text-muted-foreground"}`} />
                                    <p className="text-sm font-medium mb-1">
                                        {rubricState === "uploading" ? "Extracting Criteria..." : "Upload Rubric Document"}
                                    </p>
                                    <p className="text-xs text-muted-foreground text-center">
                                        PDF, DOCX, or CSV files
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg hover:border-primary hover:bg-muted/50 transition-all cursor-pointer">
                                    <Plus className="h-10 w-10 mb-2 text-muted-foreground" />
                                    <p className="text-sm font-medium mb-1">Create Visually</p>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Build the rubric step-by-step
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Rubric Preview (shows when done) */}
                        {rubricState === "done" && (
                            <div className="space-y-3 mt-4">
                                <h4 className="text-sm font-semibold">Marking Criteria:</h4>
                                <div className="flex justify-between items-center bg-muted/30 p-3 rounded-md border">
                                    <div>
                                        <p className="font-medium text-sm">{assessmentType === "oral" ? "Clarity of Explanation" : "System Architecture"}</p>
                                        <p className="text-xs text-muted-foreground">{assessmentType === "oral" ? "Evaluates how clearly the student articulates complex concepts." : "Evaluates agent orchestration and separation of concerns."}</p>
                                    </div>
                                    <Badge>30 Points</Badge>
                                </div>
                                <div className="flex justify-between items-center bg-muted/30 p-3 rounded-md border">
                                    <div>
                                        <p className="font-medium text-sm">{assessmentType === "oral" ? "Technical Depth" : "Technical Implementation"}</p>
                                        <p className="text-xs text-muted-foreground">{assessmentType === "oral" ? "Accuracy and depth of technical answers provided during viva." : "Code quality, frontend UI, backend API."}</p>
                                    </div>
                                    <Badge>40 Points</Badge>
                                </div>
                                <div className="flex justify-between items-center bg-muted/30 p-3 rounded-md border">
                                    <div>
                                        <p className="font-medium text-sm">{assessmentType === "oral" ? "Critical Thinking" : "Report Quality"}</p>
                                        <p className="text-xs text-muted-foreground">{assessmentType === "oral" ? "Ability to reason through follow-up counter questions." : "Clarity, grammar, academic structure."}</p>
                                    </div>
                                    <Badge>30 Points</Badge>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Step 3: AI Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>3. System Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Enable "Live Viva Voce" Agent</Label>
                                <div className="text-sm text-muted-foreground">Allows the AI to ask students follow-up questions upon submission.</div>
                            </div>
                            <div className={`h-6 w-11 rounded-full relative cursor-pointer transition-colors ${assessmentType === "oral" ? "bg-primary" : "bg-muted opacity-50 cursor-not-allowed"}`}>
                                <div className={`absolute top-1 h-4 w-4 bg-background rounded-full shadow-sm transition-all ${assessmentType === "oral" ? "right-1" : "left-1"}`}></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label>Require Human Approval Before Release</Label>
                                <div className="text-sm text-primary font-medium">Standard Human-in-the-Loop Workflow</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-muted/10 flex justify-end gap-3 pt-6 border-t mt-4">
                        <Button variant="outline">Save as Draft</Button>
                        <Button
                            className="bg-primary px-8"
                            disabled={rubricState !== "done" || isDeploying}
                            onClick={handleDeploy}
                        >
                            {isDeploying ? (assessmentType === "oral" ? "Initializing Viva Agent..." : "Deploying Assessment...") : "Publish Assessment"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
