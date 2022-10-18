import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextH4, BorderBottomAppearH3 } from "../StyledComponents/StyledComponents";

const ProjectCard = (props) => {
    const [mouseOver, setMouseOver] = useState(false)

    const [renderImage, setRenderImage] = useState({
        img: props.image[0],
        index: 0
    })

    useEffect(() => {
        if(props.image.length <= 1) return
        const interval = setInterval(() => {
            const index = props.image.length > renderImage.index + 1 ? renderImage.index + 1 : 0;
            setRenderImage({
                img: props.image[renderImage.index],
                index: index
            })
        }, 6000)
        return () => clearInterval(interval)
    }, [props.image, renderImage])

    return (
        <CardDiv color={props.color}>
            <ImageContainerDiv>
                <Text>{props.title}</Text>
                <Image src={renderImage.img}/>
                <ProgressDiv>
                    {
                        props.image.map((elem, index) => {
                            return <Circle key={index} color={renderImage.index === index ? 'white': 'grey'}/>
                        })
                    }
                </ProgressDiv>
            </ImageContainerDiv>
            <Overlay opacity={mouseOver ? 0.8 : 0}
             onMouseOver={() => setMouseOver(true)}
             onMouseLeave={() => setMouseOver(false)}>
                <TextH4>{props.title}</TextH4>
                <Text>{props.description}</Text>
                <ButtonDiv>
                    {props.showCode && 
                        <a href={props.codeHref ? props.codeHref : null} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
                            <BorderBottomAppearH3 color="white">Code</BorderBottomAppearH3>
                        </a>
                    }
                    {props.showProject &&
                        <a href={props.projectHref ? props.projectHref : null} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
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
    width: 33vh;
    height: 230px;
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
    height: 65%;
`

const Text = styled.p`
    font-size: 13;
    color: white;
`

const Overlay = styled.div`
    padding: 15px; 
    width: 33vh;
    height: 230px;
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

const Circle = styled.div`
    border-radius: 50%;
    width: 7px;
    height: 7px;
    background-color: ${props => props.color};
`

const ProgressDiv = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`