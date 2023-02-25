import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCoffee, faDatabase, faFileContract, faFileShield, faFire, faGear, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";


export const VendorSidebar1 = () => {

    // const [sidebar, setSidebar] = useState("");

    const router = useRouter();
    return (
        <>
            <div className="w-0 md:w-0 lg:w-64 h-screen bg-gray-100 py-5 overflow-hidden">

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-center items-center pt-0 pb-3 mb-5 gap-3">
                            <Image src="/images/projectivity_logo.png" width={60} height={60} />
                            <h2 className="font-semibold text-gray-800 tracking-wide text-2xl">Projectivity</h2>
                        </div>

                        <div>

                            <Link href="/vendor">
                                <li className={router.pathname == "/vendor" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faDashboard}></FontAwesomeIcon>
                                    <h4>Dashboard</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/projects">
                                <li className={router.pathname == "/vendor/projects" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faBriefcase} />
                                    <h4>Projects</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/quotation">
                                <li className={router.pathname == "/vendor/quotation" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faFileShield} />
                                    <h4>Quotations</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/services">
                                <li className={router.pathname == "/vendor/services" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faDatabase} />
                                    <h4>Services</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/singlePayment">
                                <li className={router.pathname == "/vendor/singlePayment" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faSackDollar} />
                                    <h4>Finance</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/post/addTimeline">
                                <li className={router.pathname == "/vendor/post/addTimeline" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faFire} />
                                    <h4>Updates</h4>
                                </li>
                            </Link>

                        </div>
                    </div>

                    <div>
                        <Link href="/">
                            <div className=" text-white bg-gray-300 flex items-center py-2.5 px-10 gap-5 mx-3 rounded-lg cursor-pointer" style={{ backgroundColor: "#0499f2", backgroundImage: "linear-gradient(315deg, #0499f2 0%, #26f596 74%)" }}>
                                <FontAwesomeIcon className="text-white text-xl" icon={faGear} id="setting_animation" />
                                <h3 className="tracking-wide">Settings</h3>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}