import React from 'react'

function engineSys() {
  return (
      <div className="flex justify-center">
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
    <img
      className="w-full h-40 object-cover"
      src="engine-part-image.jpg"
      alt="Engine Part"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Engine Part Name</div>
      <p className="text-gray-700 text-base">
        Description of the engine part. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Repellendus deserunt incidunt
        deleniti.
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Category
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Manufacturer
      </span>
    </div>
  </div>
  </div>
  )
}

export default engineSys