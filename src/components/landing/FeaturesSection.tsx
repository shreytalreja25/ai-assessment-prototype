"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, FileCheck2, ShieldCheck, Zap } from "lucide-react";

export function FeaturesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax translation values based on scroll
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} style={{ position: "relative" }} className="relative min-h-[120vh] w-full py-24 overflow-hidden bg-muted/20 dark:bg-black/50">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    style={{ opacity }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 relative z-10">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Designed for Modern Academia</span>
                    </h2>
                    <p className="text-xl text-muted-foreground relative z-10">
                        Our unique Human-in-the-Loop approach guarantees speed without sacrificing the nuanced understanding of a real instructor.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">

                    {/* Left side text content - moves slightly up */}
                    <motion.div style={{ y: y1 }} className="space-y-8 z-10">
                        <FeatureBlock
                            icon={<Zap className="h-6 w-6 text-yellow-500" />}
                            title="Instant Provisional Scores"
                            description="Multi-agent LLMs process hundreds of submissions in minutes, generating comprehensive rubrics and identifying key areas of feedback."
                        />
                        <FeatureBlock
                            icon={<ShieldCheck className="h-6 w-6 text-green-500" />}
                            title="Academic Integrity First"
                            description="Built-in plagiarism detection and strict data anonymization ensure student privacy and institutional trust are never compromised."
                        />
                        <FeatureBlock
                            icon={<LayoutDashboard className="h-6 w-6 text-blue-500" />}
                            title="Role-Based Dashboards"
                            description="Tailored views for Students submitting work, Instructors reviewing grades, and Admins overseeing system health."
                        />
                    </motion.div>

                    {/* Right side floating cards - moves down to create parallax */}
                    <motion.div style={{ y: y2 }} className="relative h-[600px] w-full hidden md:block">
                        {/* Decorative background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/25 rounded-full blur-[120px] pointer-events-none" />

                        {/* Floating Card 1 */}
                        <Card className="absolute top-10 right-10 w-[350px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-15px_rgba(255,204,0,0.1)] border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl transform-gpu rotate-2">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold">AI Assessment Report</span>
                                    <span className="text-sm text-primary font-bold">92 / 100</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden"><div className="h-full bg-primary w-[92%]" /></div>
                                    <p className="text-xs text-muted-foreground">"Excellent structure and clear argumentation..."</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Floating Card 2 */}
                        <Card className="absolute bottom-20 left-0 w-[400px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-15px_rgba(255,204,0,0.1)] border-white/20 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl transform-gpu -rotate-3 z-20">
                            <CardContent className="p-6 flex gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center ring-1 ring-green-500/30">
                                    <FileCheck2 className="h-6 w-6 text-green-600 dark:text-green-500" />
                                </div>
                                <div>
                                    <span className="font-semibold block">Instructor Approved</span>
                                    <span className="text-sm text-muted-foreground block mt-1">Grade released to Alice Smith.</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FeatureBlock({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="mt-1 flex-shrink-0 h-14 w-14 rounded-2xl bg-background/50 backdrop-blur-sm shadow-md border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,204,0,0.2)] group-hover:border-primary/50">
                {icon}
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
