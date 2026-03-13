"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Mic, 
    Square, 
    Play, 
    ArrowLeft, 
    CheckCircle2, 
    Info,
    Volume2,
    MessageCircle
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentOralAssessmentPage() {
    const [step, setStep] = useState<"intro" | "recording" | "review" | "done">("intro");
    const [timer, setTimer] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [waveform, setWaveform] = useState<number[]>(Array(15).fill(10));

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRecording) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
                setWaveform(prev => prev.map(() => Math.floor(Math.random() * 40) + 5));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startRecording = () => {
        setIsRecording(true);
        setStep("recording");
    };

    const stopRecording = () => {
        setIsRecording(false);
        setStep("review");
    };

    const submitResponse = () => {
        setStep("done");
    };

    return (
        <div className="flex flex-col gap-6 max-w-2xl mx-auto py-10">
            <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="icon">
                    <Link href="/student/tasks">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-2xl font-bold tracking-tight">Oral Assessment Attempt</h1>
            </div>

            <AnimatePresence mode="wait">
                {step === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <Card className="border-2 border-primary/20">
                            <CardHeader>
                                <CardTitle>AI Agent Implementation Viva</CardTitle>
                                <CardDescription>This is a voice-based assessment. You will be asked questions by the AI agent.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted/50 p-4 rounded-lg flex gap-3 text-sm">
                                    <Info className="h-5 w-5 text-primary shrink-0" />
                                    <div className="space-y-1">
                                        <p className="font-semibold">Preparation Check:</p>
                                        <ul className="list-disc list-inside space-y-1 opacity-80">
                                            <li>Ensure your microphone is connected and working.</li>
                                            <li>Find a quiet environment without background noise.</li>
                                            <li>Speak clearly and take your time.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-4 border rounded-lg bg-primary/5 space-y-2">
                                    <p className="text-sm font-bold uppercase tracking-wider opacity-50">Current Question:</p>
                                    <p className="text-lg font-medium leading-snug">
                                        "Explain why you chose the specific communication protocol for your multi-agent system."
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full gap-2 py-6 text-lg" onClick={startRecording}>
                                    <Mic className="h-5 w-5" /> Start Recording Response
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}

                {step === "recording" && (
                    <motion.div
                        key="recording"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col items-center justify-center p-12 bg-black rounded-3xl shadow-2xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                           
                           {/* Waveform */}
                           <div className="flex items-center gap-1 h-20 mb-8 z-10">
                                {waveform.map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        animate={{ height: h }}
                                        className="w-2 bg-primary rounded-full"
                                    />
                                ))}
                           </div>

                           <div className="text-6xl font-mono text-white font-bold mb-4 z-10">
                                {formatTime(timer)}
                           </div>
                           
                           <Badge className="bg-red-600 text-white animate-pulse border-none z-10">LIVE RECORDING</Badge>
                           
                           <div className="mt-12 z-10">
                               <Button variant="destructive" size="lg" className="rounded-full h-16 w-16" onClick={stopRecording}>
                                    <Square className="h-8 w-8 fill-current" />
                               </Button>
                           </div>
                        </div>

                        <Card>
                            <CardContent className="p-6">
                                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Answering Question:</p>
                                <p className="text-lg font-medium">"Explain why you chose the specific communication protocol for your multi-agent system."</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {step === "review" && (
                    <motion.div
                        key="review"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Volume2 className="h-5 w-5 text-primary" /> Review your response
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-4 bg-muted rounded-lg flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Play className="h-4 w-4 fill-current" />
                                        </Button>
                                        <div className="h-1 flex-1 bg-primary/20 rounded-full w-40 relative">
                                            <div className="absolute top-0 left-0 h-full bg-primary w-1/3 rounded-full"></div>
                                        </div>
                                    </div>
                                    <span className="text-xs font-mono">{formatTime(timer)}</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-bold uppercase text-muted-foreground">AI PREVIEW TRANSCRIPT:</p>
                                    <p className="text-sm italic opacity-70">
                                        "So, I chose the RPC protocol because it provides low-latency communication... and for our specific agent structure, it felt the most natural..."
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-3">
                                <Button variant="outline" className="flex-1" onClick={() => setStep("intro")}>Redo</Button>
                                <Button className="flex-1" onClick={submitResponse}>Submit Response</Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}

                {step === "done" && (
                    <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-6"
                    >
                        <div className="flex justify-center">
                            <div className="h-20 w-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center border-2 border-green-500/20">
                                <CheckCircle2 className="h-10 w-10" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Response Submitted!</h2>
                            <p className="text-muted-foreground">The AI agent is now processing your voice input and mapping it against the rubric.</p>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 flex flex-col items-center gap-4">
                            <MessageCircle className="h-8 w-8 text-primary" />
                            <p className="text-sm font-medium">Keep an eye on your dashboard. You'll receive a notification once the AI has generated the preliminary feedback.</p>
                        </div>
                        <Button asChild className="w-full">
                            <Link href="/student/dashboard">Back to Dashboard Link</Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
