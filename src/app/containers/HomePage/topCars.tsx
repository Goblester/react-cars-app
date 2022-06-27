import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {ICar} from "../../../typings/car";
import CarImage from "../../../assets/images/mclaren-orange.png";
import Car2Image from "../../../assets/images/jeep.png";
import Car from "../../components/Car";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../constants/screens";

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
    mt-10
    flex
    flex-wrap
    items-center
    justify-center
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

    const isMobile = useMediaQuery({maxWidth: SCREENS.md})
    const isLarge = useMediaQuery({maxWidth: SCREENS.xl})

    const cars = [
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar}/>,
        <Car {...testCar2}/>,
        <Car {...testCar}/>
    ]

    const numberOfSlides = isMobile ? 1 : isLarge ? 2 : 3

    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        <CarsContainer>
            <Swiper slidesPerView={numberOfSlides} pagination={{clickable: true, horizontalClass: 'static'}} modules={[Pagination]}>
                {cars.map((car, index) =>
                    <SwiperSlide className={'flex justify-center'} key={index}>{car}</SwiperSlide> )}
            </Swiper>

        </CarsContainer>
    </TopCarsContainer>
}


export default TopCars