import investmentsData from './investments.json';

const compareDates = (a, b) => {
  const compareYear = a.year - b.year;
  if (compareYear !== 0) return compareYear;
  return a.month - b.month;
};

const calcIncome = (memo, c) => {
  if (!memo.length) {
    return [{ ...c, income: 0, incomePercent: 0 }];
  }
  const previousInvestment = memo[memo.length - 1];
  const income = c.value - previousInvestment.value;
  const incomePercent = income / previousInvestment.value;
  return [...memo, { ...c, income, incomePercent }];
};

const calcTotal = (totalIncome, inv) => {
  return totalIncome + inv.income;
};

const formatPercent = numberValue =>
  numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatMoney = numberValue =>
  numberValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const formatValues = i => {
  const { value, income, incomePercent, month, year } = i;
  return {
    ...i,
    valueFormatted: formatMoney(value),
    incomeFormatted: formatMoney(income),
    incomePercentFormatted: formatPercent(incomePercent),
    dateFormatted: new Date(Date.UTC(year, month)).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'short',
    }),
  };
};

const investments = investmentsData.investments.map(i => {
  const reports = investmentsData.reports
    .filter(r => r.investmentId === i.id)
    .sort(compareDates)
    .reduce(calcIncome, [])
    .map(formatValues);

  const initialInvestment = reports[0].value;
  const totalIncome = reports.reduce(calcTotal, 0);
  const totalIncomePercent = totalIncome / initialInvestment;

  return {
    ...i,
    totalIncome,
    totalIncomePercent,
    totalIncomeFormatted: formatMoney(totalIncome),
    totalIncomePercentFormatted: formatPercent(totalIncomePercent),
    reports,
  };
});

export { investments };
