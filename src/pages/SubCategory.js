import React, { useEffect, useState } from "react";
import "../styles/SubCategory.css";
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "../components/ProductListing";
import LeftSubListing from "../components/SubCategory&Brand/CategoryListing";
import { getBreadCrumbs } from "../util";

import {
  GET_SUBCATEGORY_PRODUCTS,
  SUBCATEGORY_PAGE_EMPTY,
} from "../constants/actionTypes";

import { Link } from "react-router-dom";
import EidCampaignBottomBanner from "../components/Campaign/EidCampaignBottomBanner";
import Loader from "../components/Loader/compnentLoader";

const SelectedCategories = (
  categories,
  subcategories,
  subsubcategories,
  subSlug,
  subSubSlug
) => {
  const DiscountBanner =
    "https://storage.googleapis.com/aodour_v1/campaign/discount_banner.jpg";

  const subcategory = subcategories.find(({ slug }) => slug === subSlug);
  const subsubcategory = subsubcategories.find(
    ({ slug }) => slug === subSubSlug
  );
  let category;
  if (subcategory)
    category = categories.find(({ id }) => id === subcategory.category_id);
  return { subcategory, category, subsubcategory };
};

export default function Category() {
  const DiscountBanner =
    "https://storage.googleapis.com/aodour_v1/campaign/discount_banner.jpg";

  const { catSlug, subSubSlug, subSlug } = useParams();
  const [SubList, setSubList] = useState([]);
  const [mobileSublist, setMobileSubList] = useState([]);
  const [subCatSlug, setSubCatSlug] = useState();
  const [selectedCat, setSelectedCat] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const {
    subCategoryPageProducts,
    menu: {
      category: { categories, subcategories, subsubcategories },
    },
  } = useSelector((state) => state);

  useEffect(() => {
    if (subCatSlug && subCatSlug !== "") {
      setLoading(true);
      dispatch({
        type: GET_SUBCATEGORY_PRODUCTS,
        payload: subCatSlug,
        callback: () => {
          setLoading(false);
        },
      });
    }
    return () => {
      dispatch({ type: SUBCATEGORY_PAGE_EMPTY });
    };
  }, [subCatSlug]);

  useEffect(() => {
    if (subSlug) {
      setSubCatSlug(subSlug);
    }
  }, []);

  useEffect(() => {
    if (
      categories.length > 0 &&
      subcategories.length > 0 &&
      subsubcategories.length > 0
    ) {
      if (catSlug) {
        for (const subSubCat of subsubcategories) {
          if (subSubCat.slug === subSubSlug) {
            setSelectedCat(subSubCat);
            for (const subCat of subcategories) {
              if (subCat.id === subSubCat.category_id) {
                setSubCatSlug(subCat.slug);
                return;
              }
            }
          }
        }
        dispatch({ type: SUBCATEGORY_PAGE_EMPTY });
        history.push("/404");
        return;
      } else {
        for (const subCategory of subcategories) {
          if (subCategory.slug === subSlug) {
            setSelectedCat(subCategory);
          }
        }
      }
    }
  }, [categories, subcategories, subsubcategories]);

  useEffect(() => {
    let CategoryList = [];
    const { products, subcategory } = subCategoryPageProducts;

    if (subcategory.length < 1) {
      dispatch({ type: SUBCATEGORY_PAGE_EMPTY });
      history.push("/404");
      return;
    }

    for (const {
      subSubCategoryID,
      subSubCategoryName,
      subSubCategorySlug,
    } of products) {
      let indexof = CategoryList.findIndex(
        (cate) => cate.id === subSubCategoryID
      );
      if (CategoryList.length < 1 || indexof === -1) {
        CategoryList.push({
          id: subSubCategoryID,
          name: subSubCategoryName,
          slug: subSubCategorySlug,
          count: 1,
          url: `/shop/${subSlug ? subSlug : catSlug}/${subSubCategorySlug}`,
          className: `${subSubCategorySlug === subSubSlug ? "selected" : ""}`,
        });
      } else {
        CategoryList[indexof].count++;
      }
    }

    const subcategoriesList = subcategories.filter((subcate) => {
      return subcate.category_id === subcategory[0].categoryID;
    });
    const mobilelist = subcategoriesList.map((item) => {
      return {
        top: item.slug === subcategory[0].slug,
        id: item.id,
        name: item.name,
        slug: item.slug,
        url: `/subcategory/${item.slug}`,
        className: `sub_categories ${
          item.slug === subcategory[0].slug ? "selected" : ""
        }`,
        childrens:
          item.slug === subcategory[0].slug
            ? CategoryList
            : otherCategories(item.id),
      };
    });
    setSubList(CategoryList.sort((a, b) => b.count - a.count));
    setMobileSubList(mobilelist.sort((a, b) => b.top - a.top));
  }, [subCategoryPageProducts]);

  const otherCategories = (id) => {
    const list = [];

    subsubcategories.map((item) => {
      if (item.category_id === id)
        list.push({
          id: item.id,
          name: item.name,
          slug: item.slug,
          count: 1,
          url: `/shop/${subSlug ? subSlug : catSlug}/${item.slug}`,
          className: `${item.slug === subSubSlug ? "selected" : ""}`,
        });
    });
    return list;
  };

  const getTitle = () => {
    const selected = subSubSlug
      ? subsubcategories.find(({ slug }) => slug === subSubSlug)
      : subcategories.find(({ slug }) => slug === subCatSlug);
    if (selected) return selected.name;
    return "";
  };

  const getSelectedSubcategory = () => {
    const selected = subcategories.find(
      (subCategory) => subCategory.slug === subCatSlug
    );
    return selected ? selected.name || "" : "";
  };

  const filter = () => {
    let products = subCategoryPageProducts.products;
    if (subSubSlug) {
      products = products.filter(
        (product) => product.subSubCategorySlug === subSubSlug
      );
    }
    return {
      products,
      banner: { title: selectedCat.name, image: selectedCat.image },
      description: selectedCat.story_text,
      cover: {
        cover: selectedCat.story_cover,
        color: selectedCat.story_text_color,
      },
    };
  };
  const { category, subsubcategory, subcategory } = SelectedCategories(
    categories,
    subcategories,
    subsubcategories,
    subCatSlug,
    subSubSlug
  );
  if (subCategoryPageProducts.subcategory.length > 0) {
    return (
      <>
        <Helmet>
          <title>
            {selectedCat.meta_title !== ""
              ? `${selectedCat.meta_title}`
              : "Online Cosmetics Shopping in Pakistan"}
          </title>
          <meta name="description" content={selectedCat.meta_description} />
          <meta name="keywords" content={selectedCat.meta_keywords} />
        </Helmet>
        <Loader loading={loading} />

        <div className="inner-banner">
          <div className="container-fluid">
            {category && subcategory && (
              <ul className="breadcrumbs">
                {getBreadCrumbs(
                  category,
                  subcategory,
                  subsubcategory,
                  "SubCategory"
                ).map(({ name, url }) => {
                  if (url && url !== "") {
                    return (
                      <li>
                        <Link to={url}>{name}</Link>
                      </li>
                    );
                  } else {
                    return <li>{name}</li>;
                  }
                })}
              </ul>
            )}
          </div>
        </div>
        <ProductList
          productData={filter()}
          MobileListing={{
            title: subsubcategory
              ? subsubcategory.name
              : subcategory
              ? subcategory.name
              : category
              ? category.name
              : "",
            sublist: mobileSublist,
            modalTitle: {
              text: category?.name,
              url: `/shop/${category?.slug}`,
            },
          }}
          RightSectionTitle={getTitle()}
        >
          <LeftSubListing
            Title={subcategory ? subcategory.name : ""}
            List={SubList}
          />
        </ProductList>

        {/* <EidCampaignBottomBanner /> */}
      </>
    );
  } else {
    return <></>;
  }
}
