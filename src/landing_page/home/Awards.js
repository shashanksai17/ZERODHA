import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                 <div className="col-6 p-5">
                <img src='media/images/largestBroker.svg'/>
               </div>
                <div className="col-6">
                <h1>
                    Largest stock broker in India 
                </h1>
                <p className="mb-5">
                    2+ million Zerodha clients contributes to over 15% of India's retail trading volume.
                </p>
                <div className="row">
                <div className="col-6">
                     <ul>
                    <li>
                        Futures and Options 
                    </li>
                    <li>
                        Commodity derivatives 
                    </li>
                    <li>
                        Currency derivatives
                    </li>
                </ul>
                </div>
                    <div className="col-6">
                     <ul>
                    <li>
                        Stocks & Ipos
                    </li>
                    <li>
                        Direct Mutual Funds
                    </li>
                    <li>
                       Bonds and Govt. Securites
                    </li>
                </ul>

                    </div>

                </div>
    
                <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
               </div>
               </div>
                
           
        </div>
     );
}

export default Awards;