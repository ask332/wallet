
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import useEther from './useEther';
import { ethers } from 'ethers';


const Pay = () => {

    const [receiver, setRec] = useState("0x...");
    const [amount, setAmount] = useState(0);
    const ethereum = window.ethereum;
  
    console.log();
    const params =  [
      {
        from: '0x8520d531cBa1Bb42fea0d783D1e55Cb1FF7D82F2',
        to: receiver,
        value: parseInt(amount).toString(16), 
       
      },
    ];

    const handleClick = (e) => {
      e.preventDefault();
      ethereum.request({method:'eth_sendTransaction',params});
    }

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
        <Form.Control type="text" placeholder="Enter address" onChange={(e) => {setRec(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Amount(wei)</Form.Label>
        <Form.Control type="text" placeholder="Enter amount in wei" onChange={(e) => {setAmount(e.target.value)}}/>
      </Form.Group>
      <Button variant="success" type="submit"  onClick={(e) => {handleClick(e)} }>
        Pay
      </Button>
    </Form>
            </div>
        </div>
     );
}
 
export default Pay;