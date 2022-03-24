import BalanceCard from "../Components/BalanceCard"

const CryptoCurrencies = () => {
  return (
    <div className="crypto-currencies">
                <p className="section-title">Praesent id volutpat</p>
                <p className="light-text">Nam semper aliquet scelerisque. Integer vitae blandit nunc. Phasellus tristique suscipit enim, vitae vulputate massa hendrerit non. Quisque iaculis faucibus massa, at condimentum</p>

                <div className="row g-4">
                    <div className="col-sm-12 col-md-4">
                        <a href="invest_one_section.html">
                        <BalanceCard coinName1={'Bitcoin (BTC)'} coinName2={'USD Coin (USDC)'} coinPercentage1={70} coinPercentage2={30} coinPerformance={730.53}/>
                        </a>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <a href="invest_one_section.html">
                         <BalanceCard coinName1={'Bitcoin (BTC)'} coinName2={'USD Coin (USDC)'} coinPercentage1={70} coinPercentage2={30} coinPerformance={730.53}/>
                        </a>
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <a href="invest_one_section.html">
                            <BalanceCard coinName1={'Bitcoin (BTC)'} coinName2={'USD Coin (USDC)'} coinPercentage1={70} coinPercentage2={30} coinPerformance={730.53}/>
                        </a>
                    </div>
                </div>
        </div>
  )
}

export default CryptoCurrencies
