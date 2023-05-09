import React from 'react';

export default function Investment({ children }) {
  const {
    dateFormatted,
    valueFormatted,
    incomePercentFormatted,
    incomeFormatted,
  } = children;
  return (
    <div className="flex border-b-2 text-sm ">
      <div className="flex-none p-1">{dateFormatted}</div>
      <div className="flex-1 w-64 p-1 font-bold">{valueFormatted}</div>
      <div className="flex-none p-1">
        {incomeFormatted} ({incomePercentFormatted})
      </div>
    </div>
  );
}
