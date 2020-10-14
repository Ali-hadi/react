import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HowToUse from "./HowToUse";
import Description from "./Description";
import Reviews from "./Reviews";
import Questions from "./Questions";
import AskQuestionModel from "./AskQuestionModel";
import WriteReviewModel from "./WriteReviewModel";
import {
  GET_PRODUCT_QUESTIONS,
  GET_PRODUCT_REVIEWS,
} from "../../constants/actionTypes";

const BottomSection = ({ selectedProduct, product, varSlug }) => {
  const [isAskQuestionOpen, setAskQuestionOpen] = useState(false);
  const [isWriteReviewOpen, setWriteReviewOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [questions, setQuestions] = useState([]);

  const { productReviews, productQuestions } = useSelector((state) => state);

  const dispatch = useDispatch();

  const emptyStates = () => {
    setAskQuestionOpen(false);
    setWriteReviewOpen(false);
    setReviews([]);
    setQuestions([]);
  };

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_QUESTIONS, slug: varSlug });
    dispatch({ type: GET_PRODUCT_REVIEWS, slug: varSlug });
    return emptyStates();
  }, []);

  useEffect(() => {
    setReviews(productReviews);
  }, [productReviews]);

  useEffect(() => {
    setQuestions(productQuestions);
  }, [productQuestions]);

  const getStars = () => {
    let stars = [];
    for (let i = 0; i < selectedProduct.rating; i++) {
      stars.push(
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="reponsive_padding">
        <div className="container-fluid custom-padding">
          <div className="rating-blog float-left mb20-r">
            <ul className="rating">{getStars().map((star) => star)}</ul>
            <span className="rate_result underline">{`${reviews.length} ${
              reviews.length === 1 ? "Review" : "Reviews"
            }`}</span>
          </div>
          
          <div className="float-right">
            <button
              className="border-btn"
              onClick={() => {
                setWriteReviewOpen(true);
              }}
            >
              Write A Review<span></span>
            </button>
            {/* <button
              className="border-btn"
              onClick={() => {
                setAskQuestionOpen(true);
              }}
            >
              Ask A Question<span></span>
            </button> */}
          </div>

          {/* <div className="customer-review">
            <h4 class="box-reviw"><span>4.{`${reviews.length}`}</span><span>Out of 5</span></h4>
            <div className="for-mobile">
              <h6>{`${reviews.length} ${ reviews.length === 1 ? "Review" : "customer Reviews"}`}</h6>
              
                <ul className="rating">{getStars().map((star) => star)}</ul>
                <button
                  className="btn-normal at_bg3"
                  onClick={() => {
                    setWriteReviewOpen(true);
                  }}
                >
                  Write A Review<span></span>
                </button>
            </div>
            <div className="rating_content">
              <div className="pull-left for-desktop">
                <h6>{`${reviews.length} ${ reviews.length === 1 ? "Review" : "customer Reviews"}`}</h6>
                
                  <ul className="rating">{getStars().map((star) => star)}</ul>
                  <button
                    className="btn-normal at_bg3"
                    onClick={() => {
                      setWriteReviewOpen(true);
                    }}
                  >
                    Write A Review<span></span>
                  </button>
              </div>
              <div className="pull-left width-custom">
                <ul className="rating_statics">
                  <li><span>5<i className="fa fa-star" aria-hidden="true"></i></span><div className="progressbar" ><div className="progress w80" ></div></div><span>({`${reviews.length}`})</span></li>
                  <li><span>4<i className="fa fa-star" aria-hidden="true"></i></span><div className="progressbar" ><div className="progress" ></div></div><span>(0)</span></li>
                  <li><span>3<i className="fa fa-star" aria-hidden="true"></i></span><div className="progressbar" ><div className="progress" ></div></div><span>(0)</span></li>
                  <li><span>2<i className="fa fa-star" aria-hidden="true"></i></span><div className="progressbar" ><div className="progress " ></div></div><span>(0)</span></li>
                  <li><span>1<i className="fa fa-star" aria-hidden="true"></i></span><div className="progressbar" ><div className="progress" ></div></div><span>(0)</span></li>
                </ul>
              </div>
            </div>
          </div> */}

          <Tabs>
            <TabList className="tab_btn">
              <Tab>
                <span>Description</span>
              </Tab>
              <Tab>
                <span>How To Use</span>
              </Tab>
              <Tab>
                <span>Reviews</span>
              </Tab>
              {/* <Tab>
                <span>Questions</span>
              </Tab> */}
            </TabList>
            <TabPanel>
              <Description selectedProduct={product} />
            </TabPanel>
            <TabPanel>
              <HowToUse selectedProduct={product} />
            </TabPanel>
            <TabPanel>
              <Reviews reviews={reviews} />
            </TabPanel>
            {/* <TabPanel>
              <Questions questions={questions} />
            </TabPanel> */}
          </Tabs>
        </div>
      </div>

      {/* <AskQuestionModel
        slug={varSlug}
        isOpen={isAskQuestionOpen}
        setIsOpen={setAskQuestionOpen}
      /> */}
      <WriteReviewModel
        slug={varSlug}
        isOpen={isWriteReviewOpen}
        setIsOpen={setWriteReviewOpen}
      />
    </>
  );
};

export default BottomSection;
