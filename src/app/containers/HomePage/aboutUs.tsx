import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import JeepImg from './../../../assets/images/jeep.png';
import {SCREENS} from "../../constants/screens";

const AboutUsContainer = styled.section`
  ${tw`
    w-full
    flex
    flex-wrap
    px-7
    md:px-0
    items-center
    justify-center
  `}
`

const CarContainer = styled.div`
  height: 15em;
  width: auto;
  
  & img {
    height: 100%;
    width: auto;
  }
  
  @media(min-width: ${SCREENS.sm}){
    height: 20em;
  }
  @media(min-width: ${SCREENS.md}){
    height: 28em;
  }
  @media(min-width: ${SCREENS.xl}){
    margin-left: -50px;
  }
  
  @media(min-width: ${SCREENS["2xl"]}){
    height: 38em;
  }
  
  
`

const InfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    md:w-1/2
  `}
`

const Title = styled.h4`
  ${tw`
    text-2xl
    md:text-4xl
    font-extrabold
  `}
`

const Description = styled.p`
  ${tw`
    text-gray-500
    mt-6
    text-sm
    md:text-base
  `};
`

const AboutUs: React.FC = () => {

    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} alt={''}/>
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Posuere ac ut consequat semper viverra. Est ante in nibh mauris cursus mattis molestie a iaculis.
                    Enim diam vulputate ut pharetra sit. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.

                </Description>
            </InfoContainer>
        </AboutUsContainer>
    )
}


export default AboutUs