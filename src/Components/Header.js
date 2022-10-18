import styled from "styled-components";
import { BorderBottomAppearH3, YellowSpan } from "../StyledComponents/StyledComponents";
import { SECTIONS } from "../Utils/constants";
import useViewport from "../CustomHooks/useViewport";
import { AiOutlineMenu } from "react-icons/ai";

const Header = (props) => {
    const { width } = useViewport()

    return (
        <HeaderContainerDiv>
            <HeaderDiv>
                <HeaderH2>Matteo Marcotulli <YellowSpan>.</YellowSpan></HeaderH2>
                {
                    width > 1050 ? 
                        <HeaderButtonContainer>
                            <BorderBottomAppearH3 onClick={() => props.executeScrollToSection(SECTIONS.MAINSECTION)}>Home</BorderBottomAppearH3>
                            <BorderBottomAppearH3 onClick={() => props.executeScrollToSection(SECTIONS.KNOWLEDGE)}>Knowledge</BorderBottomAppearH3>
                            <BorderBottomAppearH3 onClick={() => props.executeScrollToSection(SECTIONS.ABOUTME)}>About me</BorderBottomAppearH3>
                            <BorderBottomAppearH3 onClick={() => props.executeScrollToSection(SECTIONS.RECENTPROJECTS)}>Projects</BorderBottomAppearH3>
                            <BorderBottomAppearH3 onClick={() => props.executeScrollToSection(SECTIONS.CONTACTME)}>Contact me</BorderBottomAppearH3>
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
    z-index: 15;
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

const StyledAiOutlineMenu = styled(AiOutlineMenu)`
    color: white;
    &:hover {
        color: yellow;
    }
`