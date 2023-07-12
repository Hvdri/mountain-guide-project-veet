import "./Footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Mountain Guide</h1>
                    <p>Alegeti destinatia perfecta!</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-envelope-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-phone-square"></i>
                    </a>
                    
                </div>
            </div>
            
            <div className="bottom">
                <div>
                    <h4>Help - Intrebari Frecvente</h4>
                    <a href="/">Support</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                </div>

            </div>
        </div>
    )
}

export default Footer;