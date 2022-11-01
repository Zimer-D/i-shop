import { Container, Navbar, NavbarBrand } from "react-bootstrap"

const Footer = (): JSX.Element => 
<div className="fixed-bottom">  
<Navbar bg='light' >
    <Container>
        <NavbarBrand>I-shop</NavbarBrand>
        <div>created by Kiryazov D.M.</div>
    </Container>
</Navbar>
</div>

export default Footer