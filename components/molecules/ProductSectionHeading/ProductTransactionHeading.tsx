import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import ArrwIcon from '../../../public/images/arrow/arrow-right.svg'


// interface Props {
//   viewAll: boolean
//   viewAllText: string
//   viewAllLink: string
// }

export const ProductTransactionHeading = () => (
    <div className="py-2 flex items-center">
        <h2 className="font-medium text-gray-700 text-lg">Latest Transactions</h2>
        <span className='ml-2'><ArrwIcon height={16} width={16} /></span>
    </div>
)
