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

export const VendorServicesTemplate = ({ apolloClient }) => {
  const [AddServiceModal, setAddServiceModal] = useState(false)

  const query = gql`
      query {
        getVendorPosts {
          description
          images
          likes
          postId
          title
        }
    }
  `

  const allService = async () => {
    const data = await apolloClient.query({
      query,
    })
    console.log(data)
    return data
  }

  const { loading, error, data } = useQuery(query)

  console.log('ajay')
  console.log(data)

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
              {/* -----------mapping----------- */}
              <div>
                {data && (
                  <>
                    {data.getVendorPosts.map((getVendorPost) => (
                      <p>{getVendorPost.title}1</p>
                    ))}
                  </>
                )}
              </div>
              {/* -----------mapping----------- */}
              <button
                className="text-white bg-blue-500 rounded-3xl text-xs px-3 py-2"
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
