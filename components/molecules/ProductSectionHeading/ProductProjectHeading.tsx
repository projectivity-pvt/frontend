import React from 'react'
import ArrwIcon from '../../../public/images/arrow/arrow-right.svg'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

// interface Props {
//   viewAll: boolean
//   viewAllText: string
//   viewAllLink: string
// }

export const ProductProjectHeading = () => (
    <div className="py-2 flex items-center">
        <h2 className="font-bold text-xl">Latest Projects</h2>
        <span className='ml-2'><ArrwIcon height={16} width={16} /></span>
    </div>
)
