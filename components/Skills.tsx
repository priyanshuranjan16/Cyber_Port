"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const skillTree = [
        {
            category: "FRONTEND",
            color: "border-neon-green",
            textColor: "text-neon-green",
            bgColor: "bg-neon-green",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Tailwind", level: 95 },
                { name: "Framer Motion", level: 80 }
            ]
        },
        {
            category: "BACKEND",
            color: "border-electric-blue",
            textColor: "text-electric-blue",
            bgColor: "bg-electric-blue",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Prisma", level: 75 },
                { name: "Python", level: 70 }
            ]
        },
        {
            category: "TOOLS",
            color: "border-hot-pink",
            textColor: "text-hot-pink",
            bgColor: "bg-hot-pink",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "Figma", level: 75 },
                { name: "Vercel", level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-24 px-6 relative flex flex-col items-center justify-center overflow-hidden">

            {/* Connection Lines Background (SVG) */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 1000 800" className="max-w-6xl">
                    {/* Central Root Line */}
                    <path d="M500 0 L500 200" stroke="#333" strokeWidth="2" fill="none" />

                    {/* Branch Left */}
                    <path d="M500 200 L200 200 L200 300" stroke="#333" strokeWidth="2" fill="none" />
                    {/* Branch Center */}
                    <path d="M500 200 L500 300" stroke="#333" strokeWidth="2" fill="none" />
                    {/* Branch Right */}
                    <path d="M500 200 L800 200 L800 300" stroke="#333" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="max-w-6xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-gaming text-white tracking-widest mb-2">
                        SKILL MATRIX
                    </h2>
                    <div className="h-0.5 w-24 bg-gray-800 mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {skillTree.map((tree, groupIndex) => (
                        <div key={tree.category} className="flex flex-col items-center">
                            {/* Category Node */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: groupIndex * 0.2 }}
                                className={`w-32 h-10 border ${tree.color} bg-black flex items-center justify-center font-gaming text-sm ${tree.textColor} mb-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20`}
                            >
                                {tree.category}
                            </motion.div>

                            {/* Connection Line to Skills */}
                            <div className="w-0.5 h-8 bg-gray-800 mb-4" />

                            {/* Skills List */}
                            <div className="space-y-4 w-full">
                                {tree.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: (groupIndex * 0.2) + (index * 0.1) }}
                                        className="bg-gray-900/50 border border-gray-800 p-4 rounded hover:border-gray-600 transition-colors group relative overflow-hidden"
                                    >
                                        <div className="flex justify-between items-center mb-2 relative z-10">
                                            <span className="font-sans text-gray-300 font-bold">{skill.name}</span>
                                            <span className="font-mono text-xs text-gray-500">{skill.level}%</span>
                                        </div>

                                        {/* Progress Bar Background */}
                                        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full ${tree.bgColor} opacity-80`}
                                            />
                                        </div>

                                        {/* Hover Glow */}
                                        <div className={`absolute inset-0 ${tree.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
