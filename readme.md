# FindVend

FindVend is a location-based project that simplifies the process of finding vendors based on user preferences and current location.

![Project Preview](https://drive.google.com/uc?export=download&id=1Vd_Ob7n9Ee_ABkU88WtL73X5n_WhFxwD)

## Features

- **Automatic Location Detection**: The app automatically detects the user's current location, extracting latitude and longitude coordinates.

- **Vendor Category Selection**: Users can choose a vendor category from a predefined list, making it easy to find exactly what they're looking for.

- **Closest Vendors**: Based on the selected category and the user's location, the app retrieves and displays the closest vendors.

- **Distance Calculation**: GeoVendor Finder provides the distance between the user and each vendor in kilometers, offering a quick overview of proximity.

- **Walking and Driving Time**: The app estimates the walking and driving time to reach each vendor, helping users plan their visits accordingly.

## How It Works

1. **Location Detection**: When the user opens the app, it automatically detects their current location using the device's geolocation capabilities.

2. **Category Selection**: Users can select a vendor category from a list of predefined categories such as Electronics, Clothing, Home and Kitchen, Books, Sports and Outdoors, Health and Beauty, Toys and Games, Automotive, Jewelry, and Tools and Home Improvement.

3. **Vendor Retrieval**: The app retrieves and displays the closest vendors in the selected category, sorted by distance.

4. **Distance and Time Estimation**: For each vendor, the app calculates the distance in kilometers and estimates walking and driving times based on the user's current location.

## Technologies Used

- **HTML, CSS, JavaScript, Typescript, React**: The frontend of the application is built using standard web technologies.

- **Geolocation API**: Utilizes the Geolocation API to automatically retrieve the user's location.

- **Leaflet and Openstreet Maps API**: Integrates with the Openstreet Maps API for map display.

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/1kemuefuna/vendfinder.git

2. Open `index.html` in a web browser.

3. Allow location access when prompted.

4. Select a vendor category and explore the closest vendors.

## Contribution Guidelines

If you'd like to contribute to GeoVendor Finder, please follow our [contribution guidelines](CONTRIBUTING.md). We welcome bug reports, feature requests, and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
