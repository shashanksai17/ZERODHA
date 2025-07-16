import React from 'react';
function Hero() {
    return ( 
       <div class="container p-10 mb-5">
            <div className="row">
              <img src='media/images/homeHero.png' alt ='Hero Image'/>
                <h1 className='mt-5 text-center'>
                    Invest in everything
                </h1>
                <p className='text-center mb-2'>
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className="p-2 btn btn-primary fs-5 mb-5"style={{width:"30%",margin:"0 auto"}}>Sign up for free</button>

                </div>
        
        </div>
     );
}

export default Hero;