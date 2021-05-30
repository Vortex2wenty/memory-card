import React, { useState, useEffect } from 'react';

const MemoryCard = (props) => {
  return (
    <div className='memory-card' onClick={props.cardClicked}>
      <div className='memory-card-img'>
        <img src={props.img} alt='' width='100' height='100' />
      </div>
      <div className='memory-card-title'>
        {props.title}
      </div>
    </div>
  );
};

export default MemoryCard;