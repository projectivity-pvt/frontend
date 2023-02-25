import React from 'react'

function BusinessSingleProjectBoxes() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-6 lg:col-span-6">
            <div className='flex flex-col items-center p-5 h-28 rounded-lg my-5 mx-2' style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #E7EDFF 100%)'}}>
                <p className='text-sm font-semibold'>Spends so far</p>
                <h3 className='mt-2 text-2xl text-blue-600 font-semibold'>$ 1023</h3>
            </div>
        </div>
        <div className="col-span-6 lg:col-span-6">
            <div className='flex flex-col items-center p-5 h-28 rounded-lg my-5 mx-2' style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #DAFFDE 100%)'}}>
                <p className='text-sm font-semibold'>Project Budget</p>
                <h3 className='mt-2 text-2xl text-green-600 font-semibold'>$ 800</h3>
            </div>
        </div>
        <div className="col-span-6 lg:col-span-6">
            <div className='flex flex-col items-center p-5 h-28 rounded-lg my-5 mx-2' style={{background: 'linear-gradient(180deg, #FFFFFF 0%, #FFE6E6 100%)'}}>
                <p className='text-sm font-semibold'>Left to spend</p>
                <h3 className='mt-2 text-2xl text-red-600 font-semibold'>$ 223</h3>
            </div>
        </div>
        <div className="col-span-6 lg:col-span-6">
            <div className='flex flex-col items-center p-5 h-28 rounded-lg my-5 mx-2' style={{background: 'linear-gradient(180deg, rgba(255, 230, 230, 0) 0%, #FFE28C 100%)'}}>
                <p className='text-sm font-semibold'>Crew members</p>
                <h3 className='mt-2 text-2xl text-yellow-600 font-semibold'>$ 50</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default BusinessSingleProjectBoxes
