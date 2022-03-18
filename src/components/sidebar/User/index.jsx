import React, { useContext } from 'react'
import { AuthProviderAPI } from '../../../context/Auth';
import { Container } from './styled'
import jwt_decode from "jwt-decode";
import { Button } from 'antd';

const User = ({ openSidebar }) => {
  const { token, setAuth, setToken } = useContext(AuthProviderAPI);
  const onLogOut = () => {
    if (window.confirm("tark etmoqchimisiz")) {
      setToken(null);
      setAuth(false);
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    }
  };
  return (
    <Container openSidebar={openSidebar}>
      {jwt_decode(localStorage.getItem("token")).sub}
      {token ? <Button type="primary" onClick={onLogOut}>
        logout
      </Button> : <Button type="primary" onClick={onLogOut}>
        login
      </Button>}
    </Container>
  )
}

export default User