import styles from './Modal.module.scss'


const  Modal = ({ modal, close }) => {

  return ( 
        <>
            {
                modal ?

            <div className={styles.containerModal}>
                <p>Modal</p>
                <button onClick={close}>Close</button>
            </div>

            : null
            }

        </>  
  )
}


export default Modal