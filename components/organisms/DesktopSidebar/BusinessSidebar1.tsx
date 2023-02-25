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
  faIdCardClip,
  faPenNib,
  faSackDollar,
  faSign,
  faUserShield,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { faDashboard } from '@fortawesome/free-solid-svg-icons'

export const BusinessSidebar1 = () => {
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
                    Dashboard
                  </h4>
                </li>
              </Link>

              <Link href="/business/projects">
                <li
                  className={
                    router.pathname == '/business/projects'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/projects'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faBriefcase}
                  />
                  <h4
                    className={
                      router.pathname == '/business/projects'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Projects
                  </h4>
                </li>
              </Link>

              <Link href="/business/finance">
                <li
                  className={
                    router.pathname == '/business/finance'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/finance'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faDatabase}
                  />
                  <h4
                    className={
                      router.pathname == '/business/finance'
                        ? 'text-white text-sm -ml-1'
                        : ' text-sm -ml-1'
                    }
                  >
                    Finance
                  </h4>
                </li>
              </Link>

              <Link href="/business/hire">
                <li
                  className={
                    router.pathname == '/business/hire'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/hire'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faUserTie}
                  />
                  <h4
                    className={
                      router.pathname == '/business/hire'
                        ? 'text-white text-sm'
                        : ' text-sm'
                    }
                  >
                    Hire
                  </h4>
                </li>
              </Link>

              <Link href="/business/contact">
                <li
                  className={
                    router.pathname == '/business/contact'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/contact'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faIdCardClip}
                  />
                  <h4
                    className={
                      router.pathname == '/business/contact'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Contacts
                  </h4>
                </li>
              </Link>

              <Link href="/business/contracts/signIn">
                <li
                  className={
                    router.pathname == '/business/contracts/signIn'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/contracts/signIn'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faPenNib}
                  />
                  <h4
                    className={
                      router.pathname == '/business/contracts/signIn'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Sign-In Work
                  </h4>
                </li>
              </Link>

              <Link href="/business/employees">
                <li
                  className={
                    router.pathname == '/business/employees'
                      ? 'active_side_tab active_side_tab_bg'
                      : 'active_side_tab'
                  }
                >
                  <FontAwesomeIcon
                    className={
                      router.pathname == '/business/employees'
                        ? 'sidebar_icon_active'
                        : 'sidebar_icon'
                    }
                    icon={faUserShield}
                  />
                  <h4
                    className={
                      router.pathname == '/business/employees'
                        ? 'text-white text-sm'
                        : 'text-sm'
                    }
                  >
                    Employees
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
