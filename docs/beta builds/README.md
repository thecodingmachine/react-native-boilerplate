# Distribute beta builds

A lot of developers loves write React Native code.  
No developer likes to deploy RN app or distribute beta builds.  

All your headaches will disappear with this documentation and the amazing [Fastlane](https://fastlane.tools/) tool :)

## Before you start

You need a Mac. I'm sorry, but if you are a Windows user, you can stop reading right now.  
Fastlane will not work on Windows PC. But in all cases, if you need to deploy your app on IOS, you must have a Mac.

Let's explain which tools we are using to distribute beta builds:
* Fastlane is the easiest way to automate beta deployments and releases for your iOS and Android apps. It handles all tedious tasks, like generating screenshots, dealing with code signing, and releasing your application.
* TestFlight is part of App Store Connect and let you build your app and invite internal or external users to test it
* Google Play can also make same works as TestFlight, for android users

## Installing Fastlane

First, you need to install Fastlane on your Mac, following these steps:

1. Install the latest Xcode command line tools:
```
xcode-select --install
```
2. Install Ruby
```
brew install ruby
```
3. Install Fastlane with RubyGems
```
sudo gem install fastlane -NV
```

 You are now ready to setting up Fastlane for IOS and Android 

## IOS

### Prerequisites

Before continue reading, make sure you have :

- [ ] Choose a [bundle identifier](https://cocoacasts.com/what-are-app-ids-and-bundle-identifiers/) of your app (for example `com.tcm.boilerplate`)
- [ ] Your Apple ID Username ; your email used for login into IOS developper acccount (for example `a.mutin@thecodingmachine.com`)
- [ ] Your Apple ID password ; your password used for login into IOS developper acccount (for example `keep it secret`)
- [ ] Your app name, if not alreay created on the Developer Portal (for example `TCM React Native Boilerplate`)

### Setting up

First, you need to setting up fastlane for your IOS project.
```
cd my-project/ios
fastlane init
```

Fastlane will automatically detect your project, and ask for any missing information.

Following questions will be asked :
1. `What would you like to use fastlane for?`
For this tutorial, good answer is `2` (Automate beta distribution to TestFlight)
2. `Select Scheme:`
Here, we will select the scheme without `-tvOS` suffix
3. `Bundler identifier of your app`
If you don't know, you don't have read the "Prerequisites" step :)  
Our answer is `com.tcm.boilerplate`
4. `Apple ID Username:`
If you don't know, you don't have read the "Prerequisites" step :)  
Our answer is `a.mutin@thecodingmachine.com`
5. `Password (for Apple ID Username):`
If you don't know, you don't have read the "Prerequisites" step :)  
Our answer is `keep it secret`

At this step, you can have the following issue:
```
fastlane init failed
["The request could not be completed because:", "Could not receive latest API key from App Store Connect, this might be a server issue."]
Something failed while running `fastlane init`
Tried using Apple ID with email 'a.mutin@thecodingmachine.com'
You can either retry, or fallback to manual setup which will create a basic Fastfile
Would you like to fallback to a manual Fastfile? (y/n)
```
Answer `n`, and retry previous steps, with a good Apple ID and password.  
Be sure you have a good internet connection

6. If your account has multiple teams in the App Store Connect, you may have this question: `Multiple App Store Connect teams found, please enter the number of the team you want to use:`
Select the right team 
7. If your account has multiple teams in the Developer Portal, you may have this question: `Multiple teams found on the Developer Portal, please enter the number of the team you want to use:`
Select the right team 
8. If you don't have already create the App on the Developer Portal, Fastlane can do it for you !  
It will ask `Do you want fastlane to create the App ID for you on the Apple Developer Portal? (y/n)`
Type `y`

At this step, Fastlane will prompt a summary an ask you some more questions if you answer `yes` at the previous question

9. App Name:
`TCM React Native Boilerplate`
10. If you don't have already create the App on the App Store Connect, Fastlane can do it for you ! 
It will ask `Would you like fastlane to create the App on App Store Connect for you? (y/n)`
Type `y`
11. App Name:
`TCM React Native Boilerplate`

Then, Fastlane will give you some informations about git, files it will create, etc. Juste type `enter` to continue.

Congrats! Fastlane has created some files.  
If you are using Git, commit all generated files.

## Android

### Prerequisites

Before continue reading, make sure you have :

- [ ] This thing
- [ ] This thing
