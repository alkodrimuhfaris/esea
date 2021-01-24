import React from 'react';
import {Button} from 'reactstrap';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import useWindowDimension from '../../Helpers/useWindowDimension';

export default function CustomArrow({onClick, direction}) {
  const {sm} = useWindowDimension();
  return (
    <Button
      onClick={() => onClick()}
      color="light"
      className={`mx-auto position-absolute p-0 d-flex justify-content-center align-items-center arrow-btn-${direction} arrow-width${
        sm ? '-sm' : ''
      }`}
    >
      {direction === 'right' ? (
        <FiChevronRight size={sm ? '1em' : '1.5em'} />
      ) : (
        <FiChevronLeft size={sm ? '1em' : '1.5em'} />
      )}
    </Button>
  );
}
