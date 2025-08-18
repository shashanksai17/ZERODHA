import React from "react";
function OpenAccount() {
  return (
    <div class="container p-10 mb-5">
      <div className="row">
        <h1 className="mt-5 text-center">Open a Zerodha account</h1>
        <p className="text-muted text-center mb-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "30%", margin: "0 auto" }}
        >
          Sign up for free
        </button>   
      </div>
    </div>
  );
}

export default OpenAccount;
