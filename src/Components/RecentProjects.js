import React from "react";
import { ComponentContainerDiv, ComponentSubContainerDiv, CardContainerDiv, SectionTitleH2 } from "../StyledComponents/StyledComponents";
import ProjectCard from "./ProjectCard";

import portfolioProject from "../Images/Portfolio.png";

const RecentProjects = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'white'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'black'}>Recent Projects</SectionTitleH2>
                <CardContainerDiv>
                    <ProjectCard color='rgb(123,95,242)' image={portfolioProject}
                     title='Portfolio' description="This is my Portfolio, written in React"
                     showCode={true} showProject={false} codeHref="https://github.com/MarcotulliMatteo/PersonalPortfolio"/>
                </CardContainerDiv>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default RecentProjects;
