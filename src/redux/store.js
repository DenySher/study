import { createStoreHook } from "react-redux"
import rootReduser from './reduser/index'


const store = createStoreHook(rootReduser)

export default store