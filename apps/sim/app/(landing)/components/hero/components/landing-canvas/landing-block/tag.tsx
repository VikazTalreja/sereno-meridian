import React from 'react'

/**
 * Properties for a subblock row component
 * Matches the SubBlockRow pattern from workflow-block.tsx
 */
export interface SubBlockRowProps {
  /** Icon element to display (optional, for visual context) */
  icon?: React.ReactNode
  /** Text label for the row title */
  label: string
  /** Optional value to display on the right side */
  value?: string
}

/**
 * Kept for backwards compatibility
 */
export type TagProps = SubBlockRowProps

/**
 * SubBlockRow component matching the workflow block's subblock row style
 * @param props - Row properties including label and optional value
 * @returns A styled row component
 */
export const SubBlockRow = React.memo(function SubBlockRow({ label, value }: SubBlockRowProps) {
  // Split label by colon to separate title and value if present
  const [title, displayValue] = label.includes(':')
    ? label.split(':').map((s) => s.trim())
    : [label, value]

  return (
    <div className='flex items-center gap-[8px] rounded-[6px] bg-[#D8E2FA]/80 px-[8px] py-[5px]'>
      <span className='min-w-0 truncate font-medium text-[#5A6B9E] text-[12px] capitalize' title={title}>
        {title}
      </span>
      {displayValue && (
        <span
          className='flex-1 truncate text-right font-medium text-[#1C2952] text-[12px]'
          title={displayValue}
        >
          {displayValue}
        </span>
      )}
    </div>
  )
})

/**
 * Tag component - alias for SubBlockRow for backwards compatibility
 */
export const Tag = SubBlockRow
