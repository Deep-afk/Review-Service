import PropTypes from 'prop-types'
import React from 'react'

function Header({text, bgColor, textColor}) {
  const HeaderStyle =
  { backgroundColor  : bgColor,
    color: textColor,  
  }
  return (
    <header style={HeaderStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>

    </header>
  )
}

Header.defaultProps = {
    text: 'Review Service',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
}
export default Header
