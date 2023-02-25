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
// import SimpleReactCalendar from 'simple-react-calendar';

export const ProductionProjectTemplate = () => {
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
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-7 lg:col-span-9">
              <div className="card" style={{ height: '400px' }}>
                <h3 className="mb-4">Near Due date</h3>
                <div className="flex items-center gap-4 overflow-auto pb-2">
                  <VendorProjectCard />
                  <VendorProjectCard />
                  <VendorProjectCard />
                  <VendorProjectCard />
                  <VendorProjectCard />
                  <VendorProjectCard />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-3">
              <div className="card" style={{ height: '400px' }}>
                <h3>Calendar</h3>
                <ProjectCalendar />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => {
                  setAddProjectPop(true)
                }}
                className="bg-blue-600 text-white text-xs rounded-md py-2 px-5"
              >
                New Contract
              </button>
            </div>

            <div className="mb-4">
              <ProjectTabs />
            </div>
          </div>

          {/* ----------------no project image---------------- */}
          <div className="card">
            <div className="flex justify-center">
              <img src="/images/empty_project.png" style={{ width: '60%' }} />
            </div>
            <div className="flex flex-col items-center gap-2 -mt-10 mb-10">
              <h5>
                <b>Get started by creating your first project.</b>
              </h5>
              <button className="w-52 flex items-center gap-2 justify-center text-xs text-blue-500 bg-blue-100 rounded-3xl py-2 px-5">
                <FontAwesomeIcon
                  className="text-blue-500 text-lg"
                  icon={faCirclePlus}
                ></FontAwesomeIcon>
                Create a new Project
              </button>
            </div>
          </div>
          {/* ----------------no project image---------------- */}
        </main>
      </div>
    </>
  )
}
