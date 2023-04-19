import { createInterface } from 'readline'

export const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})


export const readLineAsync = (msg) => {
  return new Promise(resolve => {
    readline.question(msg, userRes => {
      resolve(userRes)
    })
  })
}