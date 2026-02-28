"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, FileText, FileAudio, FileCode, CheckCircle2 } from "lucide-react";

export default function SubmissionPage() {
    const [uploadState, setUploadState] = useState<"idle" | "uploading" | "done">("idle");

    const handleUpload = () => {
        setUploadState("uploading");
        setTimeout(() => {
            setUploadState("done");
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Submit Task</h1>
                <p className="text-muted-foreground">React UI Presentation (COMP9900)</p>
            </div>

            <Card className="border-primary/20 shadow-lg">
                <CardHeader className="bg-muted/30 pb-4 border-b">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl">Instructions</CardTitle>
                            <CardDescription className="mt-2 text-primary-foreground/80 dark:text-muted-foreground">
                                Please upload a video recording (MP4) of your presentation OR an audio recording with the accompanying slide deck (PDF). Our AI agent will transcribe and evaluate the content against the rubric before instructor review.
                            </CardDescription>
                        </div>
                        <Badge variant="outline">Due: Oct 24</Badge>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 border rounded-md">
                            <FileAudio className="h-5 w-5 text-primary" /> Supported: MP3, MP4, WAV
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 border rounded-md">
                            <FileText className="h-5 w-5 text-primary" /> Supported: PDF, DOCX
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground p-3 border rounded-md">
                            <FileCode className="h-5 w-5 text-primary" /> Supported: ZIP, TAR.GZ
                        </div>
                    </div>

                    {uploadState === "done" ? (
                        <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-green-500/50 bg-green-500/5 rounded-xl">
                            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                            <h3 className="text-xl font-bold">Submission Received!</h3>
                            <p className="text-muted-foreground text-center mt-2">
                                Your files have been securely uploaded. The AI Assessment agent will now begin processing your submission.
                                You will be notified once the instructor releases your final grade.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-6"
                                onClick={() => setUploadState("idle")}
                            >
                                Submit Another File
                            </Button>
                        </div>
                    ) : (
                        <div
                            className={`flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl transition-all ${uploadState === "uploading"
                                    ? "border-primary bg-primary/5 opacity-80"
                                    : "border-muted-foreground/25 hover:border-primary hover:bg-muted/50 block cursor-pointer"
                                }`}
                        >
                            <UploadCloud className={`h-16 w-16 mb-4 ${uploadState === "uploading" ? "text-primary animate-pulse" : "text-muted-foreground"}`} />
                            <h3 className="text-xl font-bold mb-2">
                                {uploadState === "uploading" ? "Uploading & Processing..." : "Drag & Drop Files Here"}
                            </h3>
                            <p className="text-sm text-muted-foreground text-center mb-6">
                                Or click to browse your local files. Max size: 250MB per file.
                            </p>

                            <Button
                                disabled={uploadState === "uploading"}
                                onClick={handleUpload}
                                size="lg"
                                className="w-full max-w-xs"
                            >
                                {uploadState === "uploading" ? "Please wait..." : "Select Files"}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
