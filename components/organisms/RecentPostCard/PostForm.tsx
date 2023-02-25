import { Avatar } from '@components/atoms/Avatar/Avatar'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'

export const PostForm = ({ closePostModal }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  // const [likes, setLikes] = useState()
  // const [comments, setComments] = useState()

  // ---------------post method-------------
  const onSubmit = (event) => {
    console.log(title, description, file)
    event.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('file', file)
    formData.append('description', description)

    axios
      .post('http://localhost:8050/posts/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data)
        alert('form submitted successfully')
      })
      .catch((err) => {
        console.log(err)
      })
    // console.log(result.data)
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
      closePostModal(false)
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
                Your new post has been created 🎉
              </h1>
              <p className="text-sm p-5">
                you can edit or delete the created posts from user post setting.{' '}
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

      <div className="w-full m-2 shadow-lg rounded-lg pb-5 text-sm bg-white quotation_wrapper h-auto">
        <div className="flex justify-between p-5">
          <h3>Add New Post</h3>
          <button
            className="text-white bg-red-600 px-3 py-1 rounded"
            onClick={() => closePostModal(false)}
          >
            X
          </button>
        </div>

        <form>
          <div className="grid grid-cols-12 p-5 gap-5 text-gray">
            <div className="col-span-12">
              <div>
                <label className="text-sm">Title</label> <br />
                <input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-xs mt-1 w-full border-gray-300 rounded"
                  type="text"
                  placeholder="Eg. Food department or Catering"
                />
              </div>
            </div>

            <div className="col-span-12">
              <div>
                <label className="text-sm">Overview</label> <br />
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-24 rounded-lg resize-none mt-1 text-sm border-gray-300 teaxtarea_focus"
                  placeholder="Eg. Food department or Catering"
                />
              </div>
            </div>

            <div className="col-span-12">
              <div>
                <label className="text-sm">Attachment</label> <br />
                <input
                className='border-gray-300 p-2 w-full rounded'
                  name="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-3 px-5 mb-3 mt-5">
            <p
              onClick={() => closePostModal(false)}
              className="cursor-pointer text-black text-center px-5 text-xs py-1.5 border-2 border-gray-500 rounded w-28"
            >
              Cancel
            </p>
            <button
              onClick={onSubmit}
              type="button"
              className="bg-[#33c5f4] text-white px-5 py-2 rounded w-36 text-xs"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
