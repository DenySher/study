import Modal from "../Modal/Modal"
import { useState } from "react"


const Main = () => {

    const [modal, setModal] = useState(false)
    const Toggle = () => setModal(!modal)  

    return (
        <div>
            <button onClick={Toggle}>Modal
                {/* {modal ? 'open' : 'close'} */}
            </button>
            <Modal modal={modal} close={Toggle}/>
        </div>
    )
}

//https://dev.to/codebucks/how-to-create-an-efficient-modal-component-in-react-using-hooks-and-portals-360p

export default Main