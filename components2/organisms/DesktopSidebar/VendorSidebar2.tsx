import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircleDollarToSlot, faCoffee, faCreditCard, faDatabase, faFileContract, faFileShield, faFire, faGear, faHourglass, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export const VendorSidebar2 = () => {

    const router = useRouter();
    return (
        <>
            <div className="w-64 h-screen bg-gray-100 py-5">

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-center items-center pt-0 pb-3 mb-5 gap-3">
                            <Image src="/images/projectivity_logo.png" width={70} height={70} />
                            <h2 className="font-semibold text-gray-800 tracking-wide">Projectivity</h2>
                        </div>

                        <div>

                            <Link href="/vendor">
                                <li className={router.pathname == "/vendor" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faDashboard}></FontAwesomeIcon>
                                    <h4>Overview</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/contracts">
                                <li className={router.pathname == "/vendor/contracts" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faFileContract}></FontAwesomeIcon>
                                    <h4>Contracts</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/contractAll/page2">
                                <li className={router.pathname == "/vendor/contractAll/page2" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faHourglass}></FontAwesomeIcon>
                                    <h4>Call Time</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/services">
                                <li className={router.pathname == "/vendor/services" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faCreditCard}></FontAwesomeIcon>
                                    <h4>Expenses</h4>
                                </li>
                            </Link>

                            <Link href="//vendor/payments">
                                <li className={router.pathname == "/vendor/payments" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faCircleDollarToSlot}></FontAwesomeIcon>
                                    <h4>Payments</h4>
                                </li>
                            </Link>

                            <Link href="/vendor/document">
                                <li className={router.pathname == "/vendor/document" ? "sidebar_active hover:bg-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer" : "group hover:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800 hover:text-white rounded-lg drop-shadow-sm flex items-center py-3 px-10 gap-5 my-1 mx-3 cursor-pointer"}>
                                    <FontAwesomeIcon className="group-hover:text-white text-gray-500 text-lg" icon={faFolderOpen}></FontAwesomeIcon>
                                    <h4>Documents</h4>
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