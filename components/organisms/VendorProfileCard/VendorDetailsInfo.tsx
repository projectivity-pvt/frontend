import Link from 'next/link'
import React from 'react'

function VendorDetailsInfo() {
  return (
    <>
      <div>
        <div className="mt-5">
          <h6 className="text-xs text-gray-500">Contact</h6>
          <h5 className="text-sm font-semibold">90812718291</h5>
        </div>

        <div className="mt-5">
          <h6 className="text-xs text-gray-500">Email</h6>
          <h5 className="text-sm font-semibold">the.best.vendor@gmail.com</h5>
        </div>

        <div className="mt-5">
          <h6 className="text-xs text-gray-500">Location</h6>
          <h5 className="text-sm font-semibold">
            Navi Mumbai, 123121, Mumbai Oshiwara
          </h5>
        </div>

        <div className="mt-5">
          <h6 className="text-xs text-gray-500">Member Since</h6>
          <h5 className="text-sm font-semibold">12 October, 2021</h5>
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-white bg-blue-600 text-xs rounded-2xl py-2.5 px-10 border-0 outline-none">
            <Link href="/business/newVendorService/getcatalog">
              Get Quotation
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default VendorDetailsInfo
