import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience Download <br /> <span>Craving Courier App</span>
        <div className="app-download-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </p>
    </div>
  );
};

export default AppDownload;
