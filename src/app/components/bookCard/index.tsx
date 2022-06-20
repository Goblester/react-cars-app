import styled from "@emotion/styled";
import Button from "../button/Button";
import tw from "twin.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import {Marginer} from "../marginer";
import './../../constants/calendarStyle.css';
import Calendar from "react-calendar";
import {AnyAction} from "@reduxjs/toolkit";
import {useReducer} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/faCaretUp";
import {SCREENS} from "../../constants/screens";
import {css} from "@emotion/react";

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
    relative
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
    cursor-pointer
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
const SmallIcon = styled.div`
  ${tw`
    text-xs
    md:text-base
    fill-current
    ml-1
    text-gray-500
    cursor-pointer
  `}
`

const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  top: 3em;
  left: 0;

  & .react-calendar__tile--active {
    ${tw`bg-blue-700`}
  }

  & .react-calendar__tile--now {
    ${tw`bg-yellow-100`}
  }
  max-width: none;
  
  ${({offset}) => offset && css`
    left: -6em;
  `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: 0;
  }
`


type InitialStateType = {
    pickUpDateOpen: boolean
    returnDateOpen: boolean
    pickUpDate: Date
    returnDate: Date
}

enum bookCardActions {
    TOGGLE_PICK_UP_DATE_OPEN = 'togglePickUpDateOpen',
    TOGGLE_RETURN_DATE_OPEN = 'toggleReturnDateOpen',
    CHANGE_PICK_UP_DATE = 'changePickUpDate',
    CHANGE_RETURN_DATE = 'changeReturnDate',
}


const bookCardReducer = (state: InitialStateType, action: AnyAction): InitialStateType => {
    switch (action.type) {
        case bookCardActions.TOGGLE_PICK_UP_DATE_OPEN:
            return {...state, pickUpDateOpen: !state.pickUpDateOpen, returnDateOpen: false}
        case bookCardActions.TOGGLE_RETURN_DATE_OPEN:
            return {...state, returnDateOpen: !state.returnDateOpen, pickUpDateOpen: false}
        case bookCardActions.CHANGE_PICK_UP_DATE:
            return {...state, pickUpDate: action.payload.date, pickUpDateOpen: false}
        case bookCardActions.CHANGE_RETURN_DATE:
            return {...state, returnDate: action.payload.date, returnDateOpen: false}
        default:
            throw new Error()
    }
}


const togglePickUpDateOpen = () => ({
    type: bookCardActions.TOGGLE_PICK_UP_DATE_OPEN
})

const toggleReturnDateOpen = () => ({
    type: bookCardActions.TOGGLE_RETURN_DATE_OPEN
})

const changeReturnDate = (newDate: Date) => ({
    type: bookCardActions.CHANGE_RETURN_DATE,
    payload: {date: newDate}
})

const changePickUpDate = (newDate: Date) => ({
    type: bookCardActions.CHANGE_PICK_UP_DATE,
    payload: {date: newDate}
})

const BookCard = () => {

    const [state, dispatch] = useReducer(bookCardReducer, {
        pickUpDateOpen: false,
        returnDateOpen: false,
        pickUpDate: new Date(),
        returnDate: new Date()
    })

    const {
        pickUpDateOpen,
        returnDate,
        pickUpDate,
        returnDateOpen
    } = state

    const togglePickUpDateCalendar = () => dispatch(togglePickUpDateOpen())
    const toggleReturnDateCalendar = () => dispatch(toggleReturnDateOpen())
    const changeCalendarPickUpDate = (date: Date) => dispatch(changePickUpDate(date))
    const changeCalendarReturnDate = (date: Date) => dispatch(changeReturnDate(date))


    return (
        <BookCardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={togglePickUpDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={pickUpDateOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {pickUpDateOpen && <DateCalendar value={pickUpDate}
                                                 onChange={changeCalendarPickUpDate}/>}
            </ItemContainer>
            <Separator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={returnDateOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
                {returnDateOpen && <DateCalendar offset={true}
                                                 value={returnDate}
                                                 onChange={changeCalendarReturnDate}/>}
            </ItemContainer>
            <Marginer margin={'10px'} direction={'horizontal'}/>
            <Button theme={'outlined'} text={'Book Your Ride'}/>
        </BookCardContainer>
    )
}


export default BookCard