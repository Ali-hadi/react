import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import SaleImage1 from "../../assets/images/campain/product_img1.jpg";
import { ADD_TO_CART } from "../../constants/actionTypes";
import moment from 'moment';

const CampaignProductCard = ({ product, openCartModal }) => {
  const {
    images,
    discountPercentage,
    productVariationName,
    discountPrice,
    price,
    brandSlug,
    productVariationSlug,
    discountEndTime,
    discountStartTime
  } = product;

  const dispatch = useDispatch();

  const addToCart = () => {
    openCartModal(product);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: product.productVariationID,
        title: productVariationName,
        images,
        price,
        activeCampaignName: product.activeCampaignName,
        availableQuantity: product.availableStock,
        sku: product.sku,
        rating: product.rating,
        discountPercentage,
        discountPrice,
        brandSlug,
        variationSlug: product.productVariationSlug,
        totalComments: product.totalComments,
        productName: product.name,
        qty: 1,
        attributes: product.attributes,
        categoryName: product.subSubCategoryName,
        discountEndTime: product.discountEndTime,
        discountStartTime: product.discountStartTime,
      },
    });
  };

  const percetageTag = () => {
    if (
      discountPercentage > 0 &&
      moment().isSameOrAfter(discountStartTime) &&
      moment().isSameOrBefore(discountEndTime)
    ) {
      return (

        <span className="bg2">{Math.round(discountPercentage)}% Off</span>

      );
    }
    return <></>;
  }

  const getPriceElement = () => {
    if (
      discountPercentage > 0 &&
      moment().isSameOrAfter(discountStartTime) &&
      moment().isSameOrBefore(discountEndTime)
    ) {
      return (
        <>
          <h5>
            <b> Rs.{Math.round(price - discountPrice)}</b>
          </h5>
          <span>
            <del >Rs.{price}</del>
          </span>
        </>
      );
    } else {
      return <h5 >Rs.{Math.round(price)} </h5>;
    }
  };


  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <div className="col-product">
        <Link to={`/brand/${brandSlug}/${productVariationSlug}`}>
          <figure>
            <img src={images[0]} alt="image here" />
            {percetageTag()}
          </figure>
        </Link>
        <div className="col-content">
          <Link to={`/brand/${brandSlug}/${productVariationSlug}`}>
            <h6>{productVariationName}</h6>
          </Link>
          {getPriceElement()}
        </div>
        <div className="footer_bottom">
          <span className="at_bg00 w8" onClick={addToCart}>
            add to cart
          </span>
          <Link
            to={`/brand/${brandSlug}/${productVariationSlug}`}
            className="at_bg2 w2 bg2"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignProductCard;
