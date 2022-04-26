# Url-Saver-Chrome-Extension
This project is of a Chrome Extension that helps you save the links from your browser, either by copying and pasting or automatically saving the active tab link.

# Project Layout

![Capturar](https://user-images.githubusercontent.com/98706386/165325503-b142e330-22d7-4eda-9c45-eadea269bc79.JPG)

![Capturar1](https://user-images.githubusercontent.com/98706386/165325215-7fbf18ad-9b18-4ce0-a00d-b03e930b66f3.JPG)


## About the project
Developed the visual part using ``HTML`` and ``CSS``; and used ``JavaScript`` to make the interactions and the logic behind. When you copy and paste an url/link into the input area and click on the button "save input" the url is saved in the ``local storage`` and rendered on the page so that you can visit it later; to save the active tab url/link you just have to click on the "save current tab" button, to do this, I used ``Google's "chrome.tabs" API`` to be able to save the active tab of the active window to local storage and rendering it on the page; finally, by double clicking on the "delete all"  button, the local storage, the list of links and the rendered links are cleared and ready for new url/links to be added.   

### Running the project
To run/open the project, you just have to download the files and open it with your browser/editor.

If you wish to use it as a chrome extention you have to upload it to your browser by opening the chrome://extensions and turn on the "developer mode", then you just have to clik on the "load unpacked" button and select the folder containing all the files in this repository. After doing this, the extension is ready to use.

To edit or make changes, you have to download the whole project folder and edit as you like with your favorite IDE. 

# Author
LinkedIn:
https://www.linkedin.com/in/jessicagondim/

E-mail:
jessicagbsg@gmail.com
