import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';

const Home = () => {
    return ( 
        <div className="desc">
            <img src="/default-monochrome-black.svg" alt="" />
            <p>                
                canPay is platform to conduct send ether and mint NFT on ethereum network. canPay platform is build using 
                React and ethers library.
            </p>
            <p>
                Follow these steps to begin using canPay⭳
            </p>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Step #1</Accordion.Header>
        <Accordion.Body>
            <p>
                You must make sure that you have metamask extension installed in your browser. Next you need to create a wallet. If you
                have ethereum wallet already you can sign in wallet using a mnemonic phrase.
            </p>
            <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>Install Metamask Here ⭳</a> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Step #2</Accordion.Header>
        <Accordion.Body>
            <p>
                Connect the metamask wallet to a test network (Ropsten, Rinkeby). Enter the address of recepient and the amount in payment page. 
                Only address is enough to send a NFT to the recepient.
            </p> 
            <Alert key='danger' variant='danger'>Warning: Canpay is not responsible for any transaction on Ethereum Mainnnet. </Alert>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
     );
}
 
export default Home;