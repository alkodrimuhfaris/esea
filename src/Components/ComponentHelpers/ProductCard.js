import React from 'react';
import currencyFormat from '../../Helpers/currencyFormat';

export default function ProductCard({item}) {
  const percentage = Math.round((item.sold / (item.sold + item.stocks)) * 100);
  return (
    <div className="px-1 pt-1 product-card-wrapper">
      <div className="product-card">
        <div className="w-100 product-image-wrapper">
          <img
            src={process.env.REACT_APP_URL_BACKEND + item.picture}
            alt={`product-id-${item.id}`}
            className="product-image"
          />
        </div>
        <div className="d-flex flex-column p-3 montserrat">
          <text className="mb-2 font-bold font-1-em text-secondary product-name">
            {item.productName}
          </text>
          <text className="mb-2 font-bold font-1p2-em text-esea-main price">
            {currencyFormat(item.price)}
          </text>
          <text className="mb-2 font-bold font-p75-em text-secondary description">
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
