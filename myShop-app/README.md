# React Native Shopping App

This is the frontend of the app using NeonDb and express as backend.

The original dependency on the expo go framework is removed from this app to make it more compatible for @react-native-firebase library. This integrates Firebase into the react native app. 

first install the dependencies using the command:

```bash
npm install
```
This installs the required packages and dependencies in the npm module app.

```bash
npx expo prebuild
```
This builds the expo app into a android app that can run firebase analytics realtime.

Make the following changes in the given directories as well -

If in android/app/ google-services.json file is not present do this - 

    - Go to the firebase console and sign in using the company email. From project overview at the top left, go the the project settings page and download the google-services.json file.
    - Move the file to android/app/ folder. 

Download the gtm container file as a json file and move it to the following path - 

    - Make a new folder in android/app/src/main/res/ called raw.
    - shift the file to this raw folder.

Go to AndroidManifest.xml file in android/app/src/main/ and replace the whole code with this code - 

```bash
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  <uses-permission android:name="android.permission.VIBRATE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <queries>
    <intent>
      <action android:name="android.intent.action.VIEW"/>
      <category android:name="android.intent.category.BROWSABLE"/>
      <data android:scheme="https"/>
    </intent>
  </queries>
  <application android:name=".MainApplication" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:roundIcon="@mipmap/ic_launcher_round" android:allowBackup="true" android:theme="@style/AppTheme" android:supportsRtl="true">
    <meta-data android:name="expo.modules.updates.ENABLED" android:value="false"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_CHECK_ON_LAUNCH" android:value="ALWAYS"/>
    <meta-data android:name="expo.modules.updates.EXPO_UPDATES_LAUNCH_WAIT_MS" android:value="0"/>
    <meta-data
        android:name="com.google.android.gms.tagmanager.containerResource"
        android:resource="@raw/gtm_57qk3v4n" />
    <activity
        android:name="com.google.android.gms.tagmanager.TagManagerPreviewActivity"
        android:noHistory="true"
        android:exported="true">
      <intent-filter>
        <data
            android:scheme="tagmanager.c.com.anonymous.myShop"
            android:host="preview" />
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE"/>
      </intent-filter>
    </activity>
    <activity android:name=".MainActivity" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode" android:launchMode="singleTask" android:windowSoftInputMode="adjustResize" android:theme="@style/Theme.App.SplashScreen" android:exported="true" android:screenOrientation="portrait">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
      <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="com.anonymous.myShop"/>
      </intent-filter>
    </activity>
  </application>
</manifest>
```

Now in a new terminal run the following command - 
```bash
npx expo run
```
    - Select Android after running this. 
    - Press a on keyboard when a menu is presented to run the app on the android emulator. 

To enable debug view, run the following command in a new terminal - 
```bash
adb shell setprop debug.firebase.analytics.app com.anonymous.myShop
```
Or you can also run the preview command from GTM. 











Make sure to run the backend server as well!
## Preview
<div style="display: flex; flex-direction: 'row';">
<img src="./screenshots/app.gif" width="30%">
<img src="./screenshots/1.png" width=30%>
<img src="./screenshots/2.png" width=30%>
<img src="./screenshots/3.png" width=30%>
<img src="./screenshots/4.png" width=30%>
</div>
