import React from 'react'

interface Props {
  size?: number
  color?: string
}

const RightArrowIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg width={size ?? '100%'} height={size ?? '100%'} fill="none" viewBox={'0 0 10 20'}>
      <path
        d="m.5 1 9 9-9 9"
        stroke={color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  )
}

export default RightArrowIcon
