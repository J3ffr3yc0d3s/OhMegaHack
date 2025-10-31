"use client"

import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Scoring {
  category: string
  points: number
  description: string
}

interface Problem {
  id: number
  title: string
  statement: string
  objectives?: string[]
  functionalRequirements?: string[]
  nonFunctionalRequirements?: string[]
  methodology?: string[]
  scoring: Scoring[]
}

interface ProblemStatementProps {
  problem: Problem
  isExpanded: boolean
  onToggle: () => void
}

export default function ProblemStatement({ problem, isExpanded, onToggle }: ProblemStatementProps) {
  const totalPoints = problem.scoring.reduce((sum, item) => sum + item.points, 0)

  const renderSection = (title: string, items: string[] | undefined) => {
    if (!items || items.length === 0) return null
    return (
      <div>
        <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">{title}</h4>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-xs sm:text-sm text-gray-300 flex gap-2">
              <span className="text-accent flex-shrink-0 mt-1">•</span>
              <span className="font-mono">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-accent/40 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md transition-all duration-300 hover:border-accent/70 hover:shadow-lg hover:shadow-cyan-500/20">
      <button
        onClick={onToggle}
        className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left transition-colors hover:bg-white/5"
      >
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground break-words font-mono">
              {problem.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 flex-shrink-0"
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-accent/30"
          >
            <div className="bg-black/30 backdrop-blur-sm px-4 sm:px-6 py-4 sm:py-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {problem.statement && (
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-3">
                    Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">{problem.statement}</p>
                </div>
              )}

              {renderSection("Objectives", problem.objectives)}
              {renderSection("Functional Requirements", problem.functionalRequirements)}
              {renderSection("Non-Functional Requirements", problem.nonFunctionalRequirements)}
              {renderSection("Methodology and Working", problem.methodology)}

              <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-4 border-t border-accent/20">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
                  Scoring Breakdown
                </h4>
                <span className="text-base sm:text-lg font-bold text-accent">Total: {totalPoints} pts</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {problem.scoring.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col rounded-lg bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 border border-accent/20"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs sm:text-sm font-medium text-foreground font-mono">{item.category}</span>
                      <span className="w-10 sm:w-12 text-right font-bold text-accent text-sm sm:text-base">
                        {item.points}
                      </span>
                    </div>
                    {item.description && <p className="text-xs text-gray-400 mb-2 font-mono">{item.description}</p>}
                    <div className="h-2 rounded-full bg-accent/20 overflow-hidden">
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{
                          width: `${(item.points / totalPoints) * 100}%`,
                          opacity: 1,
                        }}
                        transition={{
                          delay: index * 0.05 + 0.15,
                          duration: 0.7,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400 shadow-lg shadow-cyan-500/50"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
