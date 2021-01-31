This is a demo project for opening a PDF file using Ionic / Cordova

1. Clone the project to a local folder
2. CD into the directory
3. Run the command - npm install
4. Build for Android - ionic cordova build android --prod
5. Open in device or emulator
6. Click download button. This will download the pdf from 
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
7. After download the app will prompt you to use an existing app to open the pdf file
8. Selecting the app will open the pdf


Added another branch called viewer.

1. This branch uses document viewer instead of  file-openner
https://ionicframework.com/docs/native/document-viewer

2. However document-viewer will need cleverdox Viewer app. The app will prompt you to install from playstore if not already installed

This project is only tested on Android.