import React from 'react'

interface ISelectInputField {
    name: string,
    onChange: any,
    onFocus?: any,
    options?: any,
    placeholder?: string,
    label: string
}

function SelectInputField({ name, onChange, onFocus, options, placeholder, label }: ISelectInputField) {
    return (
        <div>
            <label htmlFor="location" className="block text-sm mb-2 font-medium leading-6 text-gray-900">
                {label}
            </label>

            <select
            onChange={onChange}
                id={name}
                name={name}
                className="block w-full rounded-md p-6 border-0 py-3 text-gray-900 bg-[#F8F1F6] shadow-sm ring-1 ring-inset ring-[#5B2E4F] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#5B2E4F] sm:text-sm sm:leading-6"
                >
                <option value="none" selected disabled hidden>{placeholder}</option>
                <option value='Daily'>Daily</option>
                <option value='Weekly'>Weekly</option>
                <option value='Bi-Weekly'>Bi-Weekly</option>
                <option value='Monthly'>Monthly</option>
            </select>
        </div>
    )
}

export default SelectInputField
