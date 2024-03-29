import Image from 'next/image'
import React from 'react'

export const NotificationPill = () => (
  <div className="relative p-2 rounded-full bg-white shadow-md flex gap-3 h-[60px] w-[60px] items-center cursor-pointer justify-center">
    <Image src="/images/notification.svg" height={20} width={20} />
    <span className="absolute h-2 w-2 bg-rose-500 rounded-full top-[14px] right-[18px]" />
  </div>
)
