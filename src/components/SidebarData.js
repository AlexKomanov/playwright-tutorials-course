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
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'How To Use It',
            path: '/overviews/how-to-use-it',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Installation',
            path: '/overviews/installation',
            icon: <IoIcons.IoIosPaper />,
        },
    ]
},
{
    title: 'Basic Actions',
    path: '/basic-actions',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Click Action',
            path: '/basic-actions/click',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Type Action',
            path: '/basic-actions/type',
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: 'Fill Action',
            path: '/reports/fill',
            icon: <IoIcons.IoIosPaper />,
        },
        
    ]
},
{
    title: 'Assertions',
    path: '/assertions',
    icon: <FaIcons.FaCartPlus />,
},
{
    title: 'Locator Element',
    path: '/locator-element',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Advanced',
    path: '/advanced',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'End-To-End',
        path: '/advanced/end-to-end',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'CI-CD',
        path: '/advanced/ci-cd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Configuration',
    path: '/configuration',
    icon: <IoIcons.IoMdHelpCircle />
  }

];
 