"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const links = [
        { name: "BASE", href: "#hero" },
        { name: "STATS", href: "#about" },
        { name: "QUESTS", href: "#projects" },
        { name: "SKILLS", href: "#skills" },
        { name: "CONNECT", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/80 backdrop-blur-md border-b border-neon-green/20 flex items-center justify-between px-6 md:px-12"
        >
            <div className="text-neon-green font-gaming text-2xl tracking-widest drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
                THE<span className="text-white">ARCHITECT</span>
            </div>
            <ul className="hidden md:flex gap-8">
                {links.map((link) => (
                    <li key={link.name} className="relative group">
                        <Link
                            href={link.href}
                            className="font-gaming text-xs text-gray-400 hover:text-neon-green transition-colors tracking-widest"
                        >
                            [{link.name}]
                        </Link>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all group-hover:w-full duration-300" />
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
}
