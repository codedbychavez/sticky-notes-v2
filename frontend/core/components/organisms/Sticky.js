import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

// Icons
import { DeleteIcon } from '../svgs/DeleteIcon'
import { CheckCircleIcon } from '../svgs/CheckCircleIcon'
import { CloudArrowUpIcon } from '../svgs/CloudArrowUpIcon'

export const Sticky = ({sticky, stickiesState}) => {

    const [titleInput, setTitleInput] = useState('');
    const [contentInput, setContentInput] = useState('');
    const [activeForm, setActiveForm] = useState(false);
    const [activeSticky, setActiveSticky] = useState(undefined);

    // 1. Get the current active sticky

    const activateForm = (sticky) => {
        console.log('Setting activate form for: ', sticky.id)
        setActiveForm(true);
        setActiveSticky(sticky);
        setTitleInput(sticky.title);
        setContentInput(sticky.content);
    }

    const handleTitleInputChange = (event) => {
        setTitleInput(event.target.value);
    }

    const handleContentInputChange = (event) => {
        setContentInput(event.target.value);
    }

    const handleRemoveSticky = () => {
        console.log(stickiesState.removeSticky(activeSticky));

        // TODO: Call api to remove sticky
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setActiveForm(false);

        const stickyFormData = {
            title: titleInput,
            content: contentInput,
        }

 
        stickyFormData.title? activeSticky.title = stickyFormData.title : stickyFormData.title;
        stickyFormData.content ? activeSticky.content = stickyFormData.content : stickyFormData.content;

        // TODO: Call api to add sticky

    }
    
    return (

        <>
        { activeForm ?
        <StyledStickyCard>
            <Card.Body>
                <Form onSubmit={handleSubmit}>

                    <Card.Title>
                        <StyledStickyFormControlTitle className='sticky-title' type='text' name='title' value={titleInput} onChange={handleTitleInputChange} />
                    </Card.Title>

                    <Card.Text>
                        <StyledStickyFormControlContent as='textarea' rows='5' name='content' value={contentInput} onChange={handleContentInputChange} />
                    </Card.Text>

               
                    <ButtonGroup size="sm">
                        <StyledDeleteButton onClick={handleRemoveSticky} variant='light'><DeleteIcon/></StyledDeleteButton>
                        <StyledSaveButton type="submit" variant='light'><CheckCircleIcon/></StyledSaveButton>
                        <StyledPublishButton variant='light'><CloudArrowUpIcon/></StyledPublishButton>
                    </ButtonGroup>
                

                </Form>
            </Card.Body>
        </StyledStickyCard>

        :

        <StyledStickyCard>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
               
                <Card.Title onClick={() => activateForm(sticky)}>
 
                    <StyledStickyFormControlTitle className='sticky-title' type='text' name='title' value={sticky.title} readOnly/>

                </Card.Title>
                <Card.Text onClick={() => activateForm(sticky)}>
                   
                <StyledStickyFormControlContent as='textarea' rows='5' name='content' value={sticky.content} readOnly/>


               
                </Card.Text>
           

                <ButtonGroup size="sm">
                    <StyledDeleteButton variant='light' disabled><DeleteIcon/></StyledDeleteButton>
                    <StyledSaveButton variant='light' disabled><CheckCircleIcon/></StyledSaveButton>
                    <StyledPublishButton variant='light' disabled><CloudArrowUpIcon/></StyledPublishButton>
                </ButtonGroup>

            </Form>
        </Card.Body>
    </StyledStickyCard>

        }
        </>

    )
}

const StyledStickyCard = styled(Card)`
    max-width: 20rem;
    min-height: 16rem;
    margin: 1rem 1rem 0px 0px;
`

const StyledStickyFormControlTitle = styled(Form.Control)`
border-width:0px;
border:none;
font-size: 1.25rem;
padding-left: 0.2rem;
&:read-only {
    background: transparent;
}
&:focus {
    border: 0px;
    box-shadow: 0 0 0 1px #50BFE6;
}
`

const StyledStickyFormControlContent = styled(Form.Control)`
width: 100%;
border-width:0px;
border:none;
resize: vertical;
padding-left: 0.2rem;
&:focus {
    outline: none !important;
    box-shadow: 0 0 0 1px #50BFE6;
    border-radius: 5px;
}
`

// Styled Buttons
const StyledDeleteButton = styled(Button)`
color: #e76f51;
`

const StyledSaveButton = styled(Button)`
color: #2a9d8f;
`

const StyledPublishButton = styled(Button)`
color: #e9c46a;
`

