import React from 'react';

function Flipper() {
  return (
    <div className="flex justify-center items-center mb-5">
      <img
        width="100"
        height="100"
        src={require('../../static/img/flipper.png').default}
        alt="flipper"
      />
    </div>
  );
}

export default Flipper;
