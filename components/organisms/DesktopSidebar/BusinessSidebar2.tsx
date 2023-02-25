import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBriefcase,
  faChartSimple,
  faChevronLeft,
  faCoffee,
  faDatabase,
  faFileContract,
  faFileShield,
  faFire,
  faGear,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'

export const BusinessSidebar2 = () => {
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => {
    setSidebar((sidebar) => !sidebar)
  }

  const checkToggleSidebar = sidebar
    ? 'group w-0 px-0 md:w-0 lg:w-72 h-screen bg-gray-50 py-5 shadow lg:px-3 overflow-hidden ease-in-out duration-200 bg-white'
    : 'group w-0 px-0 md:w-0 lg:w-[80px] h-screen bg-white py-5 shadow lg:px-3 overflow-hidden ease-in-out duration-200 bg-white'

  const router = useRouter()

  return (
    <>
      <div className={checkToggleSidebar}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <span>
              <div className="flex items-center justify-between mb-10">
                {sidebar ? (
                  <li className="list-none flex items-center">
                    <p className="p-2">
                      <Image
                        src="/images/projectivity_logo.png"
                        width={40}
                        height={40}
                      />
                    </p>
                    <h4 className="ml-3">Projectivity</h4>
                  </li>
                ) : (
                  <li className="list-none flex items-center">
                    <p className="p-2">
                      <Image
                        src="/images/projectivity_logo.png"
                        width={40}
                        height={40}
                      />
                    </p>

                    <div onClick={toggleSidebar}>
                      <FontAwesomeIcon
                        className="sidebar_icon_left bg-[#33c5f4] text-sm py-3 px-4 rounded -ml-2 hidden group-hover:flex group-hover:rotate-180 mb-5"
                        icon={faChevronLeft}
                      ></FontAwesomeIcon>
                    </div>
                  </li>
                )}

                {sidebar && (
                  <div onClick={toggleSidebar}>
                    <FontAwesomeIcon
                      className="sidebar_icon_left bg-[#33c5f4] text-sm py-3 px-4 rounded"
                      icon={faChevronLeft}
                    ></FontAwesomeIcon>
                  </div>
                )}
              </div>
            </span>

            <div>
              <Link href="/business">
                <li
                  className={
                    router.pathname == '/business'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faChartSimple}
                  ></FontAwesomeIcon>
                  <h4
                    className={
                      router.pathname == '/business'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Overview
                  </h4>
                </li>
              </Link>

              <Link href="/business/contracts">
                <li
                  className={
                    router.pathname == '/business/contracts'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/contracts'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faBriefcase}
                  />
                  <h4
                    className={
                      router.pathname == '/business/contracts'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Contracts
                  </h4>
                </li>
              </Link>

              <Link href="/business/contractor/callTime">
                <li
                  className={
                    router.pathname == '/business/contractor/callTime'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/contractor/callTime'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faBriefcase}
                  />
                  <h4
                    className={
                      router.pathname == '/business/contractor/callTime'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Time Card
                  </h4>
                </li>
              </Link>

              <Link href="/business/finance/finances">
                <li
                  className={
                    router.pathname == '/business/finance/finances'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/finance/finances'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFileShield}
                  />
                  <h4
                    className={
                      router.pathname == '/business/finance/finances'
                        ? 'text-white text-sm -ml-1'
                        : ' text-sm -ml-1'
                    }
                  >
                    Finance
                  </h4>
                </li>
              </Link>

              <Link href="/business/contractor/invoices">
                <li
                  className={
                    router.pathname == '/business/contractor/invoices'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/contractor/invoices'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faDatabase}
                  />
                  <h4
                    className={
                      router.pathname == '/business/contractor/invoices'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Invoices
                  </h4>
                </li>
              </Link>

              <Link href="/business/quotations">
                <li
                  className={
                    router.pathname == '/business/quotations'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/quotations'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faSackDollar}
                  />
                  <h4
                    className={
                      router.pathname == '/business/quotations'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Quotation
                  </h4>
                </li>
              </Link>

              <Link href="/business/employees/access">
                <li
                  className={
                    router.pathname == '/business/employees/access'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/employees/access'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFire}
                  />
                  <h4
                    className={
                      router.pathname == '/business/employees/access'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Roles
                  </h4>
                </li>
              </Link>

              <Link href="/business/documents">
                <li
                  className={
                    router.pathname == '/business/documents'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/documents'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFire}
                  />
                  <h4
                    className={
                      router.pathname == '/business/documents'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Documents
                  </h4>
                </li>
              </Link>
            </div>
          </div>

          <div>
            <Link href="/vendor/post/addTimeline">
              <li
                className={
                  router.pathname == '/vendor/post/addTimeline'
                    ? 'active_side_tab active_side_tab_bg'
                    : 'active_side_tab'
                }
                style={{
                  backgroundColor: '#0499f2',
                  backgroundImage:
                    'linear-gradient(315deg, #0499f2 0%, #26f596 74%)',
                }}
              >
                <FontAwesomeIcon
                  id="setting_animation"
                  className={
                    router.pathname == '/vendor/post/addTimeline'
                      ? 'sidebar_icon_active'
                      : 'sidebar_icon_active'
                  }
                  icon={faGear}
                />
                <h4
                  className={
                    router.pathname == '/vendor/post/addTimeline'
                      ? 'text-white'
                      : ''
                  }
                >
                  Setting
                </h4>
              </li>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
