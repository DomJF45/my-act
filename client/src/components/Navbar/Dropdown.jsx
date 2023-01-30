import React from 'react'


const Dropdown = ({submenus, active}) => {
  return (
    <>
      <div
        style={ active ? {
          width: '500px',
          height: '250px',
          borderRadius: '10px',
          backgroundColor: '#fff',
          border: '1px solid #e5e5e5',
          position: 'absolute',
          top: '30px',
          left: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          zIndex: 800
        } : {
          display: 'none',
        }}
      >
        {submenus.map((submenu, index) => {
          return (
            <div className="container" key={index}>
              <h5 style={{fontWeight: 400}}>{submenu.title}</h5>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Dropdown