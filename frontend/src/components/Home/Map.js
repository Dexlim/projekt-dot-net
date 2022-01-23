import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MapPopup from "./MapPopup";
import styles from "./Map.module.css";
import Description from "./Description";

const Map = () => {
  return (
    <section className={styles["home-page"]}>
      <div className={styles.descriptions}>
        <Description label="O NAS">
          Zale(w)scy Pizza jest fikcyjną firmą utworzoną w 2022 roku na
          potrzeby zaliczenia projektu z przedmiotu "Metody programowania .NET".
          Nasza firma oferuje szeroki wachlarz potraw, które zadowolą nawet
          największego niejadka. Nasz lokal znajduje się tuż przy Wojskowej
          Akademii Technicznej na ulicy Generała Sylwestra Kaliskiego 15 w
          Warszawie. <br/><br/><b>Serdecznie zapraszamy.</b>
        </Description>
        <Description label="INFORMACJE">
        Generała Sylwestra Kaliskiego 15, 01-476 Warszawa<br/><br/>
        <b>Godziny otwarcia:</b><br/>
        Poniedziałek: 8:00-21:00<br/>
        Wtorek: 8:00-21:00<br/>
        Środa: 8:00-21:00<br/>
        Czwartek: 8:00-21:00<br/>
        Piątek: 8:00-23:00<br/>
        Sobota: 8:00-23:00<br/>
        Niedziela: NIECZYNNE<br/><br/>
        <b>Kontakt</b><br/>
        E-mail: zalewscypizza@gmail.com<br/>
        Telefon: (+48) 123 456 789
        </Description>
      </div>
      <div className={styles["map-container"]}>
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
            <MapPopup />
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
