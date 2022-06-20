import React from "react";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import TopSection from "./topSection";


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
        </PageContainer>
    )
}

export default HomePage