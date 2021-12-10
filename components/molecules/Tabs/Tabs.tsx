import React from 'react'

interface Props {}

export const Tabs = (props: Props) => (
  <div className="border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      <li className="mr-2">
        <a
          href="#"
          className="inline-block text-blue-600 rounded-t-lg border-b-2 border-blue-600 py-4 px-4 text-sm font-medium text-center active dark:text-blue-500 dark:border-blue-500"
        >
          Ongoing Contracts
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
          aria-current="page"
        >
          Finished Contracts
        </a>
      </li>
      <li className="mr-2">
        <a
          href="#"
          className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
        >
          All Contracts
        </a>
      </li>
    </ul>
  </div>
)
