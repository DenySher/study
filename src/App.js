import './App.css';
import styles from './index.module.scss'
import Main from './components/Main/Main'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  const dispatch = useDispatch()
  const openModal = () => {
    dispatch({
      type: 'openModal'
    })
  }

  return (
      <div className={styles.container}>
        <Main dispatch={dispatch} />
      </div>
  );
}

export default App;
