# Kroon Studio
React Native Coding Challenge, 2019. Kroon Studio

Project uses Gists API.

1. Clone the repository
2. Run `npm install`
3. Enter `CLIENT_ID` and `CLIENT_SECRET` in `contants.js` to avoid overloading API rate limit
4. Run `react-native run-ios` or `react-native run-android`

If you experience BUILD FAILED, with Podfile.lock not in sync - then run `cd ios` and `pod install` command. After that - try `react-native run-{ios|android}` command in root folder.

## Useful commands: 
```
rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all;

react-native start --reset-cache

react-native start
react-native run-ios --simulator="iPhone Xs Max"
react-native run-android
```
