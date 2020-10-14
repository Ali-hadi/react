import React, { useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import PropTypes from "prop-types";
import ProductCardNormal from "./Product/ProductCardNormal";
import ProductDetailModal from "./Product/ProductDetailModal";
import AddToCartModal from "./AddToCartModel";

const defaultResponsive = {
  0: {
    items: 2,
  },
  480: {
    items: 3,
  },
  767: {
    items: 4,
  },
  1000: {
    items: 5,
  },
};
export default function ProductCarousel({ products, responsive }) {
  const resp = responsive || defaultResponsive;

  const [selectedProduct, setSelectedProduct] = useState({});
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct({});
  };

  const openCartModal = (product) => {
    setSelectedProduct(product);
    setIsCartModalOpen(true);
  };

  const variationImages = (item) => {
    const images =
      item && item.variations && item.variations.map((img) => img.image);
    return images;
  };

  return (
    <>
      <div className="slider_nav">
        {products && products.length > 0 && (
          <ReactOwlCarousel
            lazyLoad={true}
            loop
            nav
            margin={10}
            responsive={resp}
          >
            {products.map((item) => {
              return (
                <ProductCardNormal
                  key={item.id}
                  sacwsedvff
                  id={item.id}
                  images={item.images}
                  title={item.name}
                  price={Math.round(item.price || 0)}
                  openModal={openModal}
                  product={item}
                  availableQuantity={item.available_quantity}
                  sku={item.sku}
                  rating={item.rating}
                  discountPercentage={item.discount_percentage}
                  discountPrice={item.discount_price}
                  brandSlug={item.brand_slug}
                  variationSlug={item.product_variation_slug}
                  totalComments={item.total_comments}
                  productName={item.product_name}
                  attributes={item.attributes}
                  openCartModal={openCartModal}
                  preOrder={item.pre_order}
                  activeCampaignName={item.activeCampaignName}
                  categoryName={item.category_name}
                  discountEndTime={item.discount_end_time}
                  discountStartTime={item.discount_start_time}
                />
              );
            })}
          </ReactOwlCarousel>
        )}
      </div>

      <ProductDetailModal
        selectedProductVariation={selectedProduct}
        isOpen={isProductModalOpen}
        closeModal={closeModal}
        varSlug={selectedProduct.product_variation_slug}
      />
      <AddToCartModal
        isOpen={isCartModalOpen}
        setIsOpen={setIsCartModalOpen}
        selectedProduct={{ ...selectedProduct, qty: 1 }}
      />
    </>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.array,
};
