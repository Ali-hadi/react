import React from "react";
import { Link } from "react-router-dom";
export default function MainLinkButton() {
  return (
    <>
      <div className="container-fluid">
        {/*LINK BUTTONS */}
        <ul className="listing-links row">
          <li>
            <Link to="/allbestsellers">
              <i className="icon-right" aria-hidden="true"></i>Best Sellers
            </Link>
          </li>
          {/*BUTTON */}
          <li>
            <Link to="/Shop/new_arrival">
              <i className="icon-right" aria-hidden="true"></i>New Arrival
            </Link>
          </li>
          {/*BUTTON */}
          <li>
            <Link to="/mega-sale">
              <i className="icon-right" aria-hidden="true"></i>Flash sale
            </Link>
          </li>
          {/* <li>
            <Link to="/mega-sale">
              <i className="icon-right" aria-hidden="true"></i>Summer End Sale
            </Link>
          </li> */}
          {/*BUTTON */}
          <li>
            <Link to="/under999">
              <i className="icon-right" aria-hidden="true"></i>Under 999
            </Link>
          </li>
          {/*BUTTON */}
        </ul>
      </div>
    </>
  );
}
