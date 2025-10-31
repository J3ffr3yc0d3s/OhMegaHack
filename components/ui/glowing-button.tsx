"use client"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"

interface GlowingButtonProps extends React.ComponentProps<"a"> {
  children: React.ReactNode
  color?: "cyan" | "dark"
}

export const GlowingButton = React.forwardRef<HTMLAnchorElement, GlowingButtonProps>(
  ({ children, className, color = "cyan", ...props }, ref) => {
    const btnRef = useRef<HTMLAnchorElement>(null)

    // Mouse move handler for spotlight effect
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const btn = btnRef.current
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      btn.style.setProperty("--x", `${x}px`)
      btn.style.setProperty("--y", `${y}px`)
    }

    // Color themes
    const base =
      color === "cyan"
        ? "bg-[#00d9ff] text-black"
        : "bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 text-white"

    const border =
      color === "cyan"
        ? "border border-[#00d9ff]/60"
        : "border border-zinc-700/60"

    const hoverSpotlight =
      color === "cyan"
        ? "hover:after:opacity-100 after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-300 after:bg-black/10"
        : ""

    return (
      <a
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl px-7 py-2 font-semibold shadow-lg transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9ff]/60",
          base,
          border,
          hoverSpotlight,
          "hover:scale-[1.02] hover:shadow-[#00d9ff]/20 hover:shadow-lg active:scale-[0.98]",
          className
        )}
        style={{
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={e => {
          const btn = btnRef.current
          if (btn) {
            btn.style.setProperty("--x", "-100px")
            btn.style.setProperty("--y", "-100px")
          }
        }}
        {...props}
        tabIndex={0}
        // @ts-ignore
        ref={btnRef}
      >
        {/* Glassy/soft light overlay */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: color === "cyan"
              ? "linear-gradient(120deg,rgba(255,255,255,0.3) 0%,rgba(0,217,255,0.15) 100%)"
              : "linear-gradient(120deg,rgba(255,255,255,0.10) 0%,rgba(0,0,0,0.10) 100%)",
            zIndex: 1,
            mixBlendMode: "soft-light",
          }}
        />
        {/* Spotlight effect that follows cursor */}
        <span
          className="pointer-events-none absolute -inset-8 rounded-full"
          style={{
            left: "var(--x, -100px)",
            top: "var(--y, -100px)",
            width: 180,
            height: 180,
            background: color === "cyan"
              ? "radial-gradient(circle at center,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.08) 50%,transparent 100%)"
              : "radial-gradient(circle at center,rgba(180,180,200,0.18) 0%,rgba(60,60,80,0.10) 60%,transparent 100%)",
            filter: "blur(8px)",
            opacity: 0.85,
            zIndex: 2,
            transition: "left 0.18s cubic-bezier(.4,1.6,.6,1), top 0.18s cubic-bezier(.4,1.6,.6,1)",
          }}
        />
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2 font-mono">
          {children}
        </span>
      </a>
    )
  }
)

GlowingButton.displayName = "GlowingButton"
