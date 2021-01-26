import React from 'react';
import currencyFormat from '../../Helpers/currencyFormat';
import useWindowDimension from '../../Helpers/useWindowDimension';

export default function ProductCard({item}) {
  const {sm} = useWindowDimension();
  const percentage = Math.round((item.sold / (item.sold + item.stocks)) * 100);
  return (
    <div className="px-1 pt-1 product-card-wrapper">
      <div className="product-card product-card-shadow">
        <div className="w-100 product-image-wrapper">
          <img
            src={process.env.REACT_APP_URL_BACKEND + item.picture}
            alt={`product-id-${item.id}`}
            className="product-image"
          />
        </div>
        <div className={`d-flex flex-column montserrat ${sm ? 'p-2' : 'p-3'}`}>
          <text
            className={`font-bold font-1-em text-secondary product-name ${
              sm ? 'mb-1' : 'mb-2'
            }`}
          >
            {item.productName}
          </text>
          <text
            className={`font-bold font-1p2-em text-esea-main price ${
              sm ? 'mb-1' : 'mb-2'
            }`}
          >
            {currencyFormat(item.price)}
          </text>
          <text
            className={`font-bold font-p75-em text-secondary description ${
              sm ? 'mb-1' : 'mb-2'
            }`}
          >
            {item.description}
          </text>
          <text className="font-p75-em font-bold text-secondary amount-sold">
            terjual
          </text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="outer-bar bg-secondary position-relative">
              <div
                className="inner-bar bg-esea-main position-absolute"
                style={{width: `${percentage}%`}}
              >
                &nbsp;
              </div>
            </div>
            <text className="mx-2 font-p75-em text-dark">{`${percentage}%`}</text>
          </div>
        </div>
      </div>
    </div>
  );
}
