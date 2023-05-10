import React from 'react';
import { formatMoney, formatPercent } from '../utils/number-utils';
import { colorizeNumber } from '../utils/style-utils';

export default function Investments({ children, fund }) {
  const { description, totalIncome, totalIncomePercent } = fund;
  return (
    <div className="border-2 px-4 py-2 my-4 mx-2">
      <h2 className="font-bold text-center text-gray-700">{description}</h2>
      <div className="text-center font-bold">
        <span className=" mr-1">Rendimento total:</span>
        <span className={colorizeNumber(totalIncome)}>
          {formatMoney(totalIncome)} ({formatPercent(totalIncomePercent)})
        </span>
      </div>
      <div className="m-2">{children}</div>
    </div>
  );
}
