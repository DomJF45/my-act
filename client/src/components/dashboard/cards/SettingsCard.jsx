import React from 'react'
import { useNavigate } from 'react-router'
import userSettings from '../../../img/user-settings.png'
import '../../../styles/Card.css'

const SettingsCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <a className="card-box" onClick={() => navigate('user-info')}>
        <p>User Settings</p>
        <div>
          <img className="card-img" src={userSettings} />
        </div>
      </a>
    </>
  )
}

export default SettingsCard