import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { mergeAll, zipObj } from "ramda"
import allowed from "../words/allowed.json"
import possible from "../words/possible.json"
import shuffle from "../words/shuffle"
import validate from "../words/validate"
import Guesses from "./Guesses"
import Guess from "./Guess"
import Keyboard from "./Keyboard"

export const [answer] = shuffle(possible)
console.info(answer)

const App = () => {
  const [guesses, setGuesses] = useState<string[]>([])
  const { register, setValue, handleSubmit, watch } = useForm<{ current: string }>({ defaultValues: { current: "" } })
  const { current: value } = watch()

  useEffect(() => {
    if (guesses.length !== 6) return

    const guess = guesses.at(-1)
    if (!guess) throw new Error("Something went wrong")
    if (validate({ guess, answer }).some((state) => state !== "correct")) alert(answer)
  })

  const type = (key: string) => {
    if (value.length === 5) return
    setValue("current", value + key)
  }

  const backspace = () => {
    if (!value.length) return
    setValue("current", value.slice(0, -1))
  }

  const submit = () => {
    if (value.length !== 5) return alert("Invalid word")
    if (!allowed.includes(value)) return alert("Invalid word")
    setGuesses([...guesses, value])
    setValue("current", "")
  }

  const results = mergeAll(guesses.map((guess) => zipObj([...guess], validate({ guess, answer }))))

  return (
    <>
      <Guesses guesses={guesses}>
        <Guess>{value.slice(0, 5)}</Guess>
      </Guesses>

      <Keyboard getKeyState={(key: string) => results[key]} onKey={type} onBackspace={backspace} onEnter={submit} />

      <form onSubmit={handleSubmit(submit)}>
        <input {...register("current")} autoFocus autoComplete="off" />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default App
