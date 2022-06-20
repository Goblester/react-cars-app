import React from "react";
import tw from "twin.macro";


const PageContainer = tw.div`
  flex
  flex-col
  items-center
  h-full
  w-full
  overflow-x-hidden
`


const HomePage: React.FC = () => {

    return <PageContainer>hello world!!!!!!</PageContainer>
}

export default HomePage