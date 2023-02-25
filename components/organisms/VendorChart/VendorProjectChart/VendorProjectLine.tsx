import React from 'react';
import Chart from 'react-apexcharts'

export function VendorProjectLine() {
    return (
        <>
            <div className="flex justify-center">
                <Chart
                    type='donut'
                    width={380}
                    height={380}
                    series={[45, 67, 59]}

                    options={{
                        labels: ['All Contracts', 'Ongoing Contracts', 'Finished Contracts'],

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            fontSize: 14,
                                            fontFamily: 'Montserrat'
                                        }
                                    }
                                }
                            }
                        }
                    }}




                >
                </Chart>
            </div>
        </>

    );
}
