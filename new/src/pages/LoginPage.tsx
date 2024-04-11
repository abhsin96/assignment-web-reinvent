import LoginForm from 'components/template/LoginForm'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'store'
import authRedux from "store/modules/auth";

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = useCallback(async(payload)=>{
    try {
      const res = await dispatch(authRedux.actions.login(payload))

      if(res){
        navigate("/")
      }

    } catch (error) {
      console.error(error)
    }
  },[])
  return (
   <LoginForm handleLogin={handleLogin}/>
  )
}

export default LoginPage