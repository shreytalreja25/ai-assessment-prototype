"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

export function FooterReveal() {
    return (
        // The spacer matches the height of the fixed footer
        <div className="relative h-[400px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <footer className="fixed bottom-0 left-0 w-full h-[400px] bg-black text-white px-8 py-12 flex flex-col justify-between z-[-1]">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-black">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">AI Assessment</span>
                        </div>
                        <p className="text-zinc-400 max-w-sm">
                            A prototype for the COMP9900 IT Project, demonstrating a Human-in-the-Loop workflow for university-level grading.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Product</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors">Security</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Legal</h4>
                        <ul className="space-y-2 text-zinc-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/" className="hover:text-primary transition-colors">Academic Integrity</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto w-full border-t border-zinc-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
                    <p>© 2026 UNSW COMP9900 Prototype. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
