import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function VendorDashEnquiryChart() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='bar'
                    width={200}
                    height={360}
                    series={[
                        {
                            name: "Dharma Productions",
                            data: [65, 85, 70, 64],
                            color:'#33c5f4'
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
                                borderRadius: 3,
                                columnWidth: '12%',
                                horizontal: false,
                                colors: {
                                    backgroundBarColors: ['#F2F4F6']
                                },
                
                            }
                        },
                        xaxis:{
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                            labels: {
                                show: false,
                            },
                
                            title:{
                                text:"Recent Enquiries",
                                style:{
                                    fontSize: '15px',
                                    fontFamily: 'Montserrat',
                                    color: '#888',
                                    fontWeight: '500',
                                    
                                }
                            },
                            categories:['Jan','Feb','Mar','Apr']
                        },

                        yaxis:{
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                            labels: {
                                show: false,
                            },
                
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
