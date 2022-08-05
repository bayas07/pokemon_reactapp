import React, { Fragment, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../loading_spinner/Spinner";
import Card from "./Card";
import "./CardList.css";

const CardList = () => {
  const { loading, error, cardData, nextPage } = useSelector(
    (state) => state.cardData
  );
  const dispatch = useDispatch();
  const observer = useRef();

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch({ type: "cardData/fetchMoreCardData", payload: nextPage });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  let content;
  if (loading) content = <Spinner />;
  if (error) content = <h2 className="center">Something Went Wrong</h2>;
  
  return (
    <Fragment>
      <div className="card-list">
        {cardData.length > 0 && (
          <Card lastRef={lastItemRef} cardData={cardData} />
        )}
      </div>
      {content}
    </Fragment>
  );
};

export default CardList;
