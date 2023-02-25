import { Avatar } from '@components/atoms/Avatar/Avatar'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'

export const AddNewService = ({ closeServiceModal }) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    department: '',
    priceRange: '',
    type1: '',
    type2: '',
    type3: '',
  })

  let name, value

  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setService({ ...service, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const { name, description, department, priceRange, type1, type2, type3 } =
      service

    const res = await fetch('http://localhost:8050/services/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        department,
        priceRange,
        type1,
        type2,
        type3,
      }),
    })

    const data = await res.json()

    if (res.status === 422 || !data) {
      window.alert('Invalid input')
      console.log('Invalid input')
    } else {
      window.alert(' form submitted Successful')
      showThankpop()
      // history.push("/");
    }
  }
  // ---------------post method-------------

  const [thankpop, setThankpop] = useState(false)

  const showThankpop = () => {
    setTimeout(() => {
      setThankpop(true)
    })
  }

  const closeThankpop = () => {
    setTimeout(() => {
      setThankpop(false)
      closeServiceModal(false)
    })
  }

  return (
    <>
      {/* -----------------thnk you popup---------------- */}
      {thankpop && (
        <div className="static_popup_wrapper" id="contact">
          <div className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] static_popup">
            <div>
              <h1 className="text-lg font-normal" style={{ color: '#04bffc' }}>
                New Services is created 🎉
              </h1>
              <p className="text-sm p-5">
                You can edit or delete the services from catalogue details page.{' '}
              </p>
              <p
                onClick={closeThankpop}
                className="text-sm bg-green-600 text-white py-1.5 px-5 rounded-full"
              >
                Close
              </p>
            </div>
          </div>
        </div>
      )}
      {/* -----------------thnk you popup---------------- */}

      <div className="w-full m-2 shadow-lg rounded-lg pb-5 text-sm bg-white quotation_wrapper">
        <div className="flex justify-between p-5">
          <h3>Add New Service</h3>
          <button
            className="text-white bg-red-600 px-3 py-1 rounded"
            onClick={() => closeServiceModal(false)}
          >
            X
          </button>
        </div>

        <form>
          <div className="grid grid-cols-12 p-5 gap-5 text-gray">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
              <div>
                <label className="text-sm">Name</label> <br />
                <input
                  name="name"
                  value={service.name}
                  onChange={handleInputs}
                  className="text-xs mt-1 w-full border-gray-300 rounded"
                  type="text"
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Description</label> <br />
                <textarea
                  name="description"
                  value={service.description}
                  onChange={handleInputs}
                  className="teaxtarea_focus text-xs mt-1 w-full border-gray-300 rounded resize-none h-32"
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Department</label> <br />
                <input
                  name="department"
                  value={service.department}
                  onChange={handleInputs}
                  className="text-xs mt-1 w-full border-gray-300 rounded"
                  type="text"
                  placeholder="Service Name"
                />
              </div>
              <div>
                <label>Suggesions</label> <br />
                <div className="flex gap-3 mt-1">
                  <span className="text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs">
                    Camera
                  </span>
                  <span className="text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs">
                    Ass. Director
                  </span>
                  <span className="text-yellow-600 bg-yellow-100 border-2 border-orange-100 rounded-2xl px-3 py-0.5 text-xs">
                    Dolly Grip
                  </span>
                </div>
              </div>
              <div className="bg-green-100 py-3 px-5 rounded mt-1">
                <p className="text-green-500 text-xs">
                  You will get the option to add catalogue in the next screen.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
              <div>
                <label>Price Range</label> <br />
                <input
                  name="priceRange"
                  value={service.priceRange}
                  onChange={handleInputs}
                  className="text-xs mt-1 w-full border-gray-300 rounded"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label>Type</label> <br />
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex items-center gap-3">
                    <input
                      name="type1"
                      value={service.type1}
                      onChange={handleInputs}
                      className="border-gray-300 rounded"
                      type="checkbox"
                    />
                    <label>Crew</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      name="type2"
                      value={service.type2}
                      onChange={handleInputs}
                      className="border-gray-300 rounded"
                      type="checkbox"
                    />
                    <label>Inventory</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      name="type3"
                      value={service.type3}
                      onChange={handleInputs}
                      className="border-gray-300 rounded"
                      type="checkbox"
                    />
                    <label>Service</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 mb-3">
            <button
              onClick={onSubmit}
              type="button"
              className="bg-blue-500 text-white px-5 py-2 rounded w-36 text-xs"
            >
              Create Service
            </button>
            <p
              onClick={() => closeServiceModal(false)}
              className="cursor-pointer text-black text-center px-5 text-xs py-1.5 border-2 border-gray-500 rounded w-28"
            >
              Cancel
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
