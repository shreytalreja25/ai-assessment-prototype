"use client";

import { useRef } from "react";
import Link from "next/link";
import { User, GraduationCap, ShieldCheck, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import the new Landing Page sections
import { ThreeBackground } from "@/components/landing/ThreeBackground";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FAQSection } from "@/components/landing/FAQSection";

export default function LandingPage() {
  const rolesRef = useRef<HTMLDivElement>(null);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col transition-colors z-0 overflow-x-hidden">
      {/* 3D Background - Fixed absolute positioned behind hero only */}
      <ThreeBackground />

      <main className="relative flex-1 w-full flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-background overflow-hidden">

        {/* Entrance Hero Section */}
        <HeroSection onScrollToRoles={scrollToRoles} />

        {/* Feature Explainer with Parallax */}
        <FeaturesSection />

        {/* Role Selection / Access Portals */}
        <section ref={rolesRef} className="relative py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-black/40 dark:to-background w-full border-t border-border/40">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Experience the Prototype
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                Select a user persona below to explore the Human-in-the-Loop workflows and dashboards.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Student Card */}
              <Card className="flex flex-col border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,204,0,0.15)] bg-background/60 backdrop-blur-xl">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Student</CardTitle>
                  <CardDescription className="text-sm font-medium">Submit assignments & view feedback</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end pt-6">
                  <Button asChild className="w-full text-md h-12 rounded-xl border-primary/20 hover:bg-primary/10" variant="outline">
                    <Link href="/student/dashboard">Login as Student</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Instructor Card */}
              <Card className="flex flex-col border border-primary/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-10px_rgba(255,204,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_25px_50px_-12px_rgba(255,204,0,0.3)] scale-100 sm:scale-105 bg-background/80 backdrop-blur-2xl z-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl pointer-events-none" />
                <CardHeader className="text-center pb-2 relative">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-1 ring-primary/50">
                    <User className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Instructor / Tutor</CardTitle>
                  <CardDescription className="text-sm font-medium">Review AI grading & release marks</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end pt-6 relative">
                  <Button asChild className="w-full text-md h-12 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow">
                    <Link href="/instructor/dashboard">Login as Instructor</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Admin Card */}
              <Card className="flex flex-col border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,204,0,0.15)] bg-background/60 backdrop-blur-xl">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">Admin</CardTitle>
                  <CardDescription className="text-sm font-medium">Manage platform access & settings</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end pt-6">
                  <Button asChild className="w-full text-md h-12 rounded-xl border-primary/20 hover:bg-primary/10" variant="outline">
                    <Link href="/admin/dashboard">Login as Admin</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

      </main>

      {/* Modern Sticky Reveal Footer. 
          The main content has a bottom margin equal to footer height (apx 450px) 
          so the fixed footer underneath gets revealed as you scroll past the end of main. */}
      {/* The Footer component has the spacer built in. */}
      {/* Actually I'll implement a clean footer here to avoid sticky fixed layout bugs in React 18 / Next dev */}
      <footer className="w-full bg-zinc-950 text-white px-8 py-16 flex flex-col justify-between border-t border-zinc-800">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12">
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
            <h4 className="font-semibold text-lg text-zinc-100">Product</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Features</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Security</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Integrations</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-zinc-100">Legal</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Terms of Service</span></li>
              <li><span className="cursor-not-allowed hover:text-white transition-colors">Academic Integrity</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full border-t border-zinc-800 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>© 2026 UNSW COMP9900 Prototype. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="cursor-not-allowed hover:text-white transition-colors">GitHub</span>
            <span className="cursor-not-allowed hover:text-white transition-colors">Documentation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
