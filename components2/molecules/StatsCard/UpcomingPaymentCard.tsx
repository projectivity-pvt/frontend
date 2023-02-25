import React from "react"
import { Avatar } from '@components/atoms/Avatar/Avatar'


export const UpcomingPaymentCard = () => (
    <>
        <div className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
                <div>
                    <Avatar initial="A" size={30} />
                </div>
                <div className="ml-2">
                    <p className="text-sm font-semibold -mb-1">Food and Catering</p>
                    <p className="text-sm text-gray-500">John doe</p>
                </div>
            </div>
            <div>
                <p className="font-semibold text-sm">$180</p>
            </div>
        </div>
    </>
)




export const RecentTransactionCard = () => (
    <>
        <div className="flex items-center justify-between border-b py-2">
            <div className="flex items-center">
                <div>
                    <Avatar initial="A" size={30} />
                </div>
                <div className="ml-2">
                    <p className="text-sm font-semibold -mb-1">Food and Catering</p>
                    <p className="text-sm text-gray-500">John doe</p>
                </div>
            </div>
            <div>
                <p className="font-semibold text-sm">$180</p>
            </div>
        </div>
    </>
)