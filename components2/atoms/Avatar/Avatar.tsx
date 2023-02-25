import { randomColor } from '@utils//util'
import React from 'react'

interface Props {
  initial: string
  size: number
}

export const Avatar = (props: Props) => {
  const { initial, size = 32 } = props
  return (
    <div
      style={{
        backgroundColor: randomColor(),
        height: `${size}px`,
        width: `${size}px`,
        fontSize: `${(size >> 1) + 2}px`,
      }}
      className="avatar select-none flex-shrink-0 rounded-full bg-primary-600 text-white flex items-center justify-center h-10 w-10 md:h-14 md:w-14 "
    >
      {initial.toUpperCase()}
    </div>
  )
}
