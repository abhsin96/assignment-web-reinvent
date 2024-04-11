import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "store";
import authRedux from "store/modules/auth";

import UserInfoModal from "components/template/UserInfoModal";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    try {
      dispatch(authRedux.actions.logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
     
      <UserInfoModal isOpen={true} logout={handleLogout} />
    </>
  );
};

export default Home;
