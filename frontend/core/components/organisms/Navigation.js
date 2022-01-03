import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Link from "next/link";

export const Navigation = (props) => {
    return (
        <Navbar sticky="top" bg="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <LinkWrapper>
                        <Link href="/">
                            <StyledAnchor>Sticky Notes</StyledAnchor>
                        </Link>
                    </LinkWrapper>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <LinkWrapper>
                            <Link href="/my-stickies">
                                <StyledAnchor>My Stickies</StyledAnchor>
                            </Link>
                        </LinkWrapper>


                        <LinkWrapper>
                            <Link href="/about">
                                <StyledAnchor>About</StyledAnchor>
                            </Link>
                        </LinkWrapper>

                        <LinkWrapper>
                            <Link href="/account">
                                <StyledAnchor>Account</StyledAnchor>
                            </Link>
                        </LinkWrapper>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export const LinkWrapper = styled.div`
    margin-left: 14px;
`

export const StyledAnchor = styled.a`
  color: whitesmoke;
  cursor: pointer;
    &:hover {
      color: lightgrey;
    }
`

