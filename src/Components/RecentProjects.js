import React from "react";
import { ComponentContainerDiv, ComponentSubContainerDiv, SectionTitleH2 } from "../StyledComponents/StyledComponents";

const RecentProjects = React.forwardRef((props, ref) => {
    return (
        <ComponentContainerDiv color={'white'} ref={ref}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'black'}>Recent Projects</SectionTitleH2>

            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
})

export default RecentProjects;