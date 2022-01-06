import Nav from 'react-bootstrap/Nav'
import { AppButton } from '../atoms/Button'

export const StickyControls = ({stickiesState}) => {


    const handleClick = () => {
        // alert('bing');
        
        stickiesState.addSticky();
    }

    return (
        <Nav className="justify-content-left" activeKey="/home">
        <Nav.Item>
          <AppButton onClick={handleClick} size='sm'
            type="button"
          >Add new</AppButton>
        </Nav.Item>
      </Nav>
    )
}