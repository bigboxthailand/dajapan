"use client";

import { useEffect, useRef, useCallback } from "react";

export default function InkCursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<{ x: number; y: number; age: number; size: number }[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Age and filter points
        pointsRef.current = pointsRef.current
            .map((p) => ({ ...p, age: p.age + 1 }))
            .filter((p) => p.age < 40);

        // Draw ink strokes
        for (const point of pointsRef.current) {
            const alpha = Math.max(0, 1 - point.age / 40) * 0.15;
            const size = point.size * (1 - point.age / 60);

            ctx.beginPath();
            ctx.arc(point.x, point.y, Math.max(0.5, size), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(45, 30, 20, ${alpha})`;
            ctx.fill();

            // Subtle ink splatter
            if (point.age < 3 && Math.random() > 0.7) {
                for (let i = 0; i < 2; i++) {
                    const sx = point.x + (Math.random() - 0.5) * 20;
                    const sy = point.y + (Math.random() - 0.5) * 20;
                    ctx.beginPath();
                    ctx.arc(sx, sy, Math.random() * 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(45, 30, 20, ${alpha * 0.5})`;
                    ctx.fill();
                }
            }
        }

        rafRef.current = requestAnimationFrame(draw);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - mouseRef.current.x;
            const dy = e.clientY - mouseRef.current.y;
            const speed = Math.sqrt(dx * dx + dy * dy);

            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Only add points when mouse moves significantly
            if (speed > 2) {
                pointsRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    age: 0,
                    size: Math.min(6, 2 + speed * 0.08),
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[90] pointer-events-none"
            style={{ mixBlendMode: "multiply" }}
        />
    );
}
