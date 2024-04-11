// RegisterForm.js
import { useCallback, useState } from "react";

import Input from "components/atom/Input";
import SubmitButton from "components/atom/SubmitButton";

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

type RegisterFormType = {
  handleRegister: (payload) => void;
};

const RegisterForm = ({ handleRegister }: RegisterFormType) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleRegister(formData);
    },
    [formData],
  );

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <Input label="Name" name="name" value={formData?.name} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={formData?.email} onChange={handleChange} />
          <Input label="Password" name="password" type="password" value={formData?.password} onChange={handleChange} />
          <SubmitButton text="Register" />

          <div className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
