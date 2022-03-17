import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/sidebar'
import { Container } from './styled'

const Root = () => {
    return (
        <Container>
            <Sidebar />
            <Main />
        </Container>
    )
}

export default Root