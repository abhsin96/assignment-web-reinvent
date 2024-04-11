import React from "react";

type Props = {
  label: string;
  type?: string;
  name: string;
  value: string|number
  onChange: (e)=>void
};

const Input = ({ label, type="text", name,onChange,value}: Props) => {
  return (
    <div className="mb-6">
      <label htmlFor={`${type}-${label}`} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={`${type}-${label}`}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
