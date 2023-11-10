import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { Input } from "../../components/Input";
import { AutoComplete } from "../../components/AutoComplete";
import { Button } from "../../components/Button";
import { CircularProgress } from "../../components/CircularProgress";
import MapComponent from "../../components/Map";
import { Category, categories as AppCatrgoies } from "../../data/category";

interface Location {
  latitude: number | null;
  longitude: number | null;
  country?: string;
  province?: string;
  address?: string;
}

const Home = () => {
  const [category, setCategory] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>(AppCatrgoies);
  const [location, setLocation] = useState<Location>();
  const navigate = useNavigate();
  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleSelectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Use OpenStreetMap Nominatim API for reverse geocoding
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );

            if (response.ok) {
              const data = await response.json();
              setLocation({
                latitude,
                longitude,
                country: data.address?.country || undefined,
                province: data.address?.state || undefined,
                address: data.display_name || undefined,
              });
            } else {
              console.error("Error fetching address:", response.statusText);
            }
          } catch (error) {
            console.error("Error fetching address:", error);
          } finally {
            setLoadingLocation(false);
          }
        },
        (error) => {
          console.error("Error getting user's location:", error);
          setLoadingLocation(false);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
      setLoadingLocation(false);
    }
  };

  useEffect(() => {
    handleSelectLocation();
  }, []);


  const handleSearch = () => {
    if (category && location) {
      navigate(
        `/result?cat=${category.id}&latitude=${location.latitude}&longitude=${location.longitude}`
      );
    } else {
      alert("You must select a service and your location must be set");
    }
  };

  return (
    <div className="app-home">
      <div className="app-home__inner-contain">
        <h2 className="app-home__title">Explore vendors close to you.</h2>
        <p className="app-home__subtitle">
          Select the services you need and FindVend will curate the vendors
          close to your current location
        </p>
        <div className="app-home__form-content">
          <div className="app-home__map-wrapper">
            {location ? <MapComponent latitude={location.latitude as number} longitude={location.longitude as number} id="map" /> : <CircularProgress className="app-home__map-spinner" />}
          </div> 
          <div className="app-home__input-wrapper">
            <AutoComplete
              options={categories}
              renderInput={(props) => (
                <Input
                  {...props}
                  placeholder="Select Service Category"
                  className="app-home__app-input"
                />
              )}
              getOptionLabel={(option: Category) => option.title}
              onSelect={(option: Category) => setCategory(option)}
            />
          </div>
          <div className="app-home__input-wrapper">
            <Button className="app-home__btn" onClick={handleSearch}>
              {loadingLocation ? (
                <CircularProgress className="app-home__progress" />
              ) : (
                "Search"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
