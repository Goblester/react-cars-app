import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Car from "../../components/car";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../constants/screens";
import {useQuery} from "@apollo/client";
import {GET_ALL_CARS} from "../../services/carService/queries";
import {GetAllCars} from "../../services/carService/__generated__/GetAllCars";
import Loader from "../../components/loader";

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

const LoaderContainer = styled.div`
  ${tw`
    flex
    items-center
    mt-10
    mx-auto
  `}
`

const TopCars: React.FC = () => {

    const isMobile = useMediaQuery({maxWidth: SCREENS.md})
    const isLarge = useMediaQuery({maxWidth: SCREENS.xl})
    const {data, loading} = useQuery<GetAllCars>(GET_ALL_CARS)



    if (loading) {
        return (
            <TopCarsContainer>
                <Title>Explore Our Top Deals</Title>
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            </TopCarsContainer>
        )
    }


    const numberOfSlides = isMobile ? 1 : isLarge ? 2 : 3


    return <TopCarsContainer>
        <Title>Explore Our Top Deals</Title>
        {data ?
            <CarsContainer>
                <Swiper slidesPerView={data.cars.length < numberOfSlides ? data.cars.length : numberOfSlides} pagination={{clickable: true, horizontalClass: 'static'}}
                        modules={[Pagination]}>
                    {data.cars.map((carData) =>
                        <SwiperSlide key={carData.id} className={'flex justify-center pb-4'}>
                            <Car {...carData}/>
                        </SwiperSlide>)}
                </Swiper>

            </CarsContainer>
            :
            <div>no cars, sorry.</div>

        }
    </TopCarsContainer>
}


export default TopCars