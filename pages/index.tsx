import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  const a = 1
  return (
    <div className="flex items-center justify-center h-screen  bg-white dark:bg-gray-900">
      <section className="px-2 pt-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">
              Super charge your &nbsp;
              <span className="block mt-1 text-indigo-600 lg:inline lg:mt-0">
                Business
              </span>
            </span>
          </h1>
          <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:text-center">
            Take your business to next level with our platform!
          </p>
          <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <Link href="/login">
              <a className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md md:mb-0 hover:bg-indigo-800 md:w-auto">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
          <Image
            src="https://cdn.devdojo.com/images/november2020/hero-image.png"
            height={400}
            width={600}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
