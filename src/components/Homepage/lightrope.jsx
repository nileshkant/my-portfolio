import React from 'react';

const LightRope = () => {
  return (
    <ul className="lightrope">
      {[...Array(50)].map(() => <li />)}
    </ul>
  );
};

export default LightRope;
