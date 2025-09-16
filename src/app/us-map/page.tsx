/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);

  const colors = ["#ff0000", "#0000ff", "#00ff00", "#ffa500"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  // --- Countdown Timer ---
  useEffect(() => {
    if (typeof window === "undefined") return;

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
    setSubmitted(true);
    

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
    const L = require("leaflet");
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

    const info = new L.Control();

    (info as any).onAdd = function () {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    (info as any).update = function (props?: any) {
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
      (info as any).update(layer.feature.properties);
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
      (info as any).update();
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

      if (currentUser?.selectedStates.includes(feature.properties.name)) {
        layer.setStyle({ fillColor: currentUser.color });
      }
    };

    L.geoJson(statesData as any, { style, onEachFeature }).addTo(map);

    return () => {
      map.remove();
    };
  }, [currentUser]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        My job location to be revealed in:
      </h1>

      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        <div
          style={{ fontSize: "3rem", marginTop: "10px", fontWeight: "bold" }}
        >
          {countdown}
        </div>
      </h2>

      {!currentUser && (
        <form
          onSubmit={handleCreateAccount}
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              width: "250px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              width: "250px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Create Account
          </button>
        </form>
      )}

      {currentUser && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "1.2rem" }}>
            Logged in as <b>{currentUser.name}</b> (<i>{currentUser.email}</i>)
          </p>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            You can select the top 5 states you think I&apos;ll be moved to. There will be prizes...
          </p>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Selected States:{" "}
            {currentUser.selectedStates.length > 0
              ? currentUser.selectedStates.join(", ")
              : "None"}
          </p>
        </div>
      )}

      <div
        id="map"
        style={{ height: "600px", width: "100%", marginBottom: "20px" }}
      />

      {currentUser && !submitted && (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleSubmitSelection}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Submit Selections
          </button>
        </div>
      )}
    </div>
  );
}
