"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen py-24 px-6 bg-black flex flex-col items-center justify-center relative border-t border-gray-900">

            <div className="max-w-2xl w-full text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green animate-pulse">
                        <div className="w-2 h-2 bg-neon-green rounded-full shadow-[0_0_10px_#39ff14]" />
                    </div>
                    <h2 className="text-2xl font-gaming text-white tracking-widest">
                        DATA UPLINK ESTABLISHED
                    </h2>
                    <p className="text-gray-500 font-mono text-sm">
                        SECURE CHANNEL OPEN. READY FOR TRANSFER.
                    </p>
                </motion.div>

                <div className="grid gap-6 w-full max-w-md mx-auto">
                    <motion.a
                        href="/resume.pdf"
                        download
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="flex items-center justify-between p-6 bg-gray-900 border border-gray-800 hover:border-neon-green hover:bg-gray-800 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <Download className="text-gray-400 group-hover:text-neon-green transition-colors" />
                            <div className="text-left">
                                <div className="text-white font-gaming text-sm group-hover:text-neon-green transition-colors">DOWNLOAD CHARACTER SHEET</div>
                                <div className="text-gray-600 text-xs font-mono">resume_v2.4.pdf (245kb)</div>
                            </div>
                        </div>
                        <div className="w-2 h-2 bg-gray-700 group-hover:bg-neon-green rounded-full" />
                    </motion.a>

                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { icon: Mail, label: "COMMS", href: "mailto:hello@example.com", delay: 0.1 },
                            { icon: Github, label: "REPO", href: "https://github.com", delay: 0.2 },
                            { icon: Linkedin, label: "NETWORK", href: "https://linkedin.com", delay: 0.3 },
                        ].map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: item.delay }}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-900 border border-gray-800 hover:border-white hover:bg-gray-800 transition-all group"
                            >
                                <item.icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                                <span className="text-[10px] font-gaming text-gray-500 group-hover:text-white tracking-wider">{item.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs font-mono text-gray-700"
                >
            // END OF LINE_
                </motion.div>
            </div>
        </section>
    );
}
