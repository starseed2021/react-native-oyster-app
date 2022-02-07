# Birth of Pearl
## Overview
A **React Native** application for users to gain information about oysters by searching specific locations and retrieving oyster profiles. Users also recieve random facts about oysters before they begin their search. This app was created as a Capstone for [Ada Developers Academy](https://adadevelopersacademy.org/).

### LIVE LINK with QR Code: https://expo.dev/@starseed999/birth-of-pearl
<img src="/Images/Welcome.png" alt="Welcome" width="250" height="500">.  <img src="/Images/RandomFact.png" alt="Random Fact" width="250" height="500">.  <img src="/Images/RegionSearch.png" alt="Regional Search" width="250" height="500">.  <img src="/Images/LocationSearch.png" alt="Location Search" width="250" height="500">. <img src="/Images/Profile.png" alt="Oyster Profile" width="250" height="500">

## App Features

- **Tappable Image** on Welcome screen for one-touch search.
- **Swiper Component** displays random oyster facts -  NOTE: swiper developed for iOS but has not been optimized for Android at this time. 
- The random oyster facts are called from an external [API](https://github.com/starseed2021/oyster-facts-api). 
- **Buttons** to navigate search based on region and location.

## Installation/Environment Set-Up

- Clone this repository.
- Install the Expo Command Line Interface by running `npm install -g expo-cli`.
- Install all the dependencies by running `npm install`.
- There are 2 ways to test the app on your cell phone:
  - Install Expo for either [iPhone](https://apps.apple.com/us/app/expo-client/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
  - Scan the QR Code that appears when you click the Live Link above.

- To test the app on your local machine:
  - Download [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) or [Android Studio](https://developer.android.com/studio).

- To start the server run the command `npm start` or `expo start`.
