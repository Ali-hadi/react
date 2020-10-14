import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/head/MinisoNav";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GET_MENU, GET_USER_PROFILE } from "../constants/actionTypes";
import Loader from "../components/Loader/compnentLoader";
import { isUserLoggedIn, getUserToken } from "../util";

function Layout(props) {
  const dispatch = useDispatch();
  const { minisoMenu } = useSelector(({ minisoMenu }) => minisoMenu);
  console.log("minisoMenu", minisoMenu);
  const categories =
    minisoMenu && minisoMenu.result && minisoMenu.result.category;
  const data = minisoMenu && minisoMenu.result && minisoMenu.result.data;

  const {
    menu: { brands, category },
    error,
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: GET_MENU });
    if (isUserLoggedIn()) {
      dispatch({ type: GET_USER_PROFILE, userId: getUserToken() });
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const children = props.children || null;
  return (
    <>
      {/* <Loader /> */}
      <>
        {category.categories.length > 0 && (
          <Header brands={brands} categories={data} category={categories} />
        )}
        <div style={{ minHeight: "100vh" }}>
          <Suspense fallback={<Loader loading={true} />}>{children}</Suspense>
        </div>
        <Footer />
      </>
    </>
  );
}

export default Layout;
