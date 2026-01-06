"use client";
import { motion } from "framer-motion";

export default function GlitchText({ text }: { text: string }) {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-green opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-pulse translate-x-[2px] translate-y-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-hot-pink opacity-0 group-hover:opacity-100 transition-opacity duration-100 animate-pulse -translate-x-[2px] -translate-y-[2px] delay-75">
                {text}
            </span>
        </div>
    );
}
