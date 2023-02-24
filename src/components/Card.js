import React from 'react'

const Card = ({name, country}) => {
  return (
    <div>
       <h3>{name}, {country}</h3>
    </div>
  )
}

export default Card