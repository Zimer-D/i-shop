import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../Icons/Icon';
import './Header.sass'
import Avatar from '../../static/avatar-person.svg'
import { useEffect, useState } from 'react';
import { ProductContext } from '../../context';
import { useSelector } from 'react-redux/es/exports';
import ProductModal from '../Modal/Modal';

const Header = ({searchWords, setSearchWords}: any) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const productsInCart = useSelector((state: any) => state.cart.itemsInCart)
 
  return (
    <ProductContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">I-shop</Navbar.Brand>
          <div className='userButtons'>
            <Nav.Link onClick={() => setShowModal(true)}>
              <div className={'basket__wrapper'}>
                <div
                  className={'basket'}
                >
                  <Icon name={'basket'} size={35} />

                </div>
                <div className={'counter'}>
                  {productsInCart.length}
                </div>
              </div>
            </Nav.Link>
            <div className='avatar'>
              <img src={Avatar} alt="Avatar" />
            </div>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Поиск бренда, товара, категории..."
                className="me-2"
                aria-label="Search"
                value={searchWords}
                onChange={
                  (e) => {
                    setSearchWords(e.target.value)
                  }}
              />
              <Icon name={"search"} size={35} />
            </Form>
          </Navbar.Collapse>
        </Container>
        <ProductModal
          show={showModal}
          setShow={setShowModal}
          products={productsInCart}
        />
      </Navbar>
    </ProductContext.Provider>
  );
}

export default Header;