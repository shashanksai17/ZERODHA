import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/smallcase-logo.png"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
            alt="/"
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            alt="/"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
          />
          <p className="text-small text-muted">Our asset management venture </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/sensibull-logo.svg"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
            alt="/"
          />
          <p className="text-small text-muted">Options trading platform  </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
            alt="/"
          />
          <p className="text-small text-muted">Investment research platform </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/streak-logo.png"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
            alt="/"
          />
          <p className="text-small text-muted">Systematic trading platform </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="https://zerodha.com/static/images/products/ditto-logo.png"
            style={{ width: "149px", height: "55px", objectFit: "contain" }}
            alt="/"
          />
          <p className="text-small text-muted">Personalized advice on life </p>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary fs-5 mb-5 text-center"
        style={{ width: "20%", margin: "0 auto", marginLeft: "43%" }}
      >
        Signup Now
      </button>
    </div>
  );
}

export default Universe;
