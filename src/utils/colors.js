export const commonColors = {
  personalExpenses: '#FFCE6B',
  foodExpenses: '#FF6BD5',
  transportExpenses: '#3BD8AC',
  recreationExpenses: '#6DD83B',
  healthExpenses: '#D8943B',
  educationExpenses: '#3B3BD8',
  othersExpenses: '#36363F',
  businessRevenues: '#FFCE6B',
  giftsRevenues: '#FF6BD5',
  salaryRevenues: '#3BD8AC',
  loanRevenues: '#6DD83B',
  othersRevenues: '#D8943B',
  primary: '#E72B75',
  accent: '#3626A7',
  gradientColor1: '#DF0C60',
  gradientColor2: '#AA1D55',
  coloredBgText: 'white',
  error: 'red',
  selectedRevenue: 'rgb(60, 205, 106)',
  unselectedRevenue: 'rgba(60, 205, 106, 0.4)',
  selectedExpense: 'rgb(250, 122, 122)',
  unselectedExpense: 'rgba(250, 122, 122, 0.4)',
  revenueAmount: '#22AA99',
  expenseAmount: '#EE4444',
  zeroDayBar: '#BBBBBB',
  itemDescription: '#555555',
  transactionsHeader: '#FAFAFA',
  transparentContainer: 'rgba(0,0,0,0.4)',
  authSelectionContainer: 'white',
};

export const colorPallete = {
  light: {
    ...commonColors,
    background: 'white',
    regularText: 'black',
    modalFill: '#00000061',
    borderGrey: '#d3d3d3',
    inputBackground: 'rgba(196,196,196,0.5)',
  },

  dark: {
    ...commonColors,
    background: '#000000',
    cardBackground: '#1F2125',
    inputBackground: '#40444C',
    regularText: 'white',
  },
};
