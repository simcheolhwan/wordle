import { useCallback } from "react"
import classNames from "classnames"
import validate from "../words/validate"

const Guess = ({ answer, children: guess }: { answer?: string; children: string }) => {
  const getResult = useCallback(
    (index: number) => {
      if (!answer) return "tbd"
      return validate({ answer, guess })[index]
    },
    [answer, guess]
  )

  return (
    <div className="guess">
      {[...guess.padEnd(5, " ")].map((char, index) => {
        return (
          <div className={classNames("char", getResult(index))} key={index}>
            {char}
          </div>
        )
      })}
    </div>
  )
}

export default Guess
