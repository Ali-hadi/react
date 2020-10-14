import React, {
  Fragment,
  Component,
  Suspense,
  useEffect,
  useState,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import GA from "./util/GoogleAnalytics";
import Routes from "./routes";
import { getCartData } from "./util";
import Loading from "./components/Loader/loader";
import { useDispatch } from "react-redux";
import { RESTORE_CART } from "./constants/actionTypes";
// import LandingModal from "./components/Campaign/LandingPageModal";
import { isMobile } from "react-device-detect";
// function generateSitemap() {
//   return new Sitemap(<Route path="/home" />)
//     .build("https://aodour.pk")
//     .save("../../public/sitemap.xml");
// }

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: RESTORE_CART,
      payload: getCartData(),
    });
  }, []);

  return (
    <div>
      {/* <div>{!isMobile && <LandingModal />}</div> */}
      <div>
        <Router>
          {GA.init({ standardImplementation: true }) && <GA.RouteTracker />}
          <Switch>
            {Routes.map((route, index) => {
              return (
                <route.route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={(props) => {
                    const Layout = route.layout;
                    const key =
                      `${props.match.params.slug}${props.match.params.subSlug}${props.match.params.subSubSlug}${props.match.params.varSlug}${props.match.params.keyword}` ||
                      route.name;
                    return (
                      <Suspense fallback={Loading()}>
                        <Layout key={key} {...props}>
                          <route.component {...props} />
                        </Layout>
                      </Suspense>
                    );
                  }}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
