import React from 'react';
import {Button} from 'reactstrap';
import useWindowDimension from '../../Helpers/useWindowDimension';

export default function ButtonCategories({item, index, selected, setSelected}) {
  const {md} = useWindowDimension();
  return (
    <Button
      onClick={() => setSelected(item.id)}
      className={`categories-btn categories-btn-shadow ${
        item.id === selected ? 'btn-esea-main ' : 'btn-light '
      } ${index === 0 ? '' : 'ml-3'}`}
    >
      <text className={md ? 'font-p75-em' : 'font-1p2-em'}>
        {item.categoryName}
      </text>
    </Button>
  );
}
