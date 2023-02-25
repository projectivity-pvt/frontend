import React from 'react';
import Chart from 'react-apexcharts'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashProjectChart2() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='radialBar'
                    width={600}
                    height={360}


                    

                >
                </Chart>
            </div>
        </>

    );
}
