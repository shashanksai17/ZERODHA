import React from "react";
function RightSection({
  productName,
  productDiscription,
  productLink,
  productURL
}
){
  return (
    <div className="row">
      <div className="col-6"style={{marginLeft:"10%"}}>
        <h1>{productName}</h1>
        <p className="fs-3  text-muted mt-3">{productDiscription}</p>
        <a className="fs-5" href={productLink} style={{textDecoration:"none"}}>
          Kite Connect
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <div className="col-6 p-5">
        <img src={productURL} alt="productImage" />
      </div>
    </div>
  );
}
export default RightSection;
