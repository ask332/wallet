import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useContract from './useContract';
import useEther from './useEther';
import { useState, useEffect } from "react";
import { Contract, ethers, Signer } from 'ethers';

const Send  = () => {
    const [receiver, setRec] = useState('0x0');
    
    

    return ( 
        <div className="pay">
            <div className="logo">
                <img src="/default-monochrome-white.svg" alt=""/>
                <h1>Mint NFT</h1>
            </div>
            <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" onClick={e => {setRec(e.target.value)}}/>
      </Form.Group>
      
      <Button variant="success" >
        Submit
      </Button>
    </Form>
            </div>
        </div>
     );
}
 
export default Send;
// onClick={() => {nft.safeMint(receiver, '0xF2263E023f707D5AA9067A6579bd2b82C41DACbc')}}