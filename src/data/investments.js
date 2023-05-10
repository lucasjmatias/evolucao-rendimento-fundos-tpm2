import { compareDatesProperty } from '../utils/date-utils';
import { reduceSumProperties } from '../utils/number-utils';
import investmentsData from './investments.json';

const calcIncome = (memo, c) => {
  if (!memo.length) {
    return [{ ...c, income: 0, incomePercent: 0 }];
  }
  const previousInvestment = memo[memo.length - 1];
  const income = c.value - previousInvestment.value;
  const incomePercent = income / previousInvestment.value;
  return [...memo, { ...c, income, incomePercent }];
};

const prepareValues = i => {
  return {
    ...i,
    referenceDate: new Date(Date.UTC(i.year, i.month)),
  };
};

const investments = investmentsData.investments.map(i => {
  const reports = investmentsData.reports
    .filter(r => r.investmentId === i.id)
    .map(prepareValues)
    .sort(compareDatesProperty('referenceDate'))
    .reduce(calcIncome, []);

  const initialInvestment = reports[0].value;
  const totalIncome = reports.reduce(reduceSumProperties('income'), 0);
  const totalIncomePercent = totalIncome / initialInvestment;

  return {
    ...i,
    totalIncome,
    totalIncomePercent,
    reports,
  };
});

export { investments };
