import React from 'react'
import "../footer/footer.css";


const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>about us</h3>
                    <p>our site</p>
                    <p>become a partner</p>
                </div>
                <div className="footr_details_one">
                    <h3>connect with us</h3>
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>our partners</h3>
                    <p>nearby shops</p>
                    <p>delivery services</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>contact us</h3>
                    <p>info@communisell.in</p>
                    <p>jammu, 180007</p>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./logo.png" alt="logo" />
                <p>terms of conditions&nbsp; &nbsp;&nbsp;privacy notice&nbsp; &nbsp;&nbsp;digital ads&nbsp; &nbsp;&nbsp;© 2023-{year}, communisell and/or its affiliates</p>
            </div>
        </footer>
    )
}

export default Footer