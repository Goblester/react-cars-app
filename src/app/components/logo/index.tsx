import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import CarsImageLogo from "../../../assets/images/car-logo.png"

const LogoContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
  `}
`

const Image = styled.div`
  width: auto;
  ${tw`
    h-6
    md:h-9
  `}
  & img {
    height: 100%;
    width: auto
  }
`

const LogoText = styled.text`
  ${tw`
    text-xl 
    md:text-2xl 
    font-bold
    text-black
    m-1
  `}
`

const Logo: React.FC = () => {


    return <LogoContainer>
        <Image>
            <img src={CarsImageLogo} alt={''}/>
        </Image>
        <LogoText>YourCar</LogoText>
    </LogoContainer>
}

export default Logo