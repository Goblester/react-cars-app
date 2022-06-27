import React from "react";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import TopSection from "./topSection";
import BookCard from "../../components/bookCard";
import {Marginer} from "../../components/marginer";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";


const PageContainer = tw.div`
  flex
  flex-col
  items-center
  h-full
  w-full
  overflow-x-hidden
`


const HomePage: React.FC = () => {

    return (
        <PageContainer>
            <NavBar/>
            <TopSection/>
            <Marginer margin={'4em'} direction={'vertical'}/>
            <BookCard/>
            <Marginer margin={'6em'} direction={'vertical'}/>
            <BookingSteps/>
            <Marginer margin={'6em'} direction={'vertical'}/>
            <AboutUs/>
        </PageContainer>
    )
}

export default HomePage