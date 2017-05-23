import React, { PropTypes } from 'react'

const Link = (src, label, onClick) => {

  return (
    <a href="{src}"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {label}
    </a>
  )
}

Link.propTypes = {
  src: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.string.isRequired
}

export default Link