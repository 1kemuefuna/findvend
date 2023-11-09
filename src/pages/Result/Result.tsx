import React from "react";
import { Link } from "react-router-dom";
import "./result.scss";
import { Button } from "../../components/Button";
import MapComponent from "../../components/Map";
import { SERVICES } from "../Home/data";
import WALK from "../../assets/walk.png";
import CAR from "../../assets/car.png";
import MAP from "../../assets/map.png";

const Result = () => {
  return (
    <div className="app-result">
      <h2 className="app-result__title">23 Home Services Found.</h2>
      {SERVICES.filter((x) => x.id <= 5).map((x) => (
        <div className="app-result__listbox">
          <div className="app-result__listbox__map">
            <MapComponent
              id={`map-${x.id}`}
              longitude={x.longitude}
              latitude={x.latitude}
            />
          </div>
          <div className="app-result__listbox__details">
            <h2 className="app-result__listbox__details__title">{x.title}</h2>
            <p className="app-result__listbox__details__subtitle">
              {x.description}
            </p>
            <p className="app-result__listbox__details__category">
              {x.category}
            </p>
            <div className="app-result__listbox__details__distance">
              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={MAP} alt="map" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  23 Kilometers
                </p>
              </div>

              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={CAR} alt="car" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  23 Minutes
                </p>
              </div>

              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={WALK} alt="walk" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  40 Minutes
                </p>
              </div>
            </div>
            <div className="app-result__listbox__details__actions">
              <Button className="app-result__listbox__details__actions__message">
                Message
              </Button>
              <Button className="app-result__listbox__details__actions__call">
                Call
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
