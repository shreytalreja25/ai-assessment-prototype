import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ListTodo, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome, Alice. Here are your upcoming tasks and recent grades.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-primary/50 bg-primary/5">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Assessments Due Soon
                        </CardTitle>
                        <Clock className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">2</div>
                        <p className="text-xs text-muted-foreground">
                            Within the next 7 days
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Awaiting Grading
                        </CardTitle>
                        <ListTodo className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground">
                            COMP9900 Final Report
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Completed Tasks
                        </CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">
                            This semester
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Needs Attention</CardTitle>
                        <CardDescription>Upcoming deadlines</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-semibold">React UI Presentation</p>
                                <p className="text-sm text-muted-foreground">Due: Oct 24, 2026 (Oral / Video)</p>
                            </div>
                            <Button asChild size="sm">
                                <Link href="/student/submissions">Submit</Link>
                            </Button>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-semibold">Backend API Repository</p>
                                <p className="text-sm text-muted-foreground">Due: Nov 2, 2026 (Code)</p>
                            </div>
                            <Button asChild size="sm" variant="outline">
                                <Link href="/student/submissions">View Details</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle>Recent Feedback</CardTitle>
                        <CardDescription>Your latest grades</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-semibold">Midterm Essay</p>
                                <p className="text-sm text-muted-foreground line-clamp-1 mt-1 italic">
                                    "Great introduction, Alice. However, as the AI noted..."
                                </p>
                            </div>
                            <Badge className="bg-green-600 hover:bg-green-700 text-lg px-3 py-1">
                                88 / 100
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-semibold">Weekly Quiz 4</p>
                                <p className="text-sm text-muted-foreground mt-1 text-primary cursor-pointer hover:underline">
                                    View AI generated scorecard
                                </p>
                            </div>
                            <Badge className="bg-green-600 hover:bg-green-700 text-lg px-3 py-1">
                                10 / 10
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
