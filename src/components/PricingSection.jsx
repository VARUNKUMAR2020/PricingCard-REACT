import React from "react";
import Card from "./Card";

const PricingSection = () => {
  const tiers = [
    {
      title: "Free",
      price: "₹0",
      features: [
        { text: "Single User", available: true },
        { text: "5GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: false },
        { text: "Dedicated Phone Support", available: false },
        { text: "Free Subdomain", available: false },
        { text: "Monthly Status Reports", available: false },
      ],
    },
    {
      title: "Plus",
      price: "₹9",
      features: [
        { text: "5 Users", available: true },
        { text: "50GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: true },
        { text: "Dedicated Phone Support", available: true },
        { text: "Free Subdomain", available: true },
        { text: "Monthly Status Reports", available: false },
      ],
    },
    {
      title: "Pro",
      price: "₹49",
      features: [
        { text: "Unlimited Users", available: true },
        { text: "150GB Storage", available: true },
        { text: "Unlimited Public Projects", available: true },
        { text: "Community Access", available: true },
        { text: "Unlimited Private Projects", available: true },
        { text: "Dedicated Phone Support", available: true },
        { text: "Unlimited Free Subdomains", available: true },
        { text: "Monthly Status Reports", available: true },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              title={tier.title}
              price={tier.price}
              features={tier.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
