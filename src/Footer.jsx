import React from 'react';
const Footer = () => {
    return (
        <>
            <div className="footer" style={{ textAlign: "center", color: "white" }}>
                ©️   {new Date().getFullYear()}Soumen Ghosh.
            <br />
             All Right Reserved | Terms and Condition
        </div>
        </>
    )
}
export default Footer;