import React from 'react';
import './App.css';
import HomePage from "./app/containers/HomePage";
import tw from "twin.macro";
import NavBar from "./app/components/navbar";

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
        <AppContainer>
            <NavBar/>
            <HomePage/>
        </AppContainer>
    );
}

export default App;
