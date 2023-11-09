import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import { Input } from "../../components/Input";
import { AutoComplete } from "../../components/AutoComplete";
import { SERVICES } from "./data";
import { Button } from "../../components/Button";
import { CircularProgress } from "../../components/CircularProgress";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>();
  const [service, setService] = useState<(typeof SERVICES)[0]>();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (service && currentLocation) {
      setClicked(true);
      navigate(`/result?service=${service.id}&location=${currentLocation}`);
    } else {
      alert("You must select a service and your location must be set");
    }
  };

  return (
    <div className="app-home">
      <div className="app-home__inner-contain">
        <h2 className="app-home__title">Welcome to FindVend</h2>
        <p className="app-home__subtitle">
          Search for any service and we will curate the closest vendor to your
          current location
        </p>
        <div className="app-home__form-content">
          <div className="app-home__input-wrapper">
            <Input
              placeholder="Set your location"
              className="app-home__app-input"
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>
          <div className="app-home__input-wrapper">
            <AutoComplete
              options={SERVICES}
              renderInput={(props) => (
                <Input
                  {...props}
                  placeholder="Select a service"
                  className="app-home__app-input"
                />
              )}
              getOptionLabel={(option: (typeof SERVICES)[0]) => option.title}
              onSelect={(option: (typeof SERVICES)[0]) => setService(option)}
            />
          </div>
          <div className="app-home__input-wrapper">
            <Button className="app-home__btn" onClick={handleSearch}>
              {clicked ? (
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
