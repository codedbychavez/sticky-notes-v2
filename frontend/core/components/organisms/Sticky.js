import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

export const Sticky = ({sticky}) => {  
    return (
        <StyledStickyCard>
            <Card.Body>
                <Card.Title>{sticky.title}</Card.Title>
                <Card.Text>
                    {sticky.content}
                </Card.Text>

            </Card.Body>
        </StyledStickyCard>
    )
}

const StyledStickyCard = styled(Card)`
    max-width: 20rem;
    min-height: 16rem;
    margin: 1rem;
`