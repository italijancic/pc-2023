import { readline, readLineAsync } from './utils/cli.utils.js'

const myApp = async() => {

  // Here: students code
  const userResponse = await readLineAsync('How are you? ')
  readline.close()
  console.log('Your response was: ' + userResponse + ' — Thanks!')

}

export default myApp