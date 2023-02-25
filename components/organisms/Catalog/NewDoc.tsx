import Link from 'next/link'
import React, { useState } from 'react'

export const NewDoc = ({ closeDocPopup }) => {
  const [catalogueDoc, setCatalogueDoc] = useState({
    name: '',
    valid_till: '',
    attachment: '',
  })

  let name, value

  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setCatalogueDoc({ ...catalogueDoc, [name]: value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const { name, valid_till, attachment } = catalogueDoc

    const res = await fetch('http://localhost:8050/catalogueDoc/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        valid_till,
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
      closeDocPopup(false)
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
              <Link
                href={`/vendor/services`}
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
          <h2 className="pl-5">Upload New Document</h2>
          <button
            className="text-white rounded bg-red-600 px-3 py-1"
            onClick={() => closeDocPopup(false)}
          >
            X
          </button>
        </div>

        <form>
          <div className="grid grid-cols-12 p-5 gap-5">
            <div className="col-span-12 flex flex-col gap-5 text-gray-500">
              <div>
                <label>Name</label> <br />
                <input
                  className="mt-1 w-full border-gray-300 rounded text-sm"
                  type="text"
                  name="name"
                  value={catalogueDoc.name}
                  onChange={handleInputs}
                  placeholder="Eg. Food department or Catering"
                />
              </div>
              <div>
                <label>Valid Till</label> <br />
                <input
                  className="mt-1 w-3/5 border-gray-300 rounded"
                  type="date"
                  name="valid_till"
                  value={catalogueDoc.valid_till}
                  onChange={handleInputs}
                />
              </div>
              <div>
                <label>Attachment</label> <br />
                <input className="mt-1 rounded" type="file" />
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
                closeDocPopup(false)
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
