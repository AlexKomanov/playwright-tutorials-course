import React from 'react'
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './sidebar-styling';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const Sidebar = () => {
  return (
    <>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars color='white'/>
        </NavIcon>
      </Nav>
      <SidebarNav >
        <SidebarWrap>
        <NavIcon to='#'>
          <AiIcons.AiOutlineClose color='white'/>
        </NavIcon>
        </SidebarWrap >
      </SidebarNav>
    </>
  )
}

export default Sidebar;