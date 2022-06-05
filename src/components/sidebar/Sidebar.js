import React, { useState } from 'react'
import { Nav, NavIcon, NavTitle, SidebarNav, SidebarWrap } from './sidebar-styling';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
        <NavTitle>Playwright Tutorials</NavTitle>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
        <NavIcon to='#'>
          <AiIcons.AiOutlineClose onClick={showSidebar}/>
        </NavIcon>
        </SidebarWrap >
      </SidebarNav>
    </>
  )
}

export default Sidebar;