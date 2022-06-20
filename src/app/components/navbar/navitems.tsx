import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../constants/screens";
import {slide as Menu} from "react-burger-menu";
import menuStyle from "./menuStyle";
import {css} from "@emotion/react";

const NavItemsContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`

const NavItem = styled.li<{menu?: boolean}>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    m-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `}
  
  ${({menu}) => menu && css`
    ${tw`
        text-xl
        text-white
        mb-3
        focus:text-white
    `}
  `}
`

const NavItems: React.FC = () => {

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})

    if(isMobile) return (
        <Menu right styles={menuStyle}>
            <NavItemsContainer>
                <NavItem menu={true}>
                    <a href={'/#'}>Home</a>
                </NavItem>
                <NavItem menu={true}>
                    <a href={'/#'}>Cars</a>
                </NavItem>
                <NavItem menu={true}>
                    <a href={'/#'}>Services</a>
                </NavItem>
                <NavItem menu={true}>
                    <a href={'/#'}>Contact Us</a>
                </NavItem>
            </NavItemsContainer>
        </Menu>
    )


    return (
        <NavItemsContainer>
            <NavItem>
                <a href={'/#'}>Home</a>
            </NavItem>
            <NavItem>
                <a href={'/#'}>Cars</a>
            </NavItem>
            <NavItem>
                <a href={'/#'}>Services</a>
            </NavItem>
            <NavItem>
                <a href={'/#'}>Contact Us</a>
            </NavItem>
        </NavItemsContainer>
    )
}


export default NavItems