const validate = (params: { guess: string; answer: string }) => {
  const guess = [...params.guess]
  const answer = [...params.answer]

  return guess.map((char, index) => {
    // TODO: 중복 테스트 통과해야함
    if (char === answer[index]) return "correct"
    if (!answer.includes(char)) return "absent"
    return "present"
  })
}

export default validate
