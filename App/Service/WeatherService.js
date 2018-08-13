import { create } from 'apisauce'

const weatherApiClient = create({
  baseURL: 'https://query.yahooapis.com/v1/public/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchTemperature() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }

  const locationQuery = escape(
    "select item.condition.temp from weather.forecast where woeid in (select woeid from geo.places where text='Lyon, Rhone-Alpes, FR') and u='c'"
  )

  return weatherApiClient.get('yql?q=' + locationQuery + '&format=json').then((response) => {
    if (response.ok) {
      return response.data.query.results.channel.item.condition.temp
    }

    return null
  })
}

export const WeatherService = {
  fetchTemperature,
}
