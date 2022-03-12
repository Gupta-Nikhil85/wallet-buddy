import React from 'react'
import heroImg from '../assets/heroImg.jpg'
import heroBg from '../assets/hero-bg.png'

const Hero = () => {
  return (
      <section className="vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage:`url(${heroBg})`}}>
          <div className='container' >
                <div className='row'>
                    <div className='col-sm-12 col-md-8 d-flex flex-column justify-content-center align-items-start'>
                        <h1 className='display-4 text-primary'>
                            <strong>WalletBuddy</strong>
                        </h1>
                        <p className='text-muted lead'>
                            <strong>"Manage Your Expenses At Your FingerTips."</strong>
                        </p>
                    </div>
                    <div className=' d-sm-none d-md-block col-sm-12 col-md-4'>
                        <img src={heroImg} className="w-100 img-fluid"/>
                    </div>
                </div>
          </div>
      </section>
  )
}

export default Hero