"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        opacity: 0.03 + i * 0.02,
        width: 0.3 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Animation Paths</title>
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--gradient-start))" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="hsl(var(--gradient-middle))" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(var(--gradient-end))" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="url(#pathGradient)"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        fill="none"
                        initial={{ pathLength: 0.2, opacity: 0.3 }}
                        animate={{
                            pathLength: [0.2, 1, 0.2],
                            opacity: [0.1, path.opacity * 2, 0.1],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: path.id * 0.2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <FloatingPaths position={1} />
            <FloatingPaths position={-0.8} />
            <FloatingPaths position={0.6} />
        </div>
    );
}