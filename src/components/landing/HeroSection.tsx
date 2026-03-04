"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { ClientMounted } from "@/components/utils/ClientMounted";

export function HeroSection({ onScrollToRoles }: { onScrollToRoles: () => void }) {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center z-10"
            >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/30 ring-1 ring-primary/50 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md opacity-0 hover:opacity-100 transition-opacity" />
                    <BookOpen className="h-8 w-8 relative z-10" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0" />

                <h1 className="max-w-[1000px] w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] relative z-10 flex flex-col items-center gap-2">
                    <span className="text-foreground">Empowering Education</span>
                    <span className="flex items-center gap-3">
                        <span className="text-foreground/70 font-medium">with</span>
                        <span className="text-primary inline-flex min-w-[340px] text-left">
                            <TypeAnimation
                                sequence={[
                                    "AI-Assisted Grading",
                                    2000,
                                    "Fairness",
                                    2000,
                                    "Speed",
                                    2000,
                                    "Human Insight",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={40}
                                repeat={Infinity}
                            />
                        </span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl relative z-10"
                >
                    A seamless Human-in-the-Loop platform that accelerates feedback without sacrificing academic integrity.
                </motion.p>

                <ClientMounted>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-10 mb-20 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 relative z-10"
                    >
                        <Button size="lg" className="rounded-full px-8 text-lg gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto h-14" onClick={onScrollToRoles}>
                            Enter Prototype <ArrowRight className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 text-lg bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 transition-all w-full sm:w-auto h-14">
                            View Analytics
                        </Button>
                    </motion.div>
                </ClientMounted>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground z-10 cursor-pointer hidden sm:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                onClick={onScrollToRoles}
            >
                <span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll to explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
