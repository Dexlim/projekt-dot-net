import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.contact}>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>Rybaki 10, 00-221 Warszawa</p>
          </li>
          <li>
            <i className="far fa-envelope"></i>
            <p>zalewscypizza@gmail.com</p>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <p>22 340 10 10</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
