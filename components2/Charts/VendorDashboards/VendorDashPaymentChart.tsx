import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashPaymentChart() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='donut'
                    width={370}
                    // height={380}
                    series={[45, 67, 59]}

                    options={{
                        labels: ['NEFT / RTGS', 'NET BANKING', 'E-WALLET'],
                        chart:{
                            dropShadow: {
                                enabled: true,
                                enabledOnSeries: undefined,
                                top: 0.5,
                                left: 0.5,
                                blur: 0.5,
                                color: '#aaa',
                                opacity: 0.3
                            },
                        },
                        colors: ['#33c5f4','#54f9ef', '#49beab' ],
                        // rgb(0, 227, 150)


                        plotOptions: {
                            pie: {
                                donut: {
                                    size: '60%',
                                    labels: {
                                        show: false,

                                        total: {
                                            show: true,
                                            // fontSize: 14,
                                            fontFamily: 'Montserrat'
                                        }
                                    }
                                }
                            }
                        },
                        stroke:{
                            width: 0
                        },
                        legend: {
                            show: false,
                        },
                        fill: {
                            type: 'gradient',
                          },

                        responsive: [{
                            breakpoint: 480,
                            options: {
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    }}




                >
                </Chart>
            </div>
        </>

    );
}
