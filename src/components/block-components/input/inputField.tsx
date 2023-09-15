
interface InputFieldDTO {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    onChange: any,
    value: any,

}

export default function InputField({ label, onChange, value, name, type, placeholder }: InputFieldDTO) {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2 relative">

                <input
                    type={type}
                    name={name}
                    id={name}
                    className="block w-full rounded-md p-4 border-0 py-2 text-gray-900 bg-[#F8F1F6] shadow-sm ring-1 ring-inset ring-[#5B2E4F] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#5B2E4F] sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}