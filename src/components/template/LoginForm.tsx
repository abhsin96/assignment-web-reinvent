// src/components/template/LoginForm.tsx
import { useCallback, useState } from "react";

import Input from "components/atom/Input";
import SubmitButton from "components/atom/SubmitButton";

type FormDataType = {
  email: string;
  password: string;
};

type LoginFormType = {
  handleLogin: (payload) => void;
};

const LoginForm  = ({ handleLogin }:LoginFormType) => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e?.target?.name]: e?.target?.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handleLogin(formData);
  }, [formData]);

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input label="Email" name="email" type="email" value={formData?.email} onChange={handleChange} />
          <Input label="Password" name="password" type="password" value={formData?.password} onChange={handleChange} />
          <SubmitButton text="Login" />

          <div className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
