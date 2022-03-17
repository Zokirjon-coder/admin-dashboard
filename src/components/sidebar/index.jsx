import React, { useState } from 'react'
import MenuHeader from './menuHeader'
import Menus from './menus'
import { Container, InnerContainer } from './styled'

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  return (
    <Container openSidebar={openSidebar}>
      <InnerContainer>
        <MenuHeader openingSidebar={[openSidebar, setOpenSidebar]} />
        <Menus openSidebar={openSidebar} />
      </InnerContainer>
    </Container>
  )
}

export default Sidebar