import { Avatar } from '@components/atoms/Avatar/Avatar'
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Badge,
  Button,
} from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Moment from 'moment'
import Image from 'next/image'

export const VendorCatalogTable = () => {
  const [catData, setCatData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8050/catalogue/all').then((response) => {
      setCatData(response.data.catalogue)
      console.log(response.data.catalogue)
    })
  }, [])

  return (
    <>
      <div>
        <TableContainer className="ring-0">
          <Table>
            <TableHeader className="shadow">
              <TableRow className="bg-[#33c5f4] border-2 border-[#33c5f4] shadow-lg text-white rounded-lg">
                <TableCell>
                  <div className=" text-sm font-normal capitalize">Name</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize">
                    Model No.
                  </div>
                </TableCell>
                <TableCell>
                  <div className=" text-center text-sm font-normal capitalize">
                    Quantity
                  </div>
                </TableCell>
                <TableCell>
                  <div className=" text-center text-sm font-normal capitalize">
                    Status
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize">Pricing</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize">
                    Pricing Model
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize">Image</div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize">
                    Created At
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-normal capitalize text-center">
                    Actions
                  </div>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* --------------------mapping--------------- */}
              {catData.map((value) => {
                return (
                  <>
                    <Link href={`/vendor/services/${value._id}`}>
                      <TableRow
                        className="cursor-pointer"
                        style={{ background: '#fff' }}
                      >
                        <TableCell>
                          <p className="w-52 truncate text-sm text-black py-1 align-left">
                            {value.name ? value.name : '--'}
                          </p>
                        </TableCell>

                        <TableCell>
                          <div className="text-gray-500 text-sm text-center">
                            {value.model_no ? value.model_no : '--'}
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center justify-center">
                            <p className="text-red-500 py-1 text-sm text-center">
                              {value.quantity ? value.quantity : '--'}
                            </p>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="w-46 text-gray-500 text-sm text-center">
                            Not Available
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="w-46 text-gray-500 text-sm text-center">
                            {value.rate ? value.rate : '--'}
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="w-46 text-gray-500 text-sm text-center">
                            {value.rate_for ? value.rate_for : '--'}
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="text-gray-500 text-sm text-center">
                            <img
                              src={value.attachment ? value.attachment : "--"}
                              height={40}
                              width={40}
                            />
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="text-gray-500">
                            <p className="text-sm text-gray-500 align-left">
                              {Moment(value.createdAt).format('Do MMM  Y')}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center py-1 gap-3">
                            <button className="text-xs bg-green-400 hover:bg-green-500 text-white rounded-2xl py-2 px-5">
                              Update
                            </button>
                            <button className="text-xs bg-red-400 hover:bg-red-500 text-white rounded-2xl py-2 px-5">
                              Delete
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </Link>
                  </>
                )
              })}
              {/* --------------------mapping--------------- */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
