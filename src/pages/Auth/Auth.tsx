import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Registration from "./Registration"
import styled from "styled-components"


const AuthStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
  > div {
    background: #fff;
    width: 500px;
    padding: 30px;
  }
`


export const Auth: FC = () => {
    return (
        <AuthStyled>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </AuthStyled>
    )
}

