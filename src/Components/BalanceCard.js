const BalanceCard = ({coinName1, coinName2, coinPercentage1, coinPercentage2, coinPerformance}) => {
    return (
        <div className="card balance-card">
            <p className="card-title">Nulla gravida</p>
            <p className="light-text">Ut ipsum ipsum, dignissim a ullamcorper eu, lacinia et dolor. Nulla gravida nulla.</p>

            <div className="performance">
                <p>All-time Performance</p>

                <div className="peformance-number">
                    <img src="images/green_arrow.png" alt=""/>
                    <p><b>{coinPerformance}%</b></p>
                </div>
            </div>

            <div className="coin-balance">
                <div className="balance-info">
                    <p>Balance of coins</p>
                    <p className="deposit-info">Min. deposit: $500</p>
                </div>

                <div className="progress">
                    <div className="progress-bar progress-orange" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar progress-blue" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>

            <div className="coin">
                <div className="coin-name">
                    <img src="images/btc.png" alt=""/>
                    <p>{coinName1}</p>
                </div>
                <p><b>{coinPercentage1}</b>%</p>
            </div>

            <div className="coin">
                <div className="coin-name">
                    <img src="images/usdc.png" alt=""/>
                    <p>{coinName2}</p>
                </div>
                <p><b>{coinPercentage2}%</b></p>
            </div>
        </div>
    )
  }
  
  export default BalanceCard
  