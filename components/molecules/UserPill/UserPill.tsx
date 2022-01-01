import { useReactiveVar } from '@apollo/client'
import { userGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'
import React from 'react'

export const UserPill = () => {
  const { user } = useReactiveVar(userGlobalState)
  return (
    <div className="py-2 pl-2 pr-5 rounded-full bg-white flex gap-3 items-center shadow-md">
      <div className="rounded-full bg-indigo-600 h-11 w-11 flex items-center justify-center text-xl text-white font-black">
        J
      </div>
      <div className="flex flex-col">
        <span className="text-base truncate font-semibold">{user?.name}</span>
        <span className="font-normal truncate text-sm text-gray-500">
          {user?.phone}
        </span>
      </div>
    </div>
  )
}
