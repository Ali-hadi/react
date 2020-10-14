import React, { useState, useEffect } from "react";
import "./ProductCardNormal.css";

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  UPDATE_WISHLIST,
  DELETE_WISHLIST,
} from "../../constants/actionTypes";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { gtagEvent } from "../../util/GoogleTagManager";
import { fbqTrack } from "../../util/FacebookAnalytics";
import moment from "moment";
import notification from "../Notification";
const Compaigntag = "https://storage.googleapis.com/aodour_v1/campaign/tag2.png";
// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => ++value); // update the state to force render
// }

export default function ProductCardNormal({
  id,
  title,
  images,
  price,
  product,
  openModal,
  availableQuantity,
  sku,
  rating,
  discountPercentage,
  discountPrice,
  brandSlug,
  variationSlug,
  totalComments,
  productName,
  attributes,
  openCartModal,
  preOrder,
  activeCampaignName,
  categoryName,
  discountEndTime,
  addtowishlist,
  discountStartTime,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartList } = useSelector((state) => state);

  const defaultModal = (product, variationSlug) => {};

  const modal = openModal || defaultModal;

  const addToCart = () => {
    if (availableQuantity > 0) {
      const found = cartList.find((item) => item.id === id);
      if (found) {
        if (found.qty < 5) {
          // openCartModal(product);
          dispatch({
            type: ADD_TO_CART,
            payload: {
              id,
              title,
              images,
              price,
              availableQuantity,
              sku,
              activeCampaignName,
              rating,
              discountPercentage,
              discountPrice,
              brandSlug,
              variationSlug,
              totalComments,
              productName,
              qty: 1,
              attributes,
              categoryName,
              discountStartTime,
              discountEndTime,
            },
          });
        } else {
          notification({ message: "Item limited to max quantity of 5" });
        }
      } else {
        // openCartModal(product);
        dispatch({
          type: ADD_TO_CART,
          payload: {
            id,
            title,
            images,
            price,
            availableQuantity,
            sku,
            rating,
            discountPercentage,
            activeCampaignName,
            discountPrice,
            brandSlug,
            variationSlug,
            totalComments,
            productName,
            qty: 1,
            attributes,
            categoryName,
            discountStartTime,
            discountEndTime,
          },
        });
      }

      gtagEvent("add_to_cart", {
        value: `${price}`,
        items: [
          {
            id: `${sku}`,
            google_business_vertical: "retail",
          },
        ],
      });
      fbqTrack("AddToCart", {
        content_ids: `${[sku]}`,
        content_id: `${sku}`,
        content_type: "product",
        contents: { quantity: 1, id: sku },
      });
    }
  };
  const getStars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
      );
    }
    return stars;
  };

  const getTag = () => {
    if (availableQuantity < 1) {
      if (preOrder)
        return (
          <div className="figcaption">
            <span
              className="bg2"
              style={{
                padding: "5px 10px",
                color: "#fff",
              }}
            >
              Pre-Order
            </span>
          </div>
        );
      return (
        <div className="figcaption">
          <span
            className="bg2"
            style={{
              padding: "5px 10px",
              color: "#fff",
            }}
          >
            Sold Out
          </span>
        </div>
      );
    } else if (
      discountPercentage > 0 &&
      moment().isSameOrAfter(discountStartTime) &&
      moment().isSameOrBefore(discountEndTime)
    ) {
      return (
        <div className="figcaption">
          <span className="bg2">{Math.round(discountPercentage)}% Off</span>
        </div>
      );
    }
    return <></>;
  };

  const getPriceElement = () => {
    if (
      discountPercentage > 0 &&
      moment().isSameOrAfter(discountStartTime) &&
      moment().isSameOrBefore(discountEndTime)
    ) {
      return (
        <h6 className="">
          Rs.{Math.round(price - discountPrice)}{" "}
          <del className="del_price">{price}</del>
        </h6>
      );
    } else {
      return <h6 className="">Rs.{Math.round(price)} </h6>;
    }
  };

  const removeFromWishlist = () => {
    dispatch({ type: DELETE_WISHLIST, payload: { productVariationId: id } });
  };

  const getActiveCampaign = () => {
    if (
      activeCampaignName !== null &&
      activeCampaignName.length > 1 &&
      moment().isSameOrAfter(discountStartTime) &&
      moment().isSameOrBefore(discountEndTime)
    )
      // return activeCampaignName;
      return (
        <figcaption>
          <img className="image2" src={Compaigntag} alt="tag image" />
        </figcaption>
      );
    return null;
  };
  return (
    <>
      <div className="product_style2" key={id}>
        <div className="on_hover_class">
          <div
            className="upper_btn"
            onClick={() => {
              modal(product, variationSlug);
            }}
          >
            {/* <i className="fa fa-eye" aria-hidden="true"></i> */}
            <span>Quick view</span>
            <span className="pulse"></span>
          </div>
          <figure
            onClick={() => history.push(`/brand/${brandSlug}/${variationSlug}`)}
          >
            <img className="image2" src={`${images[0]}`} alt={title} />
            {getTag()}
            {/* {getActiveCampaign()} */}
          </figure>
        </div>
        <div className="product-content">
          {/* <span>{getActiveCampaign()}</span> */}
          <h6>
            <Link
              to={{
                pathname: `/brand/${brandSlug}/${variationSlug}`,
              }}
            >
              {title}
            </Link>
          </h6>
          <div className="pricepro">{getPriceElement()}</div>
          <div className="ltr">
            {getStars().length > 0 && (
              <div className="rating-blog float-left">
                <ul className="rating">{getStars()}</ul>
                {totalComments > 0 && (
                  <span className="rate_result">{`(${totalComments})`}</span>
                )}
              </div>
            )}
          </div>
          <div className="rtl">
            <ul className="icons-shows">
              {addtowishlist && (
                <li>
                  <div className="check_hrt">
                    <input
                      id={`hrt_chk${product.id}`}
                      type="checkbox"
                      name=""
                      value=""
                      checked={true}
                      onClick={removeFromWishlist}
                    />
                    <label htmlFor={`hrt_chk${product.id}`}>
                      <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </label>
                  </div>
                </li>
              )}
            </ul>
            
          </div>
          {availableQuantity > 0 && (
              <div className="btn-w100" onClick={addToCart}>
                <button type="submit" className="btn-normal at_bg2">
                  Add
                </button>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
