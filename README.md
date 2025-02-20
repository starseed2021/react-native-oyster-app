# Birth of Pearl - An App for Oyster Lovers
## Overview 

Users can search oysters by specific locations and retrieve oyster profiles.  
Users also receive a random fact about oysters upon app load. <br>
This app was written in **React Native** as a Capstone Project at [Ada Developers Academy](https://adadevelopersacademy.org/).

### PUBLISHED APP LINK with [QR CODE](https://expo.dev/@starseed999/birth-of-pearl)
#### NOTE: The link is currently not active at this time. 
<img src="/Images/Welcome.png" alt="Welcome" width="250" height="500">.  <img src="/Images/AboutUs.png" alt="About Us" width="250" height="500">. <img src="/Images/RandomFact.png" alt="Random Fact" width="250" height="500">.  <img src="/Images/RegionSearch.png" alt="Regional Search" width="250" height="500">.  <img src="/Images/LocationSearch.png" alt="Location Search" width="250" height="500">. <img src="/Images/Profile.png" alt="Oyster Profile" width="250" height="500">

## App Features

- **Tappable Image** on Welcome screen for one-touch search.
- [**Swiper Component**](https://github.com/alexbrillant/react-native-deck-swiper) displays random oyster facts -  **NOTE:** swiper developed for iOS but has not been optimized for Android at this time. 
- **Buttons** to navigate search based on region and location.
- Random oyster fact data is sourced from an external [**API**](https://github.com/starseed2021/oyster-facts-api) deployed [here](https://my-oyster-facts-api.herokuapp.com/oysterFacts).


## Requirements
- Node.js - this is needed in order to access the Node Package Manager (npm).


## Installation/Environment Set-Up

- Clone this repository.
- Install the Expo Command Line Interface by running `npm install -g expo-cli`.
- Install dependencies by running `npm install`.
- There are 2 very specific processes to test the app on your personal cell phone:
  - For iPhone: 
    - Download Expo for [iOS](https://apps.apple.com/us/app/expo-client/id982107779) and set up an account.
    - Provide the owner (starseed2021) with your email in order to be given access.
    - Accept the member invitation.
    - Scan the QR Code provided in the Published App Link above.
  - For Android:
    - Download Expo for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
    - Scan the QR Code provided in the Published App Link above.
  - **NOTE:** These processes are very different because the app is still in development mode. 
- To test the app on your local machine:
  - To test on an iPhone Simulator
    - Download [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and follow instructions.
  - To test on an Android Emulator 
    - Download [Android Studio](https://developer.android.com/studio) and follow instructions.
- Currently, the database is small and therefore stored in a **JSON file**.  This application is not leveraging a backend storage solution at this time.
- To start the server run `npm start` or `expo start`.  These commands are interchangeable.
