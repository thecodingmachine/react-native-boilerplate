#!/bin/sh
# v1.0.0
# KENT <iamcxa@gmail.com>
# Building tools for React-Native app bundle

case ${1} in
  "android-bundle")
	node node_modules/react-native/local-cli/cli.js bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/
	;;
  
  "ios-bundle")
	node node_modules/react-native/local-cli/cli.js bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios
	;;
  
  "bundle")
	sh ./scripts/build-tool.sh android-bundle && sh ./scripts/build-tool.sh ios-bundle
	;;
  
  "clear")
	watchman watch-del-all && rm -rf /tmp/metro-bundler-cache-* && rm -rf /tmp/haste-map-react-native-packager-* && react-native start --reset-cache
	;;

  "sonar")
  node ./scripts/sonar-scanner.js
  ;;

  "fix")
  case ${2} in
    "0.59-android-resource-release-gradle")
    node ./scripts/fix-android-release-gradle.js
    ;;
    "0.59-third-party-ios")
    curl -L https://git.io/fix-rn-xcode10 | bash
    ;;
    *)
    echo "Fix:\n)Option1: '0.59-android-resource-release-gradle'\n)Option2: '0.59-third-party-ios'"
    ;;
  esac
  ;;

  "ci")
  case ${2} in
    "credentials")
    cd ios && bundle install && fastlane make appstore && fastlane make development && cd ../
    ;;
    *)
    cd ${2} && bundle install && fastlane ${3} && cd ../
    ;;
  esac
  ;;

  "postinstall")
  echo "run build tool command 'postinstall'."
  ;;
esac
