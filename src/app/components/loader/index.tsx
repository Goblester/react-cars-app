import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import LoaderImg from './../../../assets/images/loader.svg'

const LoaderContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    animate-spin
    h-32
    w-32
  `}
  
  & img {
    width: 100%;
    height: auto;
  }
  
`

const Loader: React.FC = () => {


    return <LoaderContainer>
        <img src={LoaderImg} alt={'loader'}/>
    </LoaderContainer>
}


export default Loader