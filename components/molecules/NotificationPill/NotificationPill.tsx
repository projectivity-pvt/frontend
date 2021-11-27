import Image from 'next/image'
import React from 'react'

interface Props {}

export const NotificationPill = (props: Props) => (
  <div className="relative p-2 rounded-full bg-blue-50 flex gap-3 h-[60px] w-[60px] items-center cursor-pointer justify-center">
    <Image src="/images/notification.svg" height={20} width={20} />
    <span className="absolute h-2 w-2 bg-rose-500 rounded-full top-[14px] right-[18px]" />
  </div>
)
