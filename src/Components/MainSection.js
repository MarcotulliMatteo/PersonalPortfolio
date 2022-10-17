import styled from "styled-components";
import homebackground from "../Images/home.jpg";
import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import { YellowSpan } from "../Screens/Home";

const MainSection = () => {
    return (
        <HomeContainerDiv>
            <HomeDiv>
                <HomeH3>Hi! I'm Matteo.</HomeH3>
                <HomeH1>A <YellowSpan>Full Stack Developer</YellowSpan></HomeH1>
                <HomeH4>Computer Scientist with 4+ years experience, with good leadership skills, analytical skills and coding skills, with a strong knowledge of cross platform coding.</HomeH4>

                <HomeIconDiv>
                    <a href="" target='_blank' rel="noreferrer">
                        <StyledGrInstagram size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/matteo-marcotulli-31b6651b1" target='_blank' rel="noreferrer">
                        <StyledGrLinkedin size={20}/>
                    </a>
                    <a href="https://github.com/MarcotulliMatteo?tab=repositories" target='_blank' rel="noreferrer">
                        <StyledGrGithub size={20}/>
                    </a>
                </HomeIconDiv>
            </HomeDiv>
        </HomeContainerDiv>
    )
}

export default MainSection;

const HomeContainerDiv = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: black;
    height:100vh;
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
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 5vh;
    z-index: 10;
`

const HomeH1 = styled.h1`
    color: white;
`

const HomeH3 = styled.h3`
    color: white;
`

const HomeH4 = styled.h4`
    color: white;
    max-width: 40%;
`

const StyledGrInstagram = styled(GrInstagram)`
    color: white;
    &:hover {
        color: yellow;
    }
`

const StyledGrLinkedin = styled(GrLinkedin)`
    color: white;
    &:hover {
        color: yellow;
    }
`

const StyledGrGithub = styled(GrGithub)`
    color: white;
    &:hover {
        color: yellow;
    }
`