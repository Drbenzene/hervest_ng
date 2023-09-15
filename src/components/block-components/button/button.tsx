import React from 'react'

interface IButton{
  onClick: any,
  text: string
}

function Button({onClick, text}: IButton) {
  return (
    <div>
      <button
      onClick={onClick}
        type="button"
        className="rounded-md bg-wine px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
      >
        {text}
      </button>
    </div>
  )
}

export default Button
