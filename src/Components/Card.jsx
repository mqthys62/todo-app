import React from 'react'

export default function card(props) {
  const {imageSource, description, title} = props;

  return (
    <div className='Card'>
      <img src={imageSource} alt="test"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>  
  );
}