/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import statesData from "../../data/us-states.json";

export default function USMapPage() {
  useEffect(() => {
    const L = require("leaflet");
    const container = L.DomUtil.get("map");
    if (container != null) (container as any)._leaflet_id = null;

    const map = L.map("map").setView([37.8, -96], 4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Style states: Colorado = blue, others = gray
    const style = (feature: any) => ({
      fillColor: feature.properties.name === "Colorado" ? "#90EE90" : "gray",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });

    L.geoJson(statesData as any, { style }).addTo(map);

    // ✅ Fix marker icon path
    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41],
    });

    // 📍 Add marker at Centennial, CO
    const centennialCoords: [number, number] = [39.5807, -104.8772];
    L.marker(centennialCoords, { icon: customIcon }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Location has dropped*. Winners will be contacted to collect their rewards. 
      </h1>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Centennial, CO
      </h1>

      <div
        id="map"
        style={{ height: "600px", width: "100%", marginBottom: "20px" }}
      />

      <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
        *Apparently it will be temporary
      </p>
        <br />
      <div>
        <p style={{ textAlign: "center", fontSize: "1.9rem", color: "#888", fontWeight: "bold" }}>
          Results
        </p>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTW_pZ_ktTCHsvyCGTR1A7uRLmdcH6KSetYps6BhFActNb1GgL43g83RJIN8kHTiQ3cGOgcHUBm0Bwv/pubhtml?gid=100873409&amp;single=true&amp;widget=true&amp;headers=false&chrome=false"
          width="100%"
          height="400"
          style={{ border: "1px solid #ccc", justifyContent: "center" }}
        ></iframe>
      </div>
    </div>
  );
}
