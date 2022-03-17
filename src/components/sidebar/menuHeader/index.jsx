import React, { useRef } from 'react';
import {motion} from 'framer-motion'
import { Header, Logotip, Buttons, Notification, Button } from './styled'

const MenuHeader = ({ noti, openingSidebar }) => {

  const element = useRef(null);

  const [openSidebar, setOpenSidebar] = openingSidebar;

  const openSidebarHendler = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <Header open={openSidebar}>
      <Logotip as={motion.div} open={openSidebar}>
        T<motion.span ref={element} className='hiddenText'>ask</motion.span><span className='yellow'>y.</span>
      </Logotip>
      <Buttons as={motion.div} layout open={openSidebar}>
        <Button as={motion.div} animate={{ opacity: [1, 0, 1] }}>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {!noti && <Notification />}
        </Button>
        <Button as={motion.div} animate={{ opacity: [1, 0, 1] }} open={openSidebar} onClick={openSidebarHendler}>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.45994 1.28994C5.36698 1.19621 5.25637 1.12182 5.13452 1.07105C5.01266 1.02028 4.88195 0.994141 4.74994 0.994141C4.61793 0.994141 4.48722 1.02028 4.36536 1.07105C4.2435 1.12182 4.1329 1.19621 4.03994 1.28994L1.03994 4.28994C0.946211 4.3829 0.871816 4.4935 0.821048 4.61536C0.770279 4.73722 0.744141 4.86793 0.744141 4.99994C0.744141 5.13195 0.770279 5.26266 0.821048 5.38452C0.871816 5.50637 0.946211 5.61698 1.03994 5.70994L4.03994 8.70994C4.1329 8.80367 4.2435 8.87806 4.36536 8.92883C4.48722 8.9796 4.61793 9.00574 4.74994 9.00574C4.88195 9.00574 5.01266 8.9796 5.13452 8.92883C5.25637 8.87806 5.36698 8.80367 5.45994 8.70994C5.55367 8.61698 5.62806 8.50637 5.67883 8.38452C5.7296 8.26266 5.75574 8.13195 5.75574 7.99994C5.75574 7.86793 5.7296 7.73722 5.67883 7.61536C5.62806 7.4935 5.55367 7.3829 5.45994 7.28994L3.15994 4.99994L5.45994 2.70994C5.55367 2.61698 5.62806 2.50638 5.67883 2.38452C5.7296 2.26266 5.75574 2.13195 5.75574 1.99994C5.75574 1.86793 5.7296 1.73722 5.67883 1.61536C5.62806 1.4935 5.55367 1.3829 5.45994 1.28994ZM8.65994 4.99994L10.9999 2.70994C11.1882 2.52164 11.294 2.26624 11.294 1.99994C11.294 1.73364 11.1882 1.47824 10.9999 1.28994C10.8116 1.10164 10.5562 0.995847 10.2899 0.995847C10.0236 0.995847 9.76824 1.10164 9.57994 1.28994L6.57994 4.28994C6.48621 4.3829 6.41182 4.4935 6.36105 4.61536C6.31028 4.73722 6.28414 4.86793 6.28414 4.99994C6.28414 5.13195 6.31028 5.26266 6.36105 5.38452C6.41182 5.50637 6.48621 5.61698 6.57994 5.70994L9.57994 8.70994C9.6729 8.80367 9.7835 8.87806 9.90536 8.92883C10.0272 8.9796 10.1579 9.00574 10.2899 9.00574C10.422 9.00574 10.5527 8.9796 10.6745 8.92883C10.7964 8.87806 10.907 8.80367 10.9999 8.70994C11.0937 8.61698 11.1681 8.50637 11.2188 8.38452C11.2696 8.26266 11.2957 8.13195 11.2957 7.99994C11.2957 7.86793 11.2696 7.73722 11.2188 7.61536C11.1681 7.4935 11.0937 7.3829 10.9999 7.28994L8.65994 4.99994Z" fill="#374151" />
          </svg>
        </Button>
      </Buttons>
    </Header>
  )
}

export default MenuHeader