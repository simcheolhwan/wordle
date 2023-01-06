const Guess = ({ children }: { children: string }) => {
  return (
    <div className="guess">
      {[...children.padEnd(5, " ")].map((char, index) => {
        return (
          <div className="char tbd" key={index}>
            {char}
          </div>
        )
      })}
    </div>
  )
}

export default Guess
