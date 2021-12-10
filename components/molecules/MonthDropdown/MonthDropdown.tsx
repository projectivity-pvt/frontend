import { Listbox, Menu } from '@headlessui/react'
import { DropdownItem, Transition } from '@windmill/react-ui'
import React, { Fragment, useState } from 'react'
import ChevronDown from 'public/images/arrow/chevron-down.svg'

interface Props {}

export const MonthDropdown = (props: Props) => {
  const [month, setMonth] = useState('July')
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center justify-center border w-full px-4 py-2 text-sm font-medium  rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {month}
          <ChevronDown height={14} width={14} className="align-middle ml-4" />
        </Menu.Button>
        <Menu.Items className="absolute p-2 right-0 w-56 mt-2 z-50 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <div className="inline-flex items-center cursor-pointer w-full px-2 py-1 text-lg font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 justify-between">
              July
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="inline-flex items-center cursor-pointer w-full px-2 py-1 text-lg font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 justify-between">
              August
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
