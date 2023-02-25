import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashProjectChart() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='bar'
                    width={800}
                    height={360}
                    series={[
                        {
                            name: "Dharma Productions",
                            data: [65, 85, 70, 64, 82, 70, 65, 85, 70, 64, 82, 70],
                            color:'#33c5f4'
                        },
                        {
                            name: "Dharma Productions",
                            data: [25, 45, 50, 34, 42, 50, 25, 45, 50, 34, 42, 50],
                            color:'#c8effc'
                        }
                    ]}

                    options={{
                        chart:{
                            stacked:true,
                            toolbar:{
                                show: false,
                            }
                        },
                        plotOptions:{
                            bar:{
                                columnWidth: '25%'
                            }
                        },
                        xaxis:{
                            title:{
                                text:"Projects in Month",
                                style:{
                                    fontSize: '15px',
                                    fontFamily: 'Montserrat',
                                    color: '#888',
                                    fontWeight: '500',
                                    
                                }
                            },
                            categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                        },
                        dataLabels:{
                            enabled: false,
                        },
                        grid:{
                            show: false,
                        }
                        
                    }}

                    tooltip={{
                        
                    }}




                >
                </Chart>
            </div>
        </>

    );
}
