import React, { useState , useEffect} from 'react'
import { convertDateFormat, ExpenditureCategories, SavingsCategories } from '../util';

const Form = () => {
    const [transactions,setTransactions]=useState(JSON.parse(localStorage.getItem('TRANSACTIONS')) || []);
    const [category, setCategory] = useState([]);
    
    const [transactionData, setTransactionData] = useState({type:'Savings',Amount:0,Source:'Others',Description:'', Date:''});
    const updateFormValue = (key, value) => {
        setTransactionData({...transactionData, [key]:value});
    }
    const [amount, setAmount]= useState(parseInt(localStorage.getItem('TOTAL_AMOUNT')) || 0);
    useEffect(() => {
        if(transactionData.type==='Expenditure'){
            setCategory(ExpenditureCategories)
        }
        else{
            setCategory(SavingsCategories)
        }
    }, [transactionData])

    const handleSubmit = (e) => {
        e.preventDefault();
        transactions.push(transactionData);
        localStorage.setItem('TRANSACTIONS', JSON.stringify(transactions));
        if(transactionData.type==='Expenditure'){
            setAmount(amount-parseInt(transactionData.Amount));
            localStorage.setItem('TOTAL_AMOUNT', JSON.stringify(amount-parseInt(transactionData.Amount)));
        }
        else{
            setAmount(amount+parseInt(transactionData.Amount));
            localStorage.setItem('TOTAL_AMOUNT', JSON.stringify(amount+parseInt(transactionData.Amount)));
        }
        window.location.reload(false);
    }
    
  return (
    <div className='col-sm-12 col-md-6 rounded-lg shadow-lg p-4'>
        <div className='text-center'>
            <h4>Total Balance : Rs. {amount}</h4>
            <h4>Try Saying</h4>
            <p>Add Expenses for Rs. 5000 in Category Travel for Thursday.</p>
        </div>
        <form className="w-100">
            <div className="row">
                <div className="mb-2 col-sm-12 col-md-6">
                    <label className="text-muted font-size-14 mb-2">Type<span className='text-danger'>*</span></label>
                    <select className='form-select pointer' value={transactionData.type} onChange={(e)=>{setTransactionData({...transactionData, 'type':e.target.value, 'Source':'Others'} )}}>
                        <option>Savings</option>
                        <option>Expenditure</option>
                    </select>
                </div>       
                <div className="mb-2 col-sm-12 col-md-6">
                    <label className="text-muted font-size-14 mb-2">Amount <span>(in INR)</span><span className='text-danger'>*</span></label>
                    <input type="number" className="form-control shadow-none" required placeholder="100" value={transactionData.Amount} onChange={(e)=>{updateFormValue('Amount', e.target.value)}}></input>
                </div>
            </div>
            <div className="mb-2">
                    <label className="text-muted font-size-14 mb-2">Source<span className='text-danger'>*</span></label>
                    <select className="form-select pointer shadow-none" value={transactionData.Source} onChange={(e)=>{updateFormValue('Source', e.target.value)}}>
                    {category.map(category=>{
                        return (
                            <option value={category.type} key={category.type}> {category.type} </option>
                        )
                    })}
                </select>
                {transactionData.Source==='Others' && <input type="text" className="form-control shadow-none" placeholder="Description (if any)" value={transactionData.Description} onChange={(e)=>{updateFormValue('Description', e.target.value)}}></input>}
                </div>
            <div className="row">
                <div className="mb-2 col-sm-12">
                    <label className="text-muted font-size-14 mb-2">Date<span className='text-danger'>*</span></label>
                    <input type="date" className="form-control shadow-none" required placeholder="dd-mm-yyyy" value={transactionData.Date} onChange={(e)=>{updateFormValue('Date', convertDateFormat(e.target.value))}}></input>
                </div>    
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button type="submit" className="btn btn-outline-dark rounded w-100" onClick={(e) => {handleSubmit(e)}}>Update Balance</button>
            </div>
        </form>
        <div className='w-100 mt-2' style={{height:'200px', overflowY:'scroll'}}>
            {
                transactions.map((transaction, index)=>{
                    return (
                        <div className='d-flex justify-content-between align-items-center p-2 border-bottom' key={index}>
                            <div className='d-flex align-items-center'>
                                <div style={transaction.type==='Expenditure'?{color:'red', marginRight:'2px'}:{color:'green',marginRight:'2px'}}>
                                    {transaction.type==='Expenditure'?'-':'+'}
                                    <span className='font-size-14'>{transaction.Amount}</span>
                                </div>
                                <div>
                                    <span className='font-size-14 text-muted'>{transaction.Source}</span>
                                </div>
                            </div>
                            <div className='font-size-14'>{convertDateFormat(transaction.Date)}</div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Form