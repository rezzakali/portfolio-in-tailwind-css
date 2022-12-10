import React from 'react';
import Typical from 'react-typical';

const TypicalComponent = () => {
  return (
    <Typical
      steps={[
        'JavaScript Developer!',
        4000,
        'React Developer!',
        4000,
        'Self Learner!',
        2000,
        'Front-end Developer!',
        4000,
        'MERN Stack Developer!',
        4000,
      ]}
      loop={Infinity}
      className="text-3xl py-2"
    />
  );
};

export default TypicalComponent;
