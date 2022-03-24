
const Newsletter = () => {
  return (
    <div className="newsletter-section">
        <div className="container">
            <p className="newsletter-label">Stay in the loop with our latest product updates and news.
            </p>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                <button className="btn btn-primary" type="button">Get Updated</button>
                </div>
            </div>

            <div className="links">
                <a href="index.html">Home</a>
                <a href="invest.html">Invest</a>
                <a href="wallet.html">Wallet</a>
                <a href="#">Settings</a>
                <a href="#">Referal</a>
                <a href="login.html">Logout</a>
            </div>

            <div className="social">
                <a href=""><img src="images/tw.png" alt=""/></a>
                <a href=""><img src="images/m.png" alt=""/></a>
                <a href=""><img src="images/email.png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
