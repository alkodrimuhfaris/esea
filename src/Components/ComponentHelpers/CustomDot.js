import React from 'react';
import {Button} from 'reactstrap';

export default function CustomDot({onClick, eseaDotClass = '', ...rest}) {
  const {active} = rest;
  return (
    <Button
      onClick={() => onClick()}
      className={`${eseaDotClass} shadow-none mx-1 mb-1 ${
        active ? 'dot-active' : 'dot-inactive'
      }`}
    >
      &nbsp;
    </Button>
  );
}
