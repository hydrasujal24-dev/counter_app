import React from 'react'

const Button = ({bg, name}) => {
  return (
    <div>
          <button className={`bg-${bg} hover:bg-${bg}-600 text-white font-bold py-2 px-4 rounded`}>
            {name}
          </button>
    </div>
  )
}

export default Button
