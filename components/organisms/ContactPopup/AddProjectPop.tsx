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
import { faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'

export const AddProjectPop = ({ closeModalProject }) => (
  <>
    <div
      className="w-full m-2 shadow-lg rounded-lg text-sm bg-white p-10 pb-16 overflowY-scroll"
      style={{ maxHeight: '90%', height: 'auto' }}
    >
      <div className="flex justify-between items-center -mt-2 mb-5">
        <h3>Add your project details</h3>
        <h4 onClick={() => closeModalProject(false)} className="cursor-pointer flex justify-center items-center p-4 bg-pink-50 w-5 h-5 rounded-full">
          <FontAwesomeIcon
            className="group-hover:text-white text-pink-400 text-sm"
            icon={faXmark}
          ></FontAwesomeIcon>
        </h4>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 mr-3">
          <div className="mt-5">
            <label className="">Project Name</label> <br />
            <input
              className="mt-1 w-full text-xs rounded border-gray-300"
              type="text"
              placeholder="Project Name"
            />
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-6 mt-8 mr-3">
              <label className="">Start Date</label>
              <br />
              <input
                className="mt-1 w-full text-xs rounded border-gray-300"
                type="date"
                placeholder="Project Name"
              />
            </div>

            <div className="col-span-6 mt-8">
              <label className="">End Date</label>
              <br />
              <input
                className=" mt-1 w-full text-xs rounded border-gray-300"
                type="date"
                placeholder="Project Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-6 mt-8 mr-3">
              <label className="">Project Budget</label>
              <br />
              <input
                className="mt-1 w-full text-xs rounded border-gray-300"
                type="text"
                placeholder="Amount"
              />
            </div>

            <div className="col-span-6 mt-8">
              <div className="flex pt-5">
                <button className="rounded-lg gap-2 bg-gray-100 text-xs flex px-5 py-3 items-center">
                  Choose Location
                  <FontAwesomeIcon
                    className="group-hover:text-white text-pink-400 text-xs"
                    icon={faLocationDot}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 ml-3">
          <div className="mt-5">
            <label className="">Description</label>
            <br />
            <textarea
              className="mt-1 h-32 w-full text-xs rounded border-gray-300"
              placeholder="Project Name"
            ></textarea>
          </div>

          <div className="mt-5">
            <label className="">Address</label>
            <br />
            <input
              className="mt-1 w-full text-xs rounded border-gray-300"
              type="text"
              placeholder="Project Name"
            />
          </div>
        </div>
      </div>
    </div>
  </>
)
