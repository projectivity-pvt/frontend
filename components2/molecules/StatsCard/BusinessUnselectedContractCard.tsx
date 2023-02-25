import Image from 'next/image'
import React from 'react'
import { Avatar } from '@components/atoms/Avatar/Avatar'


// interface Props {
//   bgColor: string
//   iconColor: string
//   title: string
//   value: string
//   icon: ReactNode
// }

export const BusinessUnselectedContractCard = () => (
    <div className="flex justify-between w-full bg-gray-100 rounded-xl py-2 px-5">
        <div className=''>
            <h4 className='text-lg font-bold'>Furnitures and costumes</h4>
            <p className='text-xs'>You have no vendors hired for this contract</p>

            <button className='bg-blue-500 text-white text-xs px-5 py-1 rounded-2xl mt-2'>Hire Now</button>
        </div>


    </div>
)
