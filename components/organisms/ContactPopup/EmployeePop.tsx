import { Avatar } from '@components/atoms/Avatar/Avatar'
import RightArrowIcon from '../../../public/images/right-arrow-circle.svg'
import { InvoiceTable } from '@components/organisms/InvoiceTable/InvoiceTable'

import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Badge,
} from '@windmill/react-ui'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowRight,
  faEdit,
  faEnvelope,
  faGlobe,
  faPhoneVolume,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

export const EmployeePopup = ({ closeModalEmployee }) => (
  <>
    <div
      className="w-full m-2 shadow-lg rounded-lg pb-5 text-sm bg-white p-10 overflowY-scroll"
      style={{ maxHeight: '80%', height: '600px' }}
    >
      <div className="pl-5 -mt-5 mb-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar size={55} initial="J" />
            <div>
              <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <FontAwesomeIcon
                  className="group-hover:text-white text-red-500 text-sm"
                  icon={faEdit}
                ></FontAwesomeIcon>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <h1 className="text-gray-500">Executive Producer</h1>
                  <FontAwesomeIcon
                    className="group-hover:text-white text-red-500 text-sm"
                    icon={faEdit}
                  ></FontAwesomeIcon>
                </div>

                <div className="flex bg-blue-500 rounded-lg">
                  <select className="border-0 outline-none text-xs text-white bg-transparent">
                    <option className="text-black">Super-Admin</option>
                    <option className="text-black">Admin</option>
                    <option className="text-black">Normal</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4
              onClick={() => closeModalEmployee(false)}
              className="flex justify-center items-center p-4 bg-red-100 w-5 h-5 rounded-full cursor-pointer"
            >
              <FontAwesomeIcon
                className="group-hover:text-white text-red-500 text-xs"
                icon={faXmark}
              ></FontAwesomeIcon>
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-6 border-r-2">
          <div className="pl-5">
            <div className="flex items-center">
              <p>
                <FontAwesomeIcon
                  className="text-gray-600 text-xl -mb-4 mr-2"
                  icon={faPhoneVolume}
                ></FontAwesomeIcon>{' '}
              </p>
              <div className="mt-5">
                <h6 className="text-xs text-gray-500">Contact</h6>
                <input
                  className="mt-1 border-gray-300 rounded h-8 text-xs font-semibold"
                  type="text"
                  value="90812718291"
                />
              </div>
            </div>

            <div className="flex items-center">
              <p>
                <FontAwesomeIcon
                  className="text-gray-600 text-xl -mb-4 mr-2"
                  icon={faEnvelope}
                ></FontAwesomeIcon>{' '}
              </p>
              <div className="mt-5">
                <h6 className="text-xs text-gray-500">Email</h6>
                <input
                  className="mt-1 border-gray-300 rounded h-8 text-xs font-semibold"
                  type="text"
                  value="90812718291"
                />
              </div>
            </div>

            <div className="flex items-center">
              <p>
                <FontAwesomeIcon
                  className="text-gray-600 text-xl -mb-4 mr-2"
                  icon={faGlobe}
                ></FontAwesomeIcon>{' '}
              </p>
              <div className="mt-5">
                <h6 className="text-xs text-gray-500">Password</h6>
                <input
                  className="mt-1 border-gray-300 rounded h-8 text-xs font-semibold"
                  type="text"
                  value="90812718291"
                />
              </div>
            </div>

            <div className="flex items-center">
              <p>
                <FontAwesomeIcon
                  className="text-gray-600 text-xl -mb-4 mr-2"
                  icon={faGlobe}
                ></FontAwesomeIcon>{' '}
              </p>
              <div className="mt-5">
                <h6 className="text-xs text-gray-500">Confirm Password</h6>
                <input
                  className="mt-1 border-gray-300 rounded h-8 text-xs font-semibold"
                  type="text"
                  value="90812718291"
                />
              </div>
            </div>

            <div className='mt-5 ml-10'>
                <p className='text-gray-400 text-xs'>Created On</p>
                <p>12/04/2022</p>
            </div>

            <div className="flex gap-5 mt-5">
              <button className="text-xs py-2 px-5 text-red-700 bg-red-100 rounded-3xl">
                Remove User
              </button>
              <button className="text-xs py-2 px-5 text-white bg-green-500 rounded-3xl">
                Save{' '}
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="pl-10 mt-5">
            <div>
              <h5>Project Permissions</h5>
              <button className="rounded-3xl text-xs bg-gray-300 py-2 px-5 mt-2">
                Buger Singh Advertisement
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-700 text-sm ml-2"
                  icon={faCircleArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>

            <div>
              <button className="rounded-3xl text-xs bg-gray-300 py-2 px-5 mt-2">
                KGG Laptop Advertisement
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-700 text-sm ml-2"
                  icon={faCircleArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>

            <div>
              <button className="rounded-3xl text-xs bg-gray-300 py-2 px-5 mt-2">
                Buger Singh Advertisement
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-700 text-sm ml-2"
                  icon={faCircleArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>

            <div>
              <button className="rounded-3xl text-xs bg-gray-300 py-2 px-5 mt-2">
                Buger Singh Advertisement
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-700 text-sm ml-2"
                  icon={faCircleArrowRight}
                ></FontAwesomeIcon>
              </button>
            </div>

            <div className="mt-5 flex">
              <button className="text-black bg-blue-400 font-semibold rounded-xl py-2 px-5 text-xs">
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
