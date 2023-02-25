import { faArrowTrendUp, faBox, faShield, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WelcomeCards() {
  return (
    <>
      <div
        className="celeb_card card"
        style={{
          height: '200px',
          padding: '0px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <div
          className="card_overlay flex justify-center items-center"
          style={{ height: '200px' }}
        >
          <div className=" overflow-hidden flex flex-col justify-center items-center">
            <h3 className="truncate text-yellow-300">Welcome, John Doe</h3>
            <h5 className="text-center m-2 text-gray-100">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </h5>
            <h5
              className="bg-gray-100 rounded-2xl py-1.5 px-8 mt-3 text-gray-600"
              style={{ backgroundColor: '#54f9ef' }}
            >
              <a href=""> Complete KYC </a>
            </h5>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="card" style={{ height: '140px' }}>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-600">
                  Veriety
                  <br /> Of Products
                </p>
                <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
              </div>
              <h4 className="flex justify-center items-center p-4 bg-blue-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-xs"
                  icon={faBox}
                  style={{ color: '#33c5f4' }}
                ></FontAwesomeIcon>
              </h4>
            </div>
          </div>

          <div className="card mt-4" style={{ height: '140px' }}>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-600">
                  Dispatches
                  <br /> For Today
                </p>
                <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
              </div>
              <h4 className="flex justify-center items-center p-4 bg-red-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-red-500 text-xs"
                  icon={faArrowTrendUp}
                ></FontAwesomeIcon>
              </h4>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="card" style={{ height: '140px' }}>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-600">
                  Awaiting
                  <br /> Actions
                </p>
                <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
              </div>
              <h4 className="flex justify-center items-center p-4 bg-green-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-green-400 text-xs"
                  icon={faShield}
                ></FontAwesomeIcon>
              </h4>
            </div>
          </div>

          <div className="card mt-4" style={{ height: '140px' }}>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-600">
                  Total
                  <br /> Customer
                </p>
                <h1 className="mt-2 text-gray-600 text-2xl">35</h1>
              </div>
              <h4 className="flex justify-center items-center p-4 bg-pink-50 w-5 h-5 rounded-full">
                <FontAwesomeIcon
                  className="group-hover:text-white text-pink-400 text-xs"
                  icon={faUser}
                ></FontAwesomeIcon>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeCards
