import React from 'react'
import TypeIt from 'typeit-react'
import Image from 'next/image'
import ActiveLink from '@components/atoms/ActiveLink/ActiveLink'

export const HomeHero = () => (
  <section className="md:px-2 pt-10 md:pt-32 bg-white">
    <div className="container items-center max-w-6xl px-3 md:px-5 mx-auto space-y-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
        <span className="block">
          Level Up Your
          <br />
          <span className="block mt-0 md:mt-5 text-indigo-600 lg:inline lg:mt-0">
            <TypeIt
              as="span"
              options={{
                strings: [
                  'Business',
                  'Income',
                  'Finance',
                  'Payments',
                  'Management',
                ],
                speed: 180,
                nextStringDelay: 2000,
                deleteSpeed: 200,
                lifeLike: true,
                waitUntilVisible: true,
                breakLines: false,
                loop: true,
              }}
            />
          </span>
        </span>
      </h1>
      <p className="w-full mx-auto text-base text-left text-gray-500 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
        Join us today to reach to the next level!
      </p>
      <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
        <ActiveLink href="/login">
          <a className="flex items-center justify-center w-max text-center px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md md:mb-0 hover:bg-indigo-800 md:w-auto">
            Get started for Free
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
        </ActiveLink>
      </div>
    </div>
    <div className="container items-center max-w-4xl px-5 mx-auto mt-4 md:mt-16 text-center">
      <Image
        src="https://cdn.devdojo.com/images/november2020/hero-image.png"
        height={350}
        width={500}
      />
    </div>
  </section>
)
