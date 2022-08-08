import React from 'react'

export default function error(props) {
    const {message} = props;
  return (
    <div data-testid="error-test" className="container" style={{color: "red"}}>{message}</div>
  )
}
