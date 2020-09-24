import React from "react";
import { Link } from "react-router-dom";
import "../css/Error.css";
function Error() {
  return (
    <>
      <section className="page_404">
        <h1 style={{ fontSize: "50px" }} className="text-center ">
          404
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg"></div>

                <div className="contant_box_404">
                  <h3 className="h2">Looks like our developers have slept</h3>
                  <p>Sorry for the inconvenience</p>
                  <Link to="/">
                    <button className="link_404">Wake Up The Developers</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;
