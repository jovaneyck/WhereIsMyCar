WhereIsMyCar
============

Experiment with mobile app development: Cordova + javascript (Android project).

This is an eclipse Android project.
Setup instructions for your IDE can be found here: [Getting started with Cordova](http://docs.phonegap.com/en/2.3.0/guide_getting-started_android_index.md.html#Getting%20Started%20with%20Android).

The application is written in JavaScript, sources can be found under ./assets/www/js.
Tests can be found under ./testing/.

To launch the app, you must first configure a google maps API key in ./assets/www/html/index.html. Look for the line that says
<script src="http://maps.googleapis.com/maps/api/js?key=%replace this with your google maps key%&sensor=true"></script>
and replace %replace this with your google maps key% with a valid API key.
You can request a key [here](https://developers.google.com/maps/documentation/javascript/tutorial#api_key).