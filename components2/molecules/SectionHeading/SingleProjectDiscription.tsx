import React from 'react'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'

// interface Props {
//   viewAll: boolean
//   viewAllText: string
//   viewAllLink: string
// }

export const SingleProjectDiscription = () => (
  <div className="py-0 -mb-2 flex items-center justify-between">

    <div className='flex flex-col w-full h-50'>
      <h2 className="font-bold text-xl mb-2">Description</h2>
      <textarea className='resize-none border-gray-200 rounded-xl h-32'>
        This contracts requirement. Can be in tabular form if need to
        add item and quantity (depending upon the nature of the contract
        ) Discussion neededThis contracts requirement. Can be in tabular form if need to
        add item and quantity
      </textarea>
    </div>

  </div>
)
