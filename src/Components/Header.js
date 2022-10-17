import styled from "styled-components";
import { YellowSpan } from "../StyledComponents/StyledComponents";
import { SECTIONS } from "../Utils/constants";
import useViewport from "../CustomHooks/useViewport";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (props) => {
    const { width } = useViewport()

    return (
        <HeaderContainerDiv>
            <HeaderDiv>
                <HeaderH2>Matteo<YellowSpan>.</YellowSpan></HeaderH2>
                {
                    width > 900 ? 
                        <HeaderButtonContainer>
                            <HeaderH3 onClick={() => props.executeScrollToSection(SECTIONS.MAINSECTION)}>Home</HeaderH3>
                            <HeaderH3 onClick={() => props.executeScrollToSection(SECTIONS.KNOWLEDGE)}>Knowledge</HeaderH3>
                            <HeaderH3 onClick={() => props.executeScrollToSection(SECTIONS.ABOUTME)}>About me</HeaderH3>
                            <HeaderH3 onClick={() => props.executeScrollToSection(SECTIONS.RECENTPROJECTS)}>Projects</HeaderH3>
                            <HeaderH3 onClick={() => props.executeScrollToSection(SECTIONS.CONTACTME)}>Contact me</HeaderH3>
                        </HeaderButtonContainer>
                    :
                        <StyledAiOutlineMenu size={25} onClick={() => props.onDrawerClick()}/>
                }
                
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

const StyledAiOutlineMenu = styled(AiOutlineMenu)`
    color: white;
`