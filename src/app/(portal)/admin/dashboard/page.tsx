import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Users, BookOpen, Activity, ShieldCheck, Database, Server } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Platform Administration</h1>
                    <p className="text-muted-foreground">
                        UNSW AI Assessment Platform global overview and system health.
                    </p>
                </div>
                <div className="text-sm border rounded-full px-3 py-1 border-green-500 text-green-600 bg-green-50 font-medium flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    All Systems Operational
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-t-4 border-t-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">14,245</div>
                        <p className="text-xs text-muted-foreground">Across 4 faculties</p>
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-primary">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Assessments</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">+12 initiated this week</p>
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI API Calls</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">842.1K</div>
                        <p className="text-xs text-muted-foreground">Requests in the last 30 days</p>
                    </CardContent>
                </Card>
                <Card className="border-t-4 border-t-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Data Storage</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-purple-600">4.2 TB</div>
                        <p className="text-xs text-muted-foreground">PostgreSQL & Vector Store</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>AI Multi-Agent Health</CardTitle>
                        <CardDescription>Live status of grading coordination agents.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex gap-4 items-center">
                                <Server className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Written Assessment Agent</p>
                                    <p className="text-sm text-muted-foreground">Routing text to Claude 3.5 Sonnet</p>
                                </div>
                            </div>
                            <div className="text-sm text-green-600 font-medium">Online (12ms latency)</div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex gap-4 items-center">
                                <Server className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Code Assessment Agent</p>
                                    <p className="text-sm text-muted-foreground">Sandboxed execution & logic review</p>
                                </div>
                            </div>
                            <div className="text-sm text-green-600 font-medium">Online (45ms latency)</div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-4">
                            <div className="flex gap-4 items-center">
                                <Server className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-semibold">Oral Presentation Agent</p>
                                    <p className="text-sm text-muted-foreground">Whisper transcripts + Multimodal review</p>
                                </div>
                            </div>
                            <div className="text-sm text-green-600 font-medium">Online (120ms latency)</div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Security & Access Control</CardTitle>
                        <CardDescription>Manage Role-Based Access Controls</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="rounded-lg border p-4 bg-muted/20 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer">
                            <span className="font-semibold">Manage Instructors</span>
                            <ShieldCheck className="h-4 w-4 text-primary" />
                        </div>
                        <div className="rounded-lg border p-4 bg-muted/20 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer">
                            <span className="font-semibold">Review Data Retention</span>
                            <ShieldCheck className="h-4 w-4 text-primary" />
                        </div>
                        <div className="rounded-lg border p-4 bg-muted/20 hover:bg-muted/50 transition-colors flex items-center justify-between cursor-pointer">
                            <span className="font-semibold">API Key Rotation</span>
                            <ShieldCheck className="h-4 w-4 text-primary" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
