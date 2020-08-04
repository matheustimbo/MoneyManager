import {commonColors} from './colors';
export const categories = {
  expenses: {
    PERSONAL: {
      name: 'Despesas pessoais',
      color: commonColors.personalExpenses,
    },
    FOOD: {
      name: 'Alimentação',
      color: commonColors.foodExpenses,
    },
    TRANSPORT: {
      name: 'Transporte',
      color: commonColors.transportExpenses,
    },
    RECREATION: {
      name: 'Lazer',
      color: commonColors.recreationExpenses,
    },
    HEALTH: {
      name: 'Saúde',
      color: commonColors.healthExpenses,
    },
    EDUCATION: {
      name: 'Educação',
      color: commonColors.educationExpenses,
    },
    OTHERS: {
      name: 'Outros',
      color: commonColors.othersExpenses,
    },
  },

  revenues: {
    BUSINESS: {
      name: 'Negócios',
      color: commonColors.businessRevenues,
    },
    GIFTS: {
      name: 'Presentes',
      color: commonColors.giftsRevenues,
    },
    SALARY: {
      name: 'Salário',
      color: commonColors.salaryRevenues,
    },
    LOAN: {
      name: 'Empréstimo',
      color: commonColors.loanRevenues,
    },
    OTHERS: {
      name: 'Outros',
      color: commonColors.othersRevenues,
    },
  },
};

export const categoriesArray = {
  expenses: [
    {
      name: 'Despesas pessoais',
      color: commonColors.personalExpenses,
    },
    {
      name: 'Alimentação',
      color: commonColors.foodExpenses,
    },
    {
      name: 'Transporte',
      color: commonColors.transportExpenses,
    },
    {
      name: 'Lazer',
      color: commonColors.recreationExpenses,
    },
    {
      name: 'Saúde',
      color: commonColors.healthExpenses,
    },
    {
      name: 'Educação',
      color: commonColors.educationExpenses,
    },
    {
      name: 'Outros',
      color: commonColors.othersExpenses,
    },
  ],

  revenues: [
    {
      name: 'Negócios',
      color: commonColors.businessRevenues,
    },
    {
      name: 'Presentes',
      color: commonColors.giftsRevenues,
    },
    {
      name: 'Salário',
      color: commonColors.salaryRevenues,
    },
    {
      name: 'Empréstimo',
      color: commonColors.loanRevenues,
    },
    {
      name: 'Outros',
      color: commonColors.othersRevenues,
    },
  ],
};
