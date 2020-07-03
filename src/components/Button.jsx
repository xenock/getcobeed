import React from 'react'
import './Button.scss'

const Button = ({ children, onClickHandler }) => (
  <button onClick={onClickHandler}>{children}</button>
)

export default Button
