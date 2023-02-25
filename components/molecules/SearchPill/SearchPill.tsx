import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { boolean } from 'yup'

function SearchPill() {
  const [showSearch, setShowSearch] = useState(false)
  const handleSearch = () => {
    setShowSearch(!showSearch)
  }
  const topSearchShow = showSearch
    ? 'w-full overflow-hidden duration-150'
    : 'w-0 overflow-hidden duration-150'
  return (
    <div className="flex gap-5 items-center justify-end w-2/4">
      <div className={topSearchShow}>
        <input
          className="text-xs w-full border border-gray-400 rounded"
          type="text"
        />
      </div>
      <div
        onClick={handleSearch}
        className={
          showSearch === false
            ? 'flex justify-center items-center bg-white cursor-pointer shadow-md w-10 h-10 rounded-full'
            : 'flex justify-center items-center bg-white cursor-pointer shadow-md w-12 h-10 rounded-full'
        }
      >
        {showSearch === false ? (
          <FontAwesomeIcon
            className="text-md text-gray-400"
            icon={faSearch}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className="text-md text-gray-400"
            icon={faClose}
          ></FontAwesomeIcon>
        )}
      </div>
    </div>
  )
}

export default SearchPill
