import styles from './app.module.css'
import { Header } from './components/Header'

function App() {

  function handleRestart() {
    console.log('restart the game');
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={1} max={10} onRestart={handleRestart} />
      </main>
    </div>
  )
}

export default App
