import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
  // console.log(props)
  return (
    <>
      <h1>{ props.children }</h1>
      <h3>{ props.desc }</h3>
     
    </>

  )
}

//props类型校验
TodoHeader.propTypes = {
  desc: PropTypes.string,
}