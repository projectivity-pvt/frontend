import React from 'react'

function VendorDashTransactions() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU"
            />
            <div>
              <p className="text-sm text-gray-600"> Food and Catering</p>
              <p className="text-xs text-gray-600">John Doe</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">$180</p>
        </div>
      </div>
    </>
  )
}

export default VendorDashTransactions
