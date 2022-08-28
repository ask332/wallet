import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useContract from './useContract';
import { useState, useEffect } from "react";

const Send = () => {
    const nft = useContract();
    //console.log(nft);
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
        <Form.Control type="text" placeholder="Enter address" />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        </div>
     );
}
 
export default Send;