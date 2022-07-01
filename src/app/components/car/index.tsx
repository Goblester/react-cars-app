import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import {faFillDrip} from "@fortawesome/free-solid-svg-icons/faFillDrip";
import Button from "../button/Button";
import {GetAllCars_cars} from "../../services/carService/__generated__/GetAllCars";

const CarContainer = styled.div`
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  min-width: 22em;
  max-width: 22em;
  min-height: 30em;
  ${tw`
    relative
    flex
    flex-col
    p-3
    m-1
    sm:m-3
    md:m-6
    rounded-md
    justify-between
    items-center
    bg-white
    mb-4
    md:mb-0
    `}
`

const CarThumbnailContainer = styled.div`
  width: 100%;
  min-height: 16em;

  ${tw`
    flex
    items-center
  `}
  & img {
    height: auto;
    width: 100%;
  }
`

const CarName = styled.h5`
  ${tw`
    font-bold
    text-black
    text-base
    md:text-lg
  `}
`

const PricesLine = styled.div`
  ${tw`
    mt-4
    flex
    text-sm
    md:text-base
    w-full
  `}
`
const DailyPrice = styled.div`
  ${tw`
    inline-flex
    text-red-500
    mr-6
  `}
`

const Separator = styled.div`
  ${tw`
    border-b-2
    text-gray-500
    w-full
  `}
`

const PriceAmount = styled.span`
  ${tw`font-bold`}
`

const MonthlyPrice = styled.div`
  ${tw`
    inline-flex
    text-gray-500
  `}
`


const CarDetailsContainer = styled.div`
  ${tw`
    flex
    justify-between
    w-full
  `}
`

const CarDetail = styled.div`
  ${tw`
    inline-flex
    text-sm
    md:text-base
    text-gray-500
  `}
`

const SmallIcon = styled.span`
  ${tw`mr-2`}
`

const SmallText = styled.span`

`

const RentButton = styled(Button)`
  ${tw`
    w-full
    mt-4
  `}
`

interface CarProps extends GetAllCars_cars {

}


const Car: React.FC<CarProps> = (props) => {
    const {
        name,
        thumbnailUrl,
        gas,
        mileage,
        gearType,
        monthlyPrice,
        dailyPrice
    } = props

    return (
        <CarContainer>
            <CarThumbnailContainer>
                <img src={thumbnailUrl} alt={''}/>
            </CarThumbnailContainer>
            <CarName>{name}</CarName>
            <PricesLine>
                <DailyPrice><PriceAmount>${dailyPrice}</PriceAmount>/daily</DailyPrice>
                <MonthlyPrice><PriceAmount>${monthlyPrice}</PriceAmount>/monthly</MonthlyPrice>
            </PricesLine>
            <Separator/>
            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}/>
                    </SmallIcon>
                    <SmallText>{mileage}</SmallText>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </SmallIcon>
                    <SmallText>{gearType}</SmallText>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFillDrip}/>
                    </SmallIcon>
                    <SmallText>{gas}</SmallText>
                </CarDetail>
            </CarDetailsContainer>
            <RentButton text={'Rent Now'}/>
        </CarContainer>
    )
}

export default Car