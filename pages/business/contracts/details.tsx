import React from 'react'
import { Avatar } from '@components/atoms/Avatar/Avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'

function details() {
  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          <div className="card">
            {/* ----------main-------- */}

            <div>
              <div className="pl-5 mb-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar size={55} initial="J" />
                    <div>
                      <h2>John Doe</h2>
                      <h3 className="-mt-1">Designation</h3>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <h3>
                    Catering and food Services{' '}
                    <span className="text-xs rounded-2xl py-1.5 px-4 bg-blue-500 text-white ml-2">
                      CREW
                    </span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-6 border-r-2">
                  <div className="pl-5">
                    <div className="mt-5">
                      <h6 className="text-xs text-gray-500">Contact</h6>
                      <h5 className="text-sm font-semibold">90812718291</h5>
                    </div>

                    <div className="mt-5">
                      <h6 className="text-xs text-gray-500">Email</h6>
                      <h5 className="text-sm font-semibold">
                        the.best.vendor@gmail.com
                      </h5>
                    </div>

                    <div className="mt-5">
                      <h6 className="text-xs text-gray-500">Location</h6>
                      <h5 className="text-sm font-semibold">
                        Navi Mumbai, 123121, Mumbai Oshiwara
                      </h5>
                    </div>

                    <div className="mt-5">
                      <h6 className="text-xs text-gray-500">Member Since</h6>
                      <h5 className="text-sm font-semibold">
                        12 October, 2021
                      </h5>
                    </div>

                    <div className="mt-5">
                      <h6 className="text-xs text-gray-500">Hired on </h6>
                      <h5 className="text-sm font-semibold">12/04/2022</h5>
                    </div>

                    {/* -------------ratings section-------------- */}
                    <div className="mt-5">
                      <h4 className="mb-2">Ratings</h4>

                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                          <p className="w-40 text-xs">Order Completion Rate</p>
                          <p className="text-xs">100%</p>
                          <input type="range" />
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="w-40 text-xs">Delivered on time</p>
                          <p className="text-xs">100%</p>
                          <input type="range" />
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="w-40 text-xs">
                            Customer Satisfaction Rate
                          </p>
                          <p className="text-xs">100%</p>
                          <input type="range" />
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="w-40 text-xs">Recommendation Rate</p>
                          <p className="text-xs">100%</p>
                          <input type="range" />
                        </div>
                      </div>
                    </div>
                    {/* -------------ratings section-------------- */}

                    <div className="flex gap-5 mt-5">
                      <button className="text-xs py-2 px-5 text-red-700 bg-red-100 rounded-3xl">
                        Remove From Project
                      </button>
                      <button className="text-xs py-2 px-5 text-white bg-green-500 rounded-3xl">
                        Chat{' '}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="pl-10 mt-5">
                    <div>
                      <p className="text-xs">Rate</p>
                      <div className="flex items-center gap-2">
                        <h4>
                          <b>₹ 5000</b>
                        </h4>
                        <h6 className="text-xs">Per Day</h6>
                      </div>
                    </div>

                    <div className="mt-2">
                      <h5>Documents</h5>
                      <button className="rounded-3xl text-xs bg-gray-300 py-2 px-5 mt-2">
                        Go To Documents
                      </button>
                    </div>

                    <div className="mt-5">
                      <h5>Internal Comments</h5>
                      <div className="flex flex-col gap-3 mt-2">
                        <div className="flex items-start gap-2">
                          <Avatar size={30} initial="J" />
                          <div className="bg-blue-500 text-white px-5 pb-1 pt-1 rounded-lg flex flex-col justify-between">
                            <p className="text-sm">
                              vendor’s people coming late
                            </p>
                            <p
                              className="ml-auto mt-5"
                              style={{ fontSize: '10px' }}
                            >
                              12th January, 2022 11:32 pm
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Avatar size={30} initial="J" />
                          <div className="bg-blue-500 text-white px-5 pb-1 pt-1 rounded-lg flex flex-col justify-between">
                            <p className="text-sm">
                              vendor’s people coming late
                            </p>
                            <p
                              className="ml-auto mt-5"
                              style={{ fontSize: '10px' }}
                            >
                              12th January, 2022 11:32 pm
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex">
                        <button className="bg-green-400 text-xs rounded-3xl px-5 py-2 ml-auto">
                          Post
                        </button>
                      </div>

                      {/* -------------ratings section-------------- */}
                      <div className="mt-3">
                        <div className="flex flex-col gap-5">
                          <div className="flex items-center gap-2">
                            <p className="w-40 text-xs">Quality assurance</p>
                            <p className="text-xs">100%</p>
                            <input type="range" />
                          </div>

                          <div className="flex items-center gap-2">
                            <p className="w-40 text-xs">Customer Service</p>
                            <p className="text-xs">100%</p>
                            <input type="range" />
                          </div>

                          <div className="flex items-center gap-2">
                            <p className="w-40 text-xs">Agility</p>
                            <p className="text-xs">100%</p>
                            <input type="range" />
                          </div>
                        </div>
                      </div>
                      {/* -------------ratings section-------------- */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------main-------- */}
          </div>
        </main>
      </div>
    </>
  )
}

export default details
