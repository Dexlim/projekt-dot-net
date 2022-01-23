import { Fragment, useState } from "react";

import Cart from "../Cart/Cart";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

import styles from "./Layout.module.css";

const Layout = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart closeModal={closeModalHandler}/>}
      <MainNavigation showModal={showModalHandler} />
      <main className={styles.main} >{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
