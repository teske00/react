
const UserDropdown = ({firstName, lastName}) => {
    return (
        <div className="dropdown user-dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="profile-img" src="images/profile.png" alt=""/>
            {firstName} {lastName}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a href="#">Settings</a>
          <a href="#">Refferal</a>
          <a href="login.html">Logout</a>
        </div>
      </div>
    )
  }
  
  export default UserDropdown
  