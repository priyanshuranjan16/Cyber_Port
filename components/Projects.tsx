"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative h-[400px] w-full rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 group perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 flex flex-col justify-between"
            >
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-3 py-1 rounded text-xs font-gaming tracking-wider">
                            QUEST_0{index + 1}
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                        </div>
                    </div>

                    <h3 className="text-3xl font-gaming text-white mb-4 group-hover:text-neon-green transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                        {project.desc}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Glowing Border Gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-green/20 via-transparent to-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ transform: "translateZ(0px)" }} />
        </motion.div>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "Project Alpha",
            desc: "A full-stack e-commerce platform with real-time inventory tracking and AI recommendations.",
            tags: ["Next.js", "Supabase", "Stripe", "AI"],
        },
        {
            title: "CyberChat",
            desc: "Real-time messaging application with end-to-end encryption and ephemeral messages.",
            tags: ["Socket.io", "React", "Node.js", "Redis"],
        },
        {
            title: "Portfolio V1",
            desc: "My first portfolio website. A comparison of my growth as a developer over the years.",
            tags: ["HTML", "CSS", "JS", "Legacy"],
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-24 px-6 relative flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-gaming text-white mb-2">
                            QUEST <span className="text-hot-pink">LOG</span>
                        </h2>
                        <p className="text-gray-500 font-sans">Select a mission to view details</p>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-hot-pink font-gaming text-sm animate-pulse">
                        SCROLL TO EXPLORE <ArrowRight size={16} />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
