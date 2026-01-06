"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const systemLogs = [
            "INITIALIZING CORE SYSTEMS...",
            "LOADING ASSETS...",
            "CONNECTING TO SERVER...",
            "ESTABLISHING SECURE LINK...",
            "RENDERING VISUALS...",
            "SYSTEM OPTIMAL.",
            "ACCESS GRANTED."
        ];
        let i = 0;
        const interval = setInterval(() => {
            if (i < systemLogs.length) {
                setLogs(prev => [...prev.slice(-4), systemLogs[i]]);
                i++;
            }
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black"
        >
            {/* HUD Corners */}
            <div className="absolute top-20 left-6 w-32 h-32 border-l-2 border-t-2 border-neon-green/30 rounded-tl-3xl p-4 pointer-events-none">
                <div className="text-[10px] font-mono text-neon-green/70 space-y-1">
                    <div>SYS://ONLINE</div>
                    <div>LOC: 127.0.0.1</div>
                    <div>T: {new Date().getHours()}:{new Date().getMinutes()}</div>
                </div>
            </div>
            <div className="absolute top-20 right-6 w-32 h-32 border-r-2 border-t-2 border-neon-green/30 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-32 h-32 border-l-2 border-b-2 border-electric-blue/30 rounded-bl-3xl p-4 flex items-end pointer-events-none">
                <div className="flex gap-1 h-8 items-end">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [10, 30, 10] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1 bg-electric-blue/50"
                        />
                    ))}
                </div>
            </div>
            <div className="absolute bottom-6 right-6 w-32 h-32 border-r-2 border-b-2 border-electric-blue/30 rounded-br-3xl pointer-events-none" />

            {/* Scrolling Logs (Left Side) */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block w-48 font-mono text-[10px] text-neon-green/40 pointer-events-none">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-1"
                    >
                        {`> ${log}`}
                    </motion.div>
                ))}
            </div>

            {/* Central Radar Animation Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[500px] h-[500px] border border-gray-800 rounded-full flex items-center justify-center relative">
                    <div className="w-[300px] h-[300px] border border-gray-700/50 rounded-full" />
                    <div className="w-[100px] h-[100px] border border-gray-700/30 rounded-full" />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-1/2 top-0 left-0 origin-bottom bg-gradient-to-l from-transparent to-neon-green/10"
                        style={{ borderRight: "1px solid rgba(57, 255, 20, 0.2)" }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="z-10 text-center space-y-8 select-none relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="mb-6 flex justify-center gap-2 text-neon-green text-xs font-mono tracking-[0.8em] opacity-80">
                        <span>SYSTEM</span>
                        <span className="animate-pulse">ONLINE</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-gaming text-white tracking-tighter mix-blend-difference z-20 relative px-4">
                        ARCHITECT
                    </h1>

                    {/* Glitch Overlay */}
                    <h1 className="text-6xl md:text-9xl font-gaming text-red-500 absolute top-0 left-0 w-full h-full opacity-50 blur-[1px] animate-pulse pointer-events-none" style={{ clipPath: "inset(40% 0 60% 0)" }}>
                        ARCHITECT
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="pt-12"
                >
                    <button
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-xs font-mono text-gray-500 hover:text-white transition-colors tracking-[0.3em] flex flex-col items-center gap-4 group"
                    >
                        <span>INITIALIZE_PROTOCOL</span>
                        <div className="w-6 h-6 border-b-2 border-r-2 border-gray-600 group-hover:border-neon-green rotate-45 transition-colors duration-300" />
                    </button>
                </motion.div>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, black 100%) pointer-events-none" />
        </section>
    );
}
