import { observer } from "mobx-react-lite"
import Card from 'react-bootstrap/Card'
import { Sticky } from "./Sticky"

// Layout
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const StickiesList = observer(({stickiesState}) => {
    return (
        <div>
            <Container fluid>
            <Row>
                {stickiesState.stickiesArr.map((sticky, index) => {
                   
                        return (
        
                                
                                    <Sticky key={sticky.title} sticky={sticky} stickiesState={stickiesState}/>

                        )

                })}
            </Row>

            </Container>
        </div>
    )
})