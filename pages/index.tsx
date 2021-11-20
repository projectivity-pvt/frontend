import type { NextPage } from 'next'
import styled from '@emotion/styled'

const Para = styled.div`
  color: red;
`

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-100">
      Welcome
      <Para>asdf</Para>
      <h1>This is h1</h1>
      <input className="" type="text" />
      <input type="checkbox" className="rounded text-indigo-500" />
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 mt-4 sm:text-sm rounded-lg focus:ring-blue-500 focus:ring-4 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  )
}

export default Home
