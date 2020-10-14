import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CAMPAIGN_LISTING } from "../constants/actionTypes";
import ReactPaginate from "react-paginate";
import "../styles/sale.css";
import CampaignProductsGrid from "../components/Campaign/CampaignProductsGrid";
import { isMobile } from "react-device-detect";
import ReactOwlCarousel from "react-owl-carousel";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader/compnentLoader";

// let filteredProducts = [];

export default function Campaign() {
  const SaleBanner =
    "https://storage.googleapis.com/aodour_v1/campaign/banner_img.jpg";
  const SaleCard1 =
    "https://storage.googleapis.com/aodour_v1/campaign/card-img1.png";
  const SaleCard2 =
    "https://storage.googleapis.com/aodour_v1/campaign/card-img2.png";
  const SaleCard3 =
    "https://storage.googleapis.com/aodour_v1/campaign/card-img3.png";
  const SaleIcon1 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_1.png";
  const SaleIcon2 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_2.png";
  const SaleIcon3 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_3.png";
  const SaleIcon4 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_4.png";
  const SaleIcon5 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_5.png";
  const SaleIcon6 =
    "https://storage.googleapis.com/aodour_v1/campaign/sale_icon_6.png";
  const DiscountBanner =
    "https://storage.googleapis.com/aodour_v1/campaign/discount_banner.jpg";

  const dispatch = useDispatch();

  const {
    campaignProducts: { products },
  } = useSelector((state) => state);

  const [selectedType, setSelectedType] = useState();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("");
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [showOthers, setShowOthers] = useState(true);
  const [otherProducts, setOtherProducts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("All Products");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    dispatch({
      type: GET_CAMPAIGN_LISTING,
      callback: () => setLoading(false),
    });
  }, []);

  useEffect(() => {
    setBestSellerProducts(
      products.filter((product) => product.bestSeller === "1")
    );
    setOtherProducts(products.filter((product) => product.menu === "others"));
    setPagination(products.length / 50);
    // filteredProducts = products;
  }, [products]);

  // useEffect(() => {
  // 	setPagination(filteredProducts.length / 50);
  // }, [filteredProducts]);

  const getBrands = () => {
    let brands = [];
    if (products.length > 0) {
      for (const product of products) {
        if (!brands.find((value) => product.brandName === value)) {
          brands.push(product.brandName);
        }
      }
    }
    return brands;
  };

  const getSubSubCategory = () => {
    let subSubCategories = [];
    if (products.length > 0) {
      for (const product of products) {
        if (
          !subSubCategories.find(
            (value) => product.subSubCategoryName === value
          )
        ) {
          subSubCategories.push(product.subSubCategoryName);
        }
      }
    }
    return subSubCategories;
  };

  const filter = () => {
    let newProducts = products;

    if (selectedType) {
      if (selectedType !== "allProducts") {
        if (selectedType === "offProducts") {
          newProducts = newProducts.filter(
            (product) => parseFloat(product.discountPercentage) >= 50
          );
        } else {
          newProducts = newProducts.filter(
            (product) => product.menu === selectedType
          );
        }
      }
      // filteredProducts = newProducts;
      return {
        products: newProducts,
        length: newProducts.length,
      };
    }

    if (selectedBrand && selectedBrand !== "") {
      newProducts = newProducts.filter(
        (product) => product.brandName === selectedBrand
      );
    }

    if (selectedSubSubCategory && selectedSubSubCategory !== "") {
      newProducts = newProducts.filter(
        (product) => product.subSubCategoryName === selectedSubSubCategory
      );
    }

    // filteredProducts = newProducts;
    return {
      products: newProducts,
      length: newProducts.length,
    };
  };

  const responsive = {
    0: {
      items: 3,
    },
    767: {
      items: 5,
    },
    1366: {
      items: 8,
    },
  };

  useEffect(() => {
    setPage(0);
  }, [selectedType, selectedBrand, selectedSubSubCategory]);

  return (
    <>
      <Helmet>
        <title>
          {"Compaign"}
        </title>
        <meta name="description" content={""} />
        <meta name="keywords" content={""} />
      </Helmet>
      <Loader loading={loading} />

      <div className="eid_sale">
        <h1>
          <img src={SaleBanner} alt="img here" />
        </h1>
      </div>
      {/* <div className="group_services">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="salecard_column">
                <img src={SaleCard1} alt="img here" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="salecard_column">
                <img src={SaleCard2} alt="img here" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="salecard_column">
                <img src={SaleCard3} alt="img here" />
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
      <div className="group_filter">
        <div className="container-fluid">
          <div className="services_columns">
            <ReactOwlCarousel lazyLoad={true} responsive={responsive}>
              <div
                onClick={() => {
                  setSelectedType("allProducts");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(true);
                  setTitle("All Products");
                }}
              >
                <span>
                  <img src={SaleIcon1} alt="icon image png" />
                </span>
                <small>All Products</small>
              </div>
              <div
                onClick={() => {
                  setSelectedType("offProducts");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(false);
                  setTitle("Above 50% Off");
                }}
              >
                <span>
                  <img src={SaleIcon2} alt="icon image png" />
                </span>
                <small>off products</small>
              </div>
              <div
                onClick={() => {
                  setSelectedType("skincare");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(false);
                  setTitle("Skin Care");
                }}
              >
                <span>
                  <img src={SaleIcon3} alt="icon image png" />
                </span>
                <small>skin care</small>
              </div>
              <div
                onClick={() => {
                  setSelectedType("makeup");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(false);
                  setTitle("Make Up");
                }}
              >
                <span>
                  <img src={SaleIcon4} alt="icon image png" />
                </span>
                <small>Makeup</small>
              </div>
              <div
                onClick={() => {
                  setSelectedType("health");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(false);
                  setTitle("Health Care");
                }}
              >
                <span>
                  <img src={SaleIcon5} alt="icon image png" />
                </span>
                <small>health care</small>
              </div>
              <div
                onClick={() => {
                  setSelectedType("hair");
                  setSelectedBrand("");
                  setSelectedSubSubCategory("");
                  setShowOthers(false);
                  setTitle("Hair Care");
                }}
              >
                <span>
                  <img src={SaleIcon6} alt="icon image png" />
                </span>
                <small>hair care</small>
              </div>
            </ReactOwlCarousel>
          </div>
          <div className="dropdown-mobile">
            <div className="pull-left">
              <div className="brand_select">
                <h6>Brand:</h6>
                <div className="dropmenu_select">
                  <span className="fa fa-angle-down"></span>
                  <select
                    value={selectedBrand}
                    className="dropdown_styl1"
                    onChange={({ target: { value } }) => {
                      setSelectedBrand(value);
                      setSelectedType();
                      if (value !== "") {
                        setShowOthers(false);
                        setTitle(value);
                      } else {
                        if (selectedSubSubCategory !== "") {
                          setShowOthers(false);
                        } else {
                          setShowOthers(true);
                        }
                        setTitle("All Products");
                      }
                    }}
                  >
                    <option value="">Select</option>
                    {getBrands().map((brand) => (
                      <option value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="pull-right">
              <div className="brand_select">
                <h6>Category:</h6>
                <div className="dropmenu_select">
                  <span className="fa fa-angle-down"></span>
                  <select
                    value={selectedSubSubCategory}
                    className="dropdown_styl1"
                    onChange={({ target: { value } }) => {
                      setSelectedSubSubCategory(value);
                      setSelectedType();
                      if (value !== "" || selectedBrand !== "") {
                        setShowOthers(false);
                        if (selectedBrand === "") {
                          setTitle("All Products");
                        }
                      } else {
                        setShowOthers(true);
                      }
                    }}
                  >
                    <option value="">Select</option>
                    {getSubSubCategory().map((category) => (
                      <option value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showOthers && (
        <>
          <CampaignProductsGrid
            products={bestSellerProducts}
            title="Best Seller"
            infiniteScroll={false}
          />
          {/* <CampaignProductsGrid products={otherProducts} title="Only For You" infiniteScroll={false} /> */}
        </>
      )}

      <CampaignProductsGrid
        products={filter().products}
        title={title}
        infiniteScroll={true}
      />

      {/* { !isMobile &&
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={filter().length / 50}
          initialPage={0}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={(value) => {
						setPage(value.selected);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
					forcePage={page}
          breakClassName={"pagination_item"}
          breakLinkClassName={"pagination_link"}
          containerClassName={"pagination_conainter"}
          pageClassName={"pagination_item"}
          pageLinkClassName={"pagination_link"}
          previousClassName={"previous_page"}
          previousLinkClassName={"pagination_link"}
          nextClassName={"next_page"}
          nextLinkClassName={"pagination_link"}
          activeClassName={"active"}
        />
      } */}
    </>
  );
}
