import React from "react";
import Notification from "rc-notification";
import "rc-notification/assets/index.css";
import "../../styles/gift.css";

let notification = null;
Notification.newInstance(
  { maxCount: 1, style: { top: "300px", right: 0 } },
  (n) => (notification = n)
);

export default function CampaignOfferNotification({ image }) {
  return notification.notice({
    duration: 3,
    content: (
      <div className="Offer_card middle">
        <span>
          <img src={image} alt="img here" />
        </span>
      </div>
    ),
  });
}
