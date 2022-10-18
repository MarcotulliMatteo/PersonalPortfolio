import React from "react";
import { ComponentContainerDiv, ComponentSubContainerDiv, CardContainerDiv, SectionTitleH2 } from "../StyledComponents/StyledComponents";
import ProjectCard from "./ProjectCard";

import portfolioProject from "../Images/Portfolio.png";
import guessTheWordGame from "../Images/GuessTheWordGame.png";
import billReminder1 from "../Images/BillReminder1.png";
import billReminder2 from "../Images/BillReminder2.png";
import billReminder3 from "../Images/BillReminder3.png";
import animeList2 from "../Images/AnimeList2.png"
import animeList1 from "../Images/AnimeList1.png"

const RecentProjects = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'white'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'black'}>My Projects</SectionTitleH2>
                <CardContainerDiv>
                    <ProjectCard color='rgb(41,58,80)' image={[portfolioProject]}
                     title='Portfolio' description="This is my Portfolio, written in React"
                     showCode={true} showProject={false} codeHref="https://github.com/MarcotulliMatteo/PersonalPortfolio"/>

                    <ProjectCard color='rgb(68,67,69)' image={[guessTheWordGame]}
                     title='Guess The Word' description="This is a Game in which you have to guess a word. The projest is written in React."
                     showCode={true} showProject={true} codeHref="https://github.com/MarcotulliMatteo/GuessTheWordGame"
                     projectHref="https://vermillion-clafoutis-eced69.netlify.app/"/>

                    <ProjectCard color='rgb(88,21,137)' image={[billReminder1, billReminder2, billReminder3]}
                     title='Bill Reminder' description="Mobile Application for Store all the Bill to be paid and already paid, written in React Native using Firebase and Firebase Authentication."
                     showCode={true} showProject={false} codeHref="https://github.com/MarcotulliMatteo/BillReminder"/>

                    <ProjectCard color='rgb(68,67,69)' image={[animeList1, animeList2]}
                     title='Anime List' description="Social Network about Anime and Manga, written in React Native using Firebase and Firebase Authentication."
                     showCode={true} showProject={false} codeHref="https://github.com/MarcotulliMatteo/AnimeList"/>
                </CardContainerDiv>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default RecentProjects;
