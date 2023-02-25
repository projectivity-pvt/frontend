import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { VendorProjectCard } from 'components2/organisms/VendorProjectCard/VendorProjectCard'
import { ProjectCalendar } from 'components2/organisms/VendorChart/VendorProjectChart/VendorProjectCalendar'
import TableTabs from 'components2/molecules/TableTabs/TableTabs'
import ProjectTabs from 'components2/molecules/TableTabs/ProjectTabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { ContactPopup } from '@components/organisms/ContactPopup/ContactPopup'
import { AddProjectPop } from '@components/organisms/ContactPopup/AddProjectPop'
import HireContractorGig from './HireContractorGig'
import CameraServiceGig from './CameraServiceGig'
import CameraServiceInContactGig from './CameraServiceInContactGig'
import LightServiceGig from './LightServiceGig'
import SecurityServiceGig from './SecurityServiceGig'
import { BusinessSidebar2 } from '@components/organisms/DesktopSidebar/BusinessSidebar2'
// import SimpleReactCalendar from 'simple-react-calendar';

export const ProductionHireTemplate = () => {
  const [projectPop, setAddProjectPop] = useState(false)

  return (
    <>
      {projectPop && (
        <div className="pop_container" style={{ alignItems: 'center' }}>
          <div className="w-5/6 lg:w-3/5">
            <AddProjectPop closeModalProject={setAddProjectPop} />
            <p className="h-5"></p>
          </div>
        </div>
      )}

      <BusinessSidebar1 />
      <div className="flex flex-col flex-1 w-full overflow-y-auto background">
        <TopHeaderBar />

        <main className="mb-2">
          <div className="card">
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex items-center justify-between">
              <h1 className="text-gray-700 text-lg">
                <b>Hire the best contractors for your project</b>
              </h1>
              <input
                className="rounded-2xl px-3 py-2 w-64 border-2 border-gray-200 text-xs"
                type="text"
                placeholder="Search..."
              />
            </div>

            {/* ------------------gigs------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <HireContractorGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <HireContractorGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <HireContractorGig />
              </div>
            </div>
            {/* ------------------gigs------------- */}
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}

            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex items-center justify-between mt-10">
              <h1 className="text-gray-700 text-lg">
                <b>Hire for Camera services</b>
              </h1>
              <input
                className="rounded-2xl px-3 py-2 w-64 border-2 border-gray-200 text-xs"
                type="text"
                placeholder="Search..."
              />
            </div>

            {/* ------------------gigs------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceGig />
              </div>
            </div>
            {/* ------------------gigs------------- */}
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}

            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex items-center justify-between mt-10">
              <h1 className="text-gray-700 text-lg">
                <b>Camera Services in Contact</b>
              </h1>
              <input
                className="rounded-2xl px-3 py-2 w-64 border-2 border-gray-200 text-xs"
                type="text"
                placeholder="Search..."
              />
            </div>

            {/* ------------------gigs------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceInContactGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceInContactGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <CameraServiceInContactGig />
              </div>
            </div>
            {/* ------------------gigs------------- */}
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}

            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex items-center justify-between mt-10">
              <h1 className="text-gray-700 text-lg">
                <b>Hire for Lights services</b>
              </h1>
              <input
                className="rounded-2xl px-3 py-2 w-64 border-2 border-gray-200 text-xs"
                type="text"
                placeholder="Search..."
              />
            </div>

            {/* ------------------gigs------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <LightServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <LightServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <LightServiceGig />
              </div>
            </div>
            {/* ------------------gigs------------- */}
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}

            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
            <div className="flex items-center justify-between mt-10">
              <h1 className="text-gray-700 text-lg">
                <b>Hire for Security services</b>
              </h1>
              <input
                className="rounded-2xl px-3 py-2 w-64 border-2 border-gray-200 text-xs"
                type="text"
                placeholder="Search..."
              />
            </div>

            {/* ------------------gigs------------- */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <SecurityServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <SecurityServiceGig />
              </div>

              <div className="col-span-12 lg:col-span-4 md:col-span-6">
                <SecurityServiceGig />
              </div>
            </div>
            {/* ------------------gigs------------- */}
            {/* ------------------------------------------hiring gig--------------------------------------------------------- */}
          </div>
        </main>
      </div>
    </>
  )
}
