import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
{
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
        {
            title: 'Users',
            path: '/overviews/users',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Revenue',
            path: '/overviews/revenue',
            icon: <IoIcons.IoIosPaper />,
        },
    ]
},
{
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
        {
            title: 'Reports',
            path: '/reports/reports1',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Reports 2',
            path: '/reports/reports2',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Reports 3',
            path: '/reports/reports3',
            icon: <IoIcons.IoIosPaper />,
        },
        
    ]
},

]
 