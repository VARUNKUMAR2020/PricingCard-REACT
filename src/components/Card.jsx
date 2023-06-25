import React from "react";

const Card = ({ title, price, features }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <h6 className="card-price text-center">
            {price}
            <span class="period">/month</span>
          </h6>
          <ul className="list-style mt-3 mb-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className={feature.available ? "" : "text-muted"} // Apply "text-muted" class if feature is not available
              >
                {feature.text}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-primary text-uppercase">
            BUTTON
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
