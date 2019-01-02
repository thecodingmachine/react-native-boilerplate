# Setup CocoaPods

[CocoaPods](https://cocoapods.org/) is a package management tool for iOS and macOS development.  
You can use it to add the actual React Native framework code into our project, and especially to manage thirdparty packages.

In this boilerplate, we don't want to make CocoaPods as a required tool.  
But if you planned to manage a lot of thirdparty dependencies, it should be a really good idea to follow this guide. 

Finally, we didn't specify it yet, but this tool is for iOS dependencies only. On Android, `react-native linking` seems to be enough.


## Setup CocoaPods

First you must install CocoaPods :
```bash
brew install cocoapods
```

Then simply create a `Podfile` file, which will be the configuration file of all your dependencies.  
The easiest way is by running :
```bash
cd ios
pod init
```

## Package management

### React Native framework

One of the main thing you must know about using CocoaPods, is that we need to manage React itself as a pod dependency to make it works well.  
It means that you can decide what parts of React Native framework you would like to integrate into your app. So you must not forget to append each React Native `subspec` inside the `Podfile`.    
This part is fully explained in the [official React Native documentation](https://facebook.github.io/react-native/docs/integration-with-existing-apps#configuring-cocoapods-dependencies)

So, add the following into your `Podfile` :
```
# The target name is most likely the name of your project.
target 'NumberTileGame' do

  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the `:path` accordingly
  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge', # Include this for RN >= 0.47
    'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # Needed for debugging
    'RCTAnimation', # Needed for FlatList and animations running on native UI thread
    # Add any other subspecs you want to use in your project
  ]
  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

  # Third party deps podspec link
  pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

end
```

Your are now ready to install your pod.
```
pod install
```

### Thirdparty packages

On the other hand, you can really easily link librairies to your project.  

You just have to append a line like the following inside your Podfile :
```
pod 'RNExampleLib.podspec', :path => '../node_modules/react-native-example-lib'
```
and run :
```
pod install
```

That's all ! :tada:

## Key points


- You must always use the `.xcworkspace` file inside Xcode instead of the `.xcodeproj` one.
- Sometimes, running `react-native link`  will automatically try to perform a pod install. Read carefuly each thirdparty package install doc.`

---

More resources :
- [Demystifying react-native modules linking](https://engineering.brigad.co/demystifying-react-native-modules-linking-ae6c017a6b4a)
- [Configuring CocoaPods dependencies](https://facebook.github.io/react-native/docs/integration-with-existing-apps#configuring-cocoapods-dependencies)
- [Beginner’s Guide to Using CocoaPods with React Native](https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995)
