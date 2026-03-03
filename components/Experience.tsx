"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        title: "Senior Software Engineer",
        company: "NEO_TEK INDUSTRIES",
        location: "Neo Tokyo",
        period: "2024 - PRESENT",
        level: "LVL. 99",
        description: "Leading the development of high-performance neural interfaces and decentralized grid systems.",
        achievements: ["Optimized data throughput by 40%", "Architected secure p2p protocols", "Managed a team of 10 elite hackers"]
    },
    {
        title: "Full Stack Developer",
        company: "CYBER_CORE SYSTEMS",
        location: "Grid City",
        period: "2022 - 2024",
        level: "LVL. 75",
        description: "Built scalable web infrastructure and immersive user interfaces for the Metaverse.",
        achievements: ["Reduced latency by 150ms", "Implemented real-time asset tracking", "Developed custom 3D rendering engine"]
    },
    {
        title: "Frontend Intern",
        company: "STARTUP_ZERO",
        location: "Silicon Valley",
        period: "2021 - 2022",
        level: "LVL. 20",
        description: "Assisted in crafting high-fidelity prototypes and responsive dashboard systems.",
        achievements: ["Redesigned main dashboard UI", "Integrated third-party data APIs", "Mastered React & Framer Motion"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-electric-blue/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-hot-pink/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-12 bg-neon-green" />
                        <span className="text-neon-green font-gaming text-sm tracking-[0.3em]">PROGRESSION_SYSTEM</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-gaming text-white">
                        XP <span className="text-electric-blue">LOG</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline bar */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-liner-to-b from-neon-green via-electric-blue to-transparent md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 relative">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer for desktop side-by-side */}
                                <div className="hidden md:block w-1/2" />

                                {/* Central Node */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-green md:-translate-x-1/2 shadow-[0_0_10px_#39FF14] z-10 hidden md:block" />

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] group">
                                    <div className="relative p-px rounded-xl bg-linear-to-br from-gray-800 to-transparent group-hover:from-neon-green/50 group-hover:to-electric-blue/50 transition-all duration-500">
                                        <div className="bg-black/90 backdrop-blur-xl p-6 rounded-xl border border-gray-900 overflow-hidden relative">
                                            {/* Decorative grid */}
                                            <div className="absolute top-0 right-0 p-4 opacity-10 font-gaming text-xs pointer-events-none">
                                                {exp.level}
                                            </div>

                                            <div className="flex flex-col gap-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-xl font-gaming text-white group-hover:text-neon-green transition-colors">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-electric-blue text-sm mt-1 font-bold">
                                                            <Briefcase size={14} />
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-900/50 px-2 py-1 rounded border border-gray-800 text-[10px] font-gaming text-gray-400">
                                                        {exp.period}
                                                    </div>
                                                </div>

                                                <p className="text-gray-400 text-sm font-sans italic">
                                                    "{exp.description}"
                                                </p>

                                                <div className="space-y-2">
                                                    <div className="text-[10px] font-gaming text-gray-500 uppercase tracking-widest">Rewards_Unlocked</div>
                                                    <div className="grid gap-2">
                                                        {exp.achievements.map((achieve, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                                                                <CheckCircle2 size={12} className="text-neon-green" />
                                                                <span className="font-sans">{achieve}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 pt-2 text-[10px] text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={10} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={10} />
                                                        <span>HISTORY_INDEX_{100 - (index * 10)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Corner brackets */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-700" />
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-700" />
                                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-700" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-700" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
