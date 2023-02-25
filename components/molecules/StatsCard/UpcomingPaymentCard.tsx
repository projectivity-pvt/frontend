import React, { useState } from 'react'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { SingleProjectPop } from '@components/organisms/ContactPopup/SingleProjectPop'

export const UpcomingPaymentCard = () => {
  const [openSingleProjectPop, setOpenSingleProjectPop] = useState(false)

  return (
    <>
      {openSingleProjectPop && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-3/5">
            <SingleProjectPop closeModal5={setOpenSingleProjectPop} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <div
        onClick={() => {
          setOpenSingleProjectPop(true)
        }}
        className="flex items-center justify-between border-b border-gray-100 py-3 cursor-pointer"
      >
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
}

export const RecentTransactionCard = () => (
  <>
    <div className="flex items-center justify-between border-b border-gray-100 py-3">
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

export const ProjectMemberCard = () => (
  <>
    <h4>
      <b>Project Members</b>
    </h4>
    <p className="text-sm">
      These members will be notified of this project’s activity
    </p>

    {/* ---------------------row 1--------------------- */}
    <div className="flex items-center p-1 pr-5 rounded-3xl border gap-2 w-64 mt-2 truncate">
      <Avatar size={35} initial="S" />
      <div className="truncate">
        <p className="truncate w-full">Ariana Grande</p>
        <h5 className="truncate w-full text-xs -mt-1">
          Executive ProducerExecutive Producer Executive Producer
        </h5>
      </div>
    </div>
    {/* ---------------------row 1--------------------- */}

    {/* ---------------------row 1--------------------- */}
    <div className="flex items-center p-1 pr-5 rounded-3xl border gap-2 w-64 mt-2 truncate">
      <Avatar size={35} initial="S" />
      <div className="truncate">
        <p className="truncate w-full">Ariana Grande</p>
        <h5 className="truncate w-full text-xs -mt-1">
          Executive ProducerExecutive Producer Executive Producer
        </h5>
      </div>
    </div>
    {/* ---------------------row 1--------------------- */}

    {/* ---------------------row 1--------------------- */}
    <div className="flex items-center p-1 pr-5 rounded-3xl border gap-2 w-64 mt-2 truncate">
      <Avatar size={35} initial="S" />
      <div className="truncate">
        <p className="truncate w-full">Ariana Grande</p>
        <h5 className="truncate w-full text-xs -mt-1">
          Executive ProducerExecutive Producer Executive Producer
        </h5>
      </div>
    </div>
    {/* ---------------------row 1--------------------- */}

    <div className="mt-5">
      <button className="bg-blue-500 text-xs text-white rounded-3xl py-2 px-5 flex items-center gap-2">
        <FontAwesomeIcon className="text-white text-xl" icon={faCirclePlus} />
        Add Project Member
      </button>
    </div>
  </>
)

export const ProjectLocationCard = () => (
  <>
    <div className="mt-10">
      <div className="bg-green-300 h-48 flex items-center rounded-lg justify-center mt-2">
        Google Map
      </div>

      <h6 className="mt-2">Address: 21 cloverfield lane, 201010, New Delhi</h6>
    </div>
  </>
)
