import { observer } from "mobx-react-lite"
import Card from 'react-bootstrap/Card'
import { Sticky } from "./Sticky"

// Layout
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const StickiesList = observer(({stickiesState}) => {
    let counter = 0;
    return (
        <div>
            I am observing
            <Container fluid>
            <Row>
                {stickiesState.stickiesArr.map((sticky, index) => {
                   
                        return (
                            <>
                                
                                    <Sticky key={index} sticky={sticky} />

                            </>
                        )

                })}
            </Row>

            </Container>
        </div>
    )
})