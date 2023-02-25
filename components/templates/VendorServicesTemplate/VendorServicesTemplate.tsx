import { HeaderText } from '@components/atoms/HeaderText/HeaderText'
import { NotificationPill } from '@components/molecules/NotificationPill/NotificationPill'
import { SectionHeading } from '@components/molecules/SectionHeading/SectionHeading'
import { UserPill } from '@components/molecules/UserPill/UserPill'
import { VendorEarningCard } from '@components/molecules/VendorEarningCard/VendorEarningCard'
import { VendorSidebar1 } from '@components/organisms/DesktopSidebar/VendorSidebar1'
import { PendingPaymentCard } from '@components/organisms/PendingPaymentCard/PendingPaymentCard'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { VendorChart } from '@components/organisms/VendorChart/VendorChart'
import { VendorEarningReport } from '@components/organisms/VendorEarningReport/VendorEarningReport'
import { AddNewService } from '@components/organisms/VendorServicesTable/AddNewService'
import { VendorServicesTable } from '@components/organisms/VendorServicesTable/VendorServicesTable'
import { VendorSidebarList } from '@utils//constants'
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const VendorServicesTemplate = () => {
  const [AddServiceModal, setAddServiceModal] = useState(false)

  return (
    <>
      {AddServiceModal && (
        <div className="pop_container">
          <div className="w-3/2">
            <AddNewService closeServiceModal={setAddServiceModal} />
          </div>
        </div>
      )}

      <VendorSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />
        <main className="mb-2">
          <div className="card">
            <div className="flex justify-between items-center px-5 mb-5">
              <h3 className="">All Services</h3>
              <div className="flex justify-center border-gray-400 border rounded items-center w-2/4 px-2">
                <input
                  className="text-sm border-0 outline-none w-full bg-transparent"
                  type="text"
                  placeholder='Search your services ...'
                />
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-400 text-sm"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </div>
              <button
                className="text-white bg-[#33c5f4] rounded-3xl text-xs px-5 py-2.5 hover:bg-[#0fa4ec]"
                onClick={() => {
                  setAddServiceModal(true)
                }}
              >
                Create a new Service
              </button>
            </div>

            <div className="">
              <VendorServicesTable />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
