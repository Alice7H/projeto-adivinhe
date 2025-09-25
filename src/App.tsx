import styles from './app.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input';
import { Letter } from './components/Letter';
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
      
        <div className={styles.word}>
          <Letter value="R" />  
          <Letter value="E" />  
          <Letter value="A" />  
          <Letter value="C" />  
          <Letter value="T" />  
        </div>
      
        <h4>Palpite</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  )
}

export default App
