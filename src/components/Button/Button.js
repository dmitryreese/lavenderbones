import React from 'react';
import './Button.css';

const defaultProps = {
  className: '',
  buttonText: '',
  onClick: () => {},
}

const Button = (props) => {
  const {
    className,
    buttonText,
    onClick,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`${className} component-Button`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

Button.defaultProps = defaultProps;

export default Button;
