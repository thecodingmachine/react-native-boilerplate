
import BackgroundGeolocation from 'react-native-background-geolocation';

export const getUserLocation = async () => await BackgroundGeolocation.getCurrentPosition({
  timeout: 3, // 3 second timeout to fetch location
  maximumAge: 30000, // Accept the last-known-location if not older than 30000 ms.
  desiredAccuracy: 100, // Try to fetch a location with an accuracy of `100` meters.
  stationaryRadius: 100,
  samples: 3, // How many location samples to attempt.
});
