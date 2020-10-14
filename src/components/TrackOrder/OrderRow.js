import React, { useState } from "react";
import moment from "moment";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";
const TrackIcon =
  "https://storage.googleapis.com/aodour_v1/website/track_icon.png";
const OrderRow = ({
  order: {
    id,
    orderDate,
    delivered,
    orderNumber,
    products,
    status,
    payableAmount,
    courierLink,
    trackingNumber,
    order_origin,
    complaint_number,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalAmount = () => {
    let total = 0;
    products.map(({ quantity, price, discountPrice }) => {
      total = total + (price - discountPrice) * quantity;
    });

    return total;
  };

  return (
    <>
      <table className="signal_row res_none">
        <thead>
          <tr>
            <th>{orderNumber}</th>
            <th>Rs. {payableAmount}</th>
            <th>{status}</th>
            <th>{moment(orderDate).format("D-MMM-YY hh:mm")}</th>
            <th>{trackingNumber}</th>
            <th>{complaint_number}</th>
            <th>{order_origin}</th>
            <th>
              {!complaint_number && delivered===1 && (
                <Link to={`/order/${id}/complaint`} className="i-btn">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                  <span>Complaint</span>
                </Link>
              )}
            </th>
            <th>
              <div className="right_contents">
                {courierLink !== "" && (
                  <a href={courierLink} target="_blank">
                    <img src={TrackIcon} alt="img here" />
                    track order
                  </a>
                )}
              </div>
            </th>
            <th>
              <div className="right_contents">
                <span
                  className={isOpen ? "show" : "hide"}
                  aria-hidden="true"
                  onClick={() => setIsOpen((state) => !state)}
                >
                  <span className="show">Show</span>
                  <span className="hide">hide</span>
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <Collapse isOpen={isOpen}>
        {products.map((product) => (
          <ProductRow product={product} orderStatus={status} />
        ))}
      </Collapse>
    </>
  );
};

export default OrderRow;
