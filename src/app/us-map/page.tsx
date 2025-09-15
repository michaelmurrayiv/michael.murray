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
  const [countdown, setCountdown] = useState("");

  const colors = ["#ff0000", "#0000ff", "#00ff00", "#ffa500"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  // --- Countdown Timer ---
  useEffect(() => {
    const targetDate = new Date("2025-09-29T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setCountdown("Time's up!");
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

const handleSubmitSelection = async () => {
  if (!currentUser) return;

  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfvYeo3nPM1kO2o_BDhspgN3Tq_mQB16gqzAZk4GVlTo5UZGQ/formResponse";

  const formData = new URLSearchParams();
  formData.append("entry.1187015083", currentUser.name);
  formData.append("entry.224833438", currentUser.email);
  formData.append("entry.1028114489", currentUser.selectedStates.join(", "));

  try {
    await fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    alert("Selections submitted successfully!");
  } catch (err) {
    console.error(err);
    alert("Error submitting selections.");
  }
};
  // --- Leaflet Map ---
  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container != null) (container as any)._leaflet_id = null;

    const map = L.map("map").setView([37.8, -96], 4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const style = (feature: any) => ({
      fillColor:
        currentUser?.selectedStates.includes(feature.properties.name) &&
        currentUser
          ? currentUser.color
          : "gray",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });

    const info = L.control();

    info.onAdd = function () {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    info.update = function (props?: any) {
      if (!currentUser) {
        this._div.innerHTML = `<h4>US States</h4>Hover over a state`;
        return;
      }

      if (!props) {
        this._div.innerHTML = `<h4>US States</h4>Hover over a state`;
      } else {
        const stateName = props.name;
        const index = currentUser.selectedStates.indexOf(stateName);
        const orderText =
          index >= 0 ? `(Order: ${index + 1})` : "(Not selected)";
        this._div.innerHTML = `<h4>US States</h4><b>${stateName}</b> ${orderText}`;
      }
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
      const fillColor = currentUser?.selectedStates.includes(stateName)
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
          if (!currentUser) return;
          const stateName = feature.properties.name;

          if (!currentUser.selectedStates) currentUser.selectedStates = [];

          const index = currentUser.selectedStates.indexOf(stateName);

          if (index >= 0) {
            // Toggle off
            currentUser.selectedStates.splice(index, 1);
            layer.setStyle({ fillColor: "gray" });
          } else {
            if (currentUser.selectedStates.length >= 5) return;
            currentUser.selectedStates.push(stateName);
            layer.setStyle({ fillColor: currentUser.color });
          }

          setCurrentUser({ ...currentUser });
        },
      });

      // Initial fill color
      if (currentUser?.selectedStates.includes(feature.properties.name)) {
        layer.setStyle({ fillColor: currentUser.color });
      }
    };

    L.geoJson(statesData as any, { style, onEachFeature }).addTo(map);

    return () => map.remove();
  }, [currentUser]);

  return (
    <div>
      <h1>US Map</h1>

      <h2>Countdown to Monday, September 29th, 2025: {countdown}</h2>

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
      {currentUser && (
        <button onClick={handleSubmitSelection} style={{ marginTop: "10px" }}>
          Submit Selections
        </button>
      )}
    </div>
  );
}
