import styles from './Modal.module.scss'


const  Modal = ({ modal, close }) => {
  

  return (
        
        <div className={styles.containerModal} onClick={close}>
            {
                modal ?
            <div>
                <p>HI</p>
                <button onClick={close}>Close</button>
            </div>

            : null
            }

        </div>
        
  )
}


export default Modal