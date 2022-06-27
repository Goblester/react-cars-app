import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";
import CarsImageLogo from "../../../assets/images/car-logo.png"
import DarkCarsImageLogo from "../../../assets/images/car-logo-dark.png"

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

const LogoText = styled.text<{color: ColorType}>`
  ${tw`
    text-xl 
    md:text-2xl 
    font-bold
    m-1
  `} 
  ${({color}) => color === 'dark' ? tw`text-black` : tw`text-white`};
`

type ColorType = 'dark' | 'light'

interface LogoProps {
    color?: ColorType
    logoColor?: ColorType
}

const Logo: React.FC<LogoProps> = (props) => {

    const {color, logoColor} = props

    return <LogoContainer>
        <Image>
            <img src={logoColor === 'dark' ? DarkCarsImageLogo : CarsImageLogo} alt={''}/>
        </Image>
        <LogoText color={color || 'dark'}>YourCar</LogoText>
    </LogoContainer>
}

export default Logo