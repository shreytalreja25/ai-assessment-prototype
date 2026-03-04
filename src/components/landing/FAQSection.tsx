"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ClientMounted } from "@/components/utils/ClientMounted";

export function FAQSection() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know about the platform and how it handles AI academic integrity.
                    </p>
                </div>

                <div className="space-y-4">
                    <AccordionItem
                        title="How does the Human-in-the-Loop workflow function?"
                        content="The AI acts as an advanced teaching assistant. It processes submissions and generates a provisional score and detailed feedback against the rubric. However, it cannot release a final grade. An instructor must review the AI's suggestions, make edits as needed, and manually approve the grade before the student sees it."
                    />
                    <AccordionItem
                        title="Is student data sent to external AI providers?"
                        content="Yes, but only after strict anonymization. Our orchestration layer redacts Personally Identifiable Information (PII) like names and student IDs before payload transmission to external LLM APIs (like OpenAI or Anthropic). We also ensure no model training is performed on student data."
                    />
                    <AccordionItem
                        title="What types of assessments are supported?"
                        content="The platform supports written reports (PDF/DOCX), code repositories (via GitHub integration), and multimodal presentations (audio/video). We utilize specific LLM agents specialized for each format type."
                    />
                    <AccordionItem
                        title="Can the AI detect plagiarism or AI-generated content?"
                        content="Yes, the AI orchestration includes specialized agents designed to flag unusual patterns, mismatched styles, and known LLM watermarks. These are highlighted heavily for the instructor during the review phase."
                    />
                </div>
            </div>
        </section>
    );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ClientMounted>
            <div className="border border-muted rounded-lg overflow-hidden transition-colors hover:border-primary/50">
                <button
                    className="flex w-full items-center justify-between p-6 bg-background text-left focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className="font-semibold text-lg">{title}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                {content}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ClientMounted>
    );
}
