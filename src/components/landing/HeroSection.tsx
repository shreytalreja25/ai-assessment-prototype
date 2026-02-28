"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function HeroSection({ onScrollToRoles }: { onScrollToRoles: () => void }) {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center z-10"
            >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
                    <BookOpen className="h-8 w-8" />
                </div>

                <h1 className="max-w-[1200px] w-full text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.1]">
                    <span className="whitespace-nowrap">Empowering Education with</span>{" "}
                    <span className="text-primary inline-flex min-w-[280px]">
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
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    A seamless Human-in-the-Loop platform that accelerates feedback without sacrificing academic integrity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-10 flex gap-4"
                >
                    <Button size="lg" className="rounded-full px-8 text-lg gap-2 shadow-lg shadow-primary/25" onClick={onScrollToRoles}>
                        Enter Prototype <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10">
                        View Analytics
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground z-10 cursor-pointer"
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
