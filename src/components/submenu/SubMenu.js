import React from "react";
import { SidebarLabel, SidebarLink } from "./submenu-styling";

const SubMenu = () => {
  return (
    <>
        <SidebarLink to={item.path}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        </SidebarLink>
    </>
  )
}

export default SubMenu;