import WalletCardSmall from "../Components/WalletCardSmall";
import ReferCard from "../Components/ReferCard";
const Wallet = () => {
  return (
    <div className="wallet-section">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-7 ">
                      <WalletCardSmall balance={'0.00'} />
                    </div>

                    <div className="col-sm-12 col-md-5">
                      <ReferCard/>
                    </div>
                </div>
        </div>
  )
}

export default Wallet
