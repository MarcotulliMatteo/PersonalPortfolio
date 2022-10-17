import { ComponentContainerDiv, ComponentSubContainerDiv, SectionTitleH2, TextH4, Button } from "../StyledComponents/StyledComponents";

const AboutMe = () => {
    return (
        <ComponentContainerDiv color={'black'}>
            <ComponentSubContainerDiv>
                <SectionTitleH2 color={'white'}>About Me</SectionTitleH2>

                <TextH4>Computer Scientist with 4+ years experience, with good leadership skills, analytical skills and coding skills,
with a strong knowledge of cross platform coding.

Worked with different platforms as Backend Cloud SAP Systems, Backend Google Cloud Systems, Front End Android, Front End Hybrid Application languages as React Native and last but not least Api interfaces, Front End Web Application as React and Sapui5 .

I'm a hard worker, fast learner and a very motivated person.
Feel free to connect !</TextH4>

                <Button>Contact Me</Button>
            </ComponentSubContainerDiv>
        </ComponentContainerDiv>
    )
}

export default AboutMe;