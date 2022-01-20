import { Popup } from "react-leaflet";
const MapPopup = () => {
  return (
      <Popup>
        <ul>
            <li>
                <b>Zale(w)scy Pizza Warszawa</b><br/><br/>
            </li>
          <li>
            <i className="fas fa-map-marker-alt">Generała Sylwestra Kaliskiego 15, 01-476 Warszawa</i>
          </li>
          <li>
            <i className="far fa-envelope">zalewscypizza@gmail.com</i>
          </li>
          <li>
            <i className="fas fa-phone">(+48) 123 456 789</i>
          </li>
        </ul>
      </Popup>
  );
};

export default MapPopup;
