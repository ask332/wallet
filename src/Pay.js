
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";

const Pay = () => {
    const [receiver, setRec] = useState("0x...");
    const [amount, setAmount] = useState("0")
    return (
        <div className="pay">
            <div className="logo">
                <img src="/default-monochrome-white.svg" alt=""/>
                <h1>Pay</h1>
            </div>
            <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Amount</Form.Label>
        <Form.Control type="text" placeholder="Enter amount" />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        </div>
     );
}
 
export default Pay;