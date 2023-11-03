import * as Location from 'expo-location';
import {GOOGLE_API_KEY} from '@env';
import axios from 'axios';


const useMap = () => {
    // Get location service
    const getLocationService = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        return status === 'granted';
    }

    // Current location
    const getCurrentLocation = async () => {
        let location = await Location.getCurrentPositionAsync({});
        return {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };
    }

    // Search nearby place
    const searchNearbyStore = async (lat, lng, radius=10) => {
        try {
            const response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
              params: {
                location: `${lat},${lng}`,
                radius: radius * 1000,   // 10 km
                type: 'car_repair',
                key: GOOGLE_API_KEY
              }
            });
            const results =  response.data.results;
            return results;
        } catch (error) {
            alert(error)
        }
    }

    
    // Calculate distance between user and the store (km)
    const calculateDistance = (storeCoords, userCoords) => {    
        const radlat1 = (Math.PI * userCoords.latitude) / 180;
        const radlat2 = (Math.PI * storeCoords.lat) / 180;
        const theta = userCoords.longitude - storeCoords.lng;
        const radtheta = (Math.PI * theta) / 180;
    
        let distance =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    
        if (distance > 1) {
            distance = 1;
        }
    
        distance = Math.acos(distance);
        distance = (distance * 180) / Math.PI;
        distance = distance * 60 * 1.1515;
    
        // Convert distance to the desired unit (e.g., kilometers)
        distance = distance * 1.609344;
    
        return distance.toFixed(2); // Rounding to 2 decimal places
      };


    return {getLocationService, getCurrentLocation, searchNearbyStore, calculateDistance};
}

export default useMap;