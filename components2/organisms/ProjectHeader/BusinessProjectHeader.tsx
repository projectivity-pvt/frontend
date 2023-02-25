import { ProgressRing } from '@components/molecules/ProgressRing/ProgressRing'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import React from 'react'

export const BusinessProjectHeader = () => (
    <div>
        <h1 className="font-bold text-3xl mb-1">
            Burger Singh Advertisement
        </h1>
        <div className="flex items-center gap-0 md:gap-5 justify-between md:justify-start">
            <div>
                <p className="font-medium text-base text-gray-700 mb-1">
                    Created on: 10 October, 2021
                </p>
                <p className="font-medium flex">
                    Project Created By: <span className='ml-2 flex items-center text-blue-600 bg-blue-100 rounded-2xl px-5'>
                        <span className='flex -ml-4 mr-2 py-1'><Avatar initial="A" size={20} /></span>
                        John Doe</span>
                </p>
            </div>
        </div>
    </div>
)
