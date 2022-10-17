import styled from "styled-components";
import { YellowSpan } from "../Screens/Home";

const Header = () => {
    return (
        <HeaderContainerDiv>
            <HeaderDiv>
                <HeaderH2>Matteo<YellowSpan>.</YellowSpan></HeaderH2>
                <HeaderButtonContainer>
                    <HeaderH3>Home</HeaderH3>
                    <HeaderH3>Services</HeaderH3>
                    <HeaderH3>About me</HeaderH3>
                    <HeaderH3>Projects</HeaderH3>
                    <HeaderH3>Contact me</HeaderH3>
                </HeaderButtonContainer>
            </HeaderDiv>
        </HeaderContainerDiv>
    )
}

export default Header;

const HeaderContainerDiv = styled.div`
    background-color: black;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const HeaderDiv = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
`


const HeaderButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`

const HeaderH2 = styled.h2`
    color: white;
    border-bottom: 3px solid black;
`

const HeaderH3 = styled.h3`
    color: white;
    border-bottom: 3px solid black;
    &:hover {
        border-bottom: 3px solid yellow;
    }
`