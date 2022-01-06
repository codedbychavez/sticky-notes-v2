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

export const Sticky = ({sticky}) => {

    const [titleInput, setTitleInput] = useState('');
    const [contentInput, setContentInput] = useState('');

    const handleTitleInputChange = (event) => {
        setTitleInput(event.target.value);
    }

    const handleContentInputChange = (event) => {
        setContentInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (
        <StyledStickyCard>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Card.Title>
                        <StyledStickyFormControlTitle className='sticky-title' type='text' name='title' value={titleInput} onChange={handleTitleInputChange} placeholder={sticky.title}/>
                    </Card.Title>
                    <Card.Text>
                        <StyledStickyFormControlContent as='textarea' rows='5' name='content' onChange={handleContentInputChange} placeholder={sticky.content}/>
                    </Card.Text>

                    <ButtonGroup size="sm">
                        <StyledDeleteButton variant='light'><DeleteIcon/></StyledDeleteButton>
                        <StyledSaveButton variant='light'><CheckCircleIcon/></StyledSaveButton>
                        <StyledPublishButton variant='light'><CloudArrowUpIcon/></StyledPublishButton>
                    </ButtonGroup>
                </Form>
            </Card.Body>
        </StyledStickyCard>
    )
}

const StyledStickyCard = styled(Card)`
    max-width: 20rem;
    min-height: 16rem;
    margin: 1rem 1rem 0px 0px;
`

const StyledStickyFormControlContent = styled(Form.Control)`
width: 100%;
border-width:0px;
border:none;
resize: vertical;
`

const StyledStickyFormControlTitle = styled(Form.Control)`
border-width:0px;
border:none;
font-size: 1.2rem;
padding-left: 0px;
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

