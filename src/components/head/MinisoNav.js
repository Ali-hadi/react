import React, { useEffect, useState, useSelector } from "react";
import { Link, useHistory } from "react-router-dom";
import MobileNav from "./MobileNav";
import ProfileIcon from "./ProfileIcon";
import CardDropDown from "./CartDropDown";
const MinisoLogo =
  "https://storage.googleapis.com/aodour_v1/website/miniso-logo.png";
const TrackIcon =
  "https://storage.googleapis.com/aodour_v1/website/track_icon.png";

export default function MinisoNav({ categories, category, setSearchModel }) {
  const history = useHistory();
  const [subitems, setsubItems] = useState(null);
  const [open, setOpen] = useState(false);
  // const { cartList, wishlist } = useSelector((state) => state);
  // console.log("cartList", cartList);

  // const gotoCheckout = () => {
  //   if (cartList.length > 0) {
  //     history.push("/checkout");
  //   }
  // };

  console.log(subitems, "items");

  return (
    <header className="miniso-header">
      <div className="container-fluid">
        <div className="responsive-btn">
          <label className="sidebaricon" onClick={() => setOpen(true)}>
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </label>
          <MobileNav isOpen={open} onClose={setOpen} categories={category} />
        </div>
        <div className="logo center">
          <h1>
            <a href="">
              <img src={MinisoLogo} alt="miniso logo" />
            </a>
          </h1>
        </div>

        <div className="navigation-menu">
          <nav className="miniso-nav">
            <ul className="miniso-menu">
              <li>
                <Link to="/">Home</Link>
              </li>

              {categories &&
                categories.map((category, index) => {
                  return (
                    <li
                      key={index}
                      onMouseEnter={() =>
                        setsubItems(
                          category && category.category && category.category[0]
                        )
                      }
                    >
                      <a href="#">{category.main_category}</a>
                      <div
                        onMouseLeave={() => setsubItems(null)}
                        className="mega-menu"
                      >
                        <div className="mega-content">
                          <div className="list-column side-list">
                            {category &&
                              category.category &&
                              category.category.map((items, index) => {
                                return (
                                  <div onMouseOver={() => setsubItems(items)}>
                                    <ul className="list" >
                                      <li key={index}>
                                        <Link to={`/miniso/${items.slug}`}>
                                          <h6>{items.name}</h6>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                );
                              })}
                          </div>
                          <div className="tab-mega">
                            <div className="row">
                              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="list-column">
                                  <div className="row">
                                    {/* {console.log(categories, "cate")} */}
                                    {categories.length &&
                                      categories.map((sub, index) => {
                                        console.log(
                                          "sub sub sub",
                                          sub.category
                                        );
                                        return (
                                          <>
                                            {sub &&
                                              sub.category &&
                                              Array.isArray(sub.category) &&
                                              sub.category.map(
                                                (aItem, index) => {
                                                  return (
                                                    <div
                                                      className={`col-md-4 col-xs-4 col-xs-4 ${subitems &&
                                                        subitems.id ===
                                                        aItem.id
                                                        ? "isactive"
                                                        : "list_item"
                                                        }`}
                                                    >
                                                      <div className="list-column">

                                                        <Link key={index}
                                                          to={`/miniso/${aItem.slug}`}
                                                        >
                                                          <h6>
                                                            {aItem.name}
                                                          </h6>
                                                        </Link>

                                                        <ul className="list">
                                                          {aItem &&
                                                            aItem.subcategory.map(
                                                              (subchild) => {
                                                                return (
                                                                  <>

                                                                    <li key={index}>
                                                                      <Link
                                                                        to={`/miniso/${subchild.slug}`}
                                                                      >
                                                                        {
                                                                          subchild.name
                                                                        }
                                                                      </Link>
                                                                    </li>

                                                                  </>
                                                                );
                                                              }
                                                            )}
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                          </>
                                        );
                                      })}


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              <li></li>
            </ul>
          </nav>
        </div>

        <div className="pull-right">
          <div className="right-btns">
            <ul className="shop_cart meta">
              <li>
                <div className="logo res">
                  <Link to="/track-order">
                    <img src={TrackIcon} alt="img here" />
                  </Link>
                </div>
              </li>
              <ProfileIcon />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
