import React from 'react'

interface Props {
  size?: number | string
  color?: string
}

const LeadershipIcon: React.FC<Props> = ({ size, color }) => {
  return (
    <svg
      width={size ?? '100%'}
      height={size ?? '100%'}
      fill={color ?? 'currentColor'}
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  )
}

export default LeadershipIcon
