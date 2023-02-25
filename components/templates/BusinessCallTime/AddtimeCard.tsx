import { Avatar } from '@components/atoms/Avatar/Avatar'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AddTimecardTable } from '../ProductionSingleProjectContracts/AddTimecardTable'
import AddTimecardTableTabs from './AddTimecardTableTabs'

export const AddTimeCard = ({ closeModal8 }) => (
  <>
    <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
      <div className="flex justify-between p-5">
        <h2>Add Time Card for ... </h2>
        <button
          className="text-white bg-red-600 px-3 py-1 rounded"
          onClick={() => closeModal8(false)}
        >
          X
        </button>
      </div>

      {/* ------------------------------------- */}
      <div className='p-5'>
        <div>
          <p className="text-xs text-green-500 bg-green-50 py-4 px-5">
            To set a same call time for multiple vendors, first select the
            vendors and click on schedule Time button.
          </p>
        </div>

        <div className="mt-5">
          <h5 className="mb-1">Date</h5>
          <input className="border-gray-300 rounded-2xl text-xs" type="date" />
        </div>

        <div className='mt-5'>
            <AddTimecardTableTabs />
        </div>

        <div>
            <button
            className='text-white bg-green-400 rounded-full px-5 py-2 text-xs'
            >Create Call Time</button>
        </div>
      </div>
      {/* ------------------------------------- */}
    </div>
  </>
)
