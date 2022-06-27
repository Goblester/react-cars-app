import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Logo from "../logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const FooterContainer = styled.footer`
  background-color: rgb(29, 33, 36);
  ${tw`
      w-full
      pt-12
      text-white
      flex
      flex-col
      items-center
      pb-6
    `}
`

const FooterInnerContainer = styled.div`
  ${tw`
    w-full
    px-12
    2xl:px-0
    max-w-screen-2xl
    flex
    flex-wrap
    justify-between
  `}
`

const AboutUsContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    max-w-sm
    md:max-w-xs
    md:mr-12
  `}
`

const AboutUsText = styled.p`
  ${tw`
    mt-4
    text-sm
    leading-4
  `}
`

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    md:w-auto
    md:max-w-xs
    md:mr-12
    mt-4
    lg:mt-0
  `}
`

const SectionTitle = styled.h5`
  ${tw`
    font-bold
    text-xl
    md:text-2xl
  `}
`

const Links = styled.div`
  ${tw`
    flex
    flex-col
  `}
  & > a {
    ${tw`
        mt-4
        hover:text-gray-300
        transition-all
        text-sm
    `}
  }
`

const ContactContainer = styled.div`
  ${tw`
    flex
    items-center
    mt-4
  `}
`

const ContactIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    text-white
    bg-red-500
    flex
    items-center
    justify-center
  `}
`

const ContactText = styled.span`
  ${tw`
    text-xs
    md:text-sm
    ml-2
  `}
`

const BottomContainer = styled.div`
  ${tw`
    mt-4
    w-full
    px-12
    2xl:px-0
    max-w-screen-2xl
    flex
  `}
`

const CopyRightText = styled.p`
  ${tw`
    text-gray-500
    text-xs
  `}
`

const Footer: React.FC = () => {

    return (
        <FooterContainer>
            <FooterInnerContainer>
                <AboutUsContainer>
                    <Logo logoColor={'dark'} color={'light'}/>
                    <AboutUsText>
                        Yourcar is a Car renting and selling company located in many countries
                        across the world which has high quality cars and top rated service.
                    </AboutUsText>
                </AboutUsContainer>
                <SectionContainer>
                    <SectionTitle>Our Links</SectionTitle>
                    <Links>
                        <a href={'/#'} >Home</a>
                        <a href={'/#'} >About Us</a>
                        <a href={'/#'} >Services</a>
                        <a href={'/#'} >Models</a>
                        <a href={'/#'} >Blog</a>
                    </Links>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>Other Links</SectionTitle>
                    <Links>
                        <a href={'/#'} >FAQ</a>
                        <a href={'/#'} >Contact Us</a>
                        <a href={'/#'} >Support</a>
                        <a href={'/#'} >Privacy Policy</a>
                        <a href={'/#'} >Terms & Conditions</a>
                    </Links>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>Call Now</SectionTitle>
                    <ContactContainer>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </ContactIcon>
                        <ContactText>+7-981-113-27-79</ContactText>
                    </ContactContainer>
                </SectionContainer>
                <SectionContainer>
                    <SectionTitle>Mail</SectionTitle>
                    <ContactContainer>
                        <ContactIcon>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </ContactIcon>
                        <ContactText>goblin829@gmail.com</ContactText>
                    </ContactContainer>
                </SectionContainer>
            </FooterInnerContainer>
            <BottomContainer>
                <CopyRightText>
                    Copyright &copy; Yourcar. All rights reserved.
                </CopyRightText>
            </BottomContainer>
        </FooterContainer>
    )
}


export default Footer