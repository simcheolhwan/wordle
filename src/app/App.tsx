import { useState } from "react"
import allowed from "../words/allowed.json"
import Guesses from "./Guesses"
import Keyboard from "./Keyboard"
import Guess from "./Guess"

const App = () => {
  const [guesses, setGuesses] = useState<string[]>([])
  const [value, setValue] = useState<string>("")

  const type = (key: string) => {
    if (value.length === 5) return
    setValue(value + key)
  }

  const backspace = () => {
    if (!value.length) return
    setValue(value.slice(0, -1))
  }

  const submit = () => {
    if (value.length !== 5) return
    if (!allowed.includes(value)) return alert("Invalid word")
    setGuesses([...guesses, value])
    setValue("")
  }

  return (
    <>
      <Guesses guesses={guesses}>
        <Guess>{value}</Guess>
      </Guesses>

      <Keyboard onKey={type} onBackspace={backspace} onEnter={submit} />
    </>
  )
}

export default App
