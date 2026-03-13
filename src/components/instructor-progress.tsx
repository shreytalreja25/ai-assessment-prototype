"use client";

import { CheckCircle2, Circle, Clock, MoreHorizontal, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stages = [
    { id: 'created', label: 'Created', icon: Circle, status: 'complete' },
    { id: 'distributed', label: 'Distributed', icon: Circle, status: 'complete' },
    { id: 'attempted', label: 'Attempted', icon: Circle, status: 'current' },
    { id: 'grading', label: 'AI Grading', icon: Clock, status: 'upcoming' },
    { id: 'review', label: 'Human Review', icon: MoreHorizontal, status: 'upcoming' },
    { id: 'released', label: 'Released', icon: CheckCircle2, status: 'upcoming' },
];

export function InstructorProgressFlow() {
    return (
        <Card className="border-primary/20">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-center">
                    Assignment Lifecycle: AI Agent Implementation
                    <Badge variant="outline" className="font-mono">BATCH #42</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between w-full py-6 overflow-x-auto gap-2 min-w-[600px]">
                    {stages.map((stage, i) => (
                        <div key={stage.id} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center gap-2 group relative">
                                <div className={`
                                    h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all
                                    ${stage.status === 'complete' ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]' : 
                                      stage.status === 'current' ? 'bg-primary border-primary text-primary-foreground animate-pulse' : 
                                      'bg-muted border-muted-foreground/30 text-muted-foreground'}
                                `}>
                                    <stage.icon className="h-5 w-5" />
                                </div>
                                <span className={`text-[11px] font-bold uppercase tracking-wider ${stage.status === 'upcoming' ? 'opacity-40' : 'opacity-100'}`}>
                                    {stage.label}
                                </span>
                                
                                {/* Tooltip-like detail */}
                                {stage.status === 'current' && (
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                                        45% Completed
                                    </div>
                                )}
                            </div>
                            
                            {i < stages.length - 1 && (
                                <div className="flex-1 flex justify-center px-2">
                                    <div className={`h-[2px] w-full max-w-[60px] ${stage.status === 'complete' ? 'bg-primary/50' : 'bg-muted-foreground/20'}`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="mt-4 p-4 bg-muted/30 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase opacity-60">Next Stage Estimate</p>
                            <p className="text-sm">Batch AI Grading starts in <span className="font-bold text-primary">2 hours</span></p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                        View Detailed Log <ArrowRight className="h-3 w-3" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
