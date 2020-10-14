import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PaymentMethod from "../../constants/paymentMethods";
import { POST_VERIFY_PHONE } from "../../constants/actionTypes";

export default function LeftSection({
  setFields: {
    setName,
    setEmail,
    setPhone,
    setAddress,
    setCity,
    setPaymentMethod,
  },
  setCityId,
  fields: { name, email, phone, address, city, paymentMethod, checkoutCities },
  fieldErrors,
  setFieldErrors,
  validations: {
    validateName,
    validateAddress,
    validateEmail,
    validatePhone,
    validateCity,
  },
  isModal,
  type,
  title,
}) {
  const {
    nameError,
    phoneError,
    emailError,
    addressError,
    cityError,
  } = fieldErrors;
  const inModal = isModal === undefined ? false : isModal;

  const handleCheckboxChange = (value) => {
    setPaymentMethod(value);
  };

  return (
    <div>
      <form>
        <div className="cart_form">
          <h6>{title}</h6>
          {/* {!inModal && (
            <span>
              Already have an account?
              <Link to="/"  className="clr1">
                Log in
              </Link>
            </span>
          )} */}
        </div>
        <div className="default_form">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="text_field">
                {nameError && (
                  <p style={{ color: "red" }}>
                    Name must be more than 3 characters and must only contain
                    alphabets
                  </p>
                )}
                <input
                  className={nameError ? "input-error" : ""}
                  type="text"
                  placeholder="Name"
                  value={name}
                  onBlur={({ target: { value } }) => validateName(value)}
                  onChange={({ target: { value } }) => {
                    validateName(value);
                    setName(value);
                    // if (validateName(value)) {
                    //   setName(value);
                    // } else {
                    //   if (value.length <= 3) {
                    //     setName(value);
                    //   }
                    // }
                  }}
                />
              </div>
            </div>
            {type !== "preorder" && (
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="text_field">
                  {addressError && (
                    <p style={{ color: "red" }}>Invalid Address</p>
                  )}
                  <input
                    type="text"
                    placeholder="address"
                    value={address}
                    className={addressError ? "input-error" : ""}
                    onBlur={({ target: { value } }) => validateAddress(value)}
                    onChange={({ target: { value } }) => {
                      setAddress(value);
                    }}
                  />
                </div>
              </div>
            )}
            {type !== "preorder" && (
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="selectric">
                  {cityError && (
                    <p style={{ color: "red" }}>You must select a city</p>
                  )}
                  <select
                    className={cityError ? "input-error" : ""}
                    onChange={(e) => {
                      setCity(e.target.value);
                      // setCityId(e.target.value);
                      validateCity(e.target.value);
                    }}
                    value={city}
                  >
                    <option value={0}>Select City</option>
                    {checkoutCities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="text_field">
                {emailError && <p style={{ color: "red" }}>Invalid Email</p>}
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  className={emailError ? "input-error" : ""}
                  onBlur={({ target: { value } }) => validateEmail(value)}
                  onChange={({ target: { value } }) => {
                    setEmail(value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="text_field">
                {phoneError && (
                  <p style={{ color: "red" }}>
                    Invalid Phone: must be 11 digits and must start with 03
                  </p>
                )}
                <input
                  type="tel"
                  placeholder="Phone No. (03017654321)"
                  value={phone}
                  className={phoneError ? "input-error" : ""}
                  onBlur={({ target: { value } }) => validatePhone(value)}
                  onChange={({ target: { value } }) => {
                    setPhone(value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="payment_module">
                {paymentMethod && (
                  <>
                    <h6>Payment Method</h6>
                    <ul className="checkbox_group">
                      <li>
                        <div className="checkbox">
                          <input
                            id="check1"
                            type="radio"
                            name="abc"
                            checked={true}
                            value={PaymentMethod.CASH_ON_DELIVERY}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="check1">
                            <span></span>Cash on delivery
                          </label>
                        </div>
                      </li>
                      {/* <li>
                        <div className="checkbox">
                          <input
                            id="check2"
                            type="radio"
                            name="abc"
                            value={PaymentMethod.DEBIT_CREDIT_CARD}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="check2">
                            <span></span>Credit/Dabit Card
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="checkbox">
                          <input
                            id="check3"
                            type="radio"
                            name="abc"
                            value={PaymentMethod.BANK_TRANSFER}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor="check3">
                            <span></span>Bank Transfer
                          </label>
                        </div>
                      </li> */}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
