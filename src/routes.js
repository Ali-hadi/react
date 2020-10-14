import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import AuthorizationLayout from "./layout/AuthorizationLayout";
import Minisolayout from "./layout/Minisolayout";
// import { isUserAuthenticated, getLoggedInUser } from './helpers/authUtils';

const Empty = React.lazy(() => import("./layout/Empty"));
const Layout = React.lazy(() => import("./layout/Aodourlayout"));

const Home = React.lazy(() => import("./pages/Home"));
const SubCategory = React.lazy(() => import("./pages/SubCategory"));
const Category = React.lazy(() => import("./pages/Category"));
const About = React.lazy(() => import("./pages/About"));
const Term = React.lazy(() => import("./pages/TermAndCondition"));
const ContactUs = React.lazy(() => import("./pages/ContactUs.js"));
const Delivery = React.lazy(() => import("./pages/Delivery"));
const E_Clinic = React.lazy(() => import("./pages/E_Clinic"));
const Policy = React.lazy(() => import("./pages/Policy"));
const Faqs = React.lazy(() => import("./pages/FAQs"));
const Test = React.lazy(() => import("./components/test"));
const BrandListing = React.lazy(() => import("./pages/BrandListing"));
const Brand = React.lazy(() => import("./pages/Brand"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const CheckOut = React.lazy(() => import("./pages/CheckOut"));
// const CheckOut = React.lazy(() => import("./pages/CampaignCheckOut"));
const ThankYou = React.lazy(() => import("./pages/ThankYou"));
const NewArrival = React.lazy(() => import("./pages/NewArrival"));
const BestSellers = React.lazy(() => import("./pages/BestSellers"));
const UnderThousand = React.lazy(() => import("./pages/UnderThousand"));
const CommingSoon = React.lazy(() => import("./pages/CommingSoon"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const UserProfile = React.lazy(() => import("./pages/UserProfile"));
const Profile = React.lazy(() => import("./pages/MyProfile"));
const MyOrders = React.lazy(() => import("./pages/MyOrders"));
const MyWishList = React.lazy(() => import("./pages/MyWishlist"));
const MySubscriptions = React.lazy(() => import("./pages/MySubscriptions"));
const MyAddress = React.lazy(() => import("./pages/MyAddresses"));
const ComplaintThankYou = React.lazy(() => import("./pages/ComplaintThankYou"));
const Search = React.lazy(() => import("./pages/SearchResultList"));
const ShippingAndBilling = React.lazy(() =>
  import("./pages/ShippingAndBilling")
);
const EditProfile = React.lazy(() => import("./pages/EditProfile"));
const Loreal = React.lazy(() => import("./pages/Loreal"));
const Kerastase = React.lazy(() => import("./pages/Kerastase"));
const LorealHomepage = React.lazy(() => import("./pages/LorealHomepage"));
// const Miniso = React.lazy(() => import("./pages/Miniso"));
// const Testing = React.lazy(() => import("./pages/Testing"));
const StoreLocator = React.lazy(() => import("./pages/StoreLocator"));
const NotFound = React.lazy(() => import("./pages/404"));
const TrackOrder = React.lazy(() => import("./pages/TrackOrder"));
const TrackComplaint = React.lazy(() => import("./pages/TrackComplaint"));
const SaleListing = React.lazy(() => import("./pages/SaleListing"));
const ComplaintForm = React.lazy(() => import("./pages/ComplaintForm"));
// const Campaign = React.lazy(() => import("./pages/campaign"));
// const PageUrl = React.lazy(() => import("./pages/Steampod_Url"));
const Routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    route: Route,
    layout: Layout,
    exact: true,
  },
  // {
  //   path: "/Test",
  //   name: "Test",
  //   component: Test,
  //   route: Route,
  //   layout: Empty,
  // },
  {
    path: "/shop/searchresult/:keyword",
    name: "search",
    component: Search,
    route: Route,
    layout: Layout,
  },
  {
    path: "/brand/loreal-professional/home",
    name: "LorealHomepage",
    component: LorealHomepage,
    route: Route,
    layout: Layout,
  },
  {
    path: "/brand/:brandSlug/:varSlug",
    name: "detail",
    component: ProductDetail,
    route: Route,
    layout: Layout,
  },
  {
    path: "/subcategory/:subSlug",
    name: "subcategory",
    component: SubCategory,
    exact: true,
    route: Route,
    layout: Layout,
  },
  {
    path: "/Shop/new_arrival",
    name: "NewArrival",
    component: NewArrival,
    route: Route,
    layout: Layout,
    exact: true,
  },
  {
    path: "/shop/:slug",
    name: "category",
    component: Category,
    route: Route,
    layout: Layout,
    exact: true,
  },
  {
    path: "/about",
    name: "about",
    component: About,
    route: Route,
    layout: Layout,
  },
  {
    path: "/term",
    name: "term",
    component: Term,
    route: Route,
    layout: Layout,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
    route: Route,
    layout: Layout,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: Delivery,
    route: Route,
    layout: Layout,
  },
  {
    path: "/E_Clinic",
    name: "E-Clinic",
    component: E_Clinic,
    route: Route,
    layout: Layout,
  },
  {
    path: "/policy",
    name: "policy",
    component: Policy,
    route: Route,
    layout: Layout,
  },
  {
    path: "/FAQs",
    name: "Faqs",
    component: Faqs,
    route: Route,
    layout: Layout,
  },
  {
    path: "/brand",
    exact: true,
    name: "Allbrand",
    component: BrandListing,
    route: Route,
    layout: Layout,
  },
  {
    path: "/loreal-professional",
    name: "loreal",
    component: Loreal,
    route: Route,
    layout: Layout,
  },
  {
    path: "/kerastase",
    name: "kerastase",
    component: Kerastase,
    route: Route,
    layout: Layout,
  },
  
  {
    path: "/brand/:slug",
    name: "brand",
    component: Brand,
    exact: true,
    route: Route,
    layout: Layout,
  },
  {
    path: "/shop/:catSlug/:subSubSlug",
    name: "brand",
    component: SubCategory,
    route: Route,
    layout: Layout,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOut,
    route: Route,
    layout: Layout,
  },
  // {
  //   path: "/PageUrl",
  //   name: "PageUrl",
  //   component: PageUrl,
  //   exact: true,
  //   route: Route,
  //   layout: Layout,
  // },
  {
    path: "/thankyou",
    name: "thankyou",
    component: ThankYou,
    route: Route,
    layout: Layout,
  },
  {
    path: "/complaint/thankyou/:id",
    name: "complaint-thankyou",
    component: ComplaintThankYou,
    route: Route,
    layout: Layout,
  },
  {
    path: "/allbestsellers",
    name: "BestSellers",
    component: BestSellers,
    route: Route,
    layout: Layout,
  },
  {
    path: "/under999",
    name: "UnderThousand",
    component: UnderThousand,
    route: Route,
    layout: Layout,
  },
  /*{
    path: "/loreal-sale",
    name: "compaign",
    component: Compaign,
    route: Route,
    layout: Layout,
  },*/
  // {
  //   path: "/mega-sale",
  //   name: "Campaign",
  //   component: Campaign,
  //   route: Route,
  //   layout: Layout,
  // },
  {
    path: "/commingsoon",
    name: "commingsoon",
    component: CommingSoon,
    route: Route,
    layout: Empty,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    route: Route,
    layout: Empty,
    exact: true,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    route: Route,
    layout: Empty,
  },
  // {
  //   path: "/user/profile",
  //   name: "UserProfile",
  //   component: UserProfile,
  //   route: Route,
  //   layout: Layout,
  //   exact: true,
  // },
  // {
  //   path: "/user/profile/edit",
  //   name: "EditProfile",
  //   component: EditProfile,
  //   route: Route,
  //   layout: Layout,
  // },
  // {
  //   path: "/user/shippinginfo",
  //   name: "ShippingAndBilling",
  //   component: ShippingAndBilling,
  //   route: Route,
  //   layout: Layout,
  // },
  {
    path: "/store-locator",
    name: "StoreLocator",
    component: StoreLocator,
    route: Route,
    layout: Layout,
  },
  {
    path: "/track-order",
    name: "TrackOrder",
    component: TrackOrder,
    route: Route,
    layout: Layout,
  },
  {
    path: "/track-complaint",
    name: "TrackComplaint",
    component: TrackComplaint,
    route: Route,
    layout: Layout,
  },
  {
    path: "/mega-sale",
    name: "SaleListing",
    component: SaleListing,
    route: Route,
    layout: Layout,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    route: Route,
    layout: AuthorizationLayout,
    exact: true,
  },
  {
    path: "/profile/myorders",
    name: "myorders",
    component: MyOrders,
    route: Route,
    layout: AuthorizationLayout,
    exact: true,
  },
  {
    path: "/profile/mywishlist",
    name: "mywishlist",
    component: MyWishList,
    route: Route,
    layout: AuthorizationLayout,
    exact: true,
  },
  {
    path: "/profile/mysubscriptions",
    name: "mysubscriptions",
    component: MySubscriptions,
    route: Route,
    layout: AuthorizationLayout,
    exact: true,
  },
  {
    path: "/profile/myaddress",
    name: "myaddress",
    component: MyAddress,
    route: Route,
    layout: AuthorizationLayout,
    exact: true,
  },
  {
    path: "/order/:id/complaint",
    name: "ComplaintForm",
    component: ComplaintForm,
    route: Route,
    layout: Layout,
  },

  {
    path: "/miniso/:slug",
    name: "Miniso",
    component: Category,
    route: Route,
    layout: Empty,
  },
  {
    path: "/subcategoryproducts/:slug",
    name: "subcategory",
    component: SubCategory,
    exact: true,
    route: Route,
    layout: Layout,
  },
  // {
  //   path: "/miniso",
  //   name: "Miniso",
  //   component: Miniso,
  //   route: Route,
  //   layout: Minisolayout,
  // },
  // {
  //   path: "/testing",
  //   name: "Testing",
  //   component: Testing,
  //   route: Route,
  //   layout: Empty,
  // },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    route: Route,
    layout: Layout,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    route: Route,
    layout: Empty,
  },
];

export default Routes;
