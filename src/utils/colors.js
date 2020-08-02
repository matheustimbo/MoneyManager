const common = {
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
};

export const colorPallete = {
  light: {
    ...common,
    background: 'white',
    regularText: 'black',
    inputBackground: '#FCBF49',
    modalFill: '#00000061',
    borderGrey: '#d3d3d3',
  },

  dark: {
    ...common,
    background: '#000000',
    cardBackground: '#1F2125',
    regularText: 'white',
  },
};
