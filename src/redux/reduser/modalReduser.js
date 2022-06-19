
const inicialState = () => {
    modal: false
}

const modalReduser = (state = inicialState, action) => {
    switch(action.type) {
        case 'openModal'
        return {
            ...state,
            modal: state.modal =  true
        }
        default:
            return state
    }
}

export default modalReduser