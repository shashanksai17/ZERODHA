import React from 'react';
import './Stats.css';
function Stats() {
    return ( 
        <div className="container ">
            <div className="row mt-5">
               
            <div className="column">
            <h1 className="fs-2 mb-5">Trust with confidence</h1>
            <h2 className="fs-4" >Customer-first always</h2>
            <p className="text-muted"> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            <h2 className="fs-4" >No spam or gimmicks</h2>
            <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
            <h2 className="fs-4" >The Zerodha universe</h2>
            <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h2>Do better with money</h2>
            <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
            </p>
            </div>
             <div className="column">
        <img src='media/images/ecosystem.png' style={{width:"75%"}}/>
            </div>
            </div>
            <div className="stats-links" style={{ textAlign: "right", marginTop: "32px" }}>
                <a href='' className="mx-5"style={{ textAlign: "right", marginRight: "20px",textDecoration: "none" }}>
                    Explore our products
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                <a href=''className="mx-5" style={{ textAlign: "right", marginRight: "250px",textDecoration: "none" }}>
                    Try Kite demo
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
            
        </div>
     );
}
export default Stats;