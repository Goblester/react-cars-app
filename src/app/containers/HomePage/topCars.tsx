import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";


const TopCarsContainer = styled.section`
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    px-3
    lg:px-12
    justify-center
  `}
`

const Title = styled.h2`
  ${tw`
    text-3xl
    md:text-4xl
    font-extrabold
    text-center
    `}
`

const CarsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
  `}
`

const TopCars: React.FC = () => {

    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            {/*<Car/>*/}
            {/*<Car/>*/}
            {/*<Car/>*/}
        </CarsContainer>
    </TopCarsContainer>
}


export default TopCars