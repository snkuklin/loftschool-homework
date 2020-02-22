import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import mapboxgl, { Map as MapboxMap, GeoJSONSource } from "mapbox-gl";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import OrderForm from "./components/orderForm";
import { Route, getCurrentRoute } from "./store";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic25rdWtsaW4iLCJhIjoiY2s1d2VncXV2MDgzeDNobnhyOTU3bDhmeCJ9.SMwjT_cbCJ1c163UkuWISg";

const addRouteLayer = (map: MapboxMap | undefined) => {
  if (map && !map.getLayer("route")) {
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [[0, 0]]
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8
      }
    });
  }
};

const mayBeShowRoute = (map: MapboxMap | undefined, coordinates: Route) => {
  if (map) {
    const len = coordinates.length;
    let firstBound, lastBound;

    if (len) {
      firstBound = coordinates[0];
      lastBound = coordinates[len - 1];
    }

    (map.getSource("route") as GeoJSONSource).setData({
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: coordinates
      }
    });

    if (firstBound && lastBound) {
      map.fitBounds([firstBound, lastBound], { maxZoom: 12, padding: 50 });
    }
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerContainer: {
      position: "relative"
    },
    innerContainer: {
      width: "100vw",
      height: "calc(100vh - 70px)",
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  })
);

const Map: React.FC = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef<MapboxMap>();
  const [isLayerReady, setIsLayerReady] = useState(false);
  const currentRoute = useSelector(getCurrentRoute);
  const classes = useStyles();

  useEffect(() => {
    mapRef.current = new MapboxMap({
      container: mapContainer.current || "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.31, 59.93], // Saint Petersburg
      zoom: 10
    });

    mapRef.current.on("load", () => {
      addRouteLayer(mapRef.current);
      setIsLayerReady(true);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (isLayerReady) {
      mayBeShowRoute(mapRef.current, currentRoute);
    }
  }, [isLayerReady, currentRoute]);

  return (
    <>
      <OrderForm />
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer} ref={mapContainer} />
      </div>
    </>
  );
};

export default Map;
