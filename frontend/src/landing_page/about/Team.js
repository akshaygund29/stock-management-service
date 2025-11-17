import React from 'react';

function Team() {
    return ( 
       <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/akshaygund.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt='akshaygund'
          />
          <h4 className="mt-5">Akshay Gund</h4>
          <h6>Creator, Owner</h6>
        </div>
        <div className="col-6 p-3">
          <p>
           I built a Zerodha clone inspired by Akshay’s journey of overcoming the challenges he faced during his decade-long trading career.
          </p>
          <p>
           The project replicates key features of Zerodha, which revolutionized the Indian broking industry, showcasing my understanding of fintech platforms and trading systems.
          </p>
          <p>Playing Chess is his zen.</p>
          <p>
            Connect on <a href=""  style={{ textDecoration: "none" }}>Homepage</a> / <a href=""  style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href=""  style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;