import React from 'react';
function Pricing() {
    return ( 
        <div className="container ">
             <div className="row mt-5">
                <div className="col-4">
                    <h1>
                        Unbeatable pricing
                    </h1>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href=''style={{textDecoration: "none" }}>
                        See pricing
                         <i className="fa fa-long-arrow-right" aria-hidden="true" ></i>
                    </a>
                    </div>
                <div className="col-2">

                    </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col border p-2">
                        <h1 className="mb-2">
                            ₹0
                        </h1>
                        <p className="text-muted mb-3">
                            Free equity delivery
                            and direct mutual funds
                        </p>
                    </div>
                    <div className="col border p-2">
                        <h1 className="mb-4">
                            ₹20
                        </h1>
                        <p className="text-muted ">
                            Intraday and
                            F&O
                        </p>
                    </div>
                  </div>
                    </div>
             </div>
        </div>
     );
}

export default Pricing;