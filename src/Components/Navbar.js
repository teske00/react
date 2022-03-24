import UserDropdown from "./UserDropdown"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="logo"/>
          </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a href="invest.html">Invest</a>
            </li>
            <li className="nav-item">
                <a href="wallet.html">Wallet</a>
              </li>
          </ul>
        </div>
        <UserDropdown firstName={'Marko'} lastName={'Obrenovic'}/>
      </nav>
  )
}

export default Navbar
