import React from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer/footer";


function Image() { //이미지
  return (
    <div className="container mt-5" style={{'alignSelf': 'center'}}>
      <div className="col-12">
          <div>
            <img src="/images/후츄.jpg" height="500" width="600"/>
            <Footer></Footer>
        
          </div>
        </div>
      </div>
  )
}

export default Image;


