import React from 'react'
import { Container, Icon, MenuName } from './styled'

const MenuItem = ({ info, btnClick}) => {
  const { id, active, name, icon} = info;
  return (
    <Container active={active} onClick={() => btnClick(id)}>
      <Icon active={active}><img src={icon} /></Icon>
        <MenuName active={active}>{name}</MenuName>
    </Container>
  )
}

export default MenuItem