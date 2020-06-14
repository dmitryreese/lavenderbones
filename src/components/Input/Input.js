import React from 'react';
import './Input.css';

const defaultProps = {
  className: '',
  type: 'text',
  value: '',
  setValue: () => {},
}

const Input = (props) => {
  const {
    className,
    value,
    setValue,
    type,
    ...rest
  } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <input
      {...rest}
      className={`${className} component-Input`}
      type={type}
      value={value}
      onChange={handleChange}
    />
  )
}

Input.defaultProps = defaultProps;

export default Input;
