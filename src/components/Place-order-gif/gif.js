import React from 'react';
import img from '../../images/giphy.gif'

const Gif = () => {

  const style = { textAlign: 'center', margin: '20px auto' }
  return (
    <div style={style}>
      <img src={img} alt="" />
    </div>
  );
};

export default Gif;