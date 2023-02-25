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

export const VendorSidebar1 = () => {
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => {
    setSidebar((sidebar) => !sidebar)
  }

  const checkToggleSidebar = sidebar
    ? 'group w-0 px-0 md:w-0 lg:w-72 h-screen bg-gray-50 py-5 shadow lg:px-3 overflow-hidden ease-in-out duration-200'
    : 'group w-0 px-0 md:w-0 lg:w-[80px] h-screen bg-white py-5 shadow lg:px-3 overflow-hidden ease-in-out duration-200'

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
                        className="sidebar_icon bg-gray-100 text-sm py-3 px-4 rounded -ml-2 hidden group-hover:flex group-hover:rotate-180 mb-5"
                        icon={faChevronLeft}
                      ></FontAwesomeIcon>
                    </div>
                  </li>
                )}

                {sidebar && (
                  <div onClick={toggleSidebar}>
                    <FontAwesomeIcon
                      className="sidebar_icon bg-gray-100 text-sm py-3 px-4 rounded"
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

              <Link href="/vendor/projects">
                <li
                  className={
                    router.pathname == '/vendor/projects'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/projects'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faBriefcase}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/projects'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Projects
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/quotation">
                <li
                  className={
                    router.pathname == '/vendor/quotation'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/quotation'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFileShield}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/quotation'
                        ? 'text-white text-sm -ml-1'
                        : ' text-sm -ml-1'
                    }
                  >
                    Quotations
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
                    icon={faDatabase}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/services'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Services
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/singlePayment">
                <li
                  className={
                    router.pathname == '/vendor/singlePayment'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/singlePayment'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faSackDollar}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/singlePayment'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Finance
                  </h4>
                </li>
              </Link>

              <Link href="/vendor/post/addTimeline">
                <li
                  className={
                    router.pathname == '/vendor/post/addTimeline'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/vendor/post/addTimeline'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faFire}
                  />
                  <h4
                    className={
                      router.pathname == '/vendor/post/addTimeline'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Updates
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
