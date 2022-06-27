import React from "react";
import {ICar} from "../../../typings/car";
import styled from "@emotion/styled";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons/faEllipsisH";
import {faFillDrip} from "@fortawesome/free-solid-svg-icons/faFillDrip";
import Button from "../button/Button";

const CarContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-width: 22em;
  max-width: 22em;
  min-height: 32em;
  max-height: 32em;
  ${tw`
    flex
    flex-col
    `}
`

const ThumbnailContainer = styled.div`
  height: 100%;
  width: auto;
  
  & img {
    height: 100%;
    width: 100%;
  }
`

const PricesLine = styled.div`
`

const CarDetailsContainer = styled.div`
  
`

interface CarProps extends ICar {

}


const Car: React.FC<CarProps> = (props) => {
    const {
        name,
        thumbnailSrc,
        gas,
        mileage,
        gearType,
        monthlyPrice,
        dailyPrice
    } = props

    return (
        <CarContainer>
            <ThumbnailContainer>
                <img src={thumbnailSrc} alt={''}/>
            </ThumbnailContainer>
            <h5>{name}</h5>
            <PricesLine>
                <span>{dailyPrice}</span>
                <span>{monthlyPrice}</span>
            </PricesLine>
            <CarDetailsContainer>
                <div>
                    <FontAwesomeIcon icon={faTachometerAlt}/>
                    <span>{mileage}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                    <span>{gearType}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFillDrip}/>
                    <span>{gas}</span>
                </div>
            </CarDetailsContainer>
            <Button text={'Rent Now'}/>
        </CarContainer>
    )
}

export default Car