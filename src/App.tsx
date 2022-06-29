import React from 'react';
import './App.css';
import HomePage from "./app/containers/HomePage";
import tw from "twin.macro";

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-x-hidden
  items-center
`

function App() {
    return (
        <AppContainer className={'rounded-'}>
            <HomePage/>
        </AppContainer>
    );
}

export default App;
