---
slug: /Configuration
title: Configuration
---

## Change the appicon
To help generate appicons, you can use an online tool like [appicon](https://appicon.co/) or [easyappicon](https://easyappicon.com/) to generate for both iOS and Android all icons and image sets.

### iOS 🍎
To change the appicon of the iOS application, you need to replace all the content of 
```
src > ios > *name_of_your_app* > Images.xcassets > AppIcon.appiconset
```
with your appicons generated with [appicon](https://appicon.co/) for example.

### Android 🤖
To change the appicon of the Android application, you need to replace all the content of 
```
src > android > app > src > res
```
with your appicons generated with [appicon](https://appicon.co/) for example.

--- 

## Change the splash screen icon

### iOS 🍎
You can use the same tool ([appicon](https://appicon.co/)) to generate image sets (@1x, @2x, @3x). 
Then you just have to replace : `Splash_icon@1x.png`, `Splash_icon@2x.png`, `Splash_icon@3x.png` with yours in :
```
src > ios > *name_of_your_app* > Images.xcassets > SplashIcon.imageset
```

### Android 🤖
You just have to replace the splash_icon.png located at : 
```
src > android > app > src > res > drawable
```
