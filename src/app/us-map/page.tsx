"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import statesData from "../../data/us-states.json";

type User = {
  name: string;
  email: string;
  color: string;
  selectedStates: string[];
};

export default function USMapPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const colors = ["#ff0000", "#0000ff", "#00ff00", "#ffa500"];
    const getRandomColor = () =>
      colors[Math.floor(Math.random() * colors.length)];

    const handleCreateAccount = (e: React.FormEvent) => {
      e.preventDefault();
      const newUser: User = {
        name,
        email,
        color: getRandomColor(),
        selectedStates: [],
      };
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
      setName("");
      setEmail("");
    };
    
useEffect(() => {
  const container = L.DomUtil.get("map");
  if (container != null) (container as any)._leaflet_id = null;

  const map = L.map("map").setView([37.8, -96], 4);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // --- Style function ---
  const style = (feature: any) => ({
    fillColor: "gray", // default gray
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  });

  // --- Info control ---
  const info = L.control();

  info.onAdd = function () {
    this._div = L.DomUtil.create("div", "info");
    this.update();
    return this._div;
  };

  info.update = function (props?: any) {
    this._div.innerHTML = `<h4>US States</h4>${
      props ? `<b>${props.name}</b>` : "Hover over a state"
    }`;
  };

  info.addTo(map);

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
    const layer = e.target;
    const stateName = layer.feature.properties.name;

    // Restore user color if selected, else gray
    const fillColor = currentUser?.selectedStates?.includes(stateName)
      ? currentUser.color
      : "gray";

    layer.setStyle({
      weight: 2,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
      fillColor,
    });

    info.update();
  };

  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: () => {
        if (!currentUser) return; // only logged-in users
        const stateName = feature.properties.name;

        if (!currentUser.selectedStates) currentUser.selectedStates = [];

        if (!currentUser.selectedStates.includes(stateName)) {
          currentUser.selectedStates.push(stateName);

          // immediately color the clicked state
          layer.setStyle({ fillColor: currentUser.color });
        }

        // update state for tracking
        setCurrentUser({ ...currentUser });
      },
    });

    // Apply user color if previously selected
    if (currentUser?.selectedStates?.includes(feature.properties.name)) {
      layer.setStyle({ fillColor: currentUser.color });
    }
  };

  const geojson = L.geoJson(statesData as any, {
    style,
    onEachFeature,
  }).addTo(map);

  return () => map.remove();
}, [currentUser]);

  return (
    <div>
      <h1>US Map</h1>

      {!currentUser && (
        <form onSubmit={handleCreateAccount} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      )}

      {currentUser && (
        <p>
          Logged in as <b>{currentUser.name}</b> (<i>{currentUser.email}</i>)
        </p>
      )}

      <div id="map" style={{ height: "600px", width: "100%" }} />

    </div>
  );
}
