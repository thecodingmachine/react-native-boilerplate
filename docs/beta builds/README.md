# Distributing beta builds

Developers love writing React Native code but no one likes deploying React Native app or distributing beta builds.  

All your headaches will disappear with this documentation and the amazing [Fastlane](https://fastlane.tools/) tool :)

## Before you start

You need a Mac. I'm sorry, but if you are a Windows user, you can stop reading right now.  
Fastlane will not work on Windows PC. But in all cases, if you need to deploy your app on IOS, you must have a Mac.

Let's explain which tools we are using to distribute beta builds:
* [Fastlane](https://fastlane.tools/), the easiest way to automate beta deployments and releases for your iOS and Android apps. It handles all tedious tasks like generating screenshots, dealing with code signing and releasing your application.
* [TestFlight](https://developer.apple.com/testflight/), part of App Store Connect, let you build your iOS app and invite internal or external users to test it
* [Google Play](https://support.google.com/googleplay/android-developer/answer/3131213?hl=fr), which does the same job as TestFlight for Android apps

## Installing Fastlane

First you need to install Fastlane on your Mac. Follow these steps:

1. Install the latest Xcode command line tools:
```
xcode-select --install
```
2. Install Ruby using [Homebrew](https://brew.sh/):
```
brew install ruby
```
3. Install Fastlane with RubyGems:
```
sudo gem install fastlane -NV
```

 You are now ready to set up Fastlane for iOS and Android :rocket:

## iOS

### Prerequisites

Before continuing make sure you have:

- [ ] Xcode 9 or higher
- [ ] Choose the [bundle identifier](https://cocoacasts.com/what-are-app-ids-and-bundle-identifiers/) of your app (for example `com.tcm.boilerplate`)
- [ ] An Apple ID with an admin user, with its username (email, for example `dev-team@yourcompany.com`) and password
- [ ] Your app name, if not already created on the Developer Portal (for example `TCM React Native Boilerplate`). Fastlane can create applications in the Developer Portal and App Store Connect, so it's recommended to let Fastlane do the job for you.
- [ ] Use the right [.gitignore](ios/.gitignore) file inside the `ios` directory

Open your Xcode project and modify some information:

- [ ] In the `General` tab, `Identity` section, change the `Bundle Identifier` to your identifier
- [ ] In the `General` tab, `Signing` section, disable `Automatically manage signing`
- [ ] In the `Build Settings` tab, under `Signing`, set `Don't Code Sign` as the `debug` codesigning identity and `iOS Distribution` as the `release` codesigning identity (for both `Debug`/`Release` and `Any iOS SDK`).

### Setting up

First you need to set up Fastlane for your iOS project:
```
cd my-project/ios
fastlane init
```

Fastlane will automatically detect your project and ask for any missing information.

The following questions will be asked:
* `What would you like to use fastlane for?`
  * For this tutorial a good answer is `2 - Automate beta distribution to TestFlight`
* `Select Scheme:`
  * Here we will select the scheme without `-tvOS` suffix
* `Apple ID Username:`
  * If you don't know, you didn't read the "Prerequisites" step :)  
  Our answer is `dev-team@yourcompany.com`
* `Password (for Apple ID Username):`
  * If you don't know, you didn't read the "Prerequisites" step :)  
  Our answer is `keep it secret`

At this step, you may have the following issue:
```
fastlane init failed
["The request could not be completed because:", "Could not receive latest API key from App Store Connect, this might be a server issue."]
Something failed while running `fastlane init`
Tried using Apple ID with email 'dev-team@yourcompany.com'
You can either retry, or fallback to manual setup which will create a basic Fastfile
Would you like to fallback to a manual Fastfile? (y/n)
```
Answer `n`, and retry previous steps with a correct Apple ID and password.  
Make sure you are connected to internet.

* If your account has multiple teams in the App Store Connect, you may have this question: `Multiple App Store Connect teams found, please enter the number of the team you want to use:`
  * Select the right team 
* If your account has multiple teams in the Developer Portal, you may have this question: `Multiple teams found on the Developer Portal, please enter the number of the team you want to use:`
  * Select the right team 
* If you don't have already created the App on the Developer Portal, Fastlane can do it for you! (else you must have a message `Your app 'com.tcm.boilerplate' is available in your Apple Developer Portal`)
  * It will ask `Do you want fastlane to create the App ID for you on the Apple Developer Portal? (y/n)`
    * Type `y`
  * `App Name`:
    * `TCM React Native Boilerplate`

Fastlane will then give you some information about git, the files it will create, etc. Just type `enter` to continue.

Congrats! Fastlane has created some files.  
If you are using Git, commit all generated files.

Once the setup has finished you can see a new folder inside the `ios` folder:
```
 - fastlane/
   - Appfile
   - Fastfile
```

`Appfile` contains identifiers used to connect to the Developer Portal and App Store Connect.
You can read more about this file [here](https://docs.fastlane.tools/advanced/#appfile).

`Fastfile` contains all actions you can launch.
You can read more about this file [here](https://docs.fastlane.tools/actions).
Because we previously chose `Automate beta distribution to TestFlight` on set up, a `beta` [lane](https://docs.fastlane.tools/advanced/lanes/) is available by default.
This `lane` contains 3 actions:
* increment the build number of your app
* build your app
* upload to TestFlight

### Code signing

Signing your app assures users that it is from a known source and the app hasn’t been modified since it was last signed. Before your app can integrate app services, be installed on a device, or be submitted to the App Store, it must be signed with a certificate issued by Apple.

A full guide is available on the fastlane doc, describing the best approaches for your [code signing process](https://docs.fastlane.tools/codesigning/getting-started/).

Using `match` is probably [the best solution](https://codesigning.guide/).  
Because we don't want to revoke our existing certificates, but still want an automated setup, we will use [cert and sigh](https://docs.fastlane.tools/codesigning/getting-started/#using-cert-and-sigh).

Add the following to your `Fastfile`, just after the `increment_build_number` function and before `build_app`:
```
    get_certificates( # Create or get certificate, and install it
      output_path: "./builds" # Download certificate in the build folder (you don't need to create the folder)
    )
    get_provisioning_profile( # Create or get provisioning profile
      output_path: "./builds",  # Download provisioning profile in the build folder
      filename: "provisioning.mobileprovision" # Rename the local provisioning profile
    )
    update_project_provisioning( # Set the project provisioning profile (related in Xcode to the General > Signing Release section)
      xcodeproj: "Boilerplate.xcodeproj",
      target_filter: "Boilerplate", # Name of your project
      profile: "./builds/provisioning.mobileprovision",
      build_configuration: "Release"
    )
    update_project_team( # Set the right team on your project
      teamid: CredentialsManager::AppfileConfig.try_fetch_value(:team_id)
    )
```

Then, we need to configure the provisioning profile for the build step.

Add the following to your `Fastfile`, inside the `build_app` function, just after the `scheme` parameter:
```
    clean: true,
    export_method: "app-store",
    export_options: {
      provisioningProfiles: { 
          CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) => CredentialsManager::AppfileConfig.try_fetch_value(:app_identifier) + " AppStore" # Value of this parameter is the name of the Provisioning Profile. By default, it will be "{bundleId} AppStore"
      }
    },
    build_path: "./builds",
    output_directory: "./builds"
```
Make sure you add a `,` after the `scheme` parameter.

The complete file can be found [here](ios/fastlane/Fastfile).

Thanks to this the Certificates and Provisioning Profile will be automatically created when you will create a beta build!  
:rocket: You are now ready to create your first beta build.


### Creating a beta build

Creating a beta build and uploading it on TestFlight is now really easy.  
Just type the following:

```
cd my-project/ios
fastlane beta
```


## Android

### Prerequisites

Before continuing make sure you have:

- [ ] This thing
- [ ] This thing
