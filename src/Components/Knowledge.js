import React from "react";
import styled from "styled-components";
import { FaMobile, FaCode, FaDatabase } from "react-icons/fa";
import { ComponentContainerDiv, ComponentSubContainerDiv, CardContainerDiv, SectionTitleH2, TextH3, TextH4, CardDiv } from "../StyledComponents/StyledComponents";

const Knowledge = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'white'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'black'}>My Knowledge</SectionTitleH2>
                <CardContainerDiv>
                    <CardDiv>
                        <FaDatabaseStyled size={25}/>
                        <TextH3>Back-end Developer</TextH3>
                        <TextH4>4+ years of experience on Backend development with Sap Cloud Platform CAP and Node.js</TextH4>
                    </CardDiv>
                    <CardDiv>
                        <FaCodeStyled size={25}/>
                        <TextH3>Web Developer</TextH3>
                        <TextH4>3+ years of experience on Web Development using Sapui5 and React</TextH4>
                    </CardDiv>
                    <CardDiv>
                        <FaMobileStyled size={25}/>
                        <TextH3>Mobile Developer</TextH3>
                        <TextH4>3+ years of experience on Mobile development React Native and Android Native</TextH4>
                    </CardDiv>
                </CardContainerDiv>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default Knowledge;

const FaMobileStyled = styled(FaMobile)`
    color: yellow;
`

const FaCodeStyled = styled(FaCode)`
    color: yellow;
`

const FaDatabaseStyled = styled(FaDatabase)`
    color: yellow;
`

