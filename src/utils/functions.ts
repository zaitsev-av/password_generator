const MAX_LENGTH = 54
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
const generateRandomString = (length: number) => {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += CHARACTERS[getRandomInt(MAX_LENGTH)]
  }

  return result
}
