import Button from "react-bootstrap/Button";
const Account = (props) => {
    const addr = `👤\n ${props.addr}`;
    const bal = `${props.balance}  Eth`
    return ( 
        <div>
            <div className="pay">
                <div className="logo">
                    <img src="/default-monochrome-white.svg" alt=""/>
                    <h1>Account</h1>
                </div>
                <br />
                <Button variant="light">{addr}</Button>
                <hr />
                <Button variant="dark">{bal}</Button>
            </div>
        </div>
     );
}
 
export default Account;