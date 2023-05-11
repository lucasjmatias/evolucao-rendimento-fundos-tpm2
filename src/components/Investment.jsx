import React from 'react';
import { formatDateMonthYear } from '../utils/date-utils';
import { formatMoney, formatPercent } from '../utils/number-utils';
import { colorizeNumber } from '../utils/style-utils';

export default function Investment({ children: investment }) {
  const { referenceDate, value, incomePercent } = investment;
  return (
    <div className="flex border-b-2 text-sm hover:bg-blue-200 ">
      <div className="flex-none w-32 p-1">
        {formatDateMonthYear(referenceDate)}
      </div>
      <div
        className={`flex-1 w-64 p-1 font-bold ${colorizeNumber(incomePercent)}`}
      >
        {formatMoney(value)}
      </div>
      <div className={`flex-none p-1 ${colorizeNumber(incomePercent)}`}>
        {formatPercent(incomePercent)}
      </div>
    </div>
  );
}
