import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";


const NavItemsContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`

const NavItem = styled.li`
  ${tw`
    text-xs
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
`

const NavItems: React.FC = () => {

    return (
        <NavItemsContainer>
            <NavItem>
                <a href={'#'}>Home</a>
            </NavItem>
            <NavItem>
                <a href={'#'}>Cars</a>
            </NavItem>
            <NavItem>
                <a href={'#'}>Services</a>
            </NavItem>
            <NavItem>
                <a href={'#'}>Contact Us</a>
            </NavItem>
        </NavItemsContainer>
    )
}


export default NavItems