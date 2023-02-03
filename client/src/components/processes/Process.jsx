import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import useScreenSize from '../util/hooks/useScreenSize';
import useColorTheme from '../util/hooks/uesColorTheme';

const Process = ({ process, index }) => {

  const { mode } = useSelector((state) => state.theme);

  const window = useScreenSize();
  const navigate = useNavigate();
  const textColorTheme = useColorTheme();
  
  return (
    <a className='card-box' onClick={() => navigate(process.link)} key={index}>
      
      {/* <div
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '15px'
        }}
      >
        { window.width > 1030 ? process.processImg : process.processImgSmall }
      </div> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100% - 120px)'
        }}
      >
        {window.width > 1030 ? process.processImg : process.processImgSmall }
      </div>
      <div style={{
        width: '100%',
        background: mode === 'dark' ? "#333333" : '#fff',
        height: '120px',
        position: 'absolute',
        bottom: 0,
        borderTop: '1px solid #dac0fc',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px'
      }}>
        <div>
          <span style={{fontSize: '2rem', marginLeft: '1rem'}}>{process.processName}</span>
        </div>
        <div>
          <p style={{fontSize: '.8rem', marginLeft: '1rem', padding: 0, marginBlock: 0}}>{process.processBio}</p>
        </div>
      </div>
    </a>
  )
}

export default Process