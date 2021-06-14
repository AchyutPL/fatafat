import React from "react";

export default function Smallphotosection() {
  return (
    <>
      <div className="smallphotocont">
        <div className="line">
          <img src="/photosection/menfashion.jpg" alt="" />
          <div className="photoname">
            <label htmlFor="" className="photonaming">
              Men's Fashion
            </label>
          </div>
        </div>
        <div className="line">
          <img src="/photosection/womenfashion.jpg" alt="" />
          <div className="photoname">
            <label htmlFor="" className="photonaming">
              Women's Fashion
            </label>
          </div>
        </div>
        <div className="line">
          <img src="/photosection/veges.jpg" alt="" />
          <div className="photoname">
            <label htmlFor="" className="photonaming">
              Foods
            </label>
          </div>
        </div>
        <div className="line">
          <img src="/photosection/mobiles.jpg" alt="" />
          <div className="photoname">
            <label htmlFor="" className="photonaming">
              Mobiles
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
