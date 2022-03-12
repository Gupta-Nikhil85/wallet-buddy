export const ExpenditureCategories = [
    'Travel',
    'Food',
    'Shopping',
    'Entertainment',
    'Others'
]

export const SavingsCategories = [
    'Business',
    'Investments',
    'Deposits',
    'Gifts',
    'Extra Income',
    'Prize',
    'Others'
]

export function convertDateFormat(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }