import axios from 'axios'

export default axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: 'https://jsonplaceholder.typicode.com/users/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})
