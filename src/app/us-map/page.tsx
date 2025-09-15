"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "../../data/us-states.json";

export default function USMapPage() {
  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container != null) {
      (container as any)._leaflet_id = null;
    }

    const map = L.map("map").setView([37.8, -96], 4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // --- Choropleth styling ---
    const getColor = (d: number) => {
      return d > 1000
        ? "#800026"
        : d > 500
        ? "#BD0026"
        : d > 200
        ? "#E31A1C"
        : d > 100
        ? "#FC4E2A"
        : d > 50
        ? "#FD8D3C"
        : d > 20
        ? "#FEB24C"
        : d > 10
        ? "#FED976"
        : "#FFEDA0";
    };

    const style = (feature: any) => ({
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });

    // --- Custom Info Control ---
    const info = L.control();

    info.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "info"); // create a div with class "info"
      this.update();
      return this._div;
    };

    info.update = function (props?: any) {
      this._div.innerHTML =
        "<h4>US Population Density</h4>" +
        (props
          ? `<b>${props.name}</b><br />${props.density} people / mi<sup>2</sup>`
          : "Hover over a state");
    };

    info.addTo(map);

    // --- Interaction functions ---
    const highlightFeature = (e: any) => {
      const layer = e.target;
      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
      });
      layer.bringToFront();
      info.update(layer.feature.properties);
    };

    const resetHighlight = (e: any) => {
      geojson.resetStyle(e.target);
      info.update();
    };

    const zoomToFeature = (e: any) => {
      map.fitBounds(e.target.getBounds());
    };

    const onEachFeature = (feature: any, layer: any) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    };

    // --- Add GeoJSON layer ---
    const geojson = L.geoJson(statesData as any, {
      style,
      onEachFeature,
    }).addTo(map);

    // --- Legend Control ---
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
      const div = L.DomUtil.create("div", "info legend");
      const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          `<i style="background:${getColor(grades[i] + 1)}"></i> ` +
          `${grades[i]}${
            grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+"
          }`;
      }
      return div;
    };

    legend.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <h1>US Map</h1>
      <div id="map" style={{ height: "600px", width: "100%" }} />
      {/* Add this CSS somewhere global or in a CSS module */}
      <style jsx>{`
        .info {
          padding: 6px 8px;
          font: 14px/16px Arial, Helvetica, sans-serif;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
        }
        .info h4 {
          margin: 0 0 5px;
          color: #777;
        }
        .legend {
          line-height: 18px;
          color: #555;
        }
        .legend i {
          width: 18px;
          height: 18px;
          float: left;
          margin-right: 8px;
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
