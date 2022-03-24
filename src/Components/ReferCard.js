import Button from "./Button"

const ReferCard = ({balance}) => {
    return (
        <div className="card refer-card">
            <p className="heading">Refer & earn</p>
            <p>Proin eu lacus massa. Maecenas vitae lorem ac dolor lacinia imperdiet eget et quam. Maecenas suscipit eros nec diam sodales, vel gravida tellus porta. </p>
            <a href="deposit.html"><Button buttonStyle="btn-outline-light">Refer Now</Button></a>
        </div>
    )
  }
  
  export default ReferCard
  