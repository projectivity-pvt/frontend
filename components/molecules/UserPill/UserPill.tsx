import React from 'react'

interface Props {}

export const UserPill = (props: Props) => {
  const a = 1
  return (
    <div className="py-2 pl-2 pr-5 rounded-full bg-blue-50 flex gap-3 items-center">
      <div className="rounded-full bg-indigo-600 h-11 w-11 flex items-center justify-center text-xl text-white font-black">
        J
      </div>
      <div className="flex flex-col">
        <span className="text-base truncate font-semibold">John Doe</span>
        <span className="font-normal truncate text-sm text-gray-500">
          Line Producer
        </span>
      </div>
    </div>
  )
}
