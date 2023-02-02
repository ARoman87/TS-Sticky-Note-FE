import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";



function Footer() {
    return (
        <Navbar bg="primary" variant="dark" expand="sm" className="d-flex justify-content-center fixed-bottom py-0">
            <Nav>
                <Nav.Link as={Link} to="/privacy">
                    Privacy
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Footer