import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ul>
        INFORMACJE
        <li>
          <i className="fas fa-map-marker-alt">
            {" "}
            Generała Sylwestra Kaliskiego 15, 01-476 Warszawa
          </i>
        </li>
        <li>
          <i className="far fa-envelope"> zalewscypizza@gmail.com</i>
        </li>
        <li>
          <i className="fas fa-phone"> (+48) 123 456 789</i>
        </li>
      </ul>
      <div className={classes.authors}>
        <p>Wojciech Zalewski</p>
        <p>Kasia Zaleska</p>
        <p>WCY19IJ1S1</p>
        <p>Wojskowa Akademia Techniczna</p>
      </div>
    </footer>
  );
};

export default Footer;
