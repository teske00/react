import React from 'react'

const UserProgressSegment = ({percentage}) => {
  return (
    <div className="progress-segment user-progess-setup">
        <p className="progress-text">Metus risus aliquet diam</p>
        <div className="progress-part">
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="progress-percentage">{percentage}%</p>
        </div>
    </div>
  )
}

export default UserProgressSegment
