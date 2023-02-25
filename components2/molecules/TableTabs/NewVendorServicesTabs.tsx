import React, { useState } from 'react'
import { VendorContractTable } from '@components/organisms/VendorContractsTable/VendorContractTable'
import { BusinessProjectTable } from 'components2/organisms/table/BusinessProjectTable'
import OverviewTab from '@components/templates/ProductionNewVendorServiceTemplate/OverviewTab'
import { UpdatesTab } from '@components/templates/ProductionNewVendorServiceTemplate/UpdatesTab'
import { CatalogTab } from '@components/templates/ProductionNewVendorServiceTemplate/CatalogTab'

export default function NewVendorServicesTabs() {
  const [tab, setTab] = useState(1)
  // const [content, setContent] = useState(1);

  const action = (index) => {
    setTab(index)
    console.log(index)
  }

  return (
    <>
      <div className="tabs">
        <div
          onClick={() => action(1)}
          className={`${tab === 1 ? 'tab active_tab' : 'tab'}`}
        >
          Overview
        </div>
        <div
          onClick={() => action(2)}
          className={`${tab === 2 ? 'tab active_tab' : 'tab'}`}
        >
          Updates
        </div>
        <div
          onClick={() => action(3)}
          className={`${tab === 3 ? 'tab active_tab' : 'tab'}`}
        >
          Catalogue
        </div>
      </div>

      <div className="contents">
        <div className="mt-5">
          <div
            className={`${tab === 1 ? 'content active_content' : 'content'}`}
          >
            <OverviewTab />
          </div>
          <div
            className={`${tab === 2 ? 'content active_content' : 'content'}`}
          >
            <UpdatesTab />
          </div>
          <div
            className={`${tab === 3 ? 'content active_content' : 'content'}`}
          >
            <CatalogTab />
          </div>
        </div>
      </div>
    </>
  )
}
