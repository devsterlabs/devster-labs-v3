import React, { useContext, useState } from "react";
import { LocaleContext } from "../context/LocaleContext";

export const Benefits = () => {
  // State to toggle visibility of the remaining items
  const [showAll, setShowAll] = useState(false);
  const { t } = useContext(LocaleContext);

  // Array of benefit items
  const benefits = [
    {
      num: 1,
      title: "Transparent Pricing",
      description: "No hidden fees—what you see is what you get",
    },
    {
      num: 2,
      title: "Tax-Free Services",
      description: "No need to worry about extra tax hassles",
    },
    {
      num: 3,
      title: "Compliance-Free Solution",
      description:
        "No dealing with local employment laws; we manage the legalities",
    },
    {
      num: 4,
      title: "Flexible Contracts",
      description: "Easily adaptable terms to meet your policies",
    },
    {
      num: 5,
      title: "Cost Savings",
      description: "Reduce expenses by up to 30% compared to local hires",
    },
    {
      num: 6,
      title: "Dedicated Focus",
      description: "Our developers are fully dedicated to your projects",
    },
    {
      num: 7,
      title: "Seamless Replacements",
      description:
        "If a developer isn’t a perfect fit, we replace them instantly",
    },
    {
      num: 8,
      title: "Managed Payroll",
      description: "We handle the payroll so you can focus on growth",
    },
    {
      num: 9,
      title: "Pakistan Office Access",
      description: "Establish a local presence with our office resources",
    },
    {
      num: 10,
      title: "24/7 Backup Availability",
      description: "Need a backup developer? We got you",
    },
  ];

  // Handle the "See All" button click
  const handleSeeAllClick = () => {
    setShowAll(true); // Show all items when clicked
  };

  return (
    <div className="benefits container" style={{ color: "#fff" }}>
      <div className="row">
        <span className="heading">{t("Why should you work with us?")}</span>
      </div>
      <div className="benefits-list">
        {/* Render first 4 items */}
        {benefits.slice(0, 4).map((benefit, index) => (
          <div className="item" key={index}>
            <div className="num">{benefit.num}.</div>
            <div className="title">
              <span className="strong glitch">{t(benefit.title)}</span>
              {t(benefit.description)}
            </div>
          </div>
        ))}

        {/* Conditionally render the remaining items */}
        {showAll &&
          benefits.slice(4).map((benefit, index) => (
            <div className="item" key={index + 4}>
              <div className="num">{benefit.num}.</div>
              <div className="title">
                <span className="strong glitch">{t(benefit.title)}</span>
                {t(benefit.description)}
              </div>
            </div>
          ))}

        {/* "See All" button, visible only when not all items are shown */}
        {!showAll && (
          <div
            style={{ cursor: "pointer", marginTop: "32px" }}
            className="subh-card"
            onClick={handleSeeAllClick}
          >
            <div className="txt17 semi upper">
              <strong>{t("View All Benefits")}</strong>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
