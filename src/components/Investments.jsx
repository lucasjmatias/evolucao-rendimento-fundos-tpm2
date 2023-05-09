import React from 'react';

export default function Investments({ children, fund }) {
  const { description, totalIncomeFormatted, totalIncomePercentFormatted } =
    fund;
  return (
    <div className="border-2 px-4 py-2 my-4 mx-2">
      <h2 className="font-bold text-center text-gray-700">{description}</h2>
      <div className="text-center text-gray-600 text-sm ">
        <span className="font-bold mr-1">Rendimento total:</span>
        <span>
          {totalIncomeFormatted} ({totalIncomePercentFormatted})
        </span>
      </div>
      <div className="m-2">{children}</div>
    </div>
  );
}
