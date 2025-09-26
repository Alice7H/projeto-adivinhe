import { useState, useEffect } from 'react';
import styles from './app.module.css'
import { Button } from './components/Button';
import { Header } from './components/Header'
import { Input } from './components/Input';
import { Letter } from './components/Letter';
import { LettersUsed, type LetterUsedProps } from './components/LettersUsed';
import { Tip } from './components/Tip';
import { WORDS, type Challenge } from './utils/words';

function App() {
  const [challenge, setChallenge] = useState<Challenge| null>(null)
  const [attempts, setAttempts] = useState(0)
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LetterUsedProps[]>([])


  function handleRestart() {
    console.log('restart the game');
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord) 
    setAttempts(0)
    setLetter("")
  }

  function handleConfirm(){
    if(!challenge){
      return
    }
    if(!letter.trim()){
      return alert("Digite uma letra!")
    }
    const value = letter.toUpperCase()

    const exists = lettersUsed.find((used)=> used.value === value)
    if(exists){
      alert(`A letra ${value} já foi utilizada`)
      setLetter("")
      return 
    }

    const hits = challenge.word.toUpperCase().split("").filter((char)=> char === value).length

    const correct = hits > 0
    const currentScore = score + hits

    setLettersUsed((prevState) => [...prevState, { value, correct }])
    setScore(currentScore)
    setLetter("")
  }

  useEffect(()=>{
    startGame()
  },[])

  if(!challenge){
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestart} />
        
        <Tip tip={challenge.tip}/>
      
        <div className={styles.word}>
          {
            challenge.word.split("").map((_item, index) => {
              return (
                <Letter key={index} value="" size='small'/>  
              )
            })
          }
          
        </div>
      
        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" onChange={(e)=> setLetter(e.target.value)} value={letter} />
          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}

export default App
