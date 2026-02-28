import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockGradingQueue = [
    {
        id: "sub-101",
        student: "Alice Smith",
        assessment: "COMP9900 Final Report",
        type: "Written",
        aiScore: 85,
        status: "Pending Review",
        time: "2 hours ago",
    },
    {
        id: "sub-102",
        student: "Bob Jones",
        assessment: "COMP9900 Final Report",
        type: "Written",
        aiScore: 72,
        status: "Pending Review",
        time: "4 hours ago",
    },
    {
        id: "sub-103",
        student: "Charlie Davis",
        assessment: "React UI Code",
        type: "Code",
        aiScore: 94,
        status: "Pending Review",
        time: "1 day ago",
    },
];

export default function GradingQueuePage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Grading Queue</h1>
                <p className="text-muted-foreground">
                    Review AI-generated provisional scores and provide final approval.
                </p>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student</TableHead>
                            <TableHead>Assessment</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>AI Score</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockGradingQueue.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.student}</TableCell>
                                <TableCell>{item.assessment}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{item.type}</Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="font-bold text-primary">{item.aiScore}/100</span>
                                </TableCell>
                                <TableCell>
                                    <Badge className="bg-amber-500 hover:bg-amber-600">{item.status}</Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button asChild size="sm">
                                        <Link href={`/instructor/grading/${item.id}`}>Review</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        {mockGradingQueue.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                    No submissions pending review.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
