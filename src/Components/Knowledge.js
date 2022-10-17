import styled from "styled-components";
import { FaMobile, FaCode, FaDatabase } from "react-icons/fa";

const Knowledge = () => {
    return (
        <KnowContainerDiv>
            <KnowDiv>
                <KnowH2>My Knowledge</KnowH2>
                <CardContainerDiv>
                    <CardDiv>
                        <FaDatabaseStyled size={25}/>
                        <KnowH3>Back-end Developer</KnowH3>
                        <KnowH4>4+ years of experience on Backend development with Sap Cloud Platform CAP and Node.js</KnowH4>
                    </CardDiv>
                    <CardDiv>
                        <FaCodeStyled size={25}/>
                        <KnowH3>Web Developer</KnowH3>
                        <KnowH4>3+ years of experience on Web Development using Sapui5 and React</KnowH4>
                    </CardDiv>
                    <CardDiv>
                        <FaMobileStyled size={25}/>
                        <KnowH3>Mobile Developer</KnowH3>
                        <KnowH4>3+ years of experience on Mobile development React Native and Android Native</KnowH4>
                    </CardDiv>
                </CardContainerDiv>
            </KnowDiv>
        </KnowContainerDiv>
    )
}

export default Knowledge;

const KnowContainerDiv = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`

const KnowDiv = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 20px;
    padding: 40px 0px 40px 0px;
`

const CardContainerDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`

const KnowH2 = styled.h2`
    border-bottom: 3px solid yellow;
`

const CardDiv = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 30vh;
    height: 180px;
    text-align: center;
`

const FaMobileStyled = styled(FaMobile)`
    color: yellow;
`

const FaCodeStyled = styled(FaCode)`
    color: yellow;
`

const FaDatabaseStyled = styled(FaDatabase)`
    color: yellow;
`

const KnowH3 = styled.h3`
    color: white;
`

const KnowH4 = styled.h4`
    color: white;
`