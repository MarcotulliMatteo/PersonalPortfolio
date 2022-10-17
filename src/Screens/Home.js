import styled from "styled-components";
import React from "react";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import Knowledge from "../Components/Knowledge";
import AboutMe from "../Components/AboutMe";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <MainSection/>
            <Knowledge/>
            <AboutMe/>
        </React.Fragment>
    )
}

export default Home;

export const YellowSpan = styled.span`
    color: yellow;
`