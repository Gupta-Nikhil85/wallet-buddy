import React from 'react'
import BalanceChart from './BalanceChart'
import Form from './Form'

const Main = () => {
  return (
      <section className='mt-4 p-4 d-flex justify-content-center align-items-center'>
          <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <Form/>
            <div className='col-sm-12 col-md-6 d-flex justify-content-center align-items-center'>
              <div className='col-sm-12 col-md-8'>
                <BalanceChart title='Savings'/> 
                <BalanceChart title='Expenditure'/>
              </div>
              </div>
            </div>
          </div>
      </section>
  )
}

export default Main