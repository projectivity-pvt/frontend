import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashContractsChart() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='radialBar'
                    // width={380}
                    height={380}
                    series={[45, 67, 59]}

                    options={{
                        labels: ['Completed', 'Upcomping', 'Pending'],
                        chart:{
                            dropShadow: {
                                enabled: true,
                                enabledOnSeries: undefined,
                                top: 0,
                                left: 0,
                                blur: 1,
                                color: '#aaa',
                                opacity: 0.7
                            },
                        },
                        colors: [ '#54f9ef','#33c5f4', '#ff4f4f' ],
                        

                        plotOptions: {
                            radialBar: {
                                hollow: {
                                    size: '38%'
                                },
                                track: {
                                    strokeWidth: '80%',
                                    margin: 12,
                                },
                                dataLabels: {
                                    show: true,
                                }
                            }
                        },
                        stroke: {
                            lineCap: "round",
                        },
                        
                    }}




                >
                </Chart>
            </div>
        </>

    );
}
