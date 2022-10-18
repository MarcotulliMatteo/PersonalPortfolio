import React, { useState } from "react";
import styled from "styled-components";
import { TextH3, TextH4, BorderBottomAppearH3 } from "../StyledComponents/StyledComponents";

const ProjectCard = (props) => {
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <CardDiv color={props.color}>
            <ImageContainerDiv>
                <Text>{props.title}</Text>
                <Image src={props.image}/>
            </ImageContainerDiv>
            <Overlay opacity={mouseOver ? 0.7 : 0}
             onMouseOver={() => setMouseOver(true)}
             onMouseLeave={() => setMouseOver(false)}>
                <TextH3>{props.title}</TextH3>
                <TextH4>{props.description}</TextH4>
                <ButtonDiv>
                    {props.showCode && 
                        <a href={props.codeHref} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
                            <BorderBottomAppearH3 color="white">Code</BorderBottomAppearH3>
                        </a>
                    }
                    {props.showProject &&
                        <a href="https://github.com/MarcotulliMatteo/PersonalPortfolio" target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
                            <BorderBottomAppearH3 color="white">Project</BorderBottomAppearH3>
                        </a>
                    }
                </ButtonDiv>
            </Overlay>
        </CardDiv>
    )
}

export default ProjectCard;

const CardDiv = styled.div`
    border-radius: 10px;
    padding: 15px;
    align-items: center;
    width: 30vh;
    height: 160px;
    text-align: center;
    background-color: ${props => props.color};
    justify-content: center;
    display: grid;
    grid-template-areas: 'overlap';
    justify-self: center;
    align-content: center;
`

const ImageContainerDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: overlap;
    align-self: center;
    justify-self: center;
`

const Image = styled.img`
    width: 90%;
    height: 100%;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 13;
    color: white;
`

const Overlay = styled.div`
    padding: 15px; 
    width: 30vh;
    height: 160px;
    border-radius: 10px;
    opacity: ${props => props.opacity};
    background-color: black;
    z-index: 13;
    grid-area: overlap;
    align-self: center;
    justify-self: center;
`

const ButtonDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
`