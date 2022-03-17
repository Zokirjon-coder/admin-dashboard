import React from 'react'
import { Container, Icon, MenuName } from './styled'

const MenuItem = ({ info, btnClick, openSidebar}) => {
  const { id, active, name, icon} = info;
  return (
    <Container active={active} openSidebar={openSidebar} onClick={() => btnClick(id)}>
      <Icon active={active}><img src={icon} /></Icon>
      <MenuName openSidebar={openSidebar} active={active}>{name}</MenuName>
    </Container>
  )
}

export default MenuItem