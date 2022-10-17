import styled from "styled-components";

export const ComponentContainerDiv = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    scroll-margin: 30px;
`

export const ComponentSubContainerDiv = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 20px;
    padding: 40px 0px 40px 0px;
    text-align: center;
`

export const SectionTitleH2 = styled.h2`
    border-bottom: 3px solid yellow;
    color: ${props => props.color};
`

export const TextH1 = styled.h1`
    color: white;
`

export const TextH3 = styled.h3`
    color: white;
`

export const TextH4 = styled.h4`
    color: white;
    max-width: ${props=> props.maxWidth};
`

export const YellowSpan = styled.span`
    color: yellow;
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: yellow;
    color: black;
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    width: 130px;
`
