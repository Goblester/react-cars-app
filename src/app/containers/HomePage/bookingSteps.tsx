import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faCarSide} from "@fortawesome/free-solid-svg-icons/faCarSide";

const Container = styled.section`
  ${tw`
    flex
    flex-col
    items-center
    px-3
    lg:px-7
  `};
`

const Title = styled.h2`
  ${tw`
    text-3xl
    md:text-4xl
    font-extrabold
    `}
`

const StepsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-evenly
    mt-16
  `}
`

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    w-96
  `}
`

const Icon = styled.span`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    p-6
    text-xl
    text-red-500
    rounded-md
  `}
`

const StepTitle = styled.h4`
  ${tw`
    mt-4
    text-base
    md:text-xl
    text-black
    font-bold
    text-black
    transition-colors
    hover:text-red-500
  `}
`
const StepDescription = styled.p`
  ${tw`
    mt-2
    md:mt-4
    text-xs
    md:text-sm
    w-9/12
    text-gray-500
    text-center
    mb-6
  `}
`


const BookingSteps: React.FC = () => {

    return <Container>
        <Title>Our Working Steps</Title>
        <StepsContainer>
            <StepContainer>
                <Icon>
                    <FontAwesomeIcon icon={faMapMarkedAlt}/>
                </Icon>
                <StepTitle>Choose Location</StepTitle>
                <StepDescription>Find the nearest Yourcar point and book your car.</StepDescription>
            </StepContainer>
            <StepContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <StepTitle>Pick-Up Date</StepTitle>
                <StepDescription>Pickup the Best Date to rent a car for you.</StepDescription>
            </StepContainer>
            <StepContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCarSide}/>
                </Icon>
                <StepTitle>Book Your Ride</StepTitle>
                <StepDescription>Book your nice care with ease in one click.</StepDescription>
            </StepContainer>
        </StepsContainer>
    </Container>
}

export default BookingSteps