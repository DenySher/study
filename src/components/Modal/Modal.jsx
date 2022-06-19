import styles from "./Modal.module.scss";

const Modal = ({ close }) => {
  return (
    <>
      <div className={styles.containerModal}>
        <p>Modal</p>
        <button onClick={close}>Close</button>
      </div>
    </>
  );
};

export default Modal;
