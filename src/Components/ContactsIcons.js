import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";
import styled from "styled-components";

const ContactsIcons = () => {
    return (
        <IconDiv>
            <a href="https://www.instagram.com/marcotullimatteo/" target='_blank' rel="noreferrer">
                <StyledGrInstagram size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/matteo-marcotulli-31b6651b1" target='_blank' rel="noreferrer">
                <StyledGrLinkedin size={20}/>
            </a>
            <a href="https://github.com/MarcotulliMatteo?tab=repositories" target='_blank' rel="noreferrer">
                <StyledGrGithub size={20}/>
            </a>
        </IconDiv>
    )
}

export default ContactsIcons;

const StyledGrInstagram = styled(GrInstagram)`
    color: white;
    &:hover {
        color: yellow;
    }
`

const StyledGrLinkedin = styled(GrLinkedin)`
    color: white;
    &:hover {
        color: yellow;
    }
`

const StyledGrGithub = styled(GrGithub)`
    color: white;
    &:hover {
        color: yellow;
    }
`

const IconDiv = styled.div`
    display: flex;
    gap: 20px;
`