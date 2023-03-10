import { PropsWithChildren } from "react"
import { answer } from "./App"
import Guess from "./Guess"

const Guesses = ({ guesses, children }: PropsWithChildren<{ guesses: string[] }>) => {
  return (
    <div className="guesses">
      {guesses.map((guess) => {
        return (
          <Guess answer={answer} key={guess}>
            {guess}
          </Guess>
        )
      })}

      {guesses.length < 6 && (
        <>
          {children}

          {Array.from({ length: 5 - guesses.length }, () => "").map((placeholder, index) => (
            <Guess key={index}>{placeholder}</Guess>
          ))}
        </>
      )}
    </div>
  )
}

export default Guesses
