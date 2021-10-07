# movieApp

To start app run the following commands
yarn install
cd ios && pod install
cd android && ./gradlew clean
yarn start --reset-cache
for ios: react-native run-ios
for android: react-native run-android
