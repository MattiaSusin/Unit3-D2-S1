const { Navbar, Container, Nav } = require("react-bootstrap");

const TopBar = props => (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">EpicStaurant — {props.claim}</Navbar.Brand>
        <Nav className="ms-auto"> 
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Prenota Tavolo</Nav.Link>
            <Nav.Link href="#link">Prenotazioni</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
);

export default TopBar;