import React from 'react'
import {
  SubBlockRow,
  type SubBlockRowProps,
} from '@/app/(landing)/components/hero/components/landing-canvas/landing-block/tag'

/**
 * Data structure for a landing card component
 * Matches the workflow block structure from the application
 */
export interface LandingCardData {
  /** Icon element to display in the card header */
  icon: React.ReactNode
  /** Background color for the icon container */
  color: string | '#f6f6f6'
  /** Name/title of the card */
  name: string
  /** Optional subblock rows to display below the header */
  tags?: SubBlockRowProps[]
}

/**
 * Props for the LandingBlock component
 */
export interface LandingBlockProps extends LandingCardData {
  /** Optional CSS class names */
  className?: string
}

/**
 * Landing block component that displays a card with icon, name, and optional subblock rows
 * Styled to match the application's workflow blocks
 * @param props - Component properties including icon, color, name, tags, and className
 * @returns A styled block card component
 */
export const LandingBlock = React.memo(function LandingBlock({
  icon,
  color,
  name,
  tags,
  className,
}: LandingBlockProps) {
  const hasContentBelowHeader = tags && tags.length > 0

  return (
    <div
      className={`z-10 flex w-[260px] flex-col rounded-[12px] border border-[#B8C5E8] bg-gradient-to-b from-[#F4F8FF] to-[#E8EFFC] shadow-[inset_0_1px_0_rgba(255,255,255,0.90),0_2px_12px_rgba(58,78,168,0.12),0_1px_3px_rgba(58,78,168,0.08)] backdrop-blur-sm transition-all duration-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.90),0_8px_28px_rgba(58,78,168,0.18),0_2px_8px_rgba(58,78,168,0.08)] ${className ?? ''}`}
    >
      {/* Header - matches workflow-block.tsx header styling */}
      <div
        className={`flex items-center justify-between px-[10px] py-[9px] ${hasContentBelowHeader ? 'border-[#B8C5E8]/70 border-b' : ''}`}
      >
        <div className='flex min-w-0 flex-1 items-center gap-[10px]'>
          <div
            className='flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_1px_3px_rgba(0,0,0,0.14)]'
            style={{ background: color as string }}
          >
            {icon}
          </div>
          <span className='truncate font-semibold text-[#171717] text-[14px] tracking-[-0.01em]' title={name}>
            {name}
          </span>
        </div>
      </div>

      {/* Content - SubBlock Rows matching workflow-block.tsx */}
      {hasContentBelowHeader && (
        <div className='flex flex-col gap-[6px] px-[10px] py-[8px]'>
          {tags.map((tag) => (
            <SubBlockRow key={tag.label} icon={tag.icon} label={tag.label} />
          ))}
        </div>
      )}
    </div>
  )
})
