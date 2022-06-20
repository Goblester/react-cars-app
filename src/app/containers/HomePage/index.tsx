import React from "react";
import tw from "twin.macro";
import NavBar from "../../components/navbar";


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
        </PageContainer>
    )
}

export default HomePage