import classes from "./Footer.module.css";

// react-icons
import { VscLocation, VscMail, VscFeedback } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer>
      <div className={classes.contact}>
        <ul>
          <li>
            <VscLocation />
            <p>Rybaki 10, 00-221 Warszawa</p>
          </li>
          <li>
            <VscMail />
            <p>zalewscypizza@gmail.com</p>
          </li>
          <li>
            <VscFeedback />
            <p>22 340 10 10</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
