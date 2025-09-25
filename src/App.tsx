import styles from './app.module.css'
import { Header } from './components/Header'
import { Tip } from './components/Tip';

function App() {

  function handleRestart() {
    console.log('restart the game');
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={1} max={10} onRestart={handleRestart} />
        
        <Tip tip={"Uma das linguagens de programação mais utilizadas"}/>
      </main>
    </div>
  )
}

export default App
