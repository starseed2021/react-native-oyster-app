# Birth of Pearl
## Overview
A **React Native** application for users to gain information about oysters by searching specific locations and retrieving oyster profiles. Users also recieve random facts about oysters before they begin their search. This app was created as a Capstone for [Ada Developers Academy](https://adadevelopersacademy.org/).

### PUBLISHED APP LINK with QR Code: https://expo.dev/@starseed999/birth-of-pearl
<img src="/Images/Welcome.png" alt="Welcome" width="250" height="500">.  <img src="/Images/RandomFact.png" alt="Random Fact" width="250" height="500">.  <img src="/Images/RegionSearch.png" alt="Regional Search" width="250" height="500">.  <img src="/Images/LocationSearch.png" alt="Location Search" width="250" height="500">. <img src="/Images/Profile.png" alt="Oyster Profile" width="250" height="500">

## App Features

- **Tappable Image** on Welcome screen for one-touch search.
- **Swiper Component** displays random oyster facts -  **NOTE:** swiper developed for iOS but has not been optimized for Android at this time. 
- The random oyster facts are called from an external [API](https://github.com/starseed2021/oyster-facts-api) which has the following [link](https://my-oyster-facts-api.herokuapp.com/oysterFacts).
- **Buttons** to navigate search based on region and location.

## Requirements
- Node.js
- An Integrated Development Environment (IDE) 


## Installation/Environment Set-Up

- Clone this repository.
- Install the Expo Command Line Interface by running the command `npm install -g expo-cli`.
- Install all the dependencies by running the command `npm install`.
- There are 2 very specific processes to test the app on your personal cell phone:
  - For iPhone: 
    - Download Expo for [iOS](https://apps.apple.com/us/app/expo-client/id982107779) and set up an account.
    - Provide the owner (starseed2021) with your email in order to be given access.
    - Accept the member invitation.
    - Scan the QR Code provided in the Published App Link above.
  - For Android:
    - Download Expo for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
    - Scan the QR Code that appears when you click the Published App Link above.
  - **NOTE:** These processes are very different because the app is still in development mode. 
- To test the app on your local machine:
  - To test on an iPhone Simulator
    - Download [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
  - To test on an Android Emulator 
    - [Android Studio](https://developer.android.com/studio)

- To start the server run the command `npm start` or `expo start`.
