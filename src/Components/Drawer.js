import styled from "styled-components";
import { SECTIONS } from "../Utils/constants";

const Drawer = (props) => {
    return(
        <ContainerDivDrawer>
            <DrawerText onClick={() => props.executeScrollToSection(SECTIONS.MAINSECTION)}>Home</DrawerText>
            <DrawerText onClick={() => props.executeScrollToSection(SECTIONS.KNOWLEDGE)}>Knowledge</DrawerText>
            <DrawerText onClick={() => props.executeScrollToSection(SECTIONS.ABOUTME)}>About me</DrawerText>
            <DrawerText onClick={() => props.executeScrollToSection(SECTIONS.RECENTPROJECTS)}>Projects</DrawerText>
            <DrawerText onClick={() => props.executeScrollToSection(SECTIONS.CONTACTME)}>Contact me</DrawerText>
        </ContainerDivDrawer>
    )
}

export default Drawer;

const ContainerDivDrawer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: lightgray;
    opacity: 0.9;
    text-align: center;
    padding-top: 50px;
    z-index: 13;
`

const DrawerText = styled.h2`
    color: black;
    &:hover {
        color: yellow;
    }
`