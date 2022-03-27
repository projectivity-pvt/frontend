import React from "react"
import Image from 'next/image'


export const ProductionStatsCard = () => (
  <>
    <div className="flex flex-wrap justify-evenly w-full">

      {/* ----------------------card 1---------------- */}
      <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFC7A7 100%)" }}>
        <div className="flex items-center justify-center -mt-5">
          <Image src="/images/notification.svg" height={24} width={24} />
        </div>
        <div className="flex flex-col pt-2">
          <p className="text-center text-base font-medium text-black-600 mb-1">Projects</p>
          <p className="text-center text-lg font-bold text-black-700">180</p>
        </div>
      </div>
      {/* ----------------------card 1---------------- */}

      {/* ----------------------card 2---------------- */}
      <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #B4C9FF 100%)" }}>
        <div className="flex items-center justify-center -mt-5">
          <Image src="/images/notification.svg" height={24} width={24} />
        </div>
        <div className="flex flex-col pt-2">
          <p className="text-center text-base font-medium text-black-600 mb-1">Contractors</p>
          <p className="text-center text-lg font-bold text-black-700">180</p>
        </div>
      </div>
      {/* ----------------------card 2---------------- */}

      {/* ----------------------card 3---------------- */}
      <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #D0FFD5 100%)" }}>
        <div className="flex items-center justify-center -mt-5">
          <Image src="/images/notification.svg" height={24} width={24} />
        </div>
        <div className="flex flex-col pt-2">
          <p className="text-center text-base font-medium text-black-600 mb-1">Expenses</p>
          <p className="text-center text-lg font-bold text-black-700">180</p>
        </div>
      </div>
      {/* ----------------------card 3---------------- */}

      {/* ----------------------card 4---------------- */}
      <div className="rounded-xl p-3 flex flex-col items-center gap-4 w-52 h-36 m-2" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4E6BA 100%)" }}>
        <div className="flex items-center justify-center -mt-5">
          <Image src="/images/notification.svg" height={24} width={24} />
        </div>
        <div className="flex flex-col pt-2">
          <p className="text-center text-base font-medium text-black-600 mb-1">Employees</p>
          <p className="text-center text-lg font-bold text-black-700">180</p>
        </div>
      </div>
      {/* ----------------------card 4---------------- */}

    </div>
  </>
)