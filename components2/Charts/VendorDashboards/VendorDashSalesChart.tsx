import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashSalesChart() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='line'
                    width={750}
                    height={340}                  
                    

                    series={[
                        {
                            name: "Sales",
                            data: [15, 75, 30, 65, 22, 50],
                            color:'#33c5f4'
                        },
                        {
                            name: "Profit",
                            data: [10, 45, 20, 75, 30, 60],
                            color:'#54f9ef'
                        }
                    ]}


                    options={{
                        chart:{
                            toolbar:{
                                show: false,
                            },
                            dropShadow: {
                                enabled: true,
                                enabledOnSeries: undefined,
                                top: 1,
                                left: 1,
                                blur: 4,
                                color: '#aaa',
                                opacity: 0.75
                            }
                        },
                        xaxis: {
                            title:{
                               text: "Monthly Earnings",
                               style:{
                                fontSize: '15px',
                                fontFamily: 'Montserrat',
                                color: '#888',
                                fontWeight: '500',
                                
                            }
                            },
                            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun',]
                        },

                        stroke: {
                            curve: 'smooth',
                            width: 3
                        },
                        grid:{
                            show: false,
                        }


                    }}



                >
                </Chart>
            </div>
        </>

    );
}
