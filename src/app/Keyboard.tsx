import classNames from "classnames"
import { ReactComponent as Backspace } from "./Backspace.svg"

interface Props {
  getKeyState: (key: string) => string
  onKey: (key: string) => void
  onBackspace: () => void
  onEnter: () => void
}

const Keyboard = ({ getKeyState, onKey, onBackspace, onEnter }: Props) => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ]

  return (
    <div className="keyboard">
      {keys.map((group, groupIndex) => {
        const isLast = groupIndex === keys.length - 1

        return (
          <div className="flex" key={group.join()}>
            {isLast && (
              <button className="key" onClick={onEnter}>
                Enter
              </button>
            )}

            {group.map((key) => {
              return (
                <button className={classNames("key", getKeyState(key))} onClick={() => onKey(key)} key={key}>
                  {key}
                </button>
              )
            })}

            {isLast && (
              <button className="key" onClick={onBackspace}>
                <Backspace />
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
