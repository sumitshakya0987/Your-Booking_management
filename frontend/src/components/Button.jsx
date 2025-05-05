import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, size, text, onClick, disabled }) => {
  return (
    <button
      type={type || 'button'}
      className={`btn btn-${type || 'primary'} btn-${size || 'md'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
