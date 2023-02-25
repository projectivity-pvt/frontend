import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'

export const ProductionKycTemplate = () => {
  const [projectPop, setAddProjectPop] = useState(false)

  return (
    <>
      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          <div className="card">
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex justify-center items-center bg-green-50 p-5">
              <p className="text-sm text-green-400">
                Kindly complete your kyc and start creating projects
              </p>
            </div>

            {/* -----------------------------form---------------------- */}
            <div>
              <form>
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </h5>
                      <input
                        type="text"
                        className="w-full text-sm border-gray-300 rounded"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Company GST Number{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <input
                        type="text"
                        className="w-full text-sm border-gray-300 rounded"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Name Of Authorized Person{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <input
                        type="text"
                        className="w-full text-sm border-gray-300 rounded"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Designation Of Authorized Person{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <input
                        type="text"
                        className="w-full text-sm border-gray-300 rounded"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Proof Of Company Registration{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <select className="w-full rounded border-gray-300 text-sm">
                        <option>
                          Registration With State Govement Authority
                        </option>
                        <option>Trade Licences</option>
                        <option>GST Registration Certificate</option>
                        <option>Income Tax Assessment Order</option>
                        <option>Property tax receipt</option>
                        <option>Rent agreement with last rent receipt</option>
                        <option>Sale/ Lease Deed agreement.</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <div className='flex items-center justify-center pt-5'>
                        <input
                          type="file"
                          className="text-sm border-gray-300 rounded"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Proof Of Company Location{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <select className="w-full rounded border-gray-300 text-sm">
                        <option>
                          Registration With State Govement Authority
                        </option>
                        <option>Trade Licences</option>
                        <option>GST Registration Certificate</option>
                        <option>Income Tax Assessment Order</option>
                        <option>Property tax receipt</option>
                        <option>Rent agreement with last rent receipt</option>
                        <option>Sale/ Lease Deed agreement.</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <div className='flex items-center justify-center pt-5'>
                        <input
                          type="file"
                          className="text-sm border-gray-300 rounded"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Identity Proof Of Authorized Person{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <select className="w-full rounded border-gray-300 text-sm">
                        <option>Passport</option>
                        <option>Aadhar Card</option>
                        <option>Pan Card</option>
                        <option>Driving Licences</option>
                        <option>Ration Card</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <div className='flex items-center justify-center pt-5'>
                        <input
                          type="file"
                          className="text-sm border-gray-300 rounded"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <h5 className="mb-1">
                        Proof Of Athorized Person Location{' '}
                        <span className="text-red-500">*</span>
                      </h5>
                      <select className="w-full rounded border-gray-300 text-sm">
                        <option>Electricity Bill</option>
                        <option>Ration Card</option>
                        <option>Passport</option>
                        <option>Aadhar Card</option>
                        <option>Pan Card</option>
                        <option>Driving Licences</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="mx-2 my-5">
                      <div className='flex items-center justify-center pt-5'>
                        <input
                          type="file"
                          className="text-sm border-gray-300 rounded"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12">
                    <div className="flex flex-col items-center justify-center mx-2 my-10">
                      <button className='bg-blue-500 hover:bg-blue-600 text-white px-10 py-2.5 rounded text-sm'>
                        Submit KYC
                      </button>
                      <p className='text-red-500 bg-red-50 py-1 px-5 text-xs mt-2'>KYC Submitted Successfully, We will varify and update you shortly.</p>
                    </div>
                  </div>


                </div>
              </form>
            </div>
            {/* -----------------------------form---------------------- */}

            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
          </div>
        </main>
      </div>
    </>
  )
}
