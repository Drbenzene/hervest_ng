import React from 'react'

interface ICheckbox{
  name: string
}

function CheckbookInputField({name}: ICheckbox) {

  return (
    <fieldset>
      <div className="space-y-5 my-3">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="age"
              aria-describedby="age-description"
              name="age"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="age" className="font-medium text-gray-700">
              {name}
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default CheckbookInputField
