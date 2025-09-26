import { Letter } from "../Letter"
import styles from "./styles.module.css"

type Props = {

}

export function LettersUsed({} :Props) {
  return (
    <div className={styles.container} >
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="R" size="small" color="correct"/>
        <Letter value="X" size="small" color="wrong"/>
      </div>
    </div>
  )
}