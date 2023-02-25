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
  faCircleDollarToSlot,
  faCoffee,
  faCreditCard,
  faDatabase,
  faFileContract,
  faFileShield,
  faFire,
  faFolderOpen,
  faGear,
  faHourglass,
  faSackDollar,
} from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'

export const VendorSidebar2 = () => {
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
              <Link href="/vendor">
                <li
                  className={
                    router.pathname == '/vendor'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faChartSimple}
                  ></FontAwesomeIcon>
                  <h4
                    className={
                      router.pathname == '/vendor'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Dashboard
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/contracts">
                <li
                  className={
                    router.pathname == '/vendor/contracts'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/contracts'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFileContract}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/contracts'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Contracts
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/contractAll/page2">
                <li
                  className={
                    router.pathname == '/vendor/contractAll/page2'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/contractAll/page2'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faHourglass}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/contractAll/page2'
                        ? 'text-white text-sm ml-1'
                        : ' text-sm ml-1'
                    }
                  >
                    Call Time
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/services">
                <li
                  className={
                    router.pathname == '/vendor/services'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/services'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faCreditCard}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/services'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Expenses
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/payments">
                <li
                  className={
                    router.pathname == '/vendor/payments'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/payments'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faCircleDollarToSlot}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/payments'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Payments
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/document">
                <li
                  className={
                    router.pathname == '/vendor/document'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/document'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFolderOpen}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/document'
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

            {/* <Link href="/">
              <div
                className=" text-white bg-gray-300 flex items-center py-2.5 px-10 gap-5 mx-3 rounded-lg cursor-pointer"
                style={{
                  backgroundColor: '#0499f2',
                  backgroundImage:
                    'linear-gradient(315deg, #0499f2 0%, #26f596 74%)',
                }}
              >
                <FontAwesomeIcon
                  className="text-white text-xl"
                  icon={faGear}
                  id="setting_animation"
                />
                <h3 className="tracking-wide">Settings</h3>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
