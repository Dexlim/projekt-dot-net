import styles from "./AddToCartModal.module.css";
import ReactDOM from "react-dom";

import { Fragment } from "react/cjs/react.production.min";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose} />}

const ModalOverlay = (props) => {
        return (
          <div className={styles.modal}>
            <div>{props.children}</div>
          </div>
        );
      };

const AddToCartModal = props =>{

    const portalElement = document.getElementById("overlays");
    
    const Modal = (props) => {
      return (
        <Fragment>
          {ReactDOM.createPortal(
            <Backdrop onClose={props.onClose} />,
            portalElement
          )}
          {ReactDOM.createPortal(
            <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
            portalElement
          )}
        </Fragment>
      );
    };
    
    
}

export default AddToCartModal;