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
import { Badge } from "@/components/ui/badge";
import { Settings, Save, ShieldAlert, Key, Globe, Database } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="flex flex-col gap-6 max-w-5xl">
            <div className="flex justify-between items-center bg-white dark:bg-black sticky top-0 z-10 py-4 -my-4 mb-2">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
                    <p className="text-muted-foreground">
                        Manage global platform configurations and API integrations.
                    </p>
                </div>
                <Button className="gap-2">
                    <Save className="h-4 w-4" />
                    Save All Changes
                </Button>
            </div>

            <div className="grid gap-6">
                {/* Global Platform Settings */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Global Identity</CardTitle>
                        </div>
                        <CardDescription>Configure the platform's public-facing information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="platformName">Platform Name</Label>
                                <Input id="platformName" defaultValue="UNSW AI Assessment Platform" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="supportEmail">Support Email</Label>
                                <Input id="supportEmail" defaultValue="support.ai-assessment@unsw.edu.au" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Model Configurations */}
                <Card className="border-primary/20">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Settings className="h-5 w-5 text-primary" />
                                <CardTitle>AI Agent Orchestration</CardTitle>
                            </div>
                            <Badge variant="outline" className="border-primary text-primary">Active</Badge>
                        </div>
                        <CardDescription>Manage the underlying Large Language Models powering the agents.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium mb-2">Written Assessment Agent</h4>
                                <div className="flex gap-4 items-center">
                                    <select className="flex h-9 w-[300px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                                        <option>Claude 3.5 Sonnet (Anthropic)</option>
                                        <option>GPT-4o (OpenAI)</option>
                                        <option>Llama 3 70B (Local/Groq)</option>
                                    </select>
                                    <Badge variant="secondary">Primary Text Model</Badge>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Code Assessment Agent</h4>
                                <div className="flex gap-4 items-center">
                                    <select className="flex h-9 w-[300px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                                        <option>Claude 3.5 Sonnet (Anthropic)</option>
                                        <option>GPT-4o (OpenAI)</option>
                                        <option>Codestral Mamba (Mistral)</option>
                                    </select>
                                    <Badge variant="secondary">Logic & Syntax Review</Badge>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">API Keys Configuration</h4>
                                <div className="space-y-3">
                                    <div className="flex gap-2">
                                        <Input type="password" defaultValue="sk-ant-api03-xxxxxxxxxxxxxxxxxxxx" className="font-mono text-xs w-[400px]" readOnly />
                                        <Button variant="outline" size="sm">Rotate Key</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Database & Data Retention */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-muted-foreground" />
                            <CardTitle>Data & Retention</CardTitle>
                        </div>
                        <CardDescription>Manage how student submission data is handled.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Vector Database Synchronization</Label>
                                <div className="text-sm text-muted-foreground">Keep pgvector embeddings strictly synced with raw submissions.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                            <div className="space-y-0.5">
                                <Label>Automated Archival</Label>
                                <div className="text-sm text-muted-foreground">Move completed assessments to cold storage after 1 year.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="space-y-0.5">
                                <Label className="text-destructive flex items-center gap-1"><ShieldAlert className="h-4 w-4" /> Strict Anonymization</Label>
                                <div className="text-sm text-muted-foreground">Redact all PII from transcripts before sending to external LLM APIs.</div>
                            </div>
                            <div className="h-6 w-11 bg-primary rounded-full relative">
                                <div className="absolute right-1 top-1 h-4 w-4 bg-primary-foreground rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
