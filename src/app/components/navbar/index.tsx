import tw from "twin.macro";
import styled from "@emotion/styled";
import React from "react";
import Logo from "../logo";


const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    flex
    flex-row
    justify-between
    items-center
    w-full
    max-w-7xl
    lg:px-12
  `}
`

const NavBar: React.FC = () => {

    return (
        <NavBarContainer>
            <Logo/>
        </NavBarContainer>
    )
}

export default NavBar