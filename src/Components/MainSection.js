import React from "react";
import styled from "styled-components";
import homebackground from "../Images/home.png";

import { TextH1, TextH3, TextH4, YellowSpan } from "../StyledComponents/StyledComponents";
import ContactsIcons from "./ContactsIcons";

const MainSection = React.forwardRef((props, ref) => {
    return (
        <HomeContainerDiv ref={ref}>
            <HomeDiv>
                <TextH3>Hi! I'm Matteo.</TextH3>
                <TextH1>A <YellowSpan>Full Stack Developer</YellowSpan></TextH1>
                <TextH4 maxWidth={'40%'}>Computer Scientist with 4+ years experience, with good leadership skills, analytical skills and coding skills, with a strong knowledge of cross platform coding.</TextH4>

                <HomeIconDiv>
                    <ContactsIcons/>
                </HomeIconDiv>
            </HomeDiv>
        </HomeContainerDiv>
    )
})

export default MainSection;

const HomeContainerDiv = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: black;
    height:100vh;
    margin-top: 30px;
    background-image: url(${homebackground});
    background-size: cover;
    background-position: center;
    overflow-y: auto;
`

const HomeDiv = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 65%;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`

const HomeIconDiv = styled.div`
    position: absolute;
    bottom: 5vh;
    z-index: 10;
`