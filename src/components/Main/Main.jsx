import Modal from "../Modal/Modal"
import styles from './Main.module.scss'
import { useState } from "react"


const Main = ({ dispatch }) => {

    const [modal, setModal] = useState(false)

    const close = () => {
        setModal(!modal) 
    }
    
    return (
        <div className={styles.containerMain}>
            <button onClick={close}>MODAL WINDOW</button>
            <Modal modal={modal} close={close} />
        </div>
    )
}

export default Main