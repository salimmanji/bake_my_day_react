import React from 'react'

export default function FirstImage({imgSrc, name}) {
  return (
    <img src={imgSrc} alt={name} className="vh-25" />
  )
}