

import UserProgressSegment from "../Components/UserProgressSegment";
import Button from "../Components/Button";
const Welcome = ({username}) => {
  return (
    <div className="welcome-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-sm-12 col-md-8">
                            <p className="welcome-text">Welcome,</p>
                            <p className="username">{username}</p>

                            <p className="title-text">Nullam egestas vel lacus at fringilla</p>
                            <p className="text">Nam semper aliquet scelerisque. Integer vitae blandit nunc. Phasellus tristique suscipit enim, vitae vulputate massa hendrerit non. Quisque iaculis faucibus massa, at condimentum ex. Sed posuere, elit ut luctus vestibulum, metus risus aliquet diam, in cursus est nisi eget nisl. Nunc hendrerit sem sed neque laoreet, interdum convallis orci sodales. Aenean nisl ex, ultricies eu gravida nec, accumsan quis sapien.</p>
                        </div>

                    <div className="col-sm-12 col-md-4 right-part">
                        <UserProgressSegment percentage={25}/>
                        <div className="complete-setup">
                           <Button>Complete Setup</Button>
                        </div>
                    </div>
              </div>
          </div>
        </div>
  )
}

export default Welcome
