import React from "react";
const STYLES = ['btn-orange-gradient', 'btn-outline-light'];


const Button = ({
  children,
  onClick,
  buttonStyle
}) =>{
  const checkButtonStyle = STYLES.includes(buttonStyle)
  ? buttonStyle:STYLES[0]


  return (
     <button type="button" className={`btn ${checkButtonStyle}`} onClick={onClick}>{children}</button>
  )
}
export default Button
