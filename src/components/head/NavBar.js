import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MobileNav from "./MobileNav";
import NavBarCategoryMenu from "./NavBarCategoryMenu";
import { Link } from "react-router-dom";
import CardDropDown from "./CartDropDown";
import NavBarBrandMenu from "./NavBarBrandMenu";
import SearchModal from "./SearchModal";
import { isUserLoggedIn } from "../../util";
import ProfileIcon from "./ProfileIcon";
const Eidbtn = "https://storage.googleapis.com/aodour_v1/compaign/eidbtn.png";
const TrackIcon =
  "https://storage.googleapis.com/aodour_v1/website/track_icon.png";

export default function NavBar({
  setSearchModel,
  categories,
  brands: { new_brands, popular_brands, all_brands },
}) {
  const history = useHistory();

  const gotoCheckout = () => {
    if (cartList.length > 0) {
      history.push("/checkout");
    }
  };

  const { cartList, wishlist } = useSelector((state) => state);
  console.log("cartList", cartList);
  const [open, setOpen] = useState(false);
  // const [wishlist, setWishlist] = useState([]);

  // const getWishlist = () => {
  //   let list = window.localStorage.getItem("wishlist");
  //   if (list) {
  //     setWishlist(JSON.parse(list));
  //   } else {
  //     setWishlist([]);
  //   }
  // };

  return (
    <div>
      <div className="sec_row">
        <div className="container-fluid">
          {/*
					================================
						NAVIGATION MENU STARTS
					================================
			    */}
          <div className="responsive-btn">
            <label className="sidebaricon" onClick={() => setOpen(true)}>
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
            <MobileNav
              isOpen={open}
              onClose={setOpen}
              categories={categories}
              new_brands={new_brands}
              popular_brands={popular_brands}
              all_brands={all_brands}
            />
          </div>
          <div className="logo res">
            <Link to="/track-order">
              <img src={TrackIcon} alt="img here" />
            </Link>
          </div>
          
          <div className="logo center">
            <h2>
              <Link to="/">
                <img src={logo} alt="Aodour" />
              </Link>
            </h2>
          </div>


          <div className="middle_menu">

            <div className="navigation-menu ">
              <SearchModal />
              <nav>
                <ul>
                  <li>
                    <Link to="/"> Home</Link>
                  </li>
                  <li>
                    <NavBarBrandMenu
                      new_brands={new_brands}
                      popular_brands={popular_brands}
                      all_brands={all_brands}
                    />
                  </li>
                  <li>
                    <NavBarCategoryMenu
                      categories={categories.categories}
                      subCategories={categories.subcategories}
                      subSubCategories={categories.subsubcategories}
                    />
                  </li>
                  <li>
                    <Link to="/Shop/new_arrival">New Arrivals</Link>
                  </li>
                  {/* <li>
                  <Link to="/mega-sale">Flash sale</Link>
                </li> */}
                <li>
                  <Link to="/brand/loreal-professional/home">Professional haircare</Link>
                </li>
                 <li>
                  <Link to="/mega-sale">Flash Sale</Link>
                </li>
                {/* <li className="padding-middle">
                  <Link to="/commingsoon" >
                    Beauty blog
                  </Link>
                </li>
                <li>
                  <Link to="/commingsoon" >
                    Offers
                  </Link>
                </li> */}
                  {/* <li>
                  <Link to='/commingsoon' >E Clinic</Link>
                </li> */}
                </ul>
              </nav>
            </div>
          </div>

          <div className="right-btns">
            {/* <ul className="meta fl mb15">
                <li>
                  <Link to="/commingsoon" className="btn-simple clr1" >
                    <i className="icon-Group-162"></i>E-Clinic
                    <b>E Clinic</b>
                  </Link>
                </li>
              </ul> */}
            {/*
						====================================
							BUTTONS =>
							SEARCH & USER & CART
						====================================
				  		*/}
            <ul className="shop_cart">
              <li className="res-none">
                  <span className="carticon" onClick={gotoCheckout}>
                    <i className="icon-shopping-cart"></i>
                    <sup className="qty-show">{cartList.length}</sup>
                  </span>
                  <CardDropDown cartList={cartList} />
              </li>
              <li className="">
                <Link to="/track-order" className="tracking-btn"><i className="icon-tracking"></i><small>Track order</small></Link>
              </li>
              <li className="">
                <Link to="/track-complaint" className="tk-btn"><i className="icon-clock1"></i><small>Track Complaint</small></Link>
              </li>
              <ProfileIcon />
            </ul>
          </div>
          {/*
					====================================
						TOP RIGHT SIDE CONTENT ENDS
					====================================
			  		*/}

        </div>
      </div>
      {/*
			=========================================
				SECOND ROW ENDS
			=========================================
	  		*/}
    </div>

  );
}
