import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../../styles/gift.css";
const LandingPopupImage = "https://storage.googleapis.com/aodour_v1/campaign/Popup.jpg"
const LandingPageModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const visited = window.localStorage.getItem("isVisited");
    const routes = [
      "/mega-sale",
      "/about",
      "/term",
      "/contact",
      "/delivery",
      "/E_Clinic",
      "/policy",
      "/Faqs",
      "/brand",
      "/checkout",
      "/thankyou",
      "/login",
      "/signup",
      "/store-locator",
      "/track-order",
      "/profile",
      "/profile/myorders",
      "/profile/mywishlist",
      "/profile/mysubscriptions",
      "/profile/myaddress",
      "/404",
    ];
    const url = window.location.pathname;
    const found = routes.find((element) => {
      return element.toLocaleLowerCase() === url.toLocaleLowerCase();
    });
    if (!visited && !found) {
      window.localStorage.setItem("isVisited", true);
      setTimeout(() => {
        setOpen(true);
      }, 5000);
    }
  }, []);

  return (
    <>
      <Modal
        closeTimeoutMS={500}
        isOpen={open}
        className={"campaign_model"}
        onRequestClose={() => setOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <div className="landing_popup">
          <button onClick={() => setOpen(false)}>
            <span className="cross-btn icon-close" data-dismiss="modal"></span>
          </button>
          <a href="/mega-sale" target="_blank">
            <img src={LandingPopupImage} alt="landingImage" />
          </a>
        </div>
      </Modal>
    </>
  );
};

export default LandingPageModal;
