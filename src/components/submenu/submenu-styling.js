import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 3px solid gold;
        cursor: pointer;
    }
`;


export const SidebarLabel = styled.span`
    margin-left: 16px;
`;
