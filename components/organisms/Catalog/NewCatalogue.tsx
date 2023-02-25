import { Avatar } from '@components/atoms/Avatar/Avatar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const NewCatalogue = ({ closeCatPopup }) => {
  const [catalogue, setCatalogue] = useState({
    name: '',
    quantity: '',
    model_no: '',
    rate: '',
    description: '',
    rate_for: '',
    attachment: '',
  })

  let name, value

  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setCatalogue({ ...catalogue, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const {
      name,
      quantity,
      model_no,
      rate,
      description,
      rate_for,
      attachment,
    } = catalogue

    
    const res = await fetch('http://localhost:8050/catalogue/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        quantity,
        model_no,
        rate,
        description,
        rate_for,
        attachment,
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
      closeCatPopup(false)
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
                New Catalogue is created 🎉
              </h1>
              <p className="text-sm p-5">
                You can edit or delete the catalogue from catalogue details
                page.{' '}
              </p>
              <Link  href={`/vendor/services`}
                onClick={closeThankpop}
                className="text-sm bg-green-600 text-white py-1.5 px-5 rounded-full"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* -----------------thnk you popup---------------- */}

      <div className="w-full m-2 shadow-lg rounded pb-5 text-sm bg-white">
        <div className="flex justify-between p-5">
          <h2 className="pl-5">Add New Item To Catalogue</h2>
          <button
            className="text-white rounded bg-red-600 px-3 py-1"
            onClick={() => closeCatPopup(false)}
          >
            X
          </button>
        </div>

        <form>
          <div className="grid grid-cols-12 p-5 gap-5">
            <div className="col-span-12 md:col-span-8 flex flex-col gap-5">
              <div>
                <label>Name</label> <br />
                <input
                  className="mt-1 w-full border-gray-300 rounded text-sm"
                  type="text"
                  name="name"
                  value={catalogue.name}
                  onChange={handleInputs}
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Model No.</label> <br />
                <input
                  className="mt-1 w-full border-gray-300 rounded text-sm"
                  type="text"
                  name="model_no"
                  value={catalogue.model_no}
                  onChange={handleInputs}
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Description</label> <br />
                <textarea
                  name="description"
                  value={catalogue.description}
                  onChange={handleInputs}
                  className="resize-none h-24 mt-1 w-full border-gray-300 rounded text-sm teaxtarea_focus"
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div className="flex">
                <div>
                  <label>Attachment</label> <br />
                  <input 
                  name='attachment'
                  value={catalogue.attachment}
                  onChange={handleInputs}
                  className="mt-1 rounded" type="file" />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/catalog/camera_catalog.png"
                    height={170}
                    width={200}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
              <div>
                <label>Quantity</label> <br />
                <input
                  className="mt-1 w-full border-gray-300 rounded text-sm"
                  type="text"
                  name="quantity"
                  value={catalogue.quantity}
                  onChange={handleInputs}
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Rate</label> <br />
                <input
                  className="mt-1 w-full border-gray-300 rounded text-sm"
                  type="text"
                  name="rate"
                  value={catalogue.rate}
                  onChange={handleInputs}
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex gap-2 items-center">
                  <input className="border-gray-300" type="checkbox" />
                  <label>Rate For</label>
                  <input className="border-gray-300 w-16 h-6 text-xs" type="number" />
                  <label>Hours</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input className="border-gray-300" type="checkbox" />
                  <label>Per Day</label> <br />
                </div>
                <div className="flex gap-2 items-center">
                  <input className="border-gray-300" type="checkbox" />
                  <label>Fixed Price</label> <br />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start px-5 gap-5 my-5">
            <button
              onClick={onSubmit}
              className="bg-blue-500 text-white px-5 py-1 rounded"
            >
              Add Item
            </button>
            <button
              onClick={() => {
                closeCatPopup(false)
              }}
              className="text-black bg-gray-200 px-5 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
