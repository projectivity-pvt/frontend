import React, { useState } from 'react'
import { TopHeaderBar } from '@components/organisms/TopHeaderBar/TopHeaderBar'
import { BusinessSidebar1 } from '@components/organisms/DesktopSidebar/BusinessSidebar1'
import { VendorProjectCard } from 'components2/organisms/VendorProjectCard/VendorProjectCard'
import { ProjectCalendar } from 'components2/organisms/VendorChart/VendorProjectChart/VendorProjectCalendar'
import TableTabs from 'components2/molecules/TableTabs/TableTabs'
import ProjectTabs from 'components2/molecules/TableTabs/ProjectTabs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { ContactPopup } from '@components/organisms/ContactPopup/ContactPopup'
import { AddProjectPop } from '@components/organisms/ContactPopup/AddProjectPop'
import NewVendorServicesTabs from 'components2/molecules/TableTabs/NewVendorServicesTabs'
import { VendorProfileCard } from '@components/organisms/VendorProfileCard/VendorProfileCard'
import VendorDetailsInfo from '@components/organisms/VendorProfileCard/VendorDetailsInfo'
import Link from 'next/link'
// import SimpleReactCalendar from 'simple-react-calendar';

export const ProductionNewVendorServiceTemplate = () => {
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
          {/* -------------header------------ */}
          <div className="card">
            {/* ------------breadcrumb------------ */}
            <div className="flex items-center gap-2 text-xs mb-5">
              <Link href="/vendor">
                <p>Hire</p>
              </Link>
              <p>
                <FontAwesomeIcon
                  className="group-hover:text-white text-gray-500 text-xs"
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>
              <Link href="/vendor">
                <p className="text-blue-500 font-semibold">John Doe</p>
              </Link>
            </div>
            {/* ------------breadcrumb------------ */}

            <div className="flex justify-between items-start">
              <div>
                <p className="text-2xl">Any Time Services</p>
                <div className="flex items-center gap-3 mt-3 mb-3">
                  <button className="text-white bg-purple-500 text-xs rounded-2xl py-1.5 w-28 px-3 border-0 outline-none">
                    Connect
                  </button>
                  <button className="text-white bg-purple-500 text-xs rounded-2xl py-1.5 w-28 px-3 border-0 outline-none">
                    Refer
                  </button>
                </div>
                <p className="text-xs">
                  Christopher Doyle , Sanjay Leela Bhansali , Dharma Production
                  and 10 others have referred{' '}
                </p>
              </div>
              <div>
                <button className="text-white bg-blue-600 text-xs rounded-2xl py-2.5 px-10 border-0 outline-none">
                 <Link href="/business/newVendorService/getcatalog">Get Quotation</Link> 
                </button>
              </div>
            </div>
          </div>
          {/* -------------header------------ */}

          {/* -------------middle------------ */}
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="card">
                <NewVendorServicesTabs />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="card">
                <VendorProfileCard />
              </div>
              <div className="card mt-5">
                <VendorDetailsInfo />
              </div>
            </div>
          </div>

          {/* -------------middle------------ */}
        </main>
      </div>
    </>
  )
}
