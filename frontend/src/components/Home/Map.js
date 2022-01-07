import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./Map.module.css";

const Map = () => {
  return (
    <section className={styles["map-container"]}>
      <h2>Lokalizacja restauracji</h2>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Siedziba naszej restauracji</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
