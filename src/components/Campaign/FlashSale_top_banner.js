import React from "react";
import { Link } from "react-router-dom";
const Banner_Image = "https://storage.googleapis.com/aodour_v1/header/banner-web.jpg";
const Banner_Mobile = "https://storage.googleapis.com/aodour_v1/header/banner-mobile.jpg";
const CompaignFlashsale = () => {
  return (
    <>
    <div className="addontop for_mobile_desktop">
      <Link to="/mega-sale"><img src={Banner_Image} alt="flash sale banenr"/></Link>
    </div>

    <div className="addontop for_mobile_top">
      <Link to="/mega-sale"><img src={Banner_Mobile} alt="flash sale banenr"/></Link>
    </div>
    </>
  );
};

export default CompaignFlashsale;
