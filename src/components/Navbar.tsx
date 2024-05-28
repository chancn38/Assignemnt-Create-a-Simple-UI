import React from 'react'
import Divider from './Divider'

const Navbar = ({ buttons, selected }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <React.Fragment key={button}>
            <button
              style={{
                color: button === selected ? 'orange' : '',
                fontWeight: button === selected ? 'bold' : 'normal'
              }}
            >
              {button}
            </button>
            {index < buttons.length - 1 && <Divider type='vertical' />}
          </React.Fragment>
        ))}
      </div>
      <Divider type='vertical' />
    </nav>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '1rem',
    backgroundColor: '#f1fefe',
    color: '#fff'
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem'
  },
  button: {
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  }
}

export default Navbar
