import React, { useState, useEffect } from "react";

function useUserLocation() {
  const [locationState, setLocationState] = useState({
    location: null,
    permissionGranted: false,
    error: null,
    loading: true,
  });

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    });
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getLocation = async () => {
    return await new Promise((resolve, reject) => {
      try {
        if (navigator.geolocation) {
          navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
              if (result.state === "granted") {
                console.log(result.state);
                //If granted then you can directly call your function here
                navigator.geolocation.getCurrentPosition(function (position) {
                  console.log(position);
                  setLocationState({
                    permissionGranted: true,
                    location: position,
                    error: false,
                    loading: true,
                  });
                  console.log(locationState);
                  resolve(position);
                });

                //navigator.geolocation.getCurrentPosition(success);
              } else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(
                  success,
                  errors,
                  options
                );
              } else if (result.state === "denied") {
                setLocationState({ error: "some error have occured" });
                //If denied then you have to show instructions to enable location
              }
              result.onChange = function () {
                console.log(result.state);
              };
            });
        }
      } catch (e) {
        reject(e);
      }
    });
  };

  return {
    locationState,
    getLocation,
  };
}

export default useUserLocation;
