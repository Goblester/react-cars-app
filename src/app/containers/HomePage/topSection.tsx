import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import BlobImg from './../../../assets/images/blob.svg';
import CarImg from './../../../assets/images/mclaren-orange-big.png';
import {SCREENS} from "../../constants/screens";
import Button from "../../components/button/Button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        flex
        w-full
        max-w-screen-2xl
        px-3
        lg:px-12
        justify-between
    `}
`

const LeftContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-1/2
  `}
`

const RightContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-1/2
    relative
    mt-20
  `}
`

const Slogan = styled.h1`
  ${tw`
    text-black
    font-bold
    text-2xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    mb-4
    sm:leading-snug
    sm:leading-normal
    xl:leading-relaxed
  `}
`

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    max-h-12
    overflow-hidden
    text-gray-800
  `}
`

const BlobContainer = styled.div`
  height: 10em;
  width: 20em;
  z-index: -1;
  position: absolute;
  right: -5em;
  top: -9em;
  transform: rotate(-30deg);

  & img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  
  @media(min-width: ${SCREENS.sm}){
    max-height: 10em;
    width: 40em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  
   @media(min-width: ${SCREENS.lg}){
    max-height: 30em;
    width: 50em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  
   @media(min-width: ${SCREENS.xl}){
    max-height: 10em;
    width: 70em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`
const StandaloneCar = styled.div`
  height: 10em;
  width: auto;
  position: absolute;
  right: -5em;
  top: -6em;
  
  & img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  
  @media(min-width: ${SCREENS.sm}){
   height: 16em;
   right: -6em;
   top: -6em;
  }
  
  @media(min-width: ${SCREENS.lg}){
   height: 21em;
   right: -8em;
   top: -5em;
  }
  
  @media(min-width: ${SCREENS.xl}){
   height: 30em;
   right: -13em;
   top: -9em;
  }
`

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `}
`

const TopSection: React.FC = () => {

    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>Rent The Best Quality Cars With Us</Slogan>
            <Description>Always choose the best car from our stores or order it remotely
                at the best price for you and get the best quality cars for as long as you like</Description>
            <ButtonsContainer>
                <Button theme={'outlined'}  text={'Book Your Ride'}/>
                <Button theme={'filled'} text={'Sell Your Car'}/>
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer><img src={BlobImg} alt={''}/></BlobContainer>
            <StandaloneCar><img src={CarImg} alt={''}/></StandaloneCar>
        </RightContainer>
    </TopSectionContainer>
}

export default TopSection