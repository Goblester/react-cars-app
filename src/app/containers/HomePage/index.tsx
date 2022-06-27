import React from "react";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import TopSection from "./topSection";
import BookCard from "../../components/bookCard";
import {Marginer} from "../../components/marginer";
import BookingSteps from "./bookingSteps";
import AboutUs from "./aboutUs";
import TopCars from "./topCars";
import Footer from "../../components/footer";


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
            <Marginer margin={'6em'} direction={'vertical'}/>
            <TopCars/>
            <Marginer margin={'10em'} direction={'vertical'}/>
            <Footer/>
        </PageContainer>
    )
}

export default HomePage