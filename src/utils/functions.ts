const MAX_LENGTH = 54
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
export const generateRandomString = (length: number) => {
  let result = ''

  for (let i = 0; i < length; i++) {
    result += CHARACTERS[getRandomInt(MAX_LENGTH)]
  }

  return result
}

export const stringToArray = (str: string) => {
  return str.split('')
}
