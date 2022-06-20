import tw from "twin.macro";
import styled from "@emotion/styled";
import React from "react";
import Logo from "../logo";
import NavItems from "./navitems";


const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    flex
    flex-row
    justify-between
    items-center
    w-full
    max-w-screen-2xl
    lg:px-12
  `}
`

const LogoContainer = styled.div``

const NavBar: React.FC = () => {

    return (
        <NavBarContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <NavItems/>
        </NavBarContainer>
    )
}

export default NavBar