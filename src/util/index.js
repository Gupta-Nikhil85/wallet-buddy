export const ExpenditureCategories = [
    {type:'Travel', amount:0,color:'#b50d12'},
    {type:'Food', amount:0,color:'#b50d12'},
    {type:'Shopping', amount:0,color:'#d3583a'},
    {type:'Entertainment', amount:0,color:'#c9452c'},
    {type:'Others', amount:0,color:"#bf2f1f"},
]

export const SavingsCategories = [
    {type:'Business', amount:0,color:'#00ff9d'},
    {type:'Investments', amount:0,color:'#154731'},
    {type:'Deposits', amount:0,color:'#165f40'},
    {type:'Gifts', amount:0,color:'#10ac6e'},
    {type:'Extra Income', amount:0,color:'#04e38d'},
    {type:'Prize', amount:0,color:'#16784f'},
    {type:'Others', amount:0,color:'#14915f'} 
]

export function convertDateFormat(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }