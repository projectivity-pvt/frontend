import { Avatar } from '@components/atoms/Avatar/Avatar'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function OverviewTab() {
  return (
    <>
      <div className="flex flex-col text-sm gap-8">
        <div>
          <h5 className="mb-2">
            <b>Service Details</b>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet accumsan, eu aliquam, non et. Tortor commodo est habitant
            suscipit volutpat. Nulla sit nibh sagittis nisi accumsan, fermentum.{' '}
          </p>
        </div>

        <div>
          <h5 className="mb-2">
            <b>About John Doe</b>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet accumsan, eu aliquam, non et. Tortor commodo est habitant
            suscipit volutpat. Nulla sit nibh sagittis nisi accumsan, fermentum.{' '}
          </p>
        </div>

        {/* -------------------------------------- */}
        <div className="-mb-5">
          <h5>
            <b>
              Projects Delivered by <span>Vendor Name</span>
            </b>
          </h5>
        </div>

        {/* ----------------------card-1----------------- */}
        <div className="bg-indigo-50 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Burger Singh Ad shoot</h4>
            <button className="text-green-500 text-xs bg-green-200 rounded-2xl px-8 py-2.5">
              <b>
                {' '}
                Projectivity Verified{' '}
                <FontAwesomeIcon
                  className="text-md ml-1 text-green-500"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
              </b>
            </button>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="mb-1">
                <span className="text-gray-500">Contract:</span> Camera services
              </p>
              <div className="flex items-center gap-2">
                <Avatar size={20} initial="j" />
                <p className="text-xs">Dharma Productions</p>
              </div>
            </div>
            <div>
              <p className="text-sm">12 July, 2021</p>
            </div>
          </div>
        </div>
        {/* ----------------------card-1----------------- */}

        {/* ----------------------card-1----------------- */}
        <div className="bg-indigo-50 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Burger Singh Ad shoot</h4>
            <button className="text-green-500 text-xs bg-green-200 rounded-2xl px-8 py-2.5">
              <b>
                {' '}
                Projectivity Verified{' '}
                <FontAwesomeIcon
                  className="text-md ml-1 text-green-500"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
              </b>
            </button>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="mb-1">
                <span className="text-gray-500">Contract:</span> Camera services
              </p>
              <div className="flex items-center gap-2">
                <Avatar size={20} initial="j" />
                <p className="text-xs">Dharma Productions</p>
              </div>
            </div>
            <div>
              <p className="text-sm">12 July, 2021</p>
            </div>
          </div>
        </div>
        {/* ----------------------card-1----------------- */}

        {/* ----------------------card-1----------------- */}
        <div className="bg-indigo-50 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Burger Singh Ad shoot</h4>
            <button className="text-green-500 text-xs bg-green-200 rounded-2xl px-8 py-2.5">
              <b>
                {' '}
                Projectivity Verified{' '}
                <FontAwesomeIcon
                  className="text-md ml-1 text-green-500"
                  icon={faCircleCheck}
                ></FontAwesomeIcon>
              </b>
            </button>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="mb-1">
                <span className="text-gray-500">Contract:</span> Camera services
              </p>
              <div className="flex items-center gap-2">
                <Avatar size={20} initial="j" />
                <p className="text-xs">Dharma Productions</p>
              </div>
            </div>
            <div>
              <p className="text-sm">12 July, 2021</p>
            </div>
          </div>
        </div>
        {/* ----------------------card-1----------------- */}

        <div className="-mb-8 mt-5">
          <h4>
            <b>Internal Comments</b>
          </h4>
        </div>

        {/* ----------------------internal comment-1----------------- */}
        <div className="flex flex-col gap-3 mt-2 bg-blue-50 py-10 px-5 rounded-lg">
          <div className="flex items-start gap-2">
            <Avatar size={30} initial="J" />
            <div
              className="bg-blue-500 text-white px-5 pb-1 pt-1 rounded-lg flex flex-col justify-between"
              style={{ width: '70%' }}
            >
              <p className="text-sm">vendor’s people coming late</p>
              <p className="ml-auto mt-5" style={{ fontSize: '10px' }}>
                12th January, 2022 11:32 pm
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Avatar size={30} initial="J" />
            <div
              className="bg-blue-500 text-white px-5 pb-1 pt-1 rounded-lg flex flex-col justify-between"
              style={{ width: '70%' }}
            >
              <p className="text-sm">vendor’s people coming late</p>
              <p className="ml-auto mt-5" style={{ fontSize: '10px' }}>
                12th January, 2022 11:32 pm
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-400 text-white rounded-2xl text-xs py-1.5 px-5 hover:bg-green-500">
              See All{' '}
            </button>
          </div>
        </div>

        {/* ----------------------internal comment-1----------------- */}

        <div className='mt-5 -mb-5'>
          <h4>
            <b>Reviews and ratings</b>
          </h4>
        </div>

        {/* ------------------review 1---------------- */}
        <div>
          <div className="flex items-center gap-2">
            <Avatar size={35} initial="j" />
            <div className="flex flex-col justify-center">
              <p className="text-sm">Lady Jane doe</p>
              <p>
                <FontAwesomeIcon
                  className="text-sm ml-1 text-green-500"
                  icon={faStar}
                ></FontAwesomeIcon>
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet accumsan, eu aliquam, non et. Tortor commodo est habitant
            suscipit volutpat. Nulla sit nibh sagittis nisi accumsan, fermentum.{' '}
          </p>
        </div>
        {/* ------------------review 1---------------- */}

        {/* ------------------review 1---------------- */}
        <div>
          <div className="flex items-center gap-2">
            <Avatar size={35} initial="j" />
            <div className="flex flex-col justify-center">
              <p className="text-sm">Lady Jane doe</p>
              <p>
                <FontAwesomeIcon
                  className="text-sm ml-1 text-green-500"
                  icon={faStar}
                ></FontAwesomeIcon>
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet accumsan, eu aliquam, non et. Tortor commodo est habitant
            suscipit volutpat. Nulla sit nibh sagittis nisi accumsan, fermentum.{' '}
          </p>
        </div>
        {/* ------------------review 1---------------- */}

        {/* ------------------review 1---------------- */}
        <div>
          <div className="flex items-center gap-2">
            <Avatar size={35} initial="j" />
            <div className="flex flex-col justify-center">
              <p className="text-sm">Lady Jane doe</p>
              <p>
                <FontAwesomeIcon
                  className="text-sm ml-1 text-green-500"
                  icon={faStar}
                ></FontAwesomeIcon>
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            imperdiet accumsan, eu aliquam, non et. Tortor commodo est habitant
            suscipit volutpat. Nulla sit nibh sagittis nisi accumsan, fermentum.{' '}
          </p>
        </div>
        {/* ------------------review 1---------------- */}
      </div>
    </>
  )
}

export default OverviewTab
