import React from 'react';

function Tom() {
  return (
    <div className="flex justify-center items-center mb-5">
      <img
        width="300"
        height="300"
        className="dark:block hidden dark:block"
        src={require('../../static/img/tom_dark.png').default}
        alt="tom"
      />

      <img
        width="300"
        height="300"
        className="dark:hidden sm:block"
        src={require('../../static/img/tom_light.png').default}
        alt="tom"
      />
    </div>
  );
}

export default Tom;
