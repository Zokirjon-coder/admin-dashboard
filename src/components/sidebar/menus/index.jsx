import React, {useState} from 'react'
import { dataMenu } from '../../../utils/dataMenu'
import MenuItem from './menuItem'
import { Container } from './styled'

const Menus = ({ openSidebar}) => {
  const [menus, setMenus] = useState(dataMenu);
  const btnClick = (id)=>{
    const newMenus = menus.map((info) => info.id === id ? { ...info, active: 'true' } : { ...info, active: 'false' })
    setMenus(newMenus);
  }
  return (
    <Container openSidebar={openSidebar}>
        {
        menus.map((info) => <MenuItem key={info.id} info={info} btnClick={btnClick} />)
        }
    </Container>
  )
}

export default Menus