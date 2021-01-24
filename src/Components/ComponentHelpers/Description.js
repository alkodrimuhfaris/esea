import React from 'react';
import useWindowDimension from '../../Helpers/useWindowDimension';

export default function Description({item}) {
  const {md} = useWindowDimension();
  return (
    <div className="d-flex mx-4 justify-content-center align-items-center">
      {item.icon(!md ? 45 : 30)}
      <div className="d-flex flex-column ml-2">
        <text
          className={`montserrat height-0 ${
            !md ? 'font-1p5-em' : 'font-1p2-em'
          }`}
        >
          {item.count}
        </text>
        <text
          className={`montserrat height-0 ${
            !md ? 'font-p75-em' : 'font-p5-em'
          }`}
        >
          {item.name}
        </text>
      </div>
    </div>
  );
}
