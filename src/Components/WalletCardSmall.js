import Button from "./Button"
import OrangeButtonOutline from "./OrangeButtonOutline"

const WalletCardSmall = ({balance}) => {
    return (
        <div class="card wallet-card-sm">
        <div class="hedgeswap-heading">
            <p class="heading">HedgeSWAP Wallet</p>
            <img src="images/qr.png" alt=""/>
        </div>
        
        <p class="balance">${balance}<span>USD</span></p>
        <p class="total-balance-lg">Total Blance</p>


       <div class="buttons">
            <a href="deposit.html"><Button>Add Bitcoin</Button></a>
            <a href="#"><OrangeButtonOutline>Cash out</OrangeButtonOutline></a>
       </div>

       <p class="total-balance-sm mt-3">Fund this wallet to make an investment in a portfolio</p>
        
    </div>
    )
  }
  
  export default WalletCardSmall
  