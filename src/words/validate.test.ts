import validate from "./validate"

test("기초", () => {
  expect(validate({ guess: "trace", answer: "about" })).toEqual(["present", "absent", "present", "absent", "absent"])
  expect(validate({ guess: "abort", answer: "about" })).toEqual(["correct", "correct", "correct", "absent", "correct"])
})

describe("중복", () => {
  expect(validate({ guess: "enemy", answer: "belie" })).toEqual(["present", "absent", "present", "absent", "absent"])
  expect(validate({ guess: "chill", answer: "belie" })).toEqual(["absent", "absent", "present", "present", "present"])
  expect(validate({ guess: "affix", answer: "after" })).toEqual(["correct", "correct", "absent", "absent", "absent"])
})
