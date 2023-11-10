import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./result.scss";
import { Button } from "../../components/Button";
import MapComponent from "../../components/Map";
import WALK from "../../assets/walk.png";
import CAR from "../../assets/car.png";
import MAP from "../../assets/map.png";
import { vendors, Vendor } from "../../data/vendors";
import { categories } from "../../data/category";
import { useSearchParams } from "react-router-dom";

interface VendorWithDistance extends Vendor {
  distance: number;
  timeByWalk: string;
  timeByDriving: string;
  timeByCycling: string;
}

const Result = () => {
  const [filteredVendors, setFilteredVendors] = useState<VendorWithDistance[]>(
    []
  );
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [query] = useSearchParams();

  const handleSelectLocation = (
    latitude: number,
    longitude: number,
    categoryId: number
  ) => {
    setLoadingLocation(true);
    const servicesWithDistance = vendors.map((s) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        s.latitude,
        s.longitude
      );
      const timeByWalk = calculateTimeByWalk(distance);
      const timeByDriving = calculateTimeByDriving(distance);
      const timeByCycling = calculateTimeByCycling(distance);

      return { ...s, distance, timeByWalk, timeByDriving, timeByCycling };
    });

    // Sort services by distance in ascending order
    const sortedServices = servicesWithDistance.sort(
      (a, b) => a.distance - b.distance
    );

    // Update the state with filtered and sorted services
    setFilteredVendors(sortedServices.filter((x) => x.category === categoryId));
  };

  useEffect(() => {
    const currentCategory = Number(query.get("cat")) || null;
    const latitude = Number(query.get("latitude")) || null;
    const longitude = Number(query.get("longitude")) || null;
    if (currentCategory && latitude && longitude) {
      handleSelectLocation(latitude, longitude, currentCategory);
    }
  }, [query]);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    // Implementation of distance calculation (you can use Haversine formula)
    // This is a basic example, you might want to use a library for accurate calculations
    const R = 6371; // Earth radius in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  const calculateTimeByWalk = (distance: number): string => {
    // Implementation of time calculation for walking
    // You might want to use a more accurate method based on walking speed
    const walkingSpeed = 5; // Assume walking speed in km/h
    const timeInHours = distance / walkingSpeed;
    const timeInMinutes = timeInHours * 60;
    return `${Math.round(timeInMinutes)} Minute(s)`;
  };

  const calculateTimeByDriving = (distance: number): string => {
    // Implementation of time calculation for driving
    // You might want to use a more accurate method based on driving speed
    const drivingSpeed = 30; // Assume driving speed in km/h
    const timeInHours = distance / drivingSpeed;
    const timeInMinutes = timeInHours * 60;
    return `${Math.round(timeInMinutes)} Minute(s)`;
  };

  const calculateTimeByCycling = (distance: number): string => {
    // Implementation of time calculation for cycling
    // You might want to use a more accurate method based on cycling speed
    const cyclingSpeed = 15; // Assume cycling speed in km/h
    const timeInHours = distance / cyclingSpeed;
    const timeInMinutes = timeInHours * 60;
    return `${Math.round(timeInMinutes)} Minute(s)`;
  };

  return (
    <div className="app-result">
      <h2 className="app-result__title">
        {filteredVendors.length} Home Services Found.
      </h2>
      {filteredVendors.map((x) => (
        <div className="app-result__listbox" key={x.id}>
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
              {categories.find((y) => y.id === x.category)?.title}
            </p>
            <div className="app-result__listbox__details__distance">
              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={MAP} alt="map" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  {x.distance.toFixed(2)} Kilometers
                </p>
              </div>

              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={CAR} alt="car" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  {x.timeByDriving}
                </p>
              </div>

              <div className="app-result__listbox__details__distance__box">
                <div className="app-result__listbox__details__distance__box__icon">
                  <img src={WALK} alt="walk" />
                </div>
                <p className="app-result__listbox__details__distance__box__title">
                  {x.timeByWalk}
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
