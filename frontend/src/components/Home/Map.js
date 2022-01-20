import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MapPopup from './MapPopup';
import styles from "./Map.module.css";

const Map = () => {
  return (
    <section className={styles["map-container"]}>
      <h2>Lokalizacja restauracji</h2>
      <MapContainer
        center={[52.25181481352915, 20.896404894768995]}
        zoom={20}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.25181481352915, 20.896404894768995]}>
         <MapPopup/>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
