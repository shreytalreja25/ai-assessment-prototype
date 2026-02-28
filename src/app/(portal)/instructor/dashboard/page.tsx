import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Users, FileCheck2, HardDriveUpload, BrainCircuit } from "lucide-react";

export default function InstructorDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here is a summary of your ongoing assessments.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Students
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,245</div>
                        <p className="text-xs text-muted-foreground">
                            +14 enrolled this month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Submissions Pending
                        </CardTitle>
                        <HardDriveUpload className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">342</div>
                        <p className="text-xs text-muted-foreground">
                            Across 3 active assessments
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            AI Processed
                        </CardTitle>
                        <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">310</div>
                        <p className="text-xs text-muted-foreground">
                            Ready for human review
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Action Required
                        </CardTitle>
                        <FileCheck2 className="h-4 w-4 text-muted-foreground border border-destructive rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-destructive">32</div>
                        <p className="text-xs text-muted-foreground">
                            Submissions need manual grading
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            AI has finished processing submissions for "COMP9900 Final Report".
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Mock activity list */}
                        <div className="flex items-center gap-4 border-b pb-4">
                            <BrainCircuit className="h-8 w-8 text-primary bg-primary/10 p-1.5 rounded-full" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">AI Grading Complete</p>
                                <p className="text-sm text-muted-foreground">150 submissions processed for 'React UI Assignment'</p>
                            </div>
                            <div className="text-sm text-muted-foreground">2 hrs ago</div>
                        </div>
                        <div className="flex items-center gap-4 border-b pb-4">
                            <Users className="h-8 w-8 text-secondary-foreground bg-secondary p-1.5 rounded-full" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">New Student Submissions</p>
                                <p className="text-sm text-muted-foreground">45 students just uploaded their oral presentations</p>
                            </div>
                            <div className="text-sm text-muted-foreground">5 hrs ago</div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                        <CardDescription>Navigate to common instructor tools</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="rounded-lg border p-4 bg-muted/40 hover:bg-muted/80 transition-colors cursor-pointer">
                            <p className="font-semibold px-2 border-l-4 border-primary">Review Grading Queue</p>
                        </div>
                        <div className="rounded-lg border p-4 bg-muted/40 hover:bg-muted/80 transition-colors cursor-pointer">
                            <p className="font-semibold px-2 border-l-4 border-primary">Create New Assessment</p>
                        </div>
                        <div className="rounded-lg border p-4 bg-muted/40 hover:bg-muted/80 transition-colors cursor-pointer">
                            <p className="font-semibold px-2 border-l-4 border-primary">Manage Rubrics</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
