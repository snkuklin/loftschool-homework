import * as React from "react";
import mapboxgl from "mapbox-gl";
import { MapboxOptions } from "mapbox-gl";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export interface MapProps {}

mapboxgl.accessToken =
  "pk.eyJ1Ijoic25rdWtsaW4iLCJhIjoiY2s1d2VncXV2MDgzeDNobnhyOTU3bDhmeCJ9.SMwjT_cbCJ1c163UkuWISg";

const outerConteinerStyle: CSSProperties = {
  position: "relative",
  zIndex: -1
};

const innerConteinerStyle: CSSProperties = {
  width: "100vw",
  height: "calc(100vh - 70px)",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0
};

const Map: React.SFC<MapProps> = () => {
  const mapContainer = React.useRef(null);

  React.useEffect(() => {
    const mapOptions: MapboxOptions = {
      container: mapContainer.current || "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 3
    };
    const map = new mapboxgl.Map(mapOptions);

    return () => {
      map.remove();
    };
  });

  return (
    <div style={outerConteinerStyle}>
      <div ref={mapContainer} style={innerConteinerStyle} />
    </div>
  );
};

export default Map;
