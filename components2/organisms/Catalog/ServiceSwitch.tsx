import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ServiceModeConfirm } from '@components/organisms/Catalog/ServiceModeConfirm'



export const ServiceSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        checked ? setChecked(false) : setChecked(true);
    };
    // ------------------------------------------

    const [servCon, setServCon] = useState(false);

    const handleServCon = () => {
        servCon ? setServCon(false) : setServCon(true);
    };

    // ------------------------------------------

    function notify() {
        toast.success("Service is Active now!")
    }

    return (
        <>
            <div className='flex items-center gap-2'>

                {checked ? (
                    <div>
                        <span className=''>
                            <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                        </span>
                        <span className='ml-5 text-blue-600 font-semibold'>Live</span>
                    </div>
                ) : (
                    <span className='ml-5 text-red-500 font-semibold'>Pause</span>
                )
                }

                <label className='switch' onClick={handleServCon}>
                    <span className={checked ? 'slider_active' : 'slider'}>
                        <span className={checked ? "circle circle_active" : 'circle'}></span>
                        <div className='bg-red-300 position-absolute opacity-0'>
                        </div>
                    </span>
                </label>

                {/* --------------------------------------------- */}

                <ToastContainer />


                {
                    servCon &&
                    <div className="pop_container" style={{ alignItems: "center" }}>
                        <div className="w-3/5" style={{ width: "500px" }}>
                            <ServiceModeConfirm closeServiceAction={setChecked} closeservConPopup={setServCon}
                            />
                            <p className="h-5"></p>
                        </div>
                    </div>
                }




            </div>
        </>
    );
}