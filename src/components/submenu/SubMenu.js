import React, { useState } from "react";
import { DropdownLink, SidebarLabel, SidebarLink } from "./submenu-styling";

const SubMenu = ({item}) => {

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  }

  return (
    <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
          ? item.iconOpened 
          : item.subNav
          ? item.iconClosed
          : null }
        </div>
        </SidebarLink>
        {subnav && item.subNav.map((subItem, index) => {
          return (
            <DropdownLink to={subItem.path} key={index}>
              {subItem.icon}
              <SidebarLabel>{subItem.title}</SidebarLabel>
            </DropdownLink>
          )
        })}
    </>
  )
}

export default SubMenu;