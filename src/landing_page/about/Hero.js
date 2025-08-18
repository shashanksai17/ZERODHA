import React from "react";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row m-5">
        <h1 className="fs-2 text-muted m-5 text-center p-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row m-5 p-5">
        <div className="col-6 fs-5 ">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            {" "}
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6  fs-5 ">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <h3 className="text-center p-3">People</h3>
      <div className="row m-5 p-5">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/shashank.png"
            alt="shashank"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h6 className="mt-5">
            Shashanksai Kotagiri
          </h6>
        </div>
        <div className="col-6 fs-5">
          <p>
            shashank bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>Connect on <a href="/">Homepage</a> / <a href="/">TradingQnA</a> / <a href="/">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
