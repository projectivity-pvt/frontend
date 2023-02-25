import React from 'react'

function FeatureSlider() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div>
            <h1 className="text-3xl">Test</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quas repellat suscipit numquam est aperiam autem, in
              odit tempora placeat illo id nisi, quisquam praesentium harum
              explicabo quos voluptatem fugiat.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">Test</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quas repellat suscipit numquam est aperiam autem, in
              odit tempora placeat illo id nisi, quisquam praesentium harum
              explicabo quos voluptatem fugiat.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">Test</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quas repellat suscipit numquam est aperiam autem, in
              odit tempora placeat illo id nisi, quisquam praesentium harum
              explicabo quos voluptatem fugiat.
            </p>
          </div>

          <div>
            <h1 className="text-3xl">Test</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore quas repellat suscipit numquam est aperiam autem, in
              odit tempora placeat illo id nisi, quisquam praesentium harum
              explicabo quos voluptatem fugiat.
            </p>
          </div>
        </div>

        {/* ------------------------------------------ */}

        <div className="col-span-6">
          <div className="h-full">
            <div className="bg-white rounded-2xl h-1/3 m-10 p-10 my-20">
              <h1 className="text-5xl">
                {' '}
                Hi this is vertical scrollable effect{' '}
              </h1>
            </div>

            <div className="bg-white rounded-2xl h-1/3 m-10 p-10 my-20">
              <h1 className="text-5xl">
                {' '}
                Hi this is vertical scrollable effect{' '}
              </h1>
            </div>

            <div className="bg-white rounded-2xl h-1/3 m-10 p-10 my-20">
              <h1 className="text-5xl">
                {' '}
                Hi this is vertical scrollable effect{' '}
              </h1>
            </div>

            <div className="bg-white rounded-2xl h-1/3 m-10 p-10 my-20">
              <h1 className="text-5xl">
                {' '}
                Hi this is vertical scrollable effect{' '}
              </h1>
            </div>

            <div className="bg-white rounded-2xl h-1/3 m-10 p-10 my-20">
              <h1 className="text-5xl">
                {' '}
                Hi this is vertical scrollable effect{' '}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureSlider
