import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Top = (props) =>{
  const addr = `👤 ${props.addr}`
  return (
    <div>
        <Navbar bg="primary" variant="dark" sticky='top'>
        <Container>
          <Navbar.Brand href='/'>
            <img
                alt=""
                src="/default-monochrome-white.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            CanPay
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href= '/'>Home</Nav.Link>
            <Nav.Link href="/pay">Pay</Nav.Link>
            {/* <Nav.Link href="/send">Send NFT</Nav.Link> */}
          </Nav>
        </Container>
        <Nav>
          <Button variant = 'dark' href='/account'>{addr}</Button>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Top;