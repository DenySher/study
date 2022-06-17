import Modal from "../Modal/Modal"
import styles from './Main.module.scss'
import { useState } from "react"


const Main = () => {

    const [modal, setModal] = useState(false)
    const [modalValue, setmodalValue] = useState('')

    const Toggle = () => {
        setModal(!modal) 
    }
    
    return (
        <div className={styles.containerMain}>
            <button onClick={Toggle}>MODAL WINDOW</button>
            <Modal modal={modal} close={Toggle} setmodalValue={setmodalValue}/>
        </div>
    )
}

//https://dev.to/codebucks/how-to-create-an-efficient-modal-component-in-react-using-hooks-and-portals-360p

export default Main