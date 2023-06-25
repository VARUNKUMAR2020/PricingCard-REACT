import React from "react";

const Card = ({ title, price, features }) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {title}
          </h5>
          <h6 className="card-price text-center">
            {price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((feature, index) => (
              <li key={index}>
                <span className="fa-li">
                  {feature.available ? (
                    <i className="fas fa-check"></i>
                  ) : (
                    <i className="fas fa-times"></i>
                  )}
                </span>
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
