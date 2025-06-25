

interface IsValidLatLngArg {
    lat: number, lng: number
}

export function isValidLatLng({lat, lng}:IsValidLatLngArg): boolean {
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    lat >= -90 && lat <= 90 &&
    lng >= -180 && lng <= 180
  );
}