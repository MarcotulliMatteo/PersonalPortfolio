import React from "react";
import { ComponentContainerDiv, TextH4, Button } from "../StyledComponents/StyledComponents";
import styled from "styled-components";
import ContactsIcons from "./ContactsIcons";
import { useState } from "react";
import { send } from 'emailjs-com';

const ContactMe = React.forwardRef((props, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSumbit = (event) => {
        event.preventDefault()

        send(
            'service_xlau9qh',
            'template_gt98oga',
            {
                from_name: name,
                to_name: 'Matteo',
                message: body,
            },
            '8RZCv5wM6WZvMsJeg'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              alert('Email sent to Matteo. Thank you!')
              setName('')
              setEmail('')
              setBody('')
            })
            .catch((err) => {
                alert("There is an error with the Email service, try angain later or send an email directly to matteomarcotulli@gmail.com")
            });
    }

    return (
        <ComponentContainerDiv color={'black'} ref={ref}>
            <ComponentSubContainerHorizontalDiv>
                <FlexBoxHorizontalDiv>
                    <ContactMeTitleH2 color={'white'}>Let's Contact</ContactMeTitleH2>
                    <TextH4>For eny question or job opportunity write me!</TextH4>
                    <ContactsIcons/>
                </FlexBoxHorizontalDiv>
                <FlexBoxHorizontalDiv>
                    <Form onSubmit={handleSumbit}>
                        <Input type='text' value={name} height={'30px'}
                         onChange={(e) => setName(e.target.value)}
                         placeholder='Your Name...'/>
                        <Input type='email' value={email} height={'30px'}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder='Your Email...'/>
                        <Textarea value={body} height={'150px'}
                         onChange={(e) => setBody(e.target.value)}
                         placeholder='Your Message...'/>
                        <Button>Send</Button>
                    </Form>
                </FlexBoxHorizontalDiv>
            </ComponentSubContainerHorizontalDiv>
        </ComponentContainerDiv>
    )
})

export default ContactMe;

const ComponentSubContainerHorizontalDiv = styled.div`
    width: 65%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 40px 0px 40px 0px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

const FlexBoxHorizontalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
`

const ContactMeTitleH2 = styled.h2`
    color: yellow;
`

const Input = styled.input`
    border-radius: 10px;
    background-color: rgb(47,46,47);
    height: ${props=>props.height};
    width: 100%;
    border: 0px;
    padding: 15px;
    color: white;
`

const Textarea = styled.textarea`
    border-radius: 10px;
    background-color: rgb(47,46,47);
    height: ${props=>props.height};
    width: 100%;
    border: 0px;
    padding: 15px;
    color: white;
    resize: none;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`