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

export const CardDiv = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 30vh;
    height: 200px;
    text-align: center;
`

export const CardContainerDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const BorderBottomAppearH3 = styled.h3`
    color: white;
    border-bottom: 3px solid black;
    &:hover {
        border-bottom: 3px solid yellow;
    }
`