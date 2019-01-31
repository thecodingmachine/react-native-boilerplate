import { create } from 'apisauce'
import { Config } from 'App/Config'

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

const userApiClient = create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  // if (Math.random() > 0.5) {
  //   return new Promise(function(resolve, reject) {
  //     resolve(null)
  //   })
  // }
  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (response.ok) {
      return response.data
    }

    return null
  })
}

export const userService = {
  fetchUser,
}
