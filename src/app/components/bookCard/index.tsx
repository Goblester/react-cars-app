import styled from "@emotion/styled";
import Button from "../button/Button";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import {Marginer} from "../marginer";


const BookCardContainer = styled.div`
  min-height: 4.2em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    px-2
    py-1
    md:px-9
    rounded-md
    items-center
    justify-center
  `}
`

const ItemContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`

const Icon = styled.span` 
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`

const Name = styled.span`
  ${tw`
    text-gray-700
    text-xs
    md:text-sm
  `}
`

const Separator = styled.div`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `}
`

const BookCard = () => {

    return (
        <BookCardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name>Pick Up Date</Name>
            </ItemContainer>
            <Separator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name>Return Date</Name>
            </ItemContainer>
            <Marginer margin={'10px'} direction={'horizontal'}/>
            <Button theme={'outlined'} text={'Book Your Ride'}/>
        </BookCardContainer>
    )
}


export default BookCard