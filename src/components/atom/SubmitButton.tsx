import React from "react";

type Props = {
  text: string;
};

const SubmitButton = ({ text }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600">
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
