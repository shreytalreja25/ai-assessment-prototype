"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Mic, 
    Download, 
    ArrowLeft, 
    Play, 
    Square, 
    MessageSquare, 
    Activity, 
    Users,
    ChevronRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveOralAssessmentPage() {
    const [isLive, setIsLive] = useState(false);
    const [transcript, setTranscript] = useState<{role: 'ai' | 'student', text: string, time: string}[]>([]);
    const [statusFeed, setStatusFeed] = useState<string[]>([]);
    const [waveform, setWaveform] = useState<number[]>(Array(20).fill(20));

    // Mock transcript data
    const mockDialogue: {role: 'ai' | 'student', text: string, time: string}[] = [
        { role: 'ai' as const, text: "Welcome to your viva, Student 1024. Let's start with your system architecture. Why did you choose a multi-agent approach?", time: "10:01 AM" },
        { role: 'student' as const, text: "Hi. I chose multi-agent because I wanted to isolate the grading logic from the repository cloning logic to ensure better scalability.", time: "10:02 AM" },
        { role: 'ai' as const, text: "Interesting. How do you handle failure states when one agent is unresponsive?", time: "10:03 AM" },
        { role: 'student' as const, text: "I implemented a heartbeat monitor and a retry queue for inter-agent communication.", time: "10:04 AM" },
    ];

    // Simulate live activity
    useEffect(() => {
        if (isLive) {
            const interval = setInterval(() => {
                setWaveform(prev => prev.map(() => Math.floor(Math.random() * 60) + 10));
            }, 100);
            return () => clearInterval(interval);
        } else {
            setWaveform(Array(20).fill(20));
        }
    }, [isLive]);

    const startViva = () => {
        setIsLive(true);
        setStatusFeed(prev => ["Connecting to Viva Agent...", "Student session started", ...prev]);
        setTimeout(() => {
            setTranscript(mockDialogue.slice(0, 1));
            setStatusFeed(prev => ["AI processing voice input...", ...prev]);
        }, 1000);
    };

    const stopViva = () => {
        setIsLive(false);
        setStatusFeed(prev => ["Session terminated", "Generating final transcript...", ...prev]);
    };

    return (
        <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button asChild variant="outline" size="icon">
                        <Link href="/instructor/assessments">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Live Viva Session</h1>
                        <p className="text-muted-foreground italic truncate max-w-md">COMP9900: AI Agent Implementation - Student ID: 1024</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {isLive && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-500 rounded-full animate-pulse border border-red-500/20">
                            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                            <span className="text-xs font-bold uppercase tracking-wider">Live</span>
                        </div>
                    )}
                    <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" /> Export CSV
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Visualizer and Controls */}
                <Card className="lg:col-span-2 overflow-hidden border-2 border-primary/10">
                    <CardHeader className="bg-muted/30 border-b">
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5 text-primary" /> Audio Intelligence Feed
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="h-[300px] bg-black relative flex items-center justify-center overflow-hidden">
                            {/* Waveform Visualization */}
                            <div className="flex items-center gap-1.5 h-32">
                                {waveform.map((height, i) => (
                                    <motion.div 
                                        key={i}
                                        animate={{ height }}
                                        className="w-3 bg-primary rounded-full"
                                        style={{ opacity: 0.6 + (i / waveform.length) * 0.4 }}
                                    />
                                ))}
                            </div>
                            
                            {/* Overlay UI */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <Badge variant="secondary" className="bg-black/50 text-white border-white/20">Latency: 42ms</Badge>
                                <Badge variant="secondary" className="bg-black/50 text-white border-white/20">Model: GPT-4o-Audio</Badge>
                            </div>
                            
                            {!isLive && (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                                    <Button size="lg" className="rounded-full h-16 w-16" onClick={startViva}>
                                        <Play className="h-8 w-8 fill-current" />
                                    </Button>
                                    <p className="absolute bottom-10 text-white/70 font-medium">Click to initiate Live Viva Agent</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center bg-white dark:bg-black p-4">
                        <div className="flex items-center gap-4">
                            <Button variant={isLive ? "destructive" : "default"} className="gap-2" onClick={isLive ? stopViva : startViva}>
                                {isLive ? <><Square className="h-4 w-4" /> Stop Session</> : <><Play className="h-4 w-4" /> Resume Session</>}
                            </Button>
                            <Button variant="outline" size="icon"><Mic className="h-4 w-4" /></Button>
                        </div>
                        <div className="text-sm font-mono text-muted-foreground">00:04:12</div>
                    </CardFooter>
                </Card>

                {/* Status/Status Feed */}
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle className="text-sm flex items-center gap-2">
                             <Activity className="h-4 w-4 text-primary" /> Real-time System Feeds
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <AnimatePresence>
                            {statusFeed.map((msg, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-xs p-2 border-l-2 border-primary bg-muted/50 rounded-r-md flex items-center justify-between"
                                >
                                    <span>{msg}</span>
                                    <span className="text-[10px] opacity-50">Just now</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {statusFeed.length === 0 && (
                            <div className="text-center py-10 text-muted-foreground text-sm">
                                No activity detected.
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Transcript Section */}
                <Card className="lg:col-span-3">
                    <CardHeader className="flex flex-row items-center justify-between bg-muted/20 border-b">
                        <div>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquare className="h-5 w-5 text-primary" /> Conversation Transcript
                            </CardTitle>
                            <CardDescription>Live transcription with semantic labels</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input className="pl-9 h-9 w-64 rounded-md border text-sm" placeholder="Search dialogue..." />
                            </div>
                            <Button variant="outline" size="sm" className="gap-2" onClick={() => setTranscript(mockDialogue)}>
                                Load Full Chat
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 max-h-[500px] overflow-y-auto space-y-6 bg-muted/10">
                        {transcript.length > 0 ? (
                            transcript.map((msg, i) => (
                                <div key={i} className={`flex gap-4 ${msg.role === 'ai' ? 'flex-row' : 'flex-row-reverse text-right'}`}>
                                    <div className={`h-10 w-10 shrink-0 rounded-full flex items-center justify-center border-2 ${msg.role === 'ai' ? 'bg-primary/20 border-primary text-primary' : 'bg-secondary border-secondary-foreground/20 text-foreground'}`}>
                                        {msg.role === 'ai' ? <Activity className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                                    </div>
                                    <div className="space-y-1 max-w-[80%]">
                                        <div className={`flex items-center gap-2 ${msg.role === 'student' ? 'justify-end' : ''}`}>
                                            <span className="font-bold text-sm uppercase tracking-tight">{msg.role === 'ai' ? 'Assessment Agent' : 'Student 1024'}</span>
                                            <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                                        </div>
                                        <div className={`p-4 rounded-xl shadow-sm text-sm ${msg.role === 'ai' ? 'bg-white dark:bg-zinc-900 rounded-tl-none' : 'bg-primary text-primary-foreground rounded-tr-none'}`}>
                                            {msg.text}
                                        </div>
                                        {msg.role === 'ai' && (
                                            <div className="flex gap-2 pt-1 opacity-70">
                                                <Badge variant="outline" className="text-[10px] h-5">Intent: Architecture Query</Badge>
                                                <Badge variant="outline" className="text-[10px] h-5">Tone: Neutral</Badge>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 opacity-30">
                                <MessageSquare className="h-16 w-16 mb-2" />
                                <p>Waiting for dialogue to start...</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
