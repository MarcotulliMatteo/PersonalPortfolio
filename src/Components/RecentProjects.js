import React from "react";
import { ComponentContainerDiv, ComponentSubContainerDiv, CardContainerDiv, SectionTitleH2 } from "../StyledComponents/StyledComponents";
import ProjectCard from "./ProjectCard";

import portfolioProject from "../Images/Portfolio.png";
import guessTheWordGame from "../Images/GuessTheWordGame.png"

const RecentProjects = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'white'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'black'}>Recent Projects</SectionTitleH2>
                <CardContainerDiv>
                    <ProjectCard color='rgb(123,95,242)' image={portfolioProject}
                     title='Portfolio' description="This is my Portfolio, written in React"
                     showCode={true} showProject={false} codeHref="https://github.com/MarcotulliMatteo/PersonalPortfolio"/>

                    <ProjectCard color='rgb(68,67,69)' image={guessTheWordGame}
                     title='Guess The Word' description="This is a Game in which you have to guess a word. The projest is written in React."
                     showCode={true} showProject={true} codeHref="https://github.com/MarcotulliMatteo/PersonalPortfolio"
                     projectHref="https://github.com/MarcotulliMatteo/PersonalPortfolio"/>
                </CardContainerDiv>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default RecentProjects;
