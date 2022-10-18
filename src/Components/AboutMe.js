import React from "react";
import { ComponentContainerDiv, ComponentSubContainerDiv, SectionTitleH2, TextH4, Button, YellowSpan } from "../StyledComponents/StyledComponents";
import { SECTIONS } from "../Utils/constants";

const AboutMe = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'black'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'white'}>About Me</SectionTitleH2>

                <TextH4>Throughout the 4 years of my professional career, I have gained experience in <YellowSpan>Full Stack development</YellowSpan>, starting with Back End Application with SAP Cloud Platform using <YellowSpan>Node.js</YellowSpan> and <YellowSpan>SQL</YellowSpan>, passing through <YellowSpan>API Management</YellowSpan>, Web Application development with <YellowSpan>Sapui5</YellowSpan> and <YellowSpan>React</YellowSpan>, Mobile Application with <YellowSpan>Android Kotlin/Java</YellowSpan> and <YellowSpan>React-Native</YellowSpan>, ending with the <YellowSpan>Team Leadership</YellowSpan> of two projects for Ferrero company.</TextH4>
                <TextH4><YellowSpan>I’m a big fan of React Library and React Native Framework.</YellowSpan></TextH4>
                <TextH4>My past experiences have given me varied skills and the ability to work with many different types of people and technologies. I’m a conscientious person who works hard and pays attention to detail, and I want to challenge myself with new Technologies and in a new work environment.</TextH4>
                <TextH4><YellowSpan>Feel free to contact me !</YellowSpan></TextH4>

                <Button onClick={() => props.executeScrollToSection(SECTIONS.CONTACTME)}>Contact Me</Button>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default AboutMe;