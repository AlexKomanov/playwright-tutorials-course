import React, { useState } from 'react'
import { Nav, NavIcon, NavTitle, SidebarNav, SidebarWrap } from './sidebar-styling';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarData';
import SubMenu from '../submenu/SubMenu';
import { IconContext } from 'react-icons/lib';


const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
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
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />
        })}
        </SidebarWrap >
      </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar;