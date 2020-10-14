import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Collapse from "@kunukn/react-collapse";
export default function RightSection({
  cartList,
  handleCheckout,
  outOfStockProducts,
  totalPrice,
  cartListEmptyError,
  submitDisabled,
  setSubmitDisabled,
  getDeliveryCharges,
}) {
  const [open, setOpen] = useState(false);

  const deliveryCharges = () => {
    if (getDeliveryCharges) {
      return getDeliveryCharges();
    }
    return 200;
  };

  const checkIsOutOfStock = (product) => {
    for (const p of outOfStockProducts) {
      if (p.id === product.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <div className="widget_cart">
        {cartListEmptyError && (
          <h5 style={{ color: "red", marginBottom: 10 }}>
            Cart is empty. Add products in cart.
          </h5>
        )}
        {cartList.length > 0 &&
          cartList.map((product) => (
            <ProductCard
              product={product}
              checkIsOutOfStock={checkIsOutOfStock}
            />
          ))}
        <div className="promo_code_blog">
          <h6 onClick={() => setOpen((state) => !state)}>
            <i
              className={`${open ? "icon-minus" : "icon-plus"}`}
              aria-hidden="true"
            ></i>
            promo code
          </h6>
          <Collapse isOpen={open}>
            <form className="collapse_dev">
              <div className="promo_code">
                <input type="text" placeholder="Enter your promo code" />
                <button type="submit" className="btn-normal  at_bg2">
                  Apply
                </button>
              </div>
              <div className="caption">
                <p>
                  Not aplicable on "Masks" and "MAC" products. Derma vouchers
                  are only for skin-care products
                </p>
              </div>
            </form>
          </Collapse>
          <div className="total_bar">
            <ul>
              <li>
                <span>Items</span>
                <span>Rs. {totalPrice()}</span>
              </li>
              <li>
                <span>Shipping</span>
                <span>Rs. {deliveryCharges()}</span>
              </li>
              <li>
                <h5>Total:</h5>
                <h5>Rs. {totalPrice() + deliveryCharges()}</h5>
              </li>
            </ul>
            <button
              disabled={submitDisabled}
              type="button"
              className="btn-normal  at_bg2"
              onClick={(e) => {
                // setSubmitDisabled(true);
                handleCheckout();
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
