import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from '../components/sidebar'
import Main from '../components/Main'
import { AuthProviderAPI } from '../context/Auth'
import { Container, ContainerLogin } from './styled'
import Login from "../components/Login";

const Root = () => {
    const { auth } = useContext(AuthProviderAPI);
    if (!auth)
        return (
            <ContainerLogin>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to={"/login"} />} />
                    <Route path="*" element={<Navigate to={"/login"} />} />
                </Routes>
            </ContainerLogin>
        );
    return (
        <Container>
            <Sidebar />
            <div>
                <Routes>
                    <Route path="/dashboard" element={<Main />} />
                    <Route path="/" element={<Navigate to={"/dashboard"} />} />
                </Routes>
            </div>
        </Container>
    )
}

export default Root