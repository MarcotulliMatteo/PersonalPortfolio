import styled from "styled-components";

const AboutMe = () => {
    return (
        <AboutContainerDiv>
            <AboutDiv>
                <AboutH2>About Me</AboutH2>

                <AboutH4>Computer Scientist with 4+ years experience, with good leadership skills, analytical skills and coding skills,
with a strong knowledge of cross platform coding.

Worked with different platforms as Backend Cloud SAP Systems, Backend Google Cloud Systems, Front End Android, Front End Hybrid Application languages as React Native and last but not least Api interfaces, Front End Web Application as React and Sapui5 .

I'm a hard worker, fast learner and a very motivated person.
Feel free to connect !</AboutH4>

                <AboutButton>Contact Me</AboutButton>
            </AboutDiv>
        </AboutContainerDiv>
    )
}

export default AboutMe;

const AboutContainerDiv = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const AboutDiv = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 20px;
    flex-direction: column;
    text-align: center;
    padding: 40px 0px 40px 0px;
`

const AboutH2 = styled.h2`
    color: white;
    border-bottom: 3px solid yellow;
`

const AboutH4 = styled.h4`
    color: white;
`

const AboutButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: yellow;
    color: black;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
`