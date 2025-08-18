import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 p-3">
          <img src={imageURL} alt="kkk"></img>
        </div>
        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p className="fs-4 text-muted mt-3">{productDiscription}</p>
          <div className="col-6">
            <a className="fs-5" href={tryDemo} style={{textDecoration:"none"}}>
              Try Demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="fs-5" href={learnMore}style={{textDecoration:"none", marginLeft:"40px"}}>
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
          <a href={googlePlay}style={{marginLeft:"20px"}}>
            <img src="media/images/googlePlayBadge.svg" alt="kk"></img>
          </a>
          <a href={appStore} style={{marginLeft:"50px"}}>
            <img src="media/images/appstoreBadge.svg" alt="kk"></img>
          </a>
           </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
