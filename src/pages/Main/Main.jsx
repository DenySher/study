import { useDispatch, useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/selectors/modalSelectors";
import { openModal, closeModal } from "../../redux/actions/modalActions";
import Modal from "../../components/Modal/Modal";
import Products from "../../components/Products/Products";
import styles from "./Main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsModalOpen);

  const open = () => {
    dispatch(openModal());
  };

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.containerMain}>
      <button className={styles.btnOpenModal} onClick={open}>Open modal</button>
      {isModalOpen && <Modal close={close} />}
      <Products />
    </div>
  );
};

export default Main;
