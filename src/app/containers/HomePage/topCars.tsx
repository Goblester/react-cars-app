import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {ICar} from "../../../typings/car";
import CarImage from "../../../assets/images/mclaren-orange.png";
import Car2Image from "../../../assets/images/jeep.png";
import Car from "../../components/Car";


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

const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc: CarImage,
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol'
}


const testCar2: ICar = {
    name: 'HONDA CITY 5 Seater Car',
    mileage: '20k',
    thumbnailSrc: Car2Image,
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol'
}

const TopCars: React.FC = () => {

    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            <Car {...testCar}/>
            <Car {...testCar2}/>
            <Car {...testCar2}/>
        </CarsContainer>
    </TopCarsContainer>
}


export default TopCars