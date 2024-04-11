import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "store";
import authRedux from "store/modules/auth";

import RegisterForm from "components/template/RegisterForm";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = useCallback(async (payload = {}) => {
    try {
      const res = await dispatch(authRedux.actions.register(payload));

      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <RegisterForm handleRegister={handleRegister} />;
};

export default Register;
